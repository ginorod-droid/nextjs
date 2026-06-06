// ─────────────────────────────────────────────────────────
// Place at:  app/pueblo-parcel/page.jsx
// ─────────────────────────────────────────────────────────

export const metadata = {
  title: '10-Acre Commercial Parcel | I-25 Exit 104 | Pueblo, CO | Acoma Capital Partners',
  description: '10 acres for sale at I-25 Exit 104, Pueblo CO. Adjacent to TravelCenters of America & Love\'s Travel Stop. $2.5M, B-3 zoning.',
}

const CAL = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09rs3O9rwu5VlkCzoqHWgwKnPa1cAivEx_mCwHugssbgmq6Kgc8NjBPUSvFlW-u82tAyBpePoI?gv=true'
const FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSdPUr1haWoLdK6vN8P_3KTRhNlZxv2bkWz6XV36KgusKnot1w/viewform'
const EMAIL = 'mailto:ginorod@acomacapitalpartners.com'

const infraItems = [
  { icon:'🛣️', title:'Interstate Access', desc:'Direct I-25 on/off at Exit 104 — both northbound and southbound.' },
  { icon:'⚡', title:'Utilities Available', desc:'City of Pueblo utilities accessible through existing corridor infrastructure.' },
  { icon:'🏙️', title:'B-3 Zoning', desc:'Pinon Ridge Commercial Center. No rezonings required for most commercial uses.' },
  { icon:'🔧', title:'$114M CDOT Rebuild', desc:'Diverging diamond interchange. Westbound alignment shifting now. Completion: Summer 2027.' },
  { icon:'📍', title:'Regional Position', desc:'45 min south of Colorado Springs. 100 miles from Denver. Southern Colorado\'s logistics anchor.' },
]

const uses = [
  'Quick-service or fast casual restaurant','Convenience retail or fuel canopy',
  'Extended-stay or limited-service hotel','Truck service center or fleet maintenance',
  'Commercial storage or logistics use','Multi-tenant retail strip',
  'EV fleet charging station','Drive-through or service-based retail',
]

export default function PuebloParcel() {
  return (
    <div id="pp2">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* ── NAV ── */}
      <nav className="p-nav">
        <div className="p-wrap p-nav-row">
          <a href="/" className="p-logo">ACOMA<span> CAPITAL PARTNERS</span></a>
          <div className="p-nav-links">
            <a href="/bridge-loans">Bridge Loans</a>
            <a href="#project-info">The Property</a>
            <a href="#contact">Contact</a>
            <a href={CAL} target="_blank" rel="noreferrer" className="p-nav-cta">Book a Call</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="p-hero">
        <div className="p-wrap">
          <span className="p-eyebrow">
            Colorado <span className="p-dot">·</span>
            <a href="/bridge-loans" className="p-eyebrow-link"> Commercial Real Estate</a>
            <span className="p-dot"> · </span> Capital Solutions
          </span>
          <h1 className="p-h1">
            10 Acres.<br />
            Land <span className="p-green p-underline-yellow">That</span><br />
            Performs.
          </h1>
          <p className="p-hero-sub">
            I-25 Exit 104 &nbsp;·&nbsp; Pueblo, Colorado &nbsp;·&nbsp;
            <strong>Adjacent to TA TravelCenters &amp; Love&apos;s Travel Stop</strong>
          </p>
          <div className="p-cta-row">
            <a href="#project-info" className="p-btn-green">View Project Information</a>
            <a href={EMAIL} className="p-btn-outline">Request Package</a>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="p-statsbar">
        {[['10','Acres'],['$2.5M','Asking Price'],['$250K','Per Acre'],['B-3','Zoning'],['I-25','Exit 104']].map(([n,l])=>(
          <div key={l} className="p-stat"><span className="p-stat-n">{n}</span><span className="p-stat-l">{l}</span></div>
        ))}
      </div>

      {/* ── THE OPPORTUNITY ── */}
      <section className="p-section" id="project-info">
        <div className="p-wrap p-two-col">
          <div>
            <span className="p-section-label">The Opportunity</span>
            <div className="p-rule" />
            <h2>A Proven Corridor. <span className="p-blue">That</span> Still Has Room.</h2>
            <p>This 10-acre parcel sits at one of Pueblo&apos;s most active commercial intersections — I-25 Exit 104 on the city&apos;s north end, directly adjacent to two major national travel center operators <strong>that together draw tens of thousands of visitors per month.</strong></p>
            <p>The surrounding corridor is no longer speculative. TravelCenters of America opened its Pueblo location at 1275 Drew Dix Parkway in December 2025, and Love&apos;s Travel Stop has operated at this exit for years. Both run 24 hours and serve commercial trucking, motorists, and regional traffic moving between Denver, Colorado Springs, and Pueblo&apos;s growing industrial base.</p>
            <p>At $250,000 per acre, this parcel is priced below comparable commercial land on the same corridor. The infrastructure is in place. The traffic is already there.</p>
            <div className="p-cta-row" style={{marginTop:'32px'}}>
              <a href={EMAIL} className="p-btn-green">Request the Property Package</a>
            </div>
          </div>
          <div>
            <div className="p-location-card">
              <span className="p-loc-tag">Property Location</span>
              <div className="p-loc-address">I-25 Exit 104 · Drew Dix Parkway<br />Pueblo, CO 81008</div>
              <hr className="p-loc-hr" />
              <div className="p-loc-neighbors">
                <div className="p-loc-neighbor"><strong>TA TravelCenters</strong><br />1275 Drew Dix Pkwy — Opened Dec 2025</div>
                <div className="p-loc-neighbor"><strong>Love&apos;s Travel Stop #226</strong><br />6470 N. Elizabeth St. — Open 24 Hours</div>
              </div>
              <hr className="p-loc-hr" />
              <div className="p-loc-meta">
                <strong>45 min</strong> south of Colorado Springs &nbsp;·&nbsp; <strong>100 miles</strong> from Denver<br />
                Pinon Ridge Commercial Center &nbsp;·&nbsp; <strong>B-3 Zoning</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ANCHOR NEIGHBORS ── */}
      <section className="p-section p-section-navy">
        <div className="p-wrap">
          <span className="p-section-label p-label-yellow">Anchor Neighbors</span>
          <div className="p-rule p-rule-yellow" />
          <h2 className="p-white">Two National Operators. <span className="p-yellow">That</span> Don&apos;t Move.</h2>
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

      {/* ── LOCATION & INFRA ── */}
      <section className="p-section">
        <div className="p-wrap p-two-col">
          <div>
            <span className="p-section-label">Location &amp; Infrastructure</span>
            <div className="p-rule" />
            <h2>Direct I-25 Access. A Corridor <span className="p-green">That</span> Keeps Improving.</h2>
            <p>I-25 Exit 104 is the primary northern gateway into Pueblo — the natural stop for long-haul trucking, regional commuters, and travelers along the Front Range. One of the highest commercial traffic concentrations in southern Colorado.</p>
            <p>CDOT is executing a <strong>$114 million reconstruction</strong> of the I-25/US 50B interchange. Scheduled completion: <strong>summer 2027</strong>. Access flow and interchange capacity across the entire northern Pueblo corridor will materially improve.</p>
            <p>Pinon Ridge Commercial Center is zoned <strong>B-3</strong> within Pueblo city limits — broad commercial entitlement already in place.</p>
          </div>
          <div>
            {infraItems.map((item)=>(
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
          <span className="p-section-label p-label-yellow">Potential Uses</span>
          <div className="p-rule p-rule-yellow" />
          <h2 className="p-white">A Site <span className="p-yellow">That</span> Fits Multiple Programs.</h2>
          <p className="p-muted-white">B-3 zoning, direct interstate exposure, and established anchor traffic support a wide range of development scenarios.</p>
          <div className="p-uses-grid">
            {uses.map(u=><div key={u} className="p-use-chip">{u}</div>)}
          </div>
        </div>
      </section>

      {/* ── DEAL SUMMARY ── */}
      <section className="p-section">
        <div className="p-wrap">
          <span className="p-section-label">Deal Summary</span>
          <div className="p-rule" />
          <h2>Straightforward Acquisition. <span className="p-blue">That</span> Closes.</h2>
          <p>The parcel is offered at $2,500,000 — $250,000 per acre. It sits in an already-zoned commercial district, adjacent to two operating national tenants, with direct interstate access and active infrastructure investment in the surrounding corridor.</p>
          <p>This is not a land banking play or a speculative bet on future zoning. The commercial use case is established. The question for the buyer is timing and program fit.</p>
          <div className="p-deal-grid">
            <div className="p-deal-cell"><span className="p-deal-n">10</span><span className="p-deal-l">Total Acres</span></div>
            <div className="p-deal-cell p-deal-highlight"><span className="p-deal-n">$2.5M</span><span className="p-deal-l">Asking Price</span></div>
            <div className="p-deal-cell"><span className="p-deal-n">$250K</span><span className="p-deal-l">Per Acre</span></div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="p-section p-section-navy p-cta-section" id="contact">
        <div className="p-wrap">
          <span className="p-section-label p-label-yellow">Contact</span>
          <div className="p-rule p-rule-yellow" />
          <h2 className="p-white">Request <span className="p-yellow">The</span> Property Package.</h2>
          <p className="p-muted-white">Parcel maps, zoning documentation, and site access for qualified buyers available immediately. No intake form — direct contact only.</p>
          <div className="p-cta-row" style={{marginTop:'36px',flexWrap:'wrap',gap:'14px'}}>
            <a href="tel:7207244185" className="p-btn-yellow">(720) 724-4185</a>
            <a href={EMAIL} className="p-btn-ghost-white">ginorod@acomacapitalpartners.com</a>
          </div>
          <div className="p-cta-links">
            <a href={CAL} target="_blank" rel="noreferrer" className="p-cta-link">→ Book a Call with Gino</a>
            <a href={FORM} target="_blank" rel="noreferrer" className="p-cta-link">→ Fill Out the Buyer Questionnaire</a>
          </div>
          <p className="p-muted-white" style={{marginTop:'32px',fontSize:'13px'}}>
            Gino Rodrigues &nbsp;·&nbsp; Acoma Capital Partners &nbsp;·&nbsp;
            <a href="https://www.acomacapitalpartners.com" style={{color:'#F6D200',textDecoration:'none'}} target="_blank" rel="noreferrer">acomacapitalpartners.com</a>
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
      <footer className="p-footer">
        <div className="p-wrap p-footer-row">
          <div>
            <div className="p-footer-logo">ACOMA CAPITAL PARTNERS</div>
            <div className="p-footer-info">
              (720) 724-4185 &nbsp;·&nbsp; <a href={EMAIL}>ginorod@acomacapitalpartners.com</a><br />
              <a href="https://www.acomacapitalpartners.com" target="_blank" rel="noreferrer">www.acomacapitalpartners.com</a>
            </div>
          </div>
          <div className="p-footer-links">
            <a href="/bridge-loans">Bridge Loans</a>
            <a href={CAL} target="_blank" rel="noreferrer">Book a Call</a>
            <a href={FORM} target="_blank" rel="noreferrer">Buyer Questionnaire</a>
            <a href={EMAIL}>Contact Gino</a>
          </div>
        </div>
        <div className="p-footer-bottom"><div className="p-wrap">© 2026 Acoma Capital Partners, Inc.</div></div>
      </footer>
    </div>
  )
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap');

#pp2 { font-family:'Poppins',sans-serif; background:#fff; color:#202A54; font-size:16px; line-height:1.6; }
#pp2 *,#pp2 *::before,#pp2 *::after { box-sizing:border-box; margin:0; padding:0; }
.p-wrap { max-width:1080px; margin:0 auto; padding:0 36px; }

/* NAV */
.p-nav { position:sticky; top:0; z-index:100; background:rgba(32,42,84,0.97); backdrop-filter:blur(12px); border-bottom:1px solid rgba(255,255,255,0.08); padding:18px 0; }
.p-nav-row { display:flex; align-items:center; justify-content:space-between; }
.p-logo { font-size:13px; font-weight:900; letter-spacing:0.14em; color:#fff; text-decoration:none; white-space:nowrap; flex-shrink:0; }
.p-logo span { color:#F6D200; }
.p-nav-links { display:flex; gap:28px; align-items:center; }
.p-nav-links a { font-size:11px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:rgba(255,255,255,0.55); text-decoration:none; transition:color .2s; }
.p-nav-links a:hover { color:#fff; }
.p-nav-cta { background:#F6D200 !important; color:#202A54 !important; padding:10px 22px !important; font-weight:900 !important; }
.p-nav-cta:hover { opacity:0.85 !important; }

/* HERO */
.p-hero { background:#fff; border-left:6px solid #2C9143; border-bottom:1px solid #EAEAE6; padding:88px 0 80px; }
.p-eyebrow { font-size:13px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#202A54; margin-bottom:28px; display:block; }
.p-eyebrow-link { color:#202A54; text-decoration:none; border-bottom:2px solid #2C9143; padding-bottom:2px; transition:color .2s; }
.p-eyebrow-link:hover { color:#2C9143; }
.p-dot { color:#2C9143; margin:0 6px; }
.p-h1 { font-size:clamp(56px,7.5vw,104px); font-weight:900; line-height:0.90; letter-spacing:-0.04em; color:#202A54; text-transform:uppercase; margin-bottom:32px; }
.p-green { color:#2C9143; }
.p-blue { color:#1179EC; }
.p-yellow { color:#F6D200; }
.p-underline-yellow { position:relative; display:inline-block; }
.p-underline-yellow::after { content:''; position:absolute; left:0; bottom:-6px; width:100%; height:6px; background:#F6D200; }
.p-hero-sub { font-size:17px; color:#555; max-width:560px; line-height:1.7; margin-bottom:44px; }
.p-hero-sub strong { color:#202A54; font-weight:700; }
.p-cta-row { display:flex; gap:14px; flex-wrap:wrap; align-items:center; }

/* STATS BAR */
.p-statsbar { background:#202A54; display:flex; justify-content:center; }
.p-stat { flex:1; max-width:200px; padding:20px 24px; text-align:center; border-right:1px solid rgba(255,255,255,0.08); }
.p-stat:last-child { border-right:none; }
.p-stat-n { display:block; font-size:24px; font-weight:900; color:#F6D200; letter-spacing:-0.02em; }
.p-stat-l { display:block; font-size:10px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:rgba(255,255,255,0.4); margin-top:3px; }

/* BUTTONS */
.p-btn-green { display:inline-block; padding:15px 34px; background:#2C9143; color:#fff; font-size:13px; font-weight:900; letter-spacing:0.1em; text-transform:uppercase; text-decoration:none; transition:opacity .2s; }
.p-btn-green:hover { opacity:0.85; }
.p-btn-yellow { display:inline-block; padding:15px 34px; background:#F6D200; color:#202A54; font-size:13px; font-weight:900; letter-spacing:0.1em; text-transform:uppercase; text-decoration:none; transition:opacity .2s; }
.p-btn-yellow:hover { opacity:0.85; }
.p-btn-outline { display:inline-block; padding:13px 34px; border:2px solid #202A54; color:#202A54; font-size:13px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; text-decoration:none; transition:background .2s,color .2s; }
.p-btn-outline:hover { background:#202A54; color:#fff; }
.p-btn-ghost-white { display:inline-block; padding:13px 34px; border:2px solid rgba(255,255,255,0.4); color:#fff; font-size:13px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; text-decoration:none; transition:border-color .2s,background .2s; }
.p-btn-ghost-white:hover { border-color:#fff; background:rgba(255,255,255,0.08); }

/* SECTIONS */
.p-section { padding:88px 0; border-top:1px solid #EAEAE6; }
.p-section-navy { background:#202A54; border-top:none; border-left:6px solid #F6D200; }
.p-section-green { background:#2C9143; border-top:none; border-left:6px solid #F6D200; }
.p-section-label { font-size:10px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#2C9143; margin-bottom:16px; display:block; }
.p-label-yellow { color:#F6D200; }
.p-rule { width:44px; height:4px; background:#2C9143; margin-bottom:28px; }
.p-rule-yellow { background:#F6D200; }
#pp2 h2 { font-size:clamp(30px,4vw,50px); font-weight:900; letter-spacing:-0.025em; line-height:1.05; color:#202A54; text-transform:uppercase; margin-bottom:28px; }
.p-white { color:#fff !important; }
#pp2 p { color:#555; margin-bottom:18px; max-width:640px; line-height:1.75; font-size:15px; }
#pp2 p strong { color:#202A54; font-weight:700; }
#pp2 p:last-child { margin-bottom:0; }
.p-muted-white { color:rgba(255,255,255,0.7) !important; max-width:640px; }
.p-two-col { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:start; }
@media(max-width:720px){.p-two-col{grid-template-columns:1fr;gap:44px;}}

/* LOCATION CARD */
.p-location-card { background:#202A54; border-left:5px solid #F6D200; padding:40px 36px; display:flex; flex-direction:column; gap:18px; }
.p-loc-tag { font-size:10px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#F6D200; }
.p-loc-address { font-size:20px; font-weight:900; color:#fff; line-height:1.3; letter-spacing:-0.01em; }
.p-loc-hr { border:none; border-top:1px solid rgba(255,255,255,0.1); }
.p-loc-neighbors { display:flex; flex-direction:column; gap:14px; }
.p-loc-neighbor { font-size:13px; color:rgba(255,255,255,0.7); line-height:1.6; }
.p-loc-neighbor strong { color:#fff; display:block; font-weight:700; }
.p-loc-meta { font-size:13px; color:rgba(255,255,255,0.55); line-height:1.6; }
.p-loc-meta strong { color:#F6D200; }

/* TENANT CARDS */
.p-tenant-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:40px; }
@media(max-width:640px){.p-tenant-grid{grid-template-columns:1fr;}}
.p-tenant-card { background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); border-top:4px solid #F6D200; padding:28px 24px; }
.p-tenant-name { font-size:11px; font-weight:900; letter-spacing:0.1em; text-transform:uppercase; color:#F6D200; margin-bottom:12px; }
.p-tenant-body { font-size:13px; color:#fff !important; line-height:1.65; margin:0; max-width:none; }
.p-tenant-body strong { color:#fff !important; font-weight:700; }
#pp2 .p-tenant-card p { color:#fff !important; max-width:none; }
#pp2 .p-tenant-card p strong { color:#fff !important; font-weight:700; }

/* INFRA */
.p-infra-item { display:flex; gap:18px; margin-bottom:24px; align-items:flex-start; }
.p-infra-icon { flex-shrink:0; width:44px; height:44px; background:#202A54; color:#F6D200; display:flex; align-items:center; justify-content:center; font-size:18px; }
.p-infra-title { font-size:12px; font-weight:900; letter-spacing:0.08em; text-transform:uppercase; color:#202A54; margin-bottom:4px; }
.p-infra-desc { font-size:13px; color:#666; line-height:1.55; }

/* USES */
.p-uses-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; margin-top:36px; }
@media(max-width:760px){.p-uses-grid{grid-template-columns:1fr 1fr;}}
@media(max-width:480px){.p-uses-grid{grid-template-columns:1fr;}}
.p-use-chip { background:rgba(255,255,255,0.12); border:1px solid rgba(255,255,255,0.15); border-left:4px solid #F6D200; padding:14px 16px; font-size:13px; font-weight:600; color:#fff; line-height:1.4; }

/* DEAL GRID */
.p-deal-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; background:#EAEAE6; margin-top:40px; }
@media(max-width:520px){.p-deal-grid{grid-template-columns:1fr;}}
.p-deal-cell { background:#fff; padding:36px 28px; text-align:center; }
.p-deal-n { display:block; font-size:40px; font-weight:900; color:#202A54; letter-spacing:-0.03em; }
.p-deal-l { display:block; font-size:10px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#999; margin-top:6px; }
.p-deal-highlight { background:#202A54; }
.p-deal-highlight .p-deal-n { color:#F6D200; }
.p-deal-highlight .p-deal-l { color:rgba(255,255,255,0.4); }

/* CTA LINKS */
.p-cta-links { display:flex; gap:28px; flex-wrap:wrap; margin-top:20px; }
.p-cta-link { font-size:14px; font-weight:700; color:#F6D200; text-decoration:none; letter-spacing:0.02em; transition:opacity .2s; }
.p-cta-link:hover { opacity:0.75; }

/* DISCLAIMER */
.p-disclaimer { padding:28px 0; border-top:1px solid #EAEAE6; background:#F5F5F2; }
.p-disclaimer p { font-size:11px; color:#999; line-height:1.7; max-width:860px; margin:0; }

/* FOOTER */
.p-footer { background:#202A54; border-top:5px solid #2C9143; padding:52px 0 0; }
.p-footer-row { display:grid; grid-template-columns:1fr 1fr; gap:40px; padding-bottom:40px; }
@media(max-width:560px){.p-footer-row{grid-template-columns:1fr;}}
.p-footer-logo { font-size:13px; font-weight:900; letter-spacing:0.14em; color:#fff; margin-bottom:14px; }
.p-footer-info { font-size:13px; color:rgba(255,255,255,0.5); line-height:1.8; }
.p-footer-info a { color:rgba(255,255,255,0.7); text-decoration:none; }
.p-footer-info a:hover { color:#F6D200; }
.p-footer-links { display:flex; flex-direction:column; gap:10px; }
.p-footer-links a { font-size:13px; color:rgba(255,255,255,0.5); text-decoration:none; font-weight:600; transition:color .2s; }
.p-footer-links a:hover { color:#F6D200; }
.p-footer-bottom { border-top:1px solid rgba(255,255,255,0.08); padding:20px 0; }
.p-footer-bottom div { font-size:12px; color:rgba(255,255,255,0.3); }
`
