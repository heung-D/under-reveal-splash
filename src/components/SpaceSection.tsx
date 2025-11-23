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

    // Dot grid configuration
    const gridSize = 30;
    const dots: { x: number; y: number; z: number; baseZ: number }[] = [];
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 300;

    // Create spherical dot grid
    for (let lat = -90; lat <= 90; lat += 15) {
      for (let lon = -180; lon <= 180; lon += 15) {
        const phi = (lat * Math.PI) / 180;
        const theta = (lon * Math.PI) / 180;
        
        const x = radius * Math.cos(phi) * Math.cos(theta);
        const y = radius * Math.cos(phi) * Math.sin(theta);
        const z = radius * Math.sin(phi);
        
        dots.push({ x, y, z, baseZ: z });
      }
    }

    let rotation = 0;
    let lightRotation = 0;

    // Animation loop
    let animationId: number;

    const animate = () => {
      // Clear canvas with black background
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      rotation += 0.003;
      lightRotation += 0.01; // Light rotates faster

      // Sort dots by z-index for proper layering
      const sortedDots = [...dots].sort((a, b) => {
        const aZ = a.z * Math.cos(rotation) - a.x * Math.sin(rotation);
        const bZ = b.z * Math.cos(rotation) - b.x * Math.sin(rotation);
        return aZ - bZ;
      });

      // Draw connecting lines
      ctx.lineWidth = 1;

      for (let i = 0; i < sortedDots.length; i++) {
        const dot = sortedDots[i];
        
        // Rotate dot
        const rotatedX = dot.x * Math.cos(rotation) - dot.z * Math.sin(rotation);
        const rotatedZ = dot.z * Math.cos(rotation) + dot.x * Math.sin(rotation);
        
        // Calculate light intensity based on position
        const angle = Math.atan2(dot.y, rotatedX);
        const lightAngle = angle - lightRotation;
        const lightIntensity = Math.max(0, Math.cos(lightAngle)) * 0.8;
        
        // Project to 2D
        const scale = 800 / (800 + rotatedZ);
        const x2d = centerX + rotatedX * scale;
        const y2d = centerY + dot.y * scale;

        // Draw lines to nearby dots
        for (let j = i + 1; j < sortedDots.length; j++) {
          const otherDot = sortedDots[j];
          const otherRotatedX = otherDot.x * Math.cos(rotation) - otherDot.z * Math.sin(rotation);
          const otherRotatedZ = otherDot.z * Math.cos(rotation) + otherDot.x * Math.sin(rotation);
          
          const otherAngle = Math.atan2(otherDot.y, otherRotatedX);
          const otherLightIntensity = Math.max(0, Math.cos(otherAngle - lightRotation)) * 0.8;
          const avgLightIntensity = (lightIntensity + otherLightIntensity) / 2;
          
          const otherScale = 800 / (800 + otherRotatedZ);
          const otherX2d = centerX + otherRotatedX * otherScale;
          const otherY2d = centerY + otherDot.y * otherScale;

          const distance = Math.sqrt(
            Math.pow(dot.x - otherDot.x, 2) +
            Math.pow(dot.y - otherDot.y, 2) +
            Math.pow(dot.z - otherDot.z, 2)
          );

          if (distance < radius * 0.6) {
            const baseOpacity = Math.max(0, (1 - distance / (radius * 0.6)) * 0.24);
            const opacity = baseOpacity + avgLightIntensity * 0.24;
            const brightness = 120 + avgLightIntensity * 80;
            ctx.strokeStyle = `rgba(${brightness}, ${brightness}, ${brightness}, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(x2d, y2d);
            ctx.lineTo(otherX2d, otherY2d);
            ctx.stroke();
          }
        }
      }

      // Draw dots
      sortedDots.forEach((dot) => {
        const rotatedX = dot.x * Math.cos(rotation) - dot.z * Math.sin(rotation);
        const rotatedZ = dot.z * Math.cos(rotation) + dot.x * Math.sin(rotation);
        
        // Calculate light intensity for this dot
        const angle = Math.atan2(dot.y, rotatedX);
        const lightIntensity = Math.max(0, Math.cos(angle - lightRotation)) * 0.8;
        
        const scale = 800 / (800 + rotatedZ);
        const x2d = centerX + rotatedX * scale;
        const y2d = centerY + dot.y * scale;
        
        const size = (2 + lightIntensity * 2) * scale;
        const baseBrightness = Math.max(80, Math.min(180, 80 + rotatedZ * 0.3));
        const brightness = baseBrightness + lightIntensity * 100;
        
        ctx.beginPath();
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${brightness}, ${brightness}, ${brightness}, ${0.48 + lightIntensity * 0.12})`;
        ctx.fill();
        
        // Add glow effect for lit dots
        if (lightIntensity > 0.3) {
          const gradient = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, size * 4);
          gradient.addColorStop(0, `rgba(${brightness}, ${brightness}, ${brightness}, ${lightIntensity * 0.24})`);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x2d, y2d, size * 4, 0, Math.PI * 2);
          ctx.fill();
        }
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
      id="closing-section"
      className="relative overflow-hidden"
      style={{ height: 'calc(100vh - 100px)' }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-6">
          <h2 className="text-[24px] font-bold text-white font-rift mb-4" style={{ lineHeight: '120%' }}>
            Beyond the Line, Behind the Shine
          </h2>
          <p className="text-[24px] text-white/90 font-rift" style={{ lineHeight: '120%' }}>
            Invisible. Essential.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpaceSection;
