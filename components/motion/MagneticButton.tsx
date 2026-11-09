"use client";

import { useRef, type ComponentProps } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useReducedMotion } from "@/lib/motion/useReducedMotion";
import { cn } from "@/lib/cn";

type MagneticButtonProps = ComponentProps<typeof motion.button> & {
  strength?: number;
};

export function MagneticButton({
  children,
  className,
  strength = 0.3,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 22, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 22, mass: 0.5 });

  function handlePointerMove(event: React.PointerEvent<HTMLButtonElement>) {
    if (reducedMotion || event.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * strength);
    y.set((event.clientY - rect.top - rect.height / 2) * strength);
  }

  function handlePointerLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn(className)}
      whileTap={reducedMotion ? undefined : { scale: 0.96 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
