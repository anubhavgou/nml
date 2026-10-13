'use client';
import { useEffect, useRef, useState } from 'react';
import { stats } from '@/data/content';

function Counter({ n, suffix }) {
  const [v, setV] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const f = (t) => {
        const k = Math.min((t - t0) / 1600, 1);
        setV(Math.round(n * (1 - Math.pow(1 - k, 3))));
        if (k < 1) requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
    }, { threshold: 0.5 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [n]);
  return <strong ref={ref}>{v.toLocaleString('en-IN')}{v === n ? suffix : ''}</strong>;
}

export default function Impact() {
  return (
    <section id="impact">
      <div className="wrap">
        <h2>Our impact</h2>
        <p className="lead">Numbers that show how our platforms are used. Replace with your real figures.</p>
        <div className="stats">
          {stats.map((s) => <div key={s.label}><Counter n={s.n} suffix={s.suffix} /><span>{s.label}</span></div>)}
        </div>
      </div>
    </section>
  );
}
