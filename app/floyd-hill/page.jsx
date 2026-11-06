// app/floyd-hill/page.jsx — Floyd Hill Business Park listing detail (repositioned)
import { bpStyles, BrokerNav, BrokerFooter, CAL, EMAIL } from '../broker-programs/shared'

const BROCHURE = '/listings/floyd-hill-brochure.pdf'

export const metadata = {
  title: 'Floyd Hill Business Park, Unit D-106 | Built-Out Production & Lab Condo | $250,000 | Acoma Capital Partners',
  description: '1,662 SF built-out production and lab condominium for sale at 35715 U.S. Highway 40, Unit D-106, Evergreen, CO. $250,000 on the I-70 mountain corridor. Suited to botanical extraction, testing labs, cosmetics compounding, and small-scale distilling or roasting. Equipment not included.',
  alternates: { canonical: 'https://www.acomacapitalpartners.com/floyd-hill' },
  openGraph: {
    title: 'Floyd Hill Business Park, Unit D-106 | Acoma Capital Partners',
    description: '1,662 SF built-out production and lab condo in Evergreen, CO. $250,000. Equipment not included.',
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
.fh-ops { display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:20px; margin-top:40px; }
.fh-op { border:1px solid #e4e8f0; border-top:4px solid #F6D200; border-radius:6px; overflow:hidden; background:#fff; }
.fh-op .imgwrap { position:relative; }
.fh-op img { width:100%; height:180px; object-fit:cover; display:block; }
.fh-op .tag { position:absolute; top:10px; left:10px; background:#fff; color:#202A54; font-size:10px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; padding:4px 8px; }
.fh-op .body { padding:16px 18px; }
.fh-op h3 { font-size:17px; color:#202A54; margin-bottom:6px; }
.fh-op p { font-size:13.5px; color:#555; line-height:1.55; }
.fh-note { margin-top:22px; background:#f0f3f8; border-left:3px solid #F6D200; padding:12px 16px; font-size:13.5px; color:#44506a; line-height:1.55; }
`

const KEY_FACTS = [
  ['Asking Price', '$250,000'],
  ['Unit Size', '1,662 SF'],
  ['Price / SF', '$150'],
  ['Property Type', 'Commercial Condo'],
  ['Clear Height', '12 ft'],
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
  'Built-out production and lab space, powered for heavy extraction and processing equipment (specifications available on verification)',
  'Stainless prep area and 12-foot clear height',
  'Secured, paved outdoor yard behind the unit (rights to be verified)',
  'Direct I-70 mountain-corridor access between Exits 247 and 248',
  'Affluent trade area, average household income above $200K within one mile',
  'An associated Colorado MIP manufacturing license is available to a qualified cannabis buyer, subject to state and local approval',
]

const OPERATORS = [
  ['/listings/fh-use-botanical.jpg', 'Botanical & nutraceutical extraction', 'Essential oils, herbal and adaptogen tinctures, functional-mushroom extracts.'],
  ['/listings/fh-use-lab.jpg', 'Analytical & testing lab', 'Environmental, water, soil, and materials testing.'],
  ['/listings/fh-use-cosmetics.jpg', 'Cosmetics, fragrance & personal care', 'Small-batch compounding and private-label manufacturing.'],
  ['/listings/fh-use-distillery.jpg', 'Craft distilling or coffee roasting', 'Wholesale production. Public tasting or cafe would need a separate zoning review.'],
]

const DEMO = [
  ['Total population', '457', '2,706', '7,503'],
  ['Total households', '201', '1,086', '3,023'],
  ['Average age', '47', '46', '47'],
  ['Average HH income', '$204,050', '$227,946', '$217,213'],
  ['Average home value', '$961,654', '$1,151,302', '$1,132,836'],
]

const GALLERY = [
  ['/listings/fh-office-views.jpg', 'Office with corridor and mountain views'],
  ['/listings/fh-break-room.jpg', 'Break room'],
  ['/listings/fh-front-office.jpg', 'Front office'],
  ['/listings/fh-yard.jpg', 'Secured outdoor yard and mountain setting'],
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
          <p className="bp-eyebrow" style={{ color: '#F6D200' }}>Built-Out Production &amp; Lab Condo For Sale · Evergreen, CO</p>
          <h1 className="bp-h1" style={{ fontSize: 'clamp(40px,6vw,76px)' }}>Floyd Hill<br />Business Park.</h1>
          <p className="bp-hero-sub">35715 U.S. Highway 40, Building D, Unit D-106, Evergreen, CO 80439. A 1,662 SF built-out production and lab condominium on the I-70 mountain corridor, powered for heavy extraction and processing equipment. $250,000. Equipment is not included.</p>
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
          <h2>A built-out production and lab condo for specialized operators.</h2>
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
          <p className="bp-lead">A 1,662 SF commercial condominium in Floyd Hill Business Park, just off U.S. Highway 40 between I-70 Exits 247 and 248. Move into a space already built out for production and lab work, with a stainless prep area, 12-foot clear height, and a secured paved yard, instead of starting from raw commercial space. An associated Colorado MIP manufacturing license is available to a qualified cannabis buyer, subject to state and local approval. Equipment shown in the brochure is not included in the sale.</p>
          <ul className="fh-list">
            {HIGHLIGHTS.map((h) => <li key={h}>{h}</li>)}
          </ul>
        </div>
      </section>

      {/* BUILT FOR THESE OPERATORS */}
      <section className="bp-section">
        <div className="bp-wrap">
          <p className="bp-section-label">Built For These Operators</p>
          <div className="bp-rule" />
          <h2>Who this space fits.</h2>
          <p className="bp-lead" style={{ marginTop: 18 }}>The buildout suits specialized production and lab users. The images below are representative of each use, not photographs of this unit.</p>
          <div className="fh-ops">
            {OPERATORS.map(([src, title, desc]) => (
              <div key={title} className="fh-op">
                <div className="imgwrap">
                  <img src={src} alt={title + ' (representative)'} loading="lazy" />
                  <span className="tag">Representative</span>
                </div>
                <div className="body">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="fh-note">Buyers should confirm their intended use with Clear Creek County and the condominium association before relying on it. Nothing here guarantees that any use is permitted.</p>
        </div>
      </section>

      {/* PHOTOS */}
      <section className="bp-section bp-section-off">
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
          <p className="fh-disc">Equipment and personal property shown in the brochure are not included in the sale unless specifically agreed in writing. Any associated MIP manufacturing license is subject to applicable state and local approval and transfer requirements. Demographic figures reproduced from the supplied 2026 American Community Survey (ACS) marketing material. Buyer should independently verify property, electrical capacity, yard rights, licensing, zoning, association, and other material information.</p>
          <p className="fh-disc"><strong style={{ color: '#666' }}>Use of Automated Tools.</strong> Acoma Capital Partners, Inc. may use automated tools, including artificial intelligence, to assist in processing, evaluating, underwriting, marketing, wholesaling real estate properties and lending applications. These tools support but do not replace human review. Any outputs are preliminary only. Final decisions rest solely with Acoma Capital Partners. The four operator images above are AI-generated representative examples and do not depict the unit.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bp-section bp-section-navy">
        <div className="bp-wrap bp-cta-block">
          <h2 className="bp-white">Interested in Unit D-106?</h2>
          <p className="bp-muted-white">Read the full brochure or get Gino on the phone. $250,000, 1,662 SF, built out for production and lab use on the I-70 corridor. Equipment not included.</p>
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
