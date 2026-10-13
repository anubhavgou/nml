import { team } from '@/data/content';

export default function Team() {
  return (
    <section id="team">
      <div className="wrap">
        <h2>Our team</h2>
        <p className="lead">Scientists, engineers and designers who care about water.</p>
        <div className="team">
          {team.map((t) => (
            <div className="tm" key={t.name}>
              <div className="av" style={{ background: t.color }}>{t.name.split(' ').pop()[0]}</div>
              <h3>{t.name}</h3><small>{t.role}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
