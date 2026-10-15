// app/partners/page.jsx
import { bpStyles, BrokerNav, BrokerFooter, JsonLd, CAL, FORM, EMAIL } from '../broker-programs/shared'

export const metadata = {
  title: 'Work With Us | For Experienced Brokers & Professionals | Acoma Capital Partners',
  description: 'The market overlooked you. We see the value. If you know a business that needs capital, a commercial property, or a home seller, send us the deal. If it closes, you get paid.',
  alternates: { canonical: 'https://www.acomacapitalpartners.com/partners' },
  openGraph: {
    title: 'The market overlooked you. We see the value. | Acoma Capital Partners',
    description: 'They saw your age. We see years of trust and relationships. Have a deal in mind? Let us talk.',
    url: 'https://www.acomacapitalpartners.com/partners',
    images: ['/partners-hero.jpg'],
  },
}

const ppStyles = `
.pp-hero { background:#202A54; padding:0 0 64px; }
.pp-hero-img-wrap { display:flex; justify-content:center; background:#202A54; }
.pp-hero-img-wrap img { width:100%; max-width:720px; height:auto; display:block; }
.pp-hero-cta { text-align:center; margin-top:40px; }
.pp-hero-cta .bp-cta-row { justify-content:center; }
.pp-story p { font-size:20px; line-height:1.85; color:#444; max-width:760px; margin:0 0 24px; }
.pp-story .pp-punch { font-size:clamp(24px,3vw,32px); font-weight:900; color:#202A54; line-height:1.3; letter-spacing:-0.015em; margin-top:8px; }
.pp-pay-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:44px; }
.pp-pay-card { background:#fff; border:1px solid #e4e8f0; border-top:4px solid #2C9143; padding:40px 34px; }
.pp-pay-card.pp-pay-blue { border-top-color:#1179EC; }
.pp-pay-kicker { font-size:12px; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; color:#2C9143; margin-bottom:14px; }
.pp-pay-card.pp-pay-blue .pp-pay-kicker { color:#1179EC; }
.pp-pay-card h3 { font-size:24px; font-weight:900; color:#202A54; letter-spacing:-0.02em; line-height:1.15; margin-bottom:16px; }
.pp-pay-card p { font-size:16px; line-height:1.75; color:#555; }
.pp-pay-close { margin-top:40px; font-size:clamp(22px,2.6vw,30px); font-weight:900; color:#202A54; letter-spacing:-0.015em; }
@media(max-width:820px){
  .pp-hero-img-wrap img { max-width:100%; }
  .pp-story p { font-size:18px; }
  .pp-pay-grid { grid-template-columns:1fr; }
}
`

const partnersJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Acoma Capital Partners',
  image: 'https://www.acomacapitalpartners.com/acoma-horizontal.png',
  url: 'https://www.acomacapitalpartners.com/partners',
  telephone: '+1-720-772-1327',
  email: 'ginorod@acomacapitalpartners.com',
  areaServed: 'US',
  address: { '@type': 'PostalAddress', addressLocality: 'Denver', addressRegion: 'CO', addressCountry: 'US' },
  description: 'Referral partnerships for experienced brokers and professionals. Refer a business that needs capital, a commercial property, or a home seller, and earn when the deal closes.',
}

const WANT = [
  {
    title: 'A business that needs money',
    body: 'An owner who got turned down by the bank, needs to buy a building, or needs capital to grow. Work it alongside us, or refer it over. Your call.',
  },
  {
    title: 'A commercial property buyer or seller',
    body: 'Someone looking to sell a building, or buy one. We are a licensed brokerage. Stay in and work it with us, or refer it over.',
  },
  {
    title: 'Someone ready to sell a home',
    body: 'A neighbor, a friend, a family member who is selling. Often that is a parent getting older and moving on. Work it with us, or send it our way.',
  },
]

export default function Partners() {
  return (
    <div id="bp">
      <style dangerouslySetInnerHTML={{ __html: bpStyles + ppStyles }} />
      <JsonLd data={partnersJsonLd} />

      <div className="bp-colorbar">
        <span style={{ background: '#2C9143' }} /><span style={{ background: '#202A54' }} />
        <span style={{ background: '#1179EC' }} /><span style={{ background: '#F6D200' }} />
      </div>

      <BrokerNav current="partners" />

      {/* HERO — approved composed image on matching navy field */}
      <section className="pp-hero">
        <h1 style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
          The market overlooked you. We see the value. Acoma Capital Partners, commercial sales and lending. Have a deal in mind? Let us talk.
        </h1>
        <div className="pp-hero-img-wrap">
          <img src="/partners-hero.jpg" alt="Five seasoned brokers and professionals at a conference table. The market overlooked you. We see the value. They saw your age; we see years of trust, experience, and relationships with people who sign checks. Have a deal in mind? Let's talk." />
        </div>
        <div className="bp-wrap pp-hero-cta">
          <div className="bp-cta-row">
            <a href={FORM} target="_blank" rel="noreferrer" className="bp-btn-yellow">Send Us a Deal</a>
            <a href={CAL} target="_blank" rel="noreferrer" className="bp-btn-ghost-white">Book a Call</a>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bp-section bp-section-tight">
        <div className="bp-wrap pp-story">
          <p className="bp-section-label">You lived it</p>
          <div className="bp-rule" />
          <p>You ran a region. You had a sales force under you. Then one day the company decided your number was too high and your birthday was too old, and you were out. You figured you would land somewhere in a month or two. You have the resume for it. Then the calls did not come back. At some point it stops being bad luck and starts being a message.</p>
          <p>The job market does not want us. It wants to hire young and cheap. The deal market wants to know one thing: if this deal can close. And if it can, we get paid.</p>
          <p>You know the right people. You have known them for years and you have had dinner at their homes. They answer your calls. Those relationships have value.</p>
          <p className="pp-punch">You have value. Let no one tell you different.</p>
        </div>
      </section>

      {/* WHAT WE WANT */}
      <section className="bp-section bp-section-navy">
        <div className="bp-wrap">
          <p className="bp-section-label bp-label-yellow">What We Want From You</p>
          <div className="bp-rule bp-rule-yellow" />
          <h2 className="bp-white">Three kinds of deals.</h2>
          <p className="bp-muted-white">If you have a deal that fits one of these, let us get it closed. You can work it with us, or refer it over. Your choice, either way.</p>
          <div className="bp-when-grid">
            {WANT.map((w, i) => (
              <div key={i} className="bp-when-card">
                <span className="bp-when-num" style={{ color: '#F6D200' }}>{String(i + 1).padStart(2, '0')}</span>
                <p style={{ fontWeight: 900, color: '#fff', marginBottom: 10, fontSize: 17 }}>{w.title}</p>
                <p>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW YOU GET PAID */}
      <section className="bp-section">
        <div className="bp-wrap">
          <p className="bp-section-label">How You Get Paid</p>
          <div className="bp-rule" />
          <h2>Two ways to work with us.</h2>
          <p className="bp-lead">You pick the one that fits.</p>
          <div className="pp-pay-grid">
            <div className="pp-pay-card">
              <p className="pp-pay-kicker">Work it with us</p>
              <h3>Stay in, earn more.</h3>
              <p>We show you how the deal moves through our system, from the introduction to the closing table. You stay involved, and your cut is bigger.</p>
            </div>
            <div className="pp-pay-card pp-pay-blue">
              <p className="pp-pay-kicker">Hand it off</p>
              <h3>Refer it, we close it.</h3>
              <p>Send us the deal and we carry it all the way to close. You collect a smaller percentage for making the connection. No work on your end past the introduction.</p>
            </div>
          </div>
          <p className="pp-pay-close">Either way, you get paid when it closes.</p>
        </div>
      </section>

      {/* WHO YOU'D BE WORKING WITH */}
      <section className="bp-section bp-section-off" style={{ borderTop: '1px solid #e8ecf0' }}>
        <div className="bp-wrap pp-story">
          <p className="bp-section-label">Who You Would Be Working With</p>
          <div className="bp-rule" />
          <p>Acoma Capital Partners is a licensed Colorado brokerage. I have been closing commercial real estate and lending deals since the 1990s, and I am not 28 years old pitching you from a script. I am your generation. I know exactly what it feels like to be told the thing you are best at is no longer wanted.</p>
          <p>We also run Silver Tsunami, our practice built around people over 55 and the moves they make as life changes. This is part of the same idea. Your experience did not expire. The people who told you it did were wrong, and we are building a business on proving it.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bp-section bp-section-navy">
        <div className="bp-wrap bp-cta-block">
          <h2 className="bp-white">You still know the right people. Let us put that to work.</h2>
          <p className="bp-muted-white">Send us a deal, or book a call and we will talk it through. No desk, no quota, no boss.</p>
          <div className="bp-cta-row">
            <a href={FORM} target="_blank" rel="noreferrer" className="bp-btn-yellow">Send Us a Deal</a>
            <a href={CAL} target="_blank" rel="noreferrer" className="bp-btn-green">Book a Call</a>
            <a href={EMAIL} className="bp-btn-ghost-white">Email Gino</a>
          </div>
          <p className="bp-cta-phone"><a href="tel:7207721327">(720) 772-1327</a> &nbsp;·&nbsp; Gino Rodrigues &nbsp;·&nbsp; Acoma Capital Partners</p>
        </div>
      </section>

      <BrokerFooter />
    </div>
  )
}
