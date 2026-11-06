// app/floyd-hill/page.jsx — Floyd Hill D-106 listing, brochure-styled
import { CAL, EMAIL } from '../broker-programs/shared'

const BROCHURE = '/listings/floyd-hill-brochure.pdf'

export const metadata = {
  title: 'Floyd Hill Business Park, Unit D-106 | Turnkey Production & Lab Condo | $250,000 | Acoma Capital Partners',
  description: 'Turnkey 1,662 SF production and lab condominium for sale at 35715 U.S. Highway 40, Unit D-106, Evergreen, CO. $250,000 on the I-70 mountain corridor. Heavy power, stainless prep area, secured yard. Suited to botanical extraction, testing labs, cosmetics, and craft distilling or roasting. Equipment not included.',
  alternates: { canonical: 'https://www.acomacapitalpartners.com/floyd-hill' },
  openGraph: {
    title: 'Floyd Hill Business Park, Unit D-106 | Acoma Capital Partners',
    description: 'Turnkey 1,662 SF production and lab condo in Evergreen, CO. $250,000. Equipment not included.',
    url: 'https://www.acomacapitalpartners.com/floyd-hill',
    images: ['/listings/floyd-hill.jpg'],
  },
}

const SPECS = [
  ['1,662 SF', 'Unit size'],
  ['29,272 SF', 'Building'],
  ['3.09 ac', 'Site area'],
  ['12 ft', 'Clear height'],
  ['1997', 'Built · Reno 2010'],
  ['PD', 'Zoning'],
]

const OPERATORS = [
  ['/listings/fh-use-botanical.jpg', 'Botanical & nutraceutical extraction', 'Essential oils, herbal and adaptogen tinctures, functional-mushroom extracts.'],
  ['/listings/fh-use-lab.jpg', 'Analytical & testing lab', 'Environmental, water, soil, and materials testing.'],
  ['/listings/fh-use-cosmetics.jpg', 'Cosmetics, fragrance & personal care', 'Small-batch compounding and private-label manufacturing.'],
  ['/listings/fh-use-distillery.jpg', 'Craft distilling or coffee roasting', 'Wholesale production. Public tasting or cafe would need a separate zoning review.'],
]

const PARTICULARS = [
  ['Address', '35715 U.S. Hwy 40, Bldg D, Unit D-106, Evergreen, CO'],
  ['Property type', 'Commercial condominium'],
  ['Offering price', '$250,000 · $150/SF'],
  ['Unit size', '1,662 SF'],
  ['Building', '29,272 SF on 3.09 acres'],
  ['Year built', '1997, renovated 2010'],
  ['Class / clear', 'Class B / 12 ft'],
  ['Zoning', 'PD, Clear Creek County'],
  ['Parking', 'Ample on-site surface'],
]

const css = `
#fhb { --navy:#202A54; --gold:#F6D200; --pale:#F0F3F8; --ink:#2b3042; --muted:#6b7488; --line:#e2e7f0;
  color:var(--ink); background:#fff; font-family:var(--font-inter),-apple-system,system-ui,sans-serif;
  -webkit-font-smoothing:antialiased; line-height:1.6; }
#fhb * { box-sizing:border-box; }
#fhb a { color:inherit; }
#fhb .wrap { max-width:1120px; margin:0 auto; padding:0 28px; }
#fhb h1,#fhb h2,#fhb h3,#fhb .stat-num,#fhb .spec-num { font-family:var(--font-poppins),var(--font-inter),sans-serif; }

/* top bar */
#fhb .topbar { background:var(--navy); }
#fhb .topbar .wrap { display:flex; align-items:center; justify-content:space-between; height:62px; }
#fhb .topbar img { height:30px; width:auto; display:block; }
#fhb .forsale { border:1.5px solid var(--gold); color:var(--gold); font-size:11px; font-weight:700;
  letter-spacing:0.22em; text-transform:uppercase; padding:7px 14px; border-radius:2px; }

/* hero */
#fhb .hero-img { width:100%; height:clamp(260px,40vw,500px); object-fit:cover; display:block; }
#fhb .hero { background:var(--navy); color:#fff; padding:52px 0 46px; }
#fhb .eyebrow { color:var(--gold); font-size:12px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; margin-bottom:20px; }
#fhb h1 { font-size:clamp(30px,4.6vw,52px); line-height:1.1; font-weight:600; margin:0 0 20px; letter-spacing:-0.01em; }
#fhb .hero-sub { color:#b9c0d6; font-size:clamp(15px,1.7vw,18px); max-width:720px; margin:0 0 30px; }
#fhb .cta-row { display:flex; flex-wrap:wrap; gap:12px; margin-bottom:44px; }
#fhb .btn { display:inline-block; font-size:14px; font-weight:600; letter-spacing:0.02em; padding:13px 26px;
  border-radius:3px; text-decoration:none; transition:opacity .15s; }
#fhb .btn:hover { opacity:.88; }
#fhb .btn-gold { background:var(--gold); color:var(--navy); }
#fhb .btn-ghost { border:1.5px solid rgba(255,255,255,.55); color:#fff; }
#fhb .btn-green { background:#2C9143; color:#fff; }
#fhb .stats { display:grid; grid-template-columns:repeat(3,1fr); gap:0; border-top:1px solid rgba(255,255,255,.18); }
#fhb .stat { padding:26px 24px 4px; border-right:1px solid rgba(255,255,255,.18); }
#fhb .stat:last-child { border-right:0; }
#fhb .stat-num { color:var(--gold); font-size:clamp(26px,3.4vw,38px); font-weight:600; line-height:1; }
#fhb .stat-lab { color:#9aa3bd; font-size:11px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; margin-top:11px; }

/* sections */
#fhb section { padding:68px 0; }
#fhb .pale { background:var(--pale); }
#fhb .snum { color:var(--muted); font-size:13px; font-weight:700; letter-spacing:0.14em; }
#fhb h2 { font-size:clamp(25px,3vw,34px); font-weight:600; color:var(--navy); margin:12px 0 0; letter-spacing:-0.01em; }
#fhb .accent { width:52px; height:4px; background:var(--gold); margin:18px 0 26px; }
#fhb .lead { font-size:17px; color:#4a5165; max-width:820px; margin:0; }

/* spec grid */
#fhb .spec-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; margin-top:34px; }
#fhb .spec { background:var(--pale); border-top:3px solid var(--gold); padding:22px 22px 20px; }
#fhb .pale .spec { background:#fff; }
#fhb .spec-num { color:var(--navy); font-size:24px; font-weight:600; line-height:1; }
#fhb .spec-lab { color:var(--muted); font-size:11px; font-weight:700; letter-spacing:0.13em; text-transform:uppercase; margin-top:10px; }

/* photo pair */
#fhb .photos2 { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:34px; }
#fhb .ph { position:relative; overflow:hidden; border-radius:4px; }
#fhb .ph img { width:100%; height:300px; object-fit:cover; display:block; }
#fhb .ph .cap { position:absolute; left:0; bottom:0; background:var(--navy); color:#fff; font-size:10.5px;
  font-weight:700; letter-spacing:0.14em; text-transform:uppercase; padding:7px 13px; }

/* callout */
#fhb .callout { margin-top:28px; background:var(--pale); border-left:3px solid var(--gold); padding:15px 20px;
  font-size:14px; color:#4a5165; }
#fhb .pale .callout { background:#fff; }

/* operator cards */
#fhb .ops { display:grid; grid-template-columns:1fr 1fr; gap:18px; margin-top:34px; }
#fhb .op { background:#fff; border:1px solid var(--line); border-radius:5px; overflow:hidden; }
#fhb .op img { width:100%; height:200px; object-fit:cover; display:block; }
#fhb .op .body { padding:18px 20px 20px; }
#fhb .op h3 { font-size:17px; font-weight:600; color:var(--navy); margin:0 0 7px; }
#fhb .op p { font-size:14px; color:var(--muted); margin:0; line-height:1.55; }

/* particulars table */
#fhb .tbl { width:100%; border-collapse:collapse; margin-top:30px; font-size:15px; }
#fhb .tbl tr { border-bottom:1px solid var(--line); }
#fhb .tbl td { padding:15px 16px; vertical-align:top; }
#fhb .tbl td:first-child { color:var(--muted); font-size:12px; font-weight:700; letter-spacing:0.1em;
  text-transform:uppercase; width:200px; white-space:nowrap; }
#fhb .tbl td:last-child { color:var(--navy); font-weight:600; }
#fhb .tbl tr:nth-child(odd) { background:var(--pale); }

/* footer */
#fhb footer { background:var(--navy); color:#fff; padding:58px 0 46px; }
#fhb .f-logo { height:30px; width:auto; display:block; margin-bottom:34px; }
#fhb .broker { display:flex; align-items:center; gap:20px; flex-wrap:wrap; }
#fhb .broker img.head { width:84px; height:84px; border-radius:50%; object-fit:cover; object-position:center top; border:2px solid var(--gold); }
#fhb .broker .name { font-family:var(--font-poppins),sans-serif; font-size:24px; font-weight:600; }
#fhb .broker .role { color:var(--gold); font-size:11px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; margin-top:5px; }
#fhb .contact { margin-top:22px; display:flex; flex-wrap:wrap; gap:8px 28px; font-size:15px; color:#cfd5e6; }
#fhb .contact a { text-decoration:none; }
#fhb .contact b { color:var(--gold); font-weight:700; margin-right:7px; }
#fhb .f-cta { margin-top:30px; display:flex; flex-wrap:wrap; gap:12px; }
#fhb .fine { margin-top:40px; padding-top:26px; border-top:1px solid rgba(255,255,255,.16);
  font-size:11.5px; line-height:1.7; color:#8b93ad; max-width:960px; }
#fhb .fine p { margin:0 0 12px; }
#fhb .fine b { color:#aab2cc; }

@media (max-width:720px){
  #fhb .spec-grid{ grid-template-columns:repeat(2,1fr); }
  #fhb .photos2{ grid-template-columns:1fr; }
  #fhb .ops{ grid-template-columns:1fr; }
  #fhb .stats{ grid-template-columns:1fr; }
  #fhb .stat{ border-right:0; border-bottom:1px solid rgba(255,255,255,.18); padding:20px 0 16px; }
  #fhb .tbl td:first-child{ width:130px; white-space:normal; }
}
`

export default function FloydHill() {
  return (
    <div id="fhb">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* top bar */}
      <div className="topbar">
        <div className="wrap">
          <a href="/" aria-label="Acoma Capital Partners home"><img src="/acoma-logo-white.png" alt="Acoma Capital Partners" /></a>
          <span className="forsale">For Sale</span>
        </div>
      </div>

      {/* hero image */}
      <img className="hero-img" src="/listings/floyd-hill.jpg" alt="Floyd Hill Business Park, 35715 U.S. Highway 40, Evergreen, Colorado" />

      {/* hero band */}
      <div className="hero">
        <div className="wrap">
          <p className="eyebrow">Floyd Hill Business Park · Evergreen, Colorado</p>
          <h1>Turnkey Production &amp; Lab Condo<br />on the I-70 Mountain Corridor</h1>
          <p className="hero-sub">A finished production and lab condominium with heavy power, a stainless prep area, and a secured yard. Unit D-106, 35715 U.S. Highway 40.</p>
          <div className="cta-row">
            <a className="btn btn-gold" href={BROCHURE} target="_blank" rel="noreferrer">View Brochure (PDF)</a>
            <a className="btn btn-ghost" href={CAL} target="_blank" rel="noreferrer">Book a Call</a>
          </div>
          <div className="stats">
            <div className="stat"><div className="stat-num">$250,000</div><div className="stat-lab">Offering Price</div></div>
            <div className="stat"><div className="stat-num">1,662 SF</div><div className="stat-lab">Condo Unit</div></div>
            <div className="stat"><div className="stat-num">$150/SF</div><div className="stat-lab">Price / SF</div></div>
          </div>
        </div>
      </div>

      {/* 01 */}
      <section>
        <div className="wrap">
          <p className="snum">01</p>
          <h2>A space that is ready to work</h2>
          <div className="accent" />
          <p className="lead">Unit D-106 fronts U.S. Highway 40 at the I-70 interchange, between Exits 247 and 248, with straightforward access east to the Denver metro and west to the mountain resort markets. Move into a space already built out for production and lab work, with a stainless prep area, 12-foot clear height, and a secured paved yard, instead of starting from raw commercial space.</p>
          <div className="spec-grid">
            {SPECS.map(([n, l]) => (
              <div className="spec" key={l}><div className="spec-num">{n}</div><div className="spec-lab">{l}</div></div>
            ))}
          </div>
          <div className="photos2">
            <div className="ph"><img src="/listings/fh-office-views.jpg" alt="Office with mountain view" /><span className="cap">Office with mountain view</span></div>
            <div className="ph"><img src="/listings/fh-break-room.jpg" alt="Break room" /><span className="cap">Break room</span></div>
          </div>
          <p className="callout">An associated Colorado MIP manufacturing license is available to a qualified cannabis buyer, subject to state and local approval. Equipment is not included.</p>
        </div>
      </section>

      {/* 02 */}
      <section className="pale">
        <div className="wrap">
          <p className="snum">02</p>
          <h2>Built for these operators</h2>
          <div className="accent" />
          <p className="lead">The buildout suits specialized production and lab users. The images below are representative of each use, not photographs of this unit.</p>
          <div className="ops">
            {OPERATORS.map(([src, t, d]) => (
              <div className="op" key={t}>
                <img src={src} alt={t + ' (representative)'} loading="lazy" />
                <div className="body"><h3>{t}</h3><p>{d}</p></div>
              </div>
            ))}
          </div>
          <p className="callout">Buyers should confirm their intended use with Clear Creek County and the condominium association before relying on it.</p>
        </div>
      </section>

      {/* 03 */}
      <section>
        <div className="wrap">
          <p className="snum">03</p>
          <h2>The particulars</h2>
          <div className="accent" />
          <table className="tbl"><tbody>
            {PARTICULARS.map(([k, v]) => (
              <tr key={k}><td>{k}</td><td>{v}</td></tr>
            ))}
          </tbody></table>
          <p className="callout">An associated Colorado MIP manufacturing license is available to a qualified cannabis buyer, subject to state and local approval and transfer. Equipment shown is not included.</p>
        </div>
      </section>

      {/* 04 */}
      <section className="pale">
        <div className="wrap">
          <p className="snum">04</p>
          <h2>On the corridor</h2>
          <div className="accent" />
          <p className="lead">The property sits on the primary route between Denver and Colorado&apos;s high country, on U.S. 40 at the I-70 interchange, Exits 247 and 248. East leads to the Denver metro, west to the mountain and resort markets. For operators, the draw is corridor logistics between the metro and the high country.</p>
          <div className="photos2">
            <div className="ph"><img src="/listings/fh-corridor.jpg" alt="Corridor position map showing Unit D-106 relative to the I-70 corridor" loading="lazy" /><span className="cap">Corridor position</span></div>
            <div className="ph"><img src="/listings/fh-yard.jpg" alt="Secured outdoor yard" loading="lazy" /><span className="cap">Secured outdoor yard</span></div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer>
        <div className="wrap">
          <img className="f-logo" src="/acoma-logo-white.png" alt="Acoma Capital Partners" />
          <div className="broker">
            <img className="head" src="/listings/gino-headshot.jpg" alt="Gino Rodrigues" />
            <div>
              <div className="name">Gino Rodrigues</div>
              <div className="role">Responsible Broker · Acoma Capital Partners</div>
            </div>
          </div>
          <div className="contact">
            <span><b>P</b><a href="tel:7207721327">720-772-1327</a></span>
            <span><b>E</b><a href={EMAIL}>ginorod@acomacapitalpartners.com</a></span>
            <span><b>W</b><a href="https://www.acomacapitalpartners.com">www.acomacapitalpartners.com</a></span>
          </div>
          <div className="f-cta">
            <a className="btn btn-gold" href={BROCHURE} target="_blank" rel="noreferrer">View Brochure (PDF)</a>
            <a className="btn btn-green" href={CAL} target="_blank" rel="noreferrer">Book a Call</a>
          </div>
          <div className="fine">
            <p>Acoma Capital Partners serves as listing broker and does not finance, fund, or purchase the asset.</p>
            <p><b>Disclaimer.</b> Prepared for marketing purposes from information believed reliable. No representation or warranty as to accuracy or completeness. All measurements, zoning, permitted uses, condition, association terms, utilities and electrical capacity, income, licensing, and demographic information must be independently verified by the buyer and its advisors. Any associated marijuana or MIP manufacturing license is subject to Colorado state and local approval and transfer, and nothing herein guarantees transfer. Equipment and personal property shown are not included unless agreed in writing. Not an offer to sell or a solicitation where prohibited by law.</p>
            <p><b>Use of Automated Tools.</b> Acoma Capital Partners, Inc. may use automated tools, including artificial intelligence, to assist in processing, evaluating, underwriting, marketing, wholesaling real estate properties and lending applications. These tools support but do not replace human review. Any outputs are preliminary only. Final decisions rest solely with Acoma Capital Partners. The four category images in Section 02 are AI-generated, representative examples and do not depict the unit.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
