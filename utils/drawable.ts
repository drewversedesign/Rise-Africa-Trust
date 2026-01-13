export const createDrawable = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};

  let animationFrameId: number;
  let particles: Particle[] = [];
  let width = 0;
  let height = 0;

  // Brand colors: Teal, Yellow, Dark Yellow
  const brandColors = ['#006D5B', '#FACC15', '#EAB308', '#005a4b'];
  const mouse = { x: -1000, y: -1000 };
  const connectionDistance = 150;
  const mouseDistance = 250;

  class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;

    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.8; // Gentle velocity
      this.vy = (Math.random() - 0.5) * 0.8;
      this.size = Math.random() * 2 + 1;
      this.color = brandColors[Math.floor(Math.random() * brandColors.length)];
    }

    update() {
      // Move
      this.x += this.vx;
      this.y += this.vy;

      // Bounce off edges
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse attraction/interaction
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < mouseDistance) {
        const force = (mouseDistance - distance) / mouseDistance;
        // Move slightly towards mouse
        this.vx += (dx / distance) * force * 0.05;
        this.vy += (dy / distance) * force * 0.05;
      }
    }

    draw() {
      if (!ctx) return;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  const init = () => {
    // Set canvas size to parent size
    if (canvas.parentElement) {
      width = canvas.parentElement.offsetWidth;
      height = canvas.parentElement.offsetHeight;
    } else {
      width = window.innerWidth;
      height = window.innerHeight;
    }
    
    canvas.width = width;
    canvas.height = height;

    // Determine particle count based on screen area (less dense on mobile)
    const area = width * height;
    const particleCount = Math.min(Math.floor(area / 15000), 70); 

    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  };

  const animate = () => {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    // Draw lines between close particles
    ctx.lineWidth = 0.5;
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];
      // Check connection with other particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < connectionDistance) {
          // Opacity decreases with distance
          const opacity = 1 - dist / connectionDistance;
          ctx.strokeStyle = `rgba(0, 109, 91, ${opacity * 0.3})`; // Primary color with low opacity
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
      p1.update();
      p1.draw();
    }

    animationFrameId = requestAnimationFrame(animate);
  };

  const handleResize = () => {
    init();
  };

  const handleMouseMove = (e: MouseEvent) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  };

  window.addEventListener('resize', handleResize);
  // Listen for mousemove on window to allow interaction even if hovering over other elements
  window.addEventListener('mousemove', handleMouseMove);

  init();
  animate();

  return () => {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('mousemove', handleMouseMove);
    cancelAnimationFrame(animationFrameId);
  };
};
