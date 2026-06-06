// app/pueblo-parcel/page.jsx

export const metadata = {
  title: '10-Acre Commercial Parcel | I-25 Exit 104 | Pueblo, CO | Acoma Capital Partners',
  description: "10 acres for sale at I-25 Exit 104, Pueblo CO. Adjacent to TravelCenters of America & Love's Travel Stop. $2.5M, B-3 zoning.",
}

const CAL  = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09rs3O9rwu5VlkCzoqHWgwKnPa1cAivEx_mCwHugssbgmq6Kgc8NjBPUSvFlW-u82tAyBpePoI?gv=true'
const FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSdPUr1haWoLdK6vN8P_3KTRhNlZxv2bkWz6XV36KgusKnot1w/viewform'
const EMAIL = 'mailto:ginorod@acomacapitalpartners.com'

const infraItems = [
  { icon:'🛣️', title:'Interstate Access',    desc:'Direct I-25 on/off at Exit 104 — both northbound and southbound.' },
  { icon:'⚡', title:'Utilities Available',  desc:'City of Pueblo utilities accessible through existing corridor infrastructure.' },
  { icon:'🏙️', title:'B-3 Zoning',           desc:'Pinon Ridge Commercial Center. No rezonings required for most commercial uses.' },
  { icon:'🔧', title:'$114M CDOT Rebuild',   desc:'Diverging diamond interchange. Westbound alignment shifting now. Completion: Summer 2027.' },
  { icon:'📍', title:'Regional Position',    desc:"45 min south of Colorado Springs. 100 miles from Denver. Southern Colorado's logistics anchor." },
]

const uses = [
  'Quick-service or fast casual restaurant',
  'Convenience retail or fuel canopy',
  'Extended-stay or limited-service hotel',
  'Truck service center or fleet maintenance',
  'Commercial storage or logistics use',
  'Multi-tenant retail strip',
  'EV fleet charging station',
  'Drive-through or service-based retail',
]

export default function PuebloParcel() {
  return (
    <div id="pp2">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* ── 4-COLOR STRIPE ── */}
      <div className="p-colorbar">
        <span style={{background:'#2C9143'}} />
        <span style={{background:'#202A54'}} />
        <span style={{background:'#1179EC'}} />
        <span style={{background:'#F6D200'}} />
      </div>

      {/* ── NAV ── */}
      <nav className="p-nav">
        <div className="p-wrap p-nav-row">
          <a href="/" className="p-logo">ACOMA <span>CAPITAL PARTNERS</span></a>
          <div className="p-nav-links">
            <a href="/#services">Services</a>
            <a href="#project-info">The Property</a>
            <a href="#contact">Contact</a>
            <a href={CAL} target="_blank" rel="noreferrer" className="p-nav-cta">Book a Call</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="p-hero">
        <div className="p-wrap">
          <p className="p-eyebrow">Commercial Land · Pueblo, Colorado · I-25 Exit 104</p>
          <h1 className="p-h1">
            10 Acres.<br />
            Land <span className="p-yellow">That</span><br />
            Performs.
          </h1>
          <p className="p-hero-sub">
            Adjacent to TA TravelCenters &amp; Love&apos;s Travel Stop &nbsp;·&nbsp; B-3 Zoning &nbsp;·&nbsp; $114M CDOT Interchange Underway
          </p>
          <div className="p-cta-row">
            <a href="#project-info" className="p-btn-yellow">View Property Details</a>
            <a href={EMAIL} className="p-btn-ghost-white">Request Package</a>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="p-statsbar">
        {[['10','Acres'],['$2.5M','Asking Price'],['$250K','Per Acre'],['B-3','Zoning'],['I-25','Exit 104']].map(([n,l])=>(
          <div key={l} className="p-stat">
            <span className="p-stat-n">{n}</span>
            <span className="p-stat-l">{l}</span>
          </div>
        ))}
      </div>

      {/* ── THE OPPORTUNITY ── */}
      <section className="p-section" id="project-info">
        <div className="p-wrap">
          <p className="p-section-label">01 / The Opportunity</p>
          <div className="p-rule" />
          <h2>A Proven Corridor That Still Has Room.</h2>
          <p>This 10-acre parcel sits at one of Pueblo&apos;s most active commercial intersections — I-25 Exit 104 on the city&apos;s north end, directly adjacent to two major national travel center operators <strong>that together draw tens of thousands of visitors per month.</strong></p>
          <p>The surrounding corridor is no longer speculative. TravelCenters of America opened its Pueblo location at 1275 Drew Dix Parkway in December 2025, and Love&apos;s Travel Stop has operated at this exit for years. Both run 24 hours and serve commercial trucking, motorists, and regional traffic moving between Denver, Colorado Springs, and Pueblo&apos;s growing industrial base.</p>
          <p>At $250,000 per acre, this parcel is priced below comparable commercial land on the same corridor. The infrastructure is in place. The traffic is already there.</p>

          <div className="p-location-card">
            <div className="p-loc-header">
              <span className="p-loc-tag">Property Location</span>
              <div className="p-loc-address">I-25 Exit 104 · Drew Dix Parkway · Pueblo, CO 81008</div>
            </div>
            <div className="p-loc-body">
              <div className="p-loc-neighbor">
                <strong>TA TravelCenters — Pueblo</strong>
                1275 Drew Dix Pkwy &nbsp;·&nbsp; Opened December 2025
              </div>
              <div className="p-loc-neighbor">
                <strong>Love&apos;s Travel Stop #226</strong>
                6470 N. Elizabeth St. &nbsp;·&nbsp; Open 24 Hours
              </div>
              <div className="p-loc-neighbor">
                <strong>Regional Position</strong>
                45 min south of Colorado Springs &nbsp;·&nbsp; 100 miles from Denver &nbsp;·&nbsp; Pinon Ridge Commercial Center &nbsp;·&nbsp; B-3 Zoning
              </div>
            </div>
          </div>

          <div className="p-cta-row" style={{marginTop:'48px'}}>
            <a href={EMAIL} className="p-btn-green">Request the Property Package</a>
          </div>
        </div>
      </section>

      {/* ── ANCHOR NEIGHBORS ── */}
      <section className="p-section p-section-navy">
        <div className="p-wrap">
          <p className="p-section-label p-label-yellow">02 / Anchor Neighbors</p>
          <div className="p-rule p-rule-yellow" />
          <h2 className="p-white">Two National Operators. Already There.</h2>
          <p className="p-muted-white">Both facilities are operational, open 24 hours, and generating consistent daily traffic directly past this parcel.</p>

          <div className="p-tenant-grid">
            <div className="p-tenant-card">
              <div className="p-tenant-name">TravelCenters of America — Pueblo</div>
              <p className="p-tenant-body">Opened <strong>December 2025</strong> at 1275 Drew Dix Pkwy. <strong>210 truck parking spaces</strong>, 8 diesel lanes, 16 gasoline lanes. Full dining: <strong>Black Bear Diner, Sbarro, Del Taco, Bojangles.</strong> On-site truck service, showers, laundry, driver&apos;s lounge, CAT Scale.</p>
            </div>
            <div className="p-tenant-card">
              <div className="p-tenant-name">Love&apos;s Travel Stop #226</div>
              <p className="p-tenant-body">Established anchor at <strong>6470 N. Elizabeth St.</strong>, directly at I-25 Exit 104. <strong>Open 24 hours.</strong> Full-service truck stop with fuel, convenience retail, and Truck Care. A proven, long-standing traffic generator at this exact interchange.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATION & INFRASTRUCTURE ── */}
      <section className="p-section">
        <div className="p-wrap">
          <p className="p-section-label">03 / Location &amp; Infrastructure</p>
          <div className="p-rule" />
          <h2>Direct I-25 Access. A Corridor That Keeps Improving.</h2>
          <p>I-25 Exit 104 is the primary northern gateway into Pueblo — the natural stop for long-haul trucking, regional commuters, and travelers along the Front Range. One of the highest commercial traffic concentrations in southern Colorado.</p>
          <p>CDOT is executing a <strong>$114 million reconstruction</strong> of the I-25/US 50B interchange. Scheduled completion: <strong>summer 2027</strong>. Access flow and interchange capacity across the entire northern Pueblo corridor will materially improve.</p>
          <p>Pinon Ridge Commercial Center is zoned <strong>B-3</strong> within Pueblo city limits — broad commercial entitlement already in place.</p>

          <div className="p-infra-grid">
            {infraItems.map((item) => (
              <div key={item.title} className="p-infra-item">
                <div className="p-infra-icon">{item.icon}</div>
                <div>
                  <div className="p-infra-title">{item.title}</div>
                  <div className="p-infra-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POTENTIAL USES ── */}
      <section className="p-section p-section-green">
        <div className="p-wrap">
          <p className="p-section-label p-label-yellow">04 / Potential Uses</p>
          <div className="p-rule p-rule-yellow" />
          <h2 className="p-white">A Site That Fits Multiple Programs.</h2>
          <p className="p-muted-white">B-3 zoning, direct interstate exposure, and established anchor traffic support a wide range of development scenarios.</p>
          <div className="p-uses-grid">
            {uses.map(u => <div key={u} className="p-use-chip">{u}</div>)}
          </div>
        </div>
      </section>

      {/* ── DEAL SUMMARY ── */}
      <section className="p-section">
        <div className="p-wrap">
          <p className="p-section-label">05 / Deal Summary</p>
          <div className="p-rule" />
          <h2>Straightforward Acquisition. Ready to Close.</h2>
          <p>The parcel is offered at $2,500,000 — $250,000 per acre. It sits in an already-zoned commercial district, adjacent to two operating national tenants, with direct interstate access and active infrastructure investment in the surrounding corridor.</p>
          <p>This is not a land banking play or a speculative bet on future zoning. The commercial use case is established. The question for the buyer is timing and program fit.</p>

          <div className="p-deal-grid">
            <div className="p-deal-cell">
              <span className="p-deal-n">10</span>
              <span className="p-deal-l">Total Acres</span>
            </div>
            <div className="p-deal-cell p-deal-highlight">
              <span className="p-deal-n">$2.5M</span>
              <span className="p-deal-l">Asking Price</span>
            </div>
            <div className="p-deal-cell">
              <span className="p-deal-n">$250K</span>
              <span className="p-deal-l">Per Acre</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="p-section p-section-navy" id="contact">
        <div className="p-wrap">
          <p className="p-section-label p-label-yellow">06 / Contact</p>
          <div className="p-rule p-rule-yellow" />
          <h2 className="p-white">Request The Property Package.</h2>
          <p className="p-muted-white">Parcel maps, zoning documentation, and site access for qualified buyers available immediately. No intake form — direct contact only.</p>

          <div className="p-triple-cta">
            <a href={CAL} target="_blank" rel="noreferrer" className="p-triple-card p-card-green">
              <span className="p-triple-icon">📅</span>
              <span className="p-triple-micro">Schedule</span>
              <span className="p-triple-title">Book a Call</span>
              <span className="p-triple-body">Get on the calendar with Gino directly. No middlemen.</span>
            </a>
            <a href={FORM} target="_blank" rel="noreferrer" className="p-triple-card p-card-yellow">
              <span className="p-triple-icon">📋</span>
              <span className="p-triple-micro">Buyers</span>
              <span className="p-triple-title">Buyer Questionnaire</span>
              <span className="p-triple-body">Tell us what you&apos;re looking for and we&apos;ll match you to the right opportunity.</span>
            </a>
            <a href={EMAIL} className="p-triple-card p-card-blue">
              <span className="p-triple-icon">✉️</span>
              <span className="p-triple-micro">Direct</span>
              <span className="p-triple-title">Send a Message</span>
              <span className="p-triple-body">ginorod@acomacapitalpartners.com</span>
            </a>
          </div>

          <p className="p-contact-phone">
            <a href="tel:7207244185">(720) 724-4185</a>
            &nbsp;·&nbsp; Gino Rodrigues &nbsp;·&nbsp; Acoma Capital Partners
          </p>
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <div className="p-disclaimer">
        <div className="p-wrap">
          <p>This document is provided for informational purposes only and does not constitute an offer to sell or a solicitation to buy any security or real property interest. All figures are based on information believed to be reliable but are not guaranteed. Prospective buyers should conduct their own independent due diligence. Acoma Capital Partners, Inc. is not a licensed real estate brokerage.</p>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div className="p-colorbar">
        <span style={{background:'#2C9143'}} />
        <span style={{background:'#202A54'}} />
        <span style={{background:'#1179EC'}} />
        <span style={{background:'#F6D200'}} />
      </div>
      <footer className="p-footer">
        <div className="p-wrap p-footer-row">
          <div>
            <div className="p-footer-logo">ACOMA <span>CAPITAL</span> PARTNERS</div>
            <div className="p-footer-info">
              (720) 724-4185 &nbsp;·&nbsp; <a href={EMAIL}>ginorod@acomacapitalpartners.com</a><br />
              <a href="https://www.acomacapitalpartners.com" target="_blank" rel="noreferrer">www.acomacapitalpartners.com</a>
            </div>
          </div>
          <div className="p-footer-links">
            <a href="/">Home</a>
            <a href={CAL} target="_blank" rel="noreferrer">Book a Call</a>
            <a href={FORM} target="_blank" rel="noreferrer">Buyer Questionnaire</a>
            <a href={EMAIL}>Contact Gino</a>
          </div>
        </div>
        <div className="p-footer-bottom">
          <div className="p-wrap">© 2026 Acoma Capital Partners, Inc.</div>
        </div>
      </footer>
    </div>
  )
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap');

#pp2 { font-family:'Poppins',sans-serif; background:#fff; color:#202A54; font-size:16px; line-height:1.6; }
#pp2 *,#pp2 *::before,#pp2 *::after { box-sizing:border-box; margin:0; padding:0; }
.p-wrap { max-width:1100px; margin:0 auto; padding:0 80px; }

/* 4-COLOR BAR */
.p-colorbar { height:6px; display:flex; }
.p-colorbar span { flex:1; }

/* NAV */
.p-nav { position:sticky; top:6px; z-index:100; background:rgba(32,42,84,0.97); backdrop-filter:blur(12px); border-bottom:1px solid rgba(255,255,255,0.08); padding:20px 0; }
.p-nav-row { display:flex; align-items:center; justify-content:space-between; }
.p-logo { font-size:14px; font-weight:900; letter-spacing:0.12em; color:#fff; text-decoration:none; text-transform:uppercase; }
.p-logo span { color:#F6D200; }
.p-nav-links { display:flex; gap:32px; align-items:center; }
.p-nav-links a { font-size:11px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:rgba(255,255,255,0.55); text-decoration:none; transition:color .2s; }
.p-nav-links a:hover { color:#fff; }
.p-nav-cta { background:#F6D200 !important; color:#202A54 !important; padding:10px 22px !important; font-weight:900 !important; }

/* HERO */
.p-hero { background:#202A54; padding:130px 0 110px; }
.p-eyebrow { font-size:12px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:rgba(255,255,255,0.55); margin-bottom:32px; display:block; }
.p-h1 { font-size:clamp(64px,10vw,128px); font-weight:900; line-height:0.88; letter-spacing:-0.04em; color:#fff; text-transform:uppercase; margin-bottom:40px; }
.p-yellow { color:#F6D200; }
.p-green  { color:#2C9143; }
.p-blue   { color:#1179EC; }
.p-white  { color:#fff !important; }
.p-hero-sub { font-size:16px; color:rgba(255,255,255,0.55); max-width:700px; line-height:1.75; margin-bottom:56px; font-weight:500; letter-spacing:0.02em; }
.p-cta-row { display:flex; gap:14px; flex-wrap:wrap; align-items:center; }

/* STATS BAR */
.p-statsbar { background:#111827; display:flex; }
.p-stat { flex:1; padding:32px 20px; text-align:center; border-right:1px solid rgba(255,255,255,0.06); }
.p-stat:last-child { border-right:none; }
.p-stat:nth-child(1) { border-top:4px solid #2C9143; }
.p-stat:nth-child(2) { border-top:4px solid #F6D200; }
.p-stat:nth-child(3) { border-top:4px solid #1179EC; }
.p-stat:nth-child(4) { border-top:4px solid #2C9143; }
.p-stat:nth-child(5) { border-top:4px solid #F6D200; }
.p-stat-n { display:block; font-size:30px; font-weight:900; color:#fff; letter-spacing:-0.02em; }
.p-stat-l { display:block; font-size:10px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:rgba(255,255,255,0.35); margin-top:6px; }

/* BUTTONS */
.p-btn-green { display:inline-block; padding:17px 40px; background:#2C9143; color:#fff; font-size:12px; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; text-decoration:none; transition:opacity .2s; }
.p-btn-green:hover { opacity:0.85; }
.p-btn-yellow { display:inline-block; padding:17px 40px; background:#F6D200; color:#202A54; font-size:12px; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; text-decoration:none; transition:opacity .2s; }
.p-btn-yellow:hover { opacity:0.85; }
.p-btn-ghost-white { display:inline-block; padding:15px 40px; border:2px solid rgba(255,255,255,0.3); color:#fff; font-size:12px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; text-decoration:none; transition:border-color .2s; }
.p-btn-ghost-white:hover { border-color:#fff; }

/* SECTIONS — full width, no forced columns */
.p-section { padding:112px 0; border-top:1px solid #e8ecf0; }
.p-section-navy { background:#202A54; border-top:none; }
.p-section-green { background:#2C9143; border-top:none; }
.p-section-label { font-size:11px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#1179EC; margin-bottom:18px; display:flex; align-items:center; gap:12px; }
.p-section-label::before { content:''; display:inline-block; width:28px; height:3px; background:#1179EC; flex-shrink:0; }
.p-label-yellow { color:#F6D200; }
.p-label-yellow::before { background:#F6D200; }
.p-rule { width:48px; height:4px; background:#2C9143; margin-bottom:32px; }
.p-rule-yellow { background:#F6D200; }
#pp2 h2 { font-size:clamp(32px,4.5vw,56px); font-weight:900; letter-spacing:-0.025em; line-height:1.05; color:#202A54; margin-bottom:32px; max-width:800px; }
#pp2 p { color:#555; margin-bottom:22px; max-width:760px; line-height:1.85; font-size:16px; }
#pp2 p strong { color:#202A54; font-weight:700; }
#pp2 p:last-child { margin-bottom:0; }
.p-muted-white { color:rgba(255,255,255,0.65) !important; max-width:760px; }

/* LOCATION CARD — full width strip */
.p-location-card { background:#111827; border-top:5px solid #F6D200; margin-top:56px; padding:0; }
.p-loc-header { padding:40px 48px 32px; border-bottom:1px solid rgba(255,255,255,0.08); }
.p-loc-tag { font-size:10px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#F6D200; display:block; margin-bottom:12px; }
.p-loc-address { font-size:24px; font-weight:900; color:#fff; line-height:1.2; letter-spacing:-0.01em; }
.p-loc-body { display:grid; grid-template-columns:repeat(3,1fr); gap:0; }
.p-loc-neighbor { padding:32px 48px; border-right:1px solid rgba(255,255,255,0.06); font-size:14px; color:rgba(255,255,255,0.6); line-height:1.7; }
.p-loc-neighbor:last-child { border-right:none; }
.p-loc-neighbor strong { color:#fff; display:block; font-weight:700; font-size:13px; letter-spacing:0.04em; margin-bottom:6px; }
@media(max-width:720px){ .p-loc-body{grid-template-columns:1fr;} .p-loc-neighbor{border-right:none;border-bottom:1px solid rgba(255,255,255,0.06);} .p-loc-neighbor:last-child{border-bottom:none;} }

/* TENANT CARDS */
.p-tenant-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:52px; }
@media(max-width:680px){ .p-tenant-grid{grid-template-columns:1fr;} }
.p-tenant-card { background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.08); border-top:4px solid #F6D200; padding:36px 32px; }
.p-tenant-name { font-size:11px; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; color:#F6D200; margin-bottom:16px; }
.p-tenant-body { font-size:15px; color:rgba(255,255,255,0.78) !important; line-height:1.8; margin:0; max-width:none; }
.p-tenant-body strong { color:#fff !important; font-weight:700; }

/* INFRA GRID — 2 wide cards per row */
.p-infra-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:56px; }
@media(max-width:680px){ .p-infra-grid{grid-template-columns:1fr;} }
.p-infra-item { display:flex; gap:24px; align-items:flex-start; background:#f4f6f9; border-left:4px solid #2C9143; padding:28px 32px; }
.p-infra-icon { flex-shrink:0; width:52px; height:52px; background:#202A54; color:#F6D200; display:flex; align-items:center; justify-content:center; font-size:22px; }
.p-infra-title { font-size:12px; font-weight:900; letter-spacing:0.08em; text-transform:uppercase; color:#202A54; margin-bottom:6px; }
.p-infra-desc { font-size:14px; color:#555; line-height:1.65; }

/* USES */
.p-uses-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; margin-top:48px; }
@media(max-width:800px){ .p-uses-grid{grid-template-columns:1fr 1fr;} }
@media(max-width:480px){ .p-uses-grid{grid-template-columns:1fr;} }
.p-use-chip { background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.12); border-left:4px solid #F6D200; padding:18px 20px; font-size:14px; font-weight:600; color:#fff; line-height:1.45; }

/* DEAL SUMMARY */
.p-deal-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:4px; background:#e4e8f0; margin-top:56px; }
@media(max-width:520px){ .p-deal-grid{grid-template-columns:1fr;} }
.p-deal-cell { background:#fff; padding:60px 40px; text-align:center; }
.p-deal-n { display:block; font-size:60px; font-weight:900; color:#202A54; letter-spacing:-0.03em; line-height:1; }
.p-deal-l { display:block; font-size:11px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#aaa; margin-top:10px; }
.p-deal-highlight { background:#202A54; }
.p-deal-highlight .p-deal-n { color:#F6D200; }
.p-deal-highlight .p-deal-l { color:rgba(255,255,255,0.35); }

/* TRIPLE CTA */
.p-triple-cta { display:grid; grid-template-columns:repeat(3,1fr); gap:4px; margin-top:56px; }
@media(max-width:700px){ .p-triple-cta{grid-template-columns:1fr;} }
.p-triple-card { display:flex; flex-direction:column; align-items:center; gap:12px; padding:52px 40px; text-decoration:none; text-align:center; transition:filter .2s; }
.p-triple-card:hover { filter:brightness(1.07); }
.p-card-green  { background:#2C9143; }
.p-card-yellow { background:#F6D200; }
.p-card-blue   { background:#1179EC; }
.p-triple-icon { font-size:40px; line-height:1; }
.p-triple-micro { font-size:10px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; }
.p-card-green .p-triple-micro, .p-card-blue .p-triple-micro { color:rgba(255,255,255,0.6); }
.p-card-yellow .p-triple-micro { color:rgba(32,42,84,0.5); }
.p-triple-title { font-size:22px; font-weight:900; line-height:1.15; }
.p-card-green .p-triple-title, .p-card-blue .p-triple-title { color:#fff; }
.p-card-yellow .p-triple-title { color:#202A54; }
.p-triple-body { font-size:14px; line-height:1.65; max-width:260px; }
.p-card-green .p-triple-body, .p-card-blue .p-triple-body { color:rgba(255,255,255,0.75); }
.p-card-yellow .p-triple-body { color:rgba(32,42,84,0.65); }

/* CONTACT PHONE */
.p-contact-phone { margin-top:36px; font-size:14px; color:rgba(255,255,255,0.4); }
.p-contact-phone a { color:rgba(255,255,255,0.7); text-decoration:none; font-weight:700; }
.p-contact-phone a:hover { color:#F6D200; }

/* DISCLAIMER */
.p-disclaimer { padding:36px 0; background:#f5f5f2; border-top:1px solid #e8ecf0; }
.p-disclaimer p { font-size:11px; color:#999; line-height:1.75; max-width:900px; margin:0; }

/* FOOTER */
.p-footer { background:#202A54; padding:56px 0 0; }
.p-footer-row { display:grid; grid-template-columns:1fr 1fr; gap:40px; padding-bottom:48px; }
@media(max-width:560px){ .p-footer-row{grid-template-columns:1fr;} }
.p-footer-logo { font-size:14px; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; color:#fff; margin-bottom:16px; }
.p-footer-logo span { color:#F6D200; }
.p-footer-info { font-size:13px; color:rgba(255,255,255,0.4); line-height:1.9; }
.p-footer-info a { color:rgba(255,255,255,0.6); text-decoration:none; }
.p-footer-info a:hover { color:#F6D200; }
.p-footer-links { display:flex; flex-direction:column; gap:12px; align-items:flex-end; }
@media(max-width:560px){ .p-footer-links{align-items:flex-start;} }
.p-footer-links a { font-size:13px; color:rgba(255,255,255,0.4); text-decoration:none; font-weight:600; transition:color .2s; }
.p-footer-links a:hover { color:#F6D200; }
.p-footer-bottom { border-top:1px solid rgba(255,255,255,0.06); padding:22px 0; }
.p-footer-bottom div { font-size:12px; color:rgba(255,255,255,0.2); }
`
