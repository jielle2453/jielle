<script>
  import { onMount } from 'svelte';

  let lens;
  let lensX = 55;
  let lensY = 40;
  let targetX = 55;
  let targetY = 40;
  let scale = 1;
  let targetScale = 1;
  let running = true;

  onMount(() => {
    // Parallax: lens drifts subtly opposite to mouse
    const onMove = (e) => {
      const nx = e.clientX / window.innerWidth;
      const ny = e.clientY / window.innerHeight;
      // lens origin 55%,40% with ±8% parallax range
      targetX = 55 + (nx - 0.5) * -16;
      targetY = 40 + (ny - 0.5) * -12;
      // gentle breathing scale on mouse proximity to centre
      const dc = Math.sqrt((nx - 0.5) ** 2 + (ny - 0.5) ** 2);
      targetScale = 1.0 + dc * 0.08;
    };
    window.addEventListener('pointermove', onMove, { passive: true });

    const loop = () => {
      if (!running) return;
      lensX += (targetX - lensX) * 0.025;
      lensY += (targetY - lensY) * 0.025;
      scale += (targetScale - scale) * 0.03;
      if (lens) {
        lens.style.left = lensX + '%';
        lens.style.top = lensY + '%';
        lens.style.transform = `translate(-50%,-50%) scale(${scale})`;
      }
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    return () => {
      running = false;
      window.removeEventListener('pointermove', onMove);
    };
  });
</script>

<div class="frosted-lens-wrap" bind:this={lens}>
  <!-- Inner frosted disc -->
  <div class="frosted-disc">
    <!-- grain texture inside the lens -->
    <svg class="frosted-grain" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <filter id="lens-grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.9"
          numOctaves="3"
          seed="42"
          stitchTiles="stitch"
        />
        <feColorMatrix
          values="0 0 0 0 0.5
                  0 0 0 0 0.5
                  0 0 0 0 0.5
                  0 0 0 0.4 0"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#lens-grain)" />
    </svg>
  </div>
  <!-- outer glow ring -->
  <div class="lens-glow"></div>
</div>

<style>
  .frosted-lens-wrap {
    position: fixed;
    width: clamp(340px, 42vw, 680px);
    height: clamp(340px, 42vw, 680px);
    border-radius: 50%;
    pointer-events: none;
    z-index: 1;
    will-change: transform, left, top;
  }

  .frosted-disc {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    /* the key effect: heavy blur over the liquid shader behind */
    backdrop-filter: blur(60px) saturate(0.7) brightness(0.55);
    -webkit-backdrop-filter: blur(60px) saturate(0.7) brightness(0.55);
    background: radial-gradient(
      circle at 38% 35%,
      rgba(255, 255, 255, 0.06) 0%,
      rgba(255, 255, 255, 0.02) 40%,
      rgba(0, 0, 0, 0.08) 100%
    );
    border: 1px solid rgba(255, 255, 255, 0.06);
    overflow: hidden;
    /* inner shadow for depth */
    box-shadow:
      inset 0 0 80px rgba(0, 0, 0, 0.3),
      inset 0 2px 1px rgba(255, 255, 255, 0.04);
  }

  .frosted-grain {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0.35;
    mix-blend-mode: overlay;
    border-radius: 50%;
  }

  .lens-glow {
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.04);
    box-shadow:
      0 0 80px 20px rgba(120, 140, 180, 0.06),
      0 0 160px 40px rgba(80, 100, 160, 0.03);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    .frosted-lens-wrap {
      width: clamp(240px, 65vw, 380px);
      height: clamp(240px, 65vw, 380px);
    }
  }
</style>
