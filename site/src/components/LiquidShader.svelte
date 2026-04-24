<script>
  import { onMount } from 'svelte';

  let canvas;

  onMount(async () => {
    const { Renderer, Program, Mesh, Triangle } = await import('ogl');

    const renderer = new Renderer({
      canvas,
      dpr: Math.min(window.devicePixelRatio, 2),
      alpha: false,
    });
    const gl = renderer.gl;
    gl.clearColor(0.0, 0.0, 0.0, 1);

    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex: /* glsl */ `
        attribute vec2 position;
        varying vec2 vUv;
        void main() {
          vUv = position * 0.5 + 0.5;
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `,
      fragment: /* glsl */ `
        precision highp float;
        uniform vec2  uRes;
        uniform vec2  uMouse;
        uniform float uTime;
        varying vec2  vUv;

        // ── noise helpers ──────────────────────────────────────────────
        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }
        float noise(vec2 p) {
          vec2 i = floor(p), f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
            mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
            u.y
          );
        }
        float fbm(vec2 p) {
          float s = 0.0, a = 0.5;
          for (int i = 0; i < 5; i++) {
            s += a * noise(p);
            p *= 2.03;
            a *= 0.48;
          }
          return s;
        }

        // ── domain warping for liquid flow ──────────────────────────────
        float warpedFbm(vec2 p, float t) {
          vec2 q = vec2(
            fbm(p + vec2(0.0, 0.0) + t * 0.08),
            fbm(p + vec2(5.2, 1.3) - t * 0.06)
          );
          vec2 r = vec2(
            fbm(p + 4.0 * q + vec2(1.7, 9.2) + t * 0.04),
            fbm(p + 4.0 * q + vec2(8.3, 2.8) - t * 0.05)
          );
          return fbm(p + 4.0 * r);
        }

        void main() {
          float aspect = uRes.x / uRes.y;
          vec2 uv = vUv;
          vec2 p = vec2(uv.x * aspect, uv.y);
          float t = uTime * 0.12;
          vec2 m = vec2(uMouse.x * aspect, uMouse.y);

          // ── liquid streams ───────────────────────────────────────────
          // two layers of domain-warped fbm at different scales
          float liquid1 = warpedFbm(p * 1.2 + vec2(t * 0.03, -t * 0.02), t);
          float liquid2 = warpedFbm(p * 0.8 + vec2(-t * 0.02, t * 0.04) + 3.0, t * 0.7);

          // mouse influence — warp near cursor
          float dMouse = length(p - m);
          float mouseWarp = exp(-dMouse * dMouse * 3.0) * 0.15;
          liquid1 += mouseWarp * sin(t * 2.0 + dMouse * 8.0);

          // combine flows
          float flow = liquid1 * 0.6 + liquid2 * 0.4;

          // ── metallic chrome streaks ──────────────────────────────────
          // extract "ridges" from flow — these become the bright chrome lines
          float ridge = abs(fract(flow * 3.5) - 0.5) * 2.0;
          ridge = pow(ridge, 3.0); // sharpen the ridges
          float ridge2 = abs(fract(flow * 2.0 + 0.3) - 0.5) * 2.0;
          ridge2 = pow(ridge2, 4.0);

          // ── lighting / colour ────────────────────────────────────────
          // deep black base
          vec3 col = vec3(0.0);

          // main chrome/silver
          vec3 chrome = vec3(0.78, 0.80, 0.82);
          col += chrome * ridge * 0.32;
          col += chrome * ridge2 * 0.15;

          // ambient warm fill in the flow valleys
          vec3 warmDark = vec3(0.06, 0.04, 0.03);
          col += warmDark * (1.0 - ridge) * flow;

          // edge glow removed per design preference

          // subtle warm pool drifting
          vec2 poolA = vec2(
            aspect * 0.38 + sin(t * 0.3) * aspect * 0.22,
            0.45 + cos(t * 0.25) * 0.2
          );
          poolA = mix(poolA, m, 0.06);
          float dA = exp(-dot(p - poolA, p - poolA) * 0.8);
          col += vec3(0.35, 0.15, 0.05) * dA * 0.12;

          // cool counter-pool
          vec2 poolB = vec2(
            aspect * 0.65 + cos(t * 0.28 + 1.8) * aspect * 0.25,
            0.55 + sin(t * 0.22 + 1.2) * 0.22
          );
          float dB = exp(-dot(p - poolB, p - poolB) * 1.0);
          col += vec3(0.08, 0.14, 0.30) * dB * 0.14;

          // mouse spotlight — very subtle specular
          float dM = exp(-dMouse * dMouse * 2.8);
          col += vec3(0.25, 0.22, 0.20) * dM * 0.08;

          // ── vignette ─────────────────────────────────────────────────
          float vig = smoothstep(1.3, 0.15, length(uv - 0.5));
          col *= 0.35 + 0.65 * vig;

          // ── film grain ───────────────────────────────────────────────
          float g = fract(sin(dot(gl_FragCoord.xy + uTime * 0.7, vec2(12.9898, 78.233))) * 43758.5453);
          col += (g - 0.5) * 0.025;

          // ── add warm yellow tint to bright areas ────────────────────
          float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
          // Simple yellow tint for bright areas
          col = vec3(luma) + vec3(0.08, 0.06, 0.0) * luma;

          gl_FragColor = vec4(col, 1.0);
        }
      `,
      uniforms: {
        uRes:   { value: [window.innerWidth, window.innerHeight] },
        uMouse: { value: [0.5, 0.5] },
        uTime:  { value: 0 },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      program.uniforms.uRes.value = [window.innerWidth, window.innerHeight];
    };
    onResize();
    window.addEventListener('resize', onResize);

    let mx = 0.5, my = 0.5, tx = 0.5, ty = 0.5;
    const onMove = (e) => {
      tx = e.clientX / window.innerWidth;
      ty = 1.0 - e.clientY / window.innerHeight;
    };
    window.addEventListener('pointermove', onMove, { passive: true });

    let running = true;
    const loop = (ts) => {
      if (!running) return;
      mx += (tx - mx) * 0.012;
      my += (ty - my) * 0.012;
      program.uniforms.uMouse.value = [mx, my];
      program.uniforms.uTime.value = ts * 0.001;
      renderer.render({ scene: mesh });
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    return () => {
      running = false;
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onMove);
    };
  });
</script>

<canvas
  bind:this={canvas}
  class="fixed inset-0 w-screen h-screen block -z-10 bg-black"
></canvas>
