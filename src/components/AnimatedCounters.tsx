import React, { useState, useEffect, useRef } from 'react';
import { COUNTERS } from '../constants';

const CounterItem: React.FC<{ value: number; prefix?: string; suffix?: string; label: string }> = ({
  value,
  prefix = '',
  suffix = '',
  label
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 1500;
    const steps = 40;
    const stepTime = duration / steps;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="glass-panel p-6 rounded-2xl border-slate-800 text-center space-y-2 hover:border-amber-400/30 transition-all">
      <div className="text-4xl sm:text-5xl font-black text-gradient-gold tracking-tight">
        {prefix}{count}{suffix}
      </div>
      <div className="text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

export const AnimatedCounters: React.FC = () => {
  return (
    <section className="py-16 bg-[#0a0d16] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {COUNTERS.map((item, idx) => (
            <CounterItem
              key={idx}
              value={item.value}
              prefix={item.prefix}
              suffix={item.suffix}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
