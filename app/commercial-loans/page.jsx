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

      <BrokerNav current="commercial-loans" />

      {/* HERO with people photo */}
      <section className="bp-hub-hero">
        <div className="bp-wrap bp-hero-split">
          <div className="bp-hero-text">
            <p className="bp-eyebrow" style={{ color: '#F6D200' }}>Commercial Financing · Nationwide</p>
            <h1 className="bp-h1">The Deals<br />We Get Done.</h1>
            <p className="bp-hero-sub">Owner-occupied and investor financing for the deals a bank turns down. When your tax returns do not tell the whole story, one of these programs still gets you to the closing table. $100K to $2M.</p>
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
          <h2>Financing built around your deal.</h2>
          <p className="bp-lead">If you are self-employed and your tax returns do not show what the business really earns, or you have the credit and a property that performs, we have a way to finance it. We qualify your deal on your bank statements, on the property, or on your credit and equity, and we close on the commercial buildings a bank walks away from.</p>
        </div>
      </section>

      {/* CASH-OUT */}
      <section className="bp-section bp-section-tight bp-section-off">
        <div className="bp-wrap">
          <p className="bp-section-label">Cash-Out</p>
          <div className="bp-rule" />
          <h2>Pull the equity out of a building you already own.</h2>
          <p className="bp-lead">Here is the one the banks will not touch. You own a commercial property free and clear, or you owe very little on it, and you need that money working in the business instead of sitting in the walls. We qualify you on twelve months of bank statements instead of tax returns and put the equity back in your hands. It is the most common deal we do, and it is the one your bank keeps saying no to.</p>
          <div className="bp-cta-row" style={{ marginTop: 32 }}>
            <a href={CAL} target="_blank" rel="noreferrer" className="bp-btn-yellow">Book a Call</a>
            <a href={FORM} target="_blank" rel="noreferrer" className="bp-btn-green">Start Your File</a>
          </div>
        </div>
      </section>

      {/* STACKED PROGRAM ROWS */}
      <section>
        {/* BRIDGE / HARD MONEY — above the programs */}
        <div className="bp-wrap" id="bridge" style={{ paddingTop: 8, paddingBottom: 8 }}>
          <p className="bp-section-label">Bridge &amp; Hard Money</p>
          <div className="bp-rule" />
          <h2 style={{ marginBottom: 8 }}>Bridge in now. Refinance into permanent later.</h2>
          <p className="bp-lead">This is the play most people miss. When a deal cannot wait for a bank, we bridge you in on the property and the exit, not your tax returns. Then once the property is stabilized, we refinance you out of that short-term money and into one of our permanent programs. One relationship, both ends of the deal, and the exit is mapped out before you ever fund the bridge. That is the difference between a bridge that works and a bridge that traps you.</p>
          <div className="bp-spec-grid" style={{ marginTop: 44 }}>
            {[
              ['Bridge Size', '$100K to $20M'],
              ['Permanent Takeout', '$100K to $2.5M'],
              ['Secured By', 'The property and the exit'],
              ['Used For', 'Acquisitions, value-add, time-sensitive closings'],
              ['The Exit', 'Refinance into one of our programs'],
              ['Terms', 'Based on the deal'],
            ].map(([label, value]) => (
              <div key={label} className="bp-spec-cell">
                <p className="bp-spec-label">{label}</p>
                <p className="bp-spec-value">{value}</p>
              </div>
            ))}
          </div>
          <p className="bp-extra">Rate, term, and timeline depend on the property, the exit, and the file. Send us the deal and you get a straight read on whether the bridge fits, where it lands, and how the permanent takeout looks on the other side.</p>
          <div className="bp-cta-row" style={{ marginTop: 36 }}>
            <a href={CAL} target="_blank" rel="noreferrer" className="bp-btn-yellow">Book a Call</a>
            <a href={FORM} target="_blank" rel="noreferrer" className="bp-btn-green">Start Your File</a>
          </div>
        </div>

        <div className="bp-wrap" style={{ paddingTop: 72, paddingBottom: 8 }}>
          <p className="bp-section-label">The Programs</p>
          <div className="bp-rule" />
          <h2 style={{ marginBottom: 8 }}>Ways to finance your property.</h2>
          <p className="bp-lead" style={{ marginTop: 8 }}>Four ways in. If you can document the income the normal way, full-doc gets you the best rate and the most leverage. If your tax returns do not tell the real story, the three below qualify you on your bank statements, on the property, or on your credit and equity instead.</p>
        </div>
        <ProgramRows variant="client" />
        <div className="bp-wrap" style={{ paddingTop: 36, paddingBottom: 8 }}>
          <p className="bp-credit"><strong>Credit required.</strong> {CREDIT}</p>
          <p className="bp-extra">We finance the property types a lot of lenders avoid. Restaurants, bars, and automotive, right alongside retail, office, light industrial, warehouse and self-storage, mixed-use, mobile home parks, and day care. If it is commercial and it is stabilized, bring it. Terms are indicative and subject to underwriting.</p>
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
