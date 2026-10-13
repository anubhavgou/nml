'use client';
import { useState } from 'react';
import { contact } from '@/data/content';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    // TODO: send to your API route / email service, e.g. fetch('/api/contact', { method: 'POST', body: new FormData(e.target) })
    setSent(true);
    e.target.reset();
  };
  return (
    <section id="contact">
      <div className="wrap contact">
        <div>
          <h2>Contact us</h2>
          <p className="lead" style={{ marginBottom: 0 }}>Have a basin to understand or a dataset to unlock? Write to us and we will reply within two working days.</p>
          <address>{contact.address[0]}<br />{contact.address[1]}<br />{contact.email}</address>
        </div>
        <form onSubmit={submit}>
          <label>Name<input name="name" required autoComplete="name" /></label>
          <label>Email<input type="email" name="email" required autoComplete="email" /></label>
          <label>How can we help?<textarea name="message" rows={4} required /></label>
          <button className="btn b1" type="submit">Send message</button>
          <p id="ok" role="status" style={{ display: sent ? 'block' : 'none' }}>Thanks! Your message is ready. Connect this form to your email service to receive it.</p>
        </form>
      </div>
    </section>
  );
}
