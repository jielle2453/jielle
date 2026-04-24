<script>
  import { onMount, onDestroy } from 'svelte';

  let time = '--:--';
  let weekday = '---';
  let intervalId;

  const tz = 'Asia/Taipei';
  const fmt = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    weekday: 'short',
  });

  const tick = () => {
    const parts = fmt.formatToParts(new Date());
    const get = (t) => parts.find((p) => p.type === t)?.value ?? '';
    time = `${get('hour')}:${get('minute')}`;
    weekday = get('weekday').toLowerCase();
  };

  onMount(() => {
    tick();
    // align next tick to the next whole minute, then keep at 60s
    const ms = 60_000 - (Date.now() % 60_000);
    const timeoutId = setTimeout(() => {
      tick();
      intervalId = setInterval(tick, 60_000);
    }, ms);
    return () => clearTimeout(timeoutId);
  });

  onDestroy(() => {
    if (intervalId) clearInterval(intervalId);
  });
</script>

<span class="inline-flex items-center gap-1.5 tabular-nums">
  <span class="size-1 rounded-full bg-white/70 animate-pulse"></span>
  taipei · <span class="text-white">{time}</span> · {weekday}
</span>
