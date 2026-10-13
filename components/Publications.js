import { publications } from '@/data/content';

export default function Publications() {
  return (
    <section id="publications">
      <div className="wrap">
        <h2>Publications</h2>
        <p className="lead">Research, reports and technical notes from the lab.</p>
        <div className="pubs">
          {publications.map((p) => (
            <div className="pub" key={p.title}>
              <b>{p.year}</b>
              <div><h3>{p.title}</h3><span>{p.type}</span></div>
              <span className="tag">{p.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
