<script>
  import { onMount } from 'svelte';

  export let words = ['UX Designer'];
  export let interval = 3000;
  export let scrambleDuration = 900;

  let display = words[0];

  onMount(() => {
    const pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789§∆◇';
    let idx = 0;
    let raf = 0;
    let timer = 0;

    const scrambleTo = (target) => {
      const start = performance.now();
      const maxLen = Math.max(display.length, target.length);

      const tick = () => {
        const t = Math.min(1, (performance.now() - start) / scrambleDuration);
        let out = '';
        for (let i = 0; i < maxLen; i++) {
          const settle = 0.15 + (i / maxLen) * 0.85;
          const tc = target[i];
          if (t >= settle) {
            out += tc ?? '';
          } else if (tc === ' ') {
            out += ' ';
          } else {
            out += pool[Math.floor(Math.random() * pool.length)];
          }
        }
        display = out;
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      tick();
    };

    const loop = () => {
      idx = (idx + 1) % words.length;
      scrambleTo(words[idx]);
      timer = window.setTimeout(loop, interval);
    };
    timer = window.setTimeout(loop, interval);

    return () => {
      clearTimeout(timer);
      if (raf) cancelAnimationFrame(raf);
    };
  });
</script>

<span class="inline-block">{display}</span>
