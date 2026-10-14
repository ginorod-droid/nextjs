// app/commercial-loans/page.jsx
import { bpStyles, BrokerNav, BrokerFooter, ProgramRows, JsonLd, programsJsonLd, CAL, FORM, EMAIL, CREDIT } from '../broker-programs/shared'

export const metadata = {
  title: 'Commercial Loans | Owner-Occupied & Investor Financing | Acoma Capital Partners',
  description: 'Commercial property financing for owners and investors the bank turns away. Bank statement, lite doc, and no doc programs from $100K to $2M. The deals we get done.',
  alternates: { canonical: 'https://www.acomacapitalpartners.com/commercial-loans' },
  openGraph: {
    title: 'Commercial Loans | Acoma Capital Partners',
    description: 'Owner-occupied and investor commercial financing, $100K to $2M. The deals we get done.',
    url: 'https://www.acomacapitalpartners.com/commercial-loans',
    images: ['/program-bank-statement.jpg'],
  },
}

export default function CommercialLoans() {
  return (
    <div id="bp">
      <style dangerouslySetInnerHTML={{ __html: bpStyles }} />
      <JsonLd data={programsJsonLd('https://www.acomacapitalpartners.com/commercial-loans')} />

      <div className="bp-colorbar">
        <span style={{ background: '#2C9143' }} /><span style={{ background: '#202A54' }} />
        <span style={{ background: '#1179EC' }} /><span style={{ background: '#F6D200' }} />
      </div>

      <BrokerNav />

      {/* HERO with people photo */}
      <section className="bp-hub-hero">
        <div className="bp-wrap bp-hero-split">
          <div className="bp-hero-text">
            <p className="bp-eyebrow" style={{ color: '#F6D200' }}>Commercial Financing · Nationwide</p>
            <h1 className="bp-h1">The Deals<br />We Get Done.</h1>
            <p className="bp-hero-sub">Owner-occupied and investor financing for borrowers the bank turns away. When the tax returns do not tell the whole story, one of these programs still gets you to the closing table. $100K to $2M.</p>
            <div className="bp-cta-row">
              <a href={CAL} target="_blank" rel="noreferrer" className="bp-btn-yellow">Book a Call</a>
              <a href={FORM} target="_blank" rel="noreferrer" className="bp-btn-green">Start Your File</a>
            </div>
          </div>
          <div className="bp-hero-photo">
            <span className="bp-hero-photo-frame" />
            <img src="/deal-closing.jpg" alt="Gino Rodrigues closing a commercial financing deal with a client" />
            <span className="bp-hero-photo-bar" />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bp-section bp-section-tight">
        <div className="bp-wrap">
          <p className="bp-section-label">How We Finance</p>
          <div className="bp-rule" />
          <h2>Financing built around the borrower the bank cannot fit.</h2>
          <p className="bp-lead">Self-employed owners, investors with strong credit, and operators who move faster than a bank committee. We qualify the deal on bank statements, on the property, or on nothing more than credit and equity, and we close on commercial property banks avoid.</p>
        </div>
      </section>

      {/* STACKED PROGRAM ROWS */}
      <section>
        <div className="bp-wrap" style={{ paddingTop: 8, paddingBottom: 8 }}>
          <p className="bp-section-label">The Programs</p>
          <div className="bp-rule" />
          <h2 style={{ marginBottom: 8 }}>Three ways to finance your property.</h2>
        </div>
        <ProgramRows variant="client" />
        <div className="bp-wrap" style={{ paddingTop: 36, paddingBottom: 8 }}>
          <p className="bp-credit"><strong>Credit required.</strong> {CREDIT}</p>
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
