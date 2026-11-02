// app/floyd-hill/page.jsx — Floyd Hill Business Park listing detail
import { bpStyles, BrokerNav, BrokerFooter, CAL, EMAIL } from '../broker-programs/shared'

const BROCHURE = '/listings/floyd-hill-brochure.pdf'

export const metadata = {
  title: 'Floyd Hill Business Park, Unit D-106 | For Sale $250,000 | Acoma Capital Partners',
  description: '1,662 SF MIP-ready commercial condominium for sale at 35715 U.S. Highway 40, Unit D-106, Evergreen, CO. $250,000, with an associated Colorado MIP manufacturing license. On the I-70 mountain corridor. Equipment not included.',
  alternates: { canonical: 'https://www.acomacapitalpartners.com/floyd-hill' },
  openGraph: {
    title: 'Floyd Hill Business Park, Unit D-106 | Acoma Capital Partners',
    description: '1,662 SF MIP-ready commercial condo in Evergreen, CO. $250,000, associated MIP license. Equipment not included.',
    url: 'https://www.acomacapitalpartners.com/floyd-hill',
    images: ['/listings/floyd-hill.jpg'],
  },
}

const fhStyles = `
.fh-photo { width:100%; height:clamp(260px,42vw,520px); object-fit:cover; display:block; }
.fh-list { list-style:none; margin:18px 0 0; padding:0; }
.fh-list li { position:relative; padding:0 0 12px 24px; font-size:16px; color:#555; line-height:1.6; }
.fh-list li::before { content:''; position:absolute; left:0; top:9px; width:9px; height:9px; background:#2C9143; }
.fh-demo { width:100%; border-collapse:collapse; margin-top:28px; font-size:15px; }
.fh-demo th, .fh-demo td { text-align:left; padding:14px 16px; border-bottom:1px solid #e4e8f0; }
.fh-demo th { font-size:11px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#8a93a3; }
.fh-demo td:first-child { font-weight:700; color:#202A54; }
.fh-demo td { color:#555; }
.fh-disc { margin-top:24px; font-size:12px; color:#999; line-height:1.7; max-width:900px; }
.fh-gallery { display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:16px; margin-top:40px; }
.fh-gallery figure { margin:0; }
.fh-gallery img { width:100%; height:230px; object-fit:cover; display:block; border-radius:4px; }
.fh-gallery figcaption { font-size:12px; color:#8a93a3; margin-top:9px; line-height:1.5; }
`

const KEY_FACTS = [
  ['Asking Price', '$250,000'],
  ['Unit Size', '1,662 SF'],
  ['Property Type', 'Commercial Condo'],
  ['Location', 'Evergreen, CO'],
  ['Included', 'MIP License'],
  ['Zoning', 'PD · Clear Creek County'],
]

const BUILDING = [
  ['Building Size', '29,272 SF'],
  ['Site', '3.09 acres'],
  ['Year Built', '1997'],
  ['Renovated', '2010'],
  ['Building Class', 'B'],
  ['Clear Height', '12 ft'],
]

const HIGHLIGHTS = [
  'Offered at $250,000, about $150 per SF',
  'Associated Colorado MIP manufacturing license (subject to regulatory approval)',
  'Production suite built out, powered, and wired for MIP extraction and processing equipment (equipment not included)',
  'Direct I-70 mountain-corridor access between Exits 247 and 248',
  'Secured, paved outdoor yard immediately behind the unit',
  'Affluent trade area, average household income above $200K within one mile',
]

const DEMO = [
  ['Total population', '457', '2,706', '7,503'],
  ['Total households', '201', '1,086', '3,023'],
  ['Average age', '47', '46', '47'],
  ['Average HH income', '$204,050', '$227,946', '$217,213'],
  ['Average home value', '$961,654', '$1,151,302', '$1,132,836'],
]

const GALLERY = [
  ['/listings/fh-production-suite.jpg', 'Production suite, built out for MIP (equipment not included)'],
  ['/listings/fh-stainless.jpg', 'Stainless production area (equipment not included)'],
  ['/listings/fh-extraction.jpg', 'Built-out production space (equipment not included)'],
  ['/listings/fh-office-views.jpg', 'Office with corridor and mountain views'],
  ['/listings/fh-break-room.jpg', 'Break room'],
  ['/listings/fh-yard.jpg', 'Secured outdoor yard and mountain setting'],
  ['/listings/fh-compliant.jpg', 'Compliant buildout'],
  ['/listings/fh-front-office.jpg', 'Front office'],
]

export default function FloydHill() {
  return (
    <div id="bp">
      <style dangerouslySetInnerHTML={{ __html: bpStyles + fhStyles }} />

      <div className="bp-colorbar">
        <span style={{ background: '#2C9143' }} /><span style={{ background: '#202A54' }} />
        <span style={{ background: '#1179EC' }} /><span style={{ background: '#F6D200' }} />
      </div>

      <BrokerNav />

      {/* HERO */}
      <section className="bp-hero">
        <div className="bp-wrap">
          <p className="bp-eyebrow" style={{ color: '#F6D200' }}>Commercial Condo For Sale · Evergreen, CO</p>
          <h1 className="bp-h1" style={{ fontSize: 'clamp(40px,6vw,76px)' }}>Floyd Hill<br />Business Park.</h1>
          <p className="bp-hero-sub">35715 U.S. Highway 40, Building D, Unit D-106, Evergreen, CO 80439. A 1,662 SF commercial condominium on the I-70 mountain corridor, built out and MIP-ready, offered with an associated Colorado MIP manufacturing license. Equipment is not included. $250,000.</p>
          <div className="bp-cta-row">
            <a href={BROCHURE} target="_blank" rel="noreferrer" className="bp-btn-yellow">View Brochure (PDF)</a>
            <a href={CAL} target="_blank" rel="noreferrer" className="bp-btn-ghost-white">Book a Call</a>
          </div>
        </div>
      </section>

      {/* PHOTO */}
      <img className="fh-photo" src="/listings/floyd-hill.jpg" alt="Floyd Hill Business Park building at 35715 U.S. Highway 40, Evergreen, Colorado" />

      {/* KEY FACTS */}
      <section className="bp-section bp-section-tight">
        <div className="bp-wrap">
          <p className="bp-section-label">The Offering</p>
          <div className="bp-rule" />
          <h2>1,662 SF MIP-ready condo with an associated MIP license.</h2>
          <div className="bp-spec-grid" style={{ marginTop: 40 }}>
            {KEY_FACTS.map(([label, value]) => (
              <div key={label} className="bp-spec-cell">
                <p className="bp-spec-label">{label}</p>
                <p className="bp-spec-value">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW + HIGHLIGHTS */}
      <section className="bp-section bp-section-off">
        <div className="bp-wrap">
          <p className="bp-section-label">Property Overview</p>
          <div className="bp-rule" />
          <p className="bp-lead">A 1,662 SF commercial condominium in Floyd Hill Business Park, just off U.S. Highway 40 between I-70 Exits 247 and 248. The offering combines the real estate, an existing MIP-ready production buildout, and an associated Colorado MIP manufacturing license. The suite is built out, powered, and wired for MIP extraction and processing equipment. Equipment shown in the brochure is not included in the sale.</p>
          <ul className="fh-list">
            {HIGHLIGHTS.map((h) => <li key={h}>{h}</li>)}
          </ul>
        </div>
      </section>

      {/* PHOTOS */}
      <section className="bp-section">
        <div className="bp-wrap">
          <p className="bp-section-label">Photos</p>
          <div className="bp-rule" />
          <h2>Inside Unit D-106.</h2>
          <div className="fh-gallery">
            {GALLERY.map(([src, cap]) => (
              <figure key={src}>
                <img src={src} alt={cap} loading="lazy" />
                <figcaption>{cap}</figcaption>
              </figure>
            ))}
          </div>
          <p className="fh-disc" style={{ marginTop: 20 }}>Equipment shown in these photographs is not included in the sale.</p>
        </div>
      </section>

      {/* BUILDING & AREA */}
      <section className="bp-section">
        <div className="bp-wrap">
          <p className="bp-section-label">Building &amp; Area</p>
          <div className="bp-rule" />
          <h2>The building.</h2>
          <div className="bp-spec-grid" style={{ marginTop: 40 }}>
            {BUILDING.map(([label, value]) => (
              <div key={label} className="bp-spec-cell">
                <p className="bp-spec-label">{label}</p>
                <p className="bp-spec-value">{value}</p>
              </div>
            ))}
          </div>
          <p className="bp-extra" style={{ marginTop: 28 }}><strong>Access.</strong> Near I-70 between Exits 247 and 248, with access to Evergreen, Floyd Hill, and the western Denver mountain corridor.</p>
        </div>
      </section>

      {/* DEMOGRAPHICS */}
      <section className="bp-section bp-section-off">
        <div className="bp-wrap">
          <p className="bp-section-label">Demographics</p>
          <div className="bp-rule" />
          <h2>Floyd Hill / Evergreen trade area.</h2>
          <table className="fh-demo">
            <thead>
              <tr><th></th><th>1 Mile</th><th>3 Miles</th><th>5 Miles</th></tr>
            </thead>
            <tbody>
              {DEMO.map((row) => (
                <tr key={row[0]}><td>{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td><td>{row[3]}</td></tr>
              ))}
            </tbody>
          </table>
          <p className="fh-disc">Equipment and personal property shown in the brochure are not included in the sale unless specifically agreed in writing. Any associated MIP manufacturing license is subject to applicable state and local approval and transfer requirements. Demographic figures reproduced from the supplied 2026 American Community Survey (ACS) marketing material. Buyer should independently verify property, licensing, zoning, association, and other material information.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bp-section bp-section-navy">
        <div className="bp-wrap bp-cta-block">
          <h2 className="bp-white">Interested in Unit D-106?</h2>
          <p className="bp-muted-white">Read the full brochure or get Gino on the phone. $250,000, 1,662 SF, MIP-ready, with an associated MIP license. Equipment not included.</p>
          <div className="bp-cta-row">
            <a href={BROCHURE} target="_blank" rel="noreferrer" className="bp-btn-yellow">View Brochure (PDF)</a>
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
