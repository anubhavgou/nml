'use client';
import { useEffect, useRef } from 'react';
import { products } from '@/data/content';

export default function Hero() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current, x = c.getContext('2d'), box = c.parentNode;
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W, H, ps = [], raf, m = { x: -999, y: -999 };
    const np = () => ({ x: Math.random() * W, y: Math.random() * H, l: Math.random() * 200 + 80, a: Math.random() });
    const rs = () => {
      W = c.width = box.offsetWidth; H = c.height = box.offsetHeight;
      ps = Array.from({ length: Math.min(260, Math.floor(W / 6)) }, np);
    };
    const ang = (px, py, t) => Math.sin(px * 0.0016 + t * 0.0003) * 1.2 + Math.cos(py * 0.002 - t * 0.0002) * 1.1 + 0.5;
    const move = (e) => { const b = c.getBoundingClientRect(); m.x = e.clientX - b.left; m.y = e.clientY - b.top; };
    const draw = (t) => {
      x.fillStyle = 'rgba(4,24,42,.09)'; x.fillRect(0, 0, W, H);
      ps.forEach((p, i) => {
        const a = ang(p.x, p.y, t), dx = p.x - m.x, dy = p.y - m.y, d = Math.hypot(dx, dy);
        let vx = Math.cos(a) * 1.6, vy = Math.sin(a) * 1.6;
        if (d < 180) { vx += (dx / d) * (180 - d) * 0.03; vy += (dy / d) * (180 - d) * 0.03; }
        x.strokeStyle = p.a > 0.7 ? 'rgba(255,180,84,.55)' : p.a > 0.35 ? 'rgba(74,168,255,.5)' : 'rgba(25,211,197,.55)';
        x.lineWidth = 1.4; x.beginPath(); x.moveTo(p.x, p.y); p.x += vx; p.y += vy; x.lineTo(p.x, p.y); x.stroke();
        if (--p.l < 0 || p.x < 0 || p.x > W || p.y < 0 || p.y > H) ps[i] = np();
      });
      if (!rm) raf = requestAnimationFrame(draw);
    };
    rs(); window.addEventListener('resize', rs); box.addEventListener('pointermove', move);
    if (rm) { x.fillStyle = '#04182a'; x.fillRect(0, 0, W, H); } else raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', rs); box.removeEventListener('pointermove', move); };
  }, []);
  return (
    <header className="hero" id="top">
      <canvas id="flow" ref={ref} aria-hidden="true" />
      <div className="wrap">
        <h1><span>Understanding</span><span>every drop,</span><span>every river.</span></h1>
        <p>Neermedha Lab builds data platforms, digital twins and knowledge portals that help India&apos;s rivers and groundwater be measured, understood and protected.</p>
        <div className="cta"><a className="btn b1" href="#products">Explore our products</a><a className="btn b2" href="#contact">Talk to us</a></div>
      </div>
      <div className="chips">{products.map((p) => <b key={p.name}>{p.name}</b>)}</div>
    </header>
  );
}
