// app/commercial-loans/page.jsx
import { programs, bpStyles, BrokerNav, BrokerFooter, CAL, FORM, EMAIL } from '../broker-programs/shared'

export const metadata = {
  title: 'Commercial Loans | Owner-Occupied & Investor Financing | Acoma Capital Partners',
  description: 'Commercial property financing for owners and investors the bank turns away. Bank statement, lite doc, and no doc programs, $100K to $2M. The deals we get done.',
}

export default function CommercialLoans() {
  return (
    <div id="bp">
      <style dangerouslySetInnerHTML={{ __html: bpStyles }} />

      <div className="bp-colorbar">
        <span style={{ background: '#2C9143' }} /><span style={{ background: '#202A54' }} />
        <span style={{ background: '#1179EC' }} /><span style={{ background: '#F6D200' }} />
      </div>

      <BrokerNav />

      {/* HERO */}
      <section className="bp-hub-hero">
        <div className="bp-wrap">
          <p className="bp-eyebrow" style={{ color: '#F6D200' }}>Commercial Financing · Nationwide</p>
          <h1 className="bp-h1">The Deals<br />We Get Done.</h1>
          <p className="bp-hero-sub">Owner-occupied and investor financing for borrowers the bank turns away. When the tax returns do not tell the whole story, one of these programs still gets you to the closing table. $100K to $2M.</p>
          <div className="bp-cta-row">
            <a href={CAL} target="_blank" rel="noreferrer" className="bp-btn-yellow">Book a Call</a>
            <a href={FORM} target="_blank" rel="noreferrer" className="bp-btn-green">Start Your File</a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bp-section">
        <div className="bp-wrap">
          <p className="bp-section-label">How We Finance</p>
          <div className="bp-rule" />
          <h2>Financing built around the borrower the bank cannot fit.</h2>
          <p className="bp-lead">Self-employed owners, investors with strong credit, and operators who move faster than a bank committee. We qualify the deal on bank statements, on the property, or on nothing more than credit and equity, and we close on commercial property banks avoid.</p>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bp-section bp-section-off">
        <div className="bp-wrap">
          <p className="bp-section-label">The Programs</p>
          <div className="bp-rule" />
          <h2>Three ways to finance your property.</h2>
          <div className="bp-hub-grid">
            {programs.map((p) => (
              <a key={p.slug} href={`/broker-programs/${p.slug}`} className="bp-prog-card" style={{ borderTopColor: p.accent }}>
                <img className="bp-prog-img" src={p.image} alt={`${p.name} commercial property`} loading="lazy" />
                <div className="bp-prog-body">
                  <div className="bp-prog-eyebrow">{p.eyebrow}</div>
                  <div className="bp-prog-name">{p.name}</div>
                  <p className="bp-prog-tag">{p.clientTagline}</p>
                  <span className="bp-prog-link" style={{ color: p.accent }}>See the Terms →</span>
                </div>
              </a>
            ))}
          </div>
          <p className="bp-extra">Eligible across retail, mixed-use, warehouse and self-storage, office, light industrial, automotive, mobile home parks, restaurants, bars, and day care. Terms are indicative and subject to underwriting.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bp-section bp-section-navy">
        <div className="bp-wrap bp-cta-block">
          <h2 className="bp-white">Tell us about your property.</h2>
          <p className="bp-muted-white">Send the address, the loan you need, and a rough credit picture. You will get a straight read on which program fits and where it prices, usually the same day.</p>
          <div className="bp-cta-row">
            <a href={CAL} target="_blank" rel="noreferrer" className="bp-btn-yellow">Book a Call</a>
            <a href={FORM} target="_blank" rel="noreferrer" className="bp-btn-green">Start Your File</a>
            <a href={EMAIL} className="bp-btn-ghost-white">Email Gino</a>
          </div>
          <p className="bp-cta-phone"><a href="tel:7207721327">(720) 772-1327</a> &nbsp;·&nbsp; Gino Rodrigues &nbsp;·&nbsp; Acoma Capital Partners</p>
        </div>
      </section>

      <BrokerFooter />
    </div>
  )
}
