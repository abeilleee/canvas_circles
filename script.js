const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

ctx.arc(100, 100, 50, 0, Math.PI * 20);
ctx.fill();
