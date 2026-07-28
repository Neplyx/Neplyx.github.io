(() => {
  const canvas = document.getElementById('grid-canvas');
  if (!canvas) return;
  const context = canvas.getContext('2d');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let width = 0, height = 0, dpr = 1, time = 0, frame;

  function resize() { dpr = Math.min(window.devicePixelRatio || 1, 2); width = window.innerWidth; height = window.innerHeight; canvas.width = width * dpr; canvas.height = height * dpr; canvas.style.width = `${width}px`; canvas.style.height = `${height}px`; context.setTransform(dpr, 0, 0, dpr, 0, 0); draw(); }
  function draw() {
    context.clearRect(0, 0, width, height);
    const horizon = height * .58, spacing = Math.max(38, width / 26), vanishingX = width * .67;
    context.strokeStyle = 'rgba(139, 170, 107, .16)'; context.lineWidth = 1;
    for (let x = -width; x < width * 2; x += spacing) { context.beginPath(); context.moveTo(vanishingX, horizon); context.lineTo(x, height); context.stroke(); }
    const offset = (time * .022) % spacing;
    for (let y = horizon + offset; y < height + spacing; y += spacing) { const progress = (y - horizon) / (height - horizon); const curve = Math.pow(progress, 1.8); const lineY = horizon + curve * (height - horizon); context.beginPath(); context.moveTo(0, lineY); context.lineTo(width, lineY); context.stroke(); }
    const gradient = context.createLinearGradient(0, horizon - 70, 0, height); gradient.addColorStop(0, 'rgba(10,10,10,1)'); gradient.addColorStop(.22, 'rgba(10,10,10,.1)'); gradient.addColorStop(1, 'rgba(10,10,10,.8)'); context.fillStyle = gradient; context.fillRect(0, 0, width, height);
  }
  function animate() { time += 1; draw(); frame = requestAnimationFrame(animate); }
  function motionChange() { cancelAnimationFrame(frame); draw(); if (!reduced.matches) animate(); }
  window.addEventListener('resize', resize, { passive: true }); reduced.addEventListener('change', motionChange); resize(); if (!reduced.matches) animate();
})();
