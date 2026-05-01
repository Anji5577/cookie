import { animate, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface SmoothCounterProps {
  value: number;
  duration?: number;
  formatting?: (val: number) => string;
  className?: string;
}

export function SmoothCounter({ value, duration = 2, formatting = (v) => v.toString(), className = "" }: SmoothCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(formatting(0));

  useEffect(() => {
    if (!isInView || !ref.current) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplayValue(formatting(Math.round(latest)));
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration, formatting]);

  return <motion.span ref={ref} className={className}>{displayValue}</motion.span>;
}
