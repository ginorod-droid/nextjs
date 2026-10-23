// app/krameria/page.jsx — 3343-3345 N Krameria St duplex listing detail
import { bpStyles, BrokerNav, BrokerFooter, CAL, EMAIL } from '../broker-programs/shared'

const FLYER = '/listings/krameria-flyer.pdf'

export const metadata = {
  title: '3343-3345 N Krameria St, North Park Hill Duplex | For Sale $579,000 | Acoma Capital Partners',
  description: 'Brick side-by-side duplex at 3343-3345 N Krameria St, Denver, CO 80207. $579,000. 6 bed, 3 bath, 1,960 SF, two units. The larger unit is vacant now; the front unit delivers vacant January 2027. Value-add subdivision play.',
  alternates: { canonical: 'https://www.acomacapitalpartners.com/krameria' },
  openGraph: {
    title: '3343-3345 N Krameria St, North Park Hill Duplex | Acoma Capital Partners',
    description: 'Brick duplex in North Park Hill, Denver. $579,000. Value-add; large unit vacant now, front unit vacant January 2027.',
    url: 'https://www.acomacapitalpartners.com/krameria',
    images: ['/listings/krameria.jpg'],
  },
}

const krStyles = `
.kr-photo { width:100%; height:clamp(260px,42vw,520px); object-fit:cover; object-position:center 42%; display:block; }
.kr-list { list-style:none; margin:18px 0 0; padding:0; }
#bp .kr-list li { position:relative; padding:0 0 12px 28px; font-size:16px; color:#555; line-height:1.6; }
#bp .kr-list li::before { content:''; position:absolute; left:0; top:9px; width:9px; height:9px; background:#2C9143; }
.kr-comp { width:100%; border-collapse:collapse; margin-top:28px; font-size:16px; }
.kr-comp th, .kr-comp td { text-align:left; padding:14px 16px; border-bottom:1px solid #e4e8f0; }
.kr-comp th { font-size:11px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#8a93a3; }
.kr-comp td:first-child { font-weight:700; color:#202A54; }
.kr-comp td { color:#555; }
.kr-comp td.pr { font-weight:900; color:#202A54; white-space:nowrap; }
.kr-comp td.ctx { color:#8a93a3; font-weight:400; }
.kr-comp tr.subj td { background:#f4f6f9; }
.kr-tag { display:inline-block; font-size:11px; font-weight:800; letter-spacing:0.04em; padding:4px 10px; color:#fff; }
.kr-sold { background:#2C9143; }
.kr-listed { background:#9aa2bd; }
#bp .kr-cap { position:relative; margin-top:32px; padding:20px 0 0; font-size:16px; color:#334; line-height:1.7; max-width:820px; }
#bp .kr-cap::before { content:''; position:absolute; top:0; left:0; width:48px; height:4px; background:#1179EC; }
.kr-disc { margin-top:24px; font-size:13px; color:#999; line-height:1.7; max-width:900px; }

.kr-hero { position:relative; overflow:hidden; background:#202A54; }
.kr-hero-bg { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center 42%; }
.kr-hero-shade { position:absolute; inset:0; background:linear-gradient(95deg, rgba(14,18,38,0.96) 0%, rgba(14,18,38,0.88) 44%, rgba(14,18,38,0.55) 72%, rgba(14,18,38,0.30) 100%); }
.kr-hero-inner { position:relative; padding:112px 40px 92px; }
.kr-hero-h1 { font-weight:900; font-size:clamp(44px,7vw,92px); line-height:0.92; letter-spacing:-0.035em; color:#fff; text-transform:uppercase; margin:26px 0 24px; }
.kr-hero-sub { font-size:19px; color:rgba(255,255,255,0.82); max-width:600px; line-height:1.6; margin-bottom:38px; }
.kr-figs { display:flex; gap:48px; margin-bottom:42px; flex-wrap:wrap; }
.kr-figs > div { display:flex; flex-direction:column; }
.kf-l { font-weight:600; font-size:12px; letter-spacing:0.14em; text-transform:uppercase; color:rgba(255,255,255,0.5); margin-bottom:10px; }
.kf-v { font-weight:900; font-size:clamp(30px,3.6vw,42px); color:#fff; line-height:1; letter-spacing:-0.02em; }
.kf-gold { color:#F6D200; }
@media(max-width:820px){
  .kr-hero-inner { padding:64px 20px 56px; }
  .kr-hero-shade { background:linear-gradient(180deg, rgba(14,18,38,0.72) 0%, rgba(14,18,38,0.90) 100%); }
  .kr-figs { gap:28px; }
}
`

const KEY_FACTS = [
  ['Asking Price', '$579,000'],
  ['Configuration', '6 BD / 3 BA'],
  ['Building Size', '1,960 SF'],
  ['Units', '2 · side-by-side'],
  ['Lot', '6,250 SF (~0.14 ac)'],
  ['Possession', 'Large unit now; front 1/15/27'],
]

const NUMBERS = [
  ['List Price', '$579,000'],
  ['Subdivided Value (est.)', '$980,000'],
  ['Projected Upside (est.)', '$329,700'],
]

const HIGHLIGHTS = [
  'Brick side-by-side duplex, two units on one parcel',
  'The larger unit is vacant now; the front unit has a signed move-out for January 15, 2027',
  '2BR/1BA side leased at $1,600/mo, 4BR/2BA side with finished basement',
  'Value-add: subdivide and sell each side separately, the way the block already does it',
  'North Park Hill, close to City Park and the Park Hill commercial strip',
  'Acoma Capital Partners represents the seller',
]

const COMPS = [
  ['3343-3345 N Krameria St', 'Subject, whole duplex', '6/3', '1,960', '$579,000', 'subj'],
  ['3353 N Krameria St', 'Whole duplex, same block', '4/2', '2,064', '$579,000', 'sold'],
  ['3505 Holly St', 'Half duplex, one side', '2/1', '850', '$430,000', 'sold'],
  ['3323 Poplar St', 'Half duplex, one side', '4/2', '2,160', '$620,000', 'listed'],
]

const TAG_TEXT = { subj: 'LIST', sold: 'SOLD', listed: 'LISTED' }
const TAG_CLS = { subj: 'kr-listed', sold: 'kr-sold', listed: 'kr-listed' }

export default function Krameria() {
  return (
    <div id="bp">
      <style dangerouslySetInnerHTML={{ __html: bpStyles + krStyles }} />

      <div className="bp-colorbar">
        <span style={{ background: '#2C9143' }} /><span style={{ background: '#202A54' }} />
        <span style={{ background: '#1179EC' }} /><span style={{ background: '#F6D200' }} />
      </div>

      <BrokerNav />

      {/* HERO */}
      <section className="kr-hero">
        <img className="kr-hero-bg" src="/listings/krameria.jpg" alt="Brick duplex at 3343-3345 N Krameria Street, North Park Hill, Denver, Colorado" />
        <div className="kr-hero-shade" />
        <div className="bp-wrap kr-hero-inner">
          <p className="bp-eyebrow" style={{ color: '#F6D200' }}>Value-Add Duplex · North Park Hill, Denver</p>
          <h1 className="kr-hero-h1">Buy one duplex.<br />Sell two homes.</h1>
          <div className="kr-figs">
            <div><span className="kf-l">List Price</span><span className="kf-v">$579,000</span></div>
            <div><span className="kf-l">Subdivided, est.</span><span className="kf-v">$980,000</span></div>
            <div><span className="kf-l">Upside, est.</span><span className="kf-v kf-gold">$329,700</span></div>
          </div>
          <div className="bp-cta-row">
            <a href={FLYER} target="_blank" rel="noreferrer" className="bp-btn-yellow">View Flyer (PDF)</a>
            <a href={CAL} target="_blank" rel="noreferrer" className="bp-btn-ghost-white">Book a Call</a>
          </div>
        </div>
      </section>

      {/* OVERVIEW + HIGHLIGHTS */}
      <section className="bp-section bp-section-tight">
        <div className="bp-wrap">
          <p className="bp-section-label">Property Overview</p>
          <div className="bp-rule" />
          <p className="bp-lead">A brick side-by-side duplex on a quiet North Park Hill block. At the list price it works as a whole-building buy. The value-add is subdivision. Neighboring duplexes are being sold by the side, and on that basis the two units support a combined value well above the list price.</p>
          <ul className="kr-list">
            {HIGHLIGHTS.map((h) => <li key={h}>{h}</li>)}
          </ul>
        </div>
      </section>

      {/* KEY FACTS */}
      <section className="bp-section bp-section-off">
        <div className="bp-wrap">
          <p className="bp-section-label">The Offering</p>
          <div className="bp-rule" />
          <h2>Brick duplex. The large unit is vacant now, and the front unit vacates January 2027.</h2>
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

      {/* THE UPSIDE */}
      <section className="bp-section">
        <div className="bp-wrap">
          <p className="bp-section-label">The Upside</p>
          <div className="bp-rule" />
          <h2>Buy as a duplex. Sell each side.</h2>
          <div className="bp-spec-grid" style={{ marginTop: 40 }}>
            {NUMBERS.map(([label, value]) => (
              <div key={label} className="bp-spec-cell">
                <p className="bp-spec-label">{label}</p>
                <p className="bp-spec-value">{value}</p>
              </div>
            ))}
          </div>
          <p className="bp-extra">Projected upside is the estimated subdivided value less the list price and an estimated $71,300 of moderate rehab. All figures are estimates and are not a guarantee of value or return.</p>
        </div>
      </section>

      {/* COMPS */}
      <section className="bp-section bp-section-off">
        <div className="bp-wrap">
          <p className="bp-section-label">Comparable Sales</p>
          <div className="bp-rule" />
          <h2>What the block is doing.</h2>
          <table className="kr-comp">
            <thead>
              <tr><th>Address</th><th>Basis</th><th>Bd/Ba</th><th>SF</th><th>Price</th><th>Status</th></tr>
            </thead>
            <tbody>
              {COMPS.map((row) => (
                <tr key={row[0]} className={row[5] === 'subj' ? 'subj' : ''}>
                  <td>{row[0]}</td>
                  <td className="ctx">{row[1]}</td>
                  <td>{row[2]}</td>
                  <td>{row[3]}</td>
                  <td className="pr">{row[4]}</td>
                  <td><span className={'kr-tag ' + TAG_CLS[row[5]]}>{TAG_TEXT[row[5]]}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="kr-cap">As a whole duplex it comps right at the list price. Sold side by side, the two units pencil near $980,000 combined.</p>
          <p className="kr-disc">Comparable sales are drawn from public and MLS-aggregator sources and include both closed sales and active listings, as noted. The subdivided exit assumes the duplex can be condominiumized or subdivided and each unit conveyed separately; a buyer should confirm zoning, platting, and association feasibility. Square footage per county records; unit details per seller. All figures are estimates to be independently verified.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bp-section bp-section-navy">
        <div className="bp-wrap bp-cta-block">
          <h2 className="bp-white">Interested in 3343-3345 N Krameria?</h2>
          <p className="bp-muted-white">Read the full flyer or get Gino on the phone. $579,000, two units, the large side vacant now and the front side vacant January 2027.</p>
          <div className="bp-cta-row">
            <a href={FLYER} target="_blank" rel="noreferrer" className="bp-btn-yellow">View Flyer (PDF)</a>
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
