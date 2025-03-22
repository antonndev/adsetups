import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-use';

interface StatCounterProps {
  value: number;
  label: string;
  duration?: number;
}

export function StatCounter({ value, label, duration = 2 }: StatCounterProps) {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="text-4xl font-bold text-minecraft-blue"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration }}
        >
          {inView ? value : 0}
        </motion.span>
        +
      </motion.div>
      <div className="mt-2 text-gray-400">{label}</div>
    </motion.div>
  );
}