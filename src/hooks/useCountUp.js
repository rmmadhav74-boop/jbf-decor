import { useState, useEffect, useRef } from "react";

/**
 * Custom hook for count-up animation
 * @param {number} target - Target number to count to
 * @param {number} duration - Duration in milliseconds
 * @returns {number} Current count value
 */
export function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const prevTarget = useRef(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (target === 0) {
      setCount(0);
      prevTarget.current = 0;
      return;
    }

    const start = Date.now();
    const from = prevTarget.current;
    const range = target - from;

    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(from + range * eased));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        prevTarget.current = target;
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [target, duration]);

  return count;
}
