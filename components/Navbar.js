'use client';
import { useEffect, useState } from 'react';

const links = [['About', '#about'], ['Products', '#products'], ['Team', '#team'], ['News', '#news'], ['Publications', '#publications'], ['Impact', '#impact'], ['Contact', '#contact']];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40);
    window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  return (
    <nav className={solid ? 'solid' : ''}>
      <div className="wrap">
        <a className="logo" href="#top"><i />Neermedha Lab</a>
        <button id="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>Menu</button>
        <ul className={'links' + (open ? ' open' : '')} onClick={() => setOpen(false)}>
          {links.map(([t, h]) => <li key={h}><a href={h}>{t}</a></li>)}
        </ul>
      </div>
    </nav>
  );
}
