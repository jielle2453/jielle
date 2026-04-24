<script>
  import { onMount } from 'svelte';

  let x = 50;
  let y = 50;
  let active = false;
  let raf = 0;

  onMount(() => {
    const onMove = (e) => {
      if (!active) active = true;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        x = (e.clientX / window.innerWidth) * 100;
        y = (e.clientY / window.innerHeight) * 100;
      });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  });
</script>

<div
  class="warmth"
  class:active
  style="--x: {x}%; --y: {y}%;"
></div>

<style>
  .warmth {
    pointer-events: none;
    position: fixed;
    inset: 0;
    z-index: 50;
    opacity: 0;
    transition: opacity 600ms ease;
    background: radial-gradient(
      520px circle at var(--x) var(--y),
      rgba(192, 74, 30, 0.11),
      transparent 55%
    );
  }
  .warmth.active { opacity: 1; }
</style>
