import { useEffect, useRef } from "react";

const SpaceSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Star class
    class Star {
      x: number;
      y: number;
      size: number;
      speed: number;
      color: string;
      opacity: number;
      twinkleSpeed: number;
      twinkleOffset: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5 + 0.5;
        this.speed = Math.random() * 0.3 + 0.1;
        
        // Random purple/pink colors
        const colors = [
          "rgba(200, 100, 255, ",  // Purple
          "rgba(255, 100, 200, ",  // Pink
          "rgba(150, 50, 255, ",   // Deep Purple
          "rgba(255, 150, 200, ",  // Light Pink
          "rgba(180, 80, 255, ",   // Mid Purple
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random();
        this.twinkleSpeed = Math.random() * 0.02 + 0.01;
        this.twinkleOffset = Math.random() * Math.PI * 2;
      }

      update(time: number) {
        // Move star down slowly
        this.y += this.speed;
        
        // Reset position when star goes off screen
        if (this.y > canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }

        // Twinkle effect
        this.opacity = (Math.sin(time * this.twinkleSpeed + this.twinkleOffset) + 1) / 2;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color + this.opacity + ")";
        ctx.fill();

        // Add glow effect
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
        gradient.addColorStop(0, this.color + (this.opacity * 0.8) + ")");
        gradient.addColorStop(1, this.color + "0)");
        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create stars
    const stars: Star[] = [];
    const starCount = 150;
    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }

    // Animation loop
    let animationId: number;
    let startTime = Date.now();

    const animate = () => {
      const currentTime = (Date.now() - startTime) / 1000;
      
      // Clear canvas with black background
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars
      stars.forEach((star) => {
        star.update(currentTime);
        star.draw(ctx);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section 
      className="relative overflow-hidden"
      style={{ height: 'calc(100vh - 100px)' }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-6">
          <h2 className="text-5xl md:text-7xl font-bold text-white font-rift mb-4">
            Beyond the Line, Behind the Shine
          </h2>
          <p className="text-3xl md:text-4xl text-white/90 font-rift">
            Invisible. Essential.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpaceSection;
