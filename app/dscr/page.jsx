// app/dscr/page.jsx — DSCR rental financing for 1-4 unit investment property
import { bpStyles, BrokerNav, BrokerFooter, JsonLd, CAL, FORM, EMAIL, CREDIT } from '../broker-programs/shared'

export const metadata = {
  title: 'Rental Loans | DSCR Financing for 1-4 Unit Rentals | Acoma Capital Partners',
  description: 'Long-term rental financing for 1-4 unit investment property. Qualify on the rent the property brings in instead of your tax returns. Free appraisal, built to close fast.',
  alternates: { canonical: 'https://www.acomacapitalpartners.com/dscr' },
  openGraph: {
    title: 'Rental Loans | Acoma Capital Partners',
    description: 'DSCR financing for 1-4 unit rentals. Qualify on the rent, not your tax returns.',
    url: 'https://www.acomacapitalpartners.com/dscr',
    images: ['/program-lite-doc.jpg'],
  },
}

const dscrJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Acoma Capital Partners',
  image: 'https://www.acomacapitalpartners.com/acoma-horizontal.png',
  url: 'https://www.acomacapitalpartners.com/dscr',
  telephone: '+1-720-772-1327',
  email: 'ginorod@acomacapitalpartners.com',
  areaServed: 'US',
  address: { '@type': 'PostalAddress', addressLocality: 'Denver', addressRegion: 'CO', addressCountry: 'US' },
  description: 'DSCR rental financing for 1-4 unit investment property. Qualify on the property rent instead of personal tax returns.',
}

const WHEN = [
  'You own or are buying a 1-4 unit rental and the rent covers the payment.',
  'Your tax returns do not reflect what you really earn, or you would rather leave them out of it.',
  'The deal does not fit conventional or agency guidelines, but the property performs.',
]

const SPECS = [
  ['Property Types', 'Single-family & 2-4 unit rentals'],
  ['Qualifies On', "The property's rent (DSCR)"],
  ['Personal Income', 'Not required'],
  ['Appraisal', 'Free appraisal available'],
  ['Use', 'Purchase, refinance, cash-out'],
  ['Terms', 'Priced to the deal, available on request'],
]

const PILLARS = [
  ['Rent carries the loan', "If the property's rent covers the payment, the deal has a path, whatever your tax returns say."],
  ['Built for investors', 'Made for the buy-and-hold investor and the portfolio builder. This is not a consumer mortgage.'],
  ['Free appraisal, fast close', 'A free appraisal and a process built to move, so you can close and get on to the next one.'],
]

export default function Dscr() {
  return (
    <div id="bp">
      <style dangerouslySetInnerHTML={{ __html: bpStyles }} />
      <JsonLd data={dscrJsonLd} />

      <div className="bp-colorbar">
        <span style={{ background: '#2C9143' }} /><span style={{ background: '#202A54' }} />
        <span style={{ background: '#1179EC' }} /><span style={{ background: '#F6D200' }} />
      </div>

      <BrokerNav current="dscr" />

      {/* HERO */}
      <section className="bp-hero">
        <div className="bp-wrap">
          <p className="bp-eyebrow" style={{ color: '#F6D200' }}>Rental Financing · 1-4 Unit Investment Property</p>
          <h1 className="bp-h1">Rental Loans.</h1>
          <p className="bp-hero-sub">Long-term financing for your 1-4 unit rentals, qualified on the income the property brings in. No personal tax returns, no agency underwriting. If the rent covers the payment, we have a loan for it.</p>
          <div className="bp-cta-row">
            <a href={CAL} target="_blank" rel="noreferrer" className="bp-btn-yellow">Book a Call</a>
            <a href={FORM} target="_blank" rel="noreferrer" className="bp-btn-green">Start Your File</a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bp-section bp-section-tight">
        <div className="bp-wrap">
          <p className="bp-section-label">The Program</p>
          <div className="bp-rule" />
          <h2>Qualify on the rent, not your returns.</h2>
          <p className="bp-lead">A DSCR loan looks at one thing first. Does the property&apos;s rent cover the debt. If it does, you can finance or refinance it without handing over personal tax returns or squeezing into Fannie and Freddie&apos;s box. It is built for the investor who owns rentals, is adding to a portfolio, or got turned away by a conventional lender over paperwork that has nothing to do with whether the property performs.</p>
        </div>
      </section>

      {/* WHEN IT FITS */}
      <section className="bp-section bp-section-navy">
        <div className="bp-wrap">
          <p className="bp-section-label bp-label-yellow">When It Fits</p>
          <div className="bp-rule bp-rule-yellow" />
          <h2 className="bp-white">Right for the deal when:</h2>
          <div className="bp-when-grid">
            {WHEN.map((w, i) => (
              <div key={i} className="bp-when-card">
                <span className="bp-when-num" style={{ color: '#F6D200' }}>{String(i + 1).padStart(2, '0')}</span>
                <p>{w}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="bp-section">
        <div className="bp-wrap">
          <p className="bp-section-label">Program Terms</p>
          <div className="bp-rule" />
          <h2>At a Glance.</h2>
          <div className="bp-spec-grid">
            {SPECS.map(([label, value]) => (
              <div key={label} className="bp-spec-cell">
                <p className="bp-spec-label">{label}</p>
                <p className="bp-spec-value">{value}</p>
              </div>
            ))}
          </div>
          <p className="bp-extra">This lane is for 1-4 unit rental property. For 5-plus unit and commercial multifamily, see <a href="/commercial-loans" style={{ color: '#1179EC', fontWeight: 700, textDecoration: 'none' }}>Commercial Loans</a>. Terms are indicative and subject to underwriting.</p>
          <p className="bp-credit"><strong>Credit required.</strong> {CREDIT}</p>
        </div>
      </section>

      {/* WHY IT WORKS */}
      <section className="bp-section bp-section-off">
        <div className="bp-wrap">
          <p className="bp-section-label">Why It Works</p>
          <div className="bp-rule" />
          <div className="bp-pillar-grid">
            {PILLARS.map(([title, body], i) => (
              <div key={i} className="bp-pillar-card">
                <div className="bp-pillar-title">{title}</div>
                <p className="bp-pillar-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bp-section bp-section-navy">
        <div className="bp-wrap bp-cta-block">
          <h2 className="bp-white">Have a rental to finance? Let&apos;s talk.</h2>
          <p className="bp-muted-white">Send the address, the rent, and what you owe. You get a straight read on whether it fits and where it lands, usually the same day.</p>
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
