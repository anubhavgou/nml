export default function About() {
  return (
    <section id="about">
      <div className="wrap about">
        <div>
          <h2>About Neermedha Lab</h2>
          <p className="lead" style={{ marginBottom: 18 }}>We are a water-intelligence lab. Our team of hydrologists, data scientists and engineers turns scattered river and groundwater data into clear, usable decisions for government bodies, researchers and communities.</p>
          <p style={{ color: 'var(--mute)' }}>From live monitoring dashboards to a public encyclopedia of the Ganga, everything we build is open to inspection, built on trusted data and designed to be used on the ground.</p>
        </div>
        <div className="pillars">
          <div><h3>Our mission</h3><p>Make water data accurate, accessible and actionable for everyone who manages it.</p></div>
          <div><h3>Our vision</h3><p>Healthy rivers and secure groundwater, guided by science and shared knowledge.</p></div>
          <div><h3>Our approach</h3><p>Field data, models and simple interfaces working together in one platform.</p></div>
        </div>
      </div>
    </section>
  );
}
