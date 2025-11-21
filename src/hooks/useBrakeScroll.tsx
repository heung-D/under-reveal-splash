import { useEffect, useRef, useState } from 'react';

const SCROLL_THRESHOLD = 80; // 스크롤 감지 임계값
const TRANSITION_DURATION = 1000; // 1초 전환
const DEBOUNCE_DELAY = 150; // 입력 디바운스
const BRAKE_EASING = [0.22, 0.61, 0.36, 1]; // 브레이크 커브

// Cubic bezier easing function
const cubicBezier = (t: number, p0: number, p1: number, p2: number, p3: number) => {
  const u = 1 - t;
  return (
    u * u * u * p0 +
    3 * u * u * t * p1 +
    3 * u * t * t * p2 +
    t * t * t * p3
  );
};

const easeWithBrake = (t: number) => {
  return cubicBezier(t, BRAKE_EASING[0], BRAKE_EASING[1], BRAKE_EASING[2], BRAKE_EASING[3]);
};

export const useBrakeScroll = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const accumulatedDelta = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const sectionsRef = useRef<HTMLElement[]>([]);
  const animationFrameRef = useRef<number>();

  const registerSection = (element: HTMLElement | null) => {
    if (element && !sectionsRef.current.includes(element)) {
      sectionsRef.current.push(element);
    }
  };

  const smoothScrollToSectionBottom = (targetIndex: number) => {
    const targetSection = sectionsRef.current[targetIndex];
    if (!targetSection) return;

    const startPosition = window.scrollY;
    const targetPosition = targetSection.offsetTop + targetSection.offsetHeight - window.innerHeight;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / TRANSITION_DURATION, 1);
      const easedProgress = easeWithBrake(progress);

      window.scrollTo(0, startPosition + distance * easedProgress);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setIsTransitioning(false);
        setCurrentSection(targetIndex);
      }
    };

    setIsTransitioning(true);
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isTransitioning) return;

      const now = Date.now();
      const timeDiff = now - lastScrollTime.current;

      if (timeDiff < DEBOUNCE_DELAY) return;

      accumulatedDelta.current += e.deltaY;

      if (Math.abs(accumulatedDelta.current) >= SCROLL_THRESHOLD) {
        const direction = accumulatedDelta.current > 0 ? 1 : -1;
        const newSection = Math.max(
          0,
          Math.min(sectionsRef.current.length - 1, currentSection + direction)
        );

        if (newSection !== currentSection) {
          smoothScrollToSectionBottom(newSection);
          lastScrollTime.current = now;
        }

        accumulatedDelta.current = 0;
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;

      let newSection = currentSection;

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          newSection = Math.min(sectionsRef.current.length - 1, currentSection + 1);
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          newSection = Math.max(0, currentSection - 1);
          break;
        case 'Home':
          e.preventDefault();
          newSection = 0;
          break;
        case 'End':
          e.preventDefault();
          newSection = sectionsRef.current.length - 1;
          break;
      }

      if (newSection !== currentSection) {
        smoothScrollToSectionBottom(newSection);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [currentSection, isTransitioning]);

  return { registerSection, currentSection, isTransitioning };
};
