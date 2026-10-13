'use client';
import { useState } from 'react';
import { products, services } from '@/data/content';

export default function Products() {
  const [i, setI] = useState(0);
  const p = products[i];
  return (
    <section id="products">
      <div className="wrap">
        <h2>Products and services</h2>
        <p className="lead">Seven platforms, one connected water-data ecosystem. Pick a product to see what it does.</p>
        <div className="pg">
          <div className="plist" role="tablist">
            {products.map((q, j) => (
              <button key={q.name} role="tab" aria-selected={j === i} onClick={() => setI(j)}>{q.name}</button>
            ))}
          </div>
          <div className="pd sw" key={p.name} role="tabpanel" style={{ '--c': p.color }}>
            <h3>{p.name}</h3>
            <p>{p.text}</p>
            <ul>{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        </div>
        <div className="svc">
          {services.map(([t, d]) => <div key={t}><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </div>
    </section>
  );
}
