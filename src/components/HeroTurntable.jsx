import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, RotateCcw, Zap, TrendingUp, Sparkles, Compass, Eye, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 60;

export const HeroTurntable = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartFrame = useRef(0);
  const animFrameId = useRef(null);

  // Preload all 60 frames into memory
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(2, '0');
      img.src = `/frames/hero/frame_${frameNum}.webp`;

      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        // Fallback progress in case of single image error
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      loadedImages.push(img);
    }

    imagesRef.current = loadedImages;
  }, []);

  // Draw frame on canvas
  const drawFrame = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const clampedIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(frameIndex)));
    const img = imagesRef.current[clampedIndex];

    if (img && img.complete && img.naturalWidth !== 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  }, []);

  // Sync with currentFrame state
  useEffect(() => {
    if (isLoaded) {
      drawFrame(currentFrame);
    }
  }, [currentFrame, isLoaded, drawFrame]);

  // GSAP ScrollTrigger scrollytelling sync
  useEffect(() => {
    if (!containerRef.current || !isLoaded) return;

    const ctx = gsap.context(() => {
      const frameObj = { frame: 0 };

      gsap.to(frameObj, {
        frame: TOTAL_FRAMES - 1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          end: 'bottom 25%',
          scrub: 0.6,
          onUpdate: (self) => {
            if (!isPlaying && !isDragging) {
              const targetFrame = Math.round(self.progress * (TOTAL_FRAMES - 1));
              setCurrentFrame(targetFrame);
            }
          },
        },
      });

      // Ambient floating animations for telemetry cards
      gsap.to('.telemetry-card-left', {
        y: -12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });

      gsap.to('.telemetry-card-right', {
        y: 12,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isLoaded, isPlaying, isDragging]);

  // Auto-play 360 rotation loop (Video Mode)
  useEffect(() => {
    if (!isPlaying) {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      return;
    }

    let lastTime = performance.now();
    const interval = 1000 / 25; // 25 FPS

    const loop = (time) => {
      if (time - lastTime >= interval) {
        setCurrentFrame((prev) => (prev + 1) % TOTAL_FRAMES);
        lastTime = time;
      }
      animFrameId.current = requestAnimationFrame(loop);
    };

    animFrameId.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isPlaying]);

  // Interactive mouse/touch dragging rotation
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsPlaying(false);
    dragStartX.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    dragStartFrame.current = currentFrame;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const deltaX = clientX - dragStartX.current;
    // 5 pixels per frame for smooth tactile feedback
    const frameDelta = Math.floor(deltaX / 6);
    let newFrame = (dragStartFrame.current + frameDelta) % TOTAL_FRAMES;
    if (newFrame < 0) newFrame += TOTAL_FRAMES;
    setCurrentFrame(newFrame);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const currentAngle = Math.round((currentFrame / TOTAL_FRAMES) * 360);

  return (
    <div
      ref={containerRef}
      className="relative w-full mx-auto mt-4 mb-0 select-none flex flex-col items-center"
    >
      {/* Main Audiovisual Studio Viewport - Now Seamless */}
      <div className="relative w-full max-w-[1280px] mx-auto overflow-visible flex items-center justify-center">
        
        {/* Central Stage: 3D Turntable Canvas */}
        <div
          className="relative w-full aspect-square max-h-[700px] md:max-h-[800px] flex items-center justify-center cursor-grab active:cursor-grabbing overflow-visible"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
        >
          {/* Canvas Rendering 60 Frames */}
          <canvas
            ref={canvasRef}
            width={800}
            height={800}
            className={`w-full max-w-[700px] md:max-w-[800px] aspect-square object-contain transition-opacity duration-500 z-10 hover:scale-105 transition-transform ease-out ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Graceful Fallback / Instant Loading Placeholder */}
          {!isLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-0">
              <img
                src="/images/hero-spin-loop.webp"
                alt="Romero Labs 3D Emblem"
                className="w-full max-w-[600px] md:max-w-[700px] aspect-square object-contain opacity-90"
              />
              <div className="absolute bottom-6 flex items-center gap-2 bg-[#14151a]/90 border border-[#d49a53]/40 px-3 py-1 rounded-full text-xs text-[#f7e1bc]">
                <span className="w-3 h-3 border-2 border-[#d49a53] border-t-transparent rounded-full animate-spin"></span>
                <span>Cargando animación por fotogramas ({loadProgress}%)</span>
              </div>
            </div>
          )}

          {/* Holographic Telemetry Card 1 (Left: Speed & Tech) */}
          <div className="telemetry-card-left absolute top-10 md:top-20 left-4 md:left-12 z-20 hidden sm:flex flex-col gap-1 p-3.5 rounded-xl bg-[#14151a]/60 border border-[#d49a53]/20 backdrop-blur-md shadow-[0_0_20px_rgba(212,154,83,0.15)] text-left max-w-[200px]">
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#d49a53] uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              <span>Velocidad Pura</span>
            </div>
            <div className="text-xl font-extrabold text-white font-mono">&lt; 0.5s</div>
            <div className="text-[10px] text-[#a1a1aa] leading-tight">
              Optimización de rendimiento 100% Core Web Vitals.
            </div>
          </div>

          {/* Holographic Telemetry Card 2 (Right: Conversion & Sales) */}
          <div className="telemetry-card-right absolute bottom-12 md:bottom-24 right-4 md:right-12 z-20 hidden sm:flex flex-col gap-1 p-3.5 rounded-xl bg-[#14151a]/60 border border-[#d49a53]/20 backdrop-blur-md shadow-[0_0_20px_rgba(212,154,83,0.15)] text-left max-w-[200px]">
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#f7e1bc] uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>Conversión</span>
            </div>
            <div className="text-xl font-extrabold text-white font-mono">+320%</div>
            <div className="text-[10px] text-[#a1a1aa] leading-tight">
              Flujo directo a WhatsApp con intención de compra.
            </div>
          </div>

          {/* Interactive Drag Hint Badge */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-full bg-[#14151a]/60 border border-[#d49a53]/30 text-xs text-[#f7e1bc] backdrop-blur-md shadow-[0_0_15px_rgba(212,154,83,0.2)] pointer-events-none flex items-center gap-2">
            <Eye className="w-3.5 h-3.5" />
            <span>Haz scroll para interactuar con la marca</span>
          </div>
        </div>
      </div>
    </div>
  );
};
