import { news } from '@/data/content';

export default function News() {
  return (
    <section id="news" style={{ background: 'var(--card)' }}>
      <div className="wrap">
        <h2>News and media</h2>
        <p className="lead">What we are building, announcing and being talked about for.</p>
        <div className="news">
          {news.map((n) => (
            <article className={'nw' + (n.big ? ' big' : '')} key={n.title}>
              <time>{n.date}</time><h3>{n.title}</h3><p>{n.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
