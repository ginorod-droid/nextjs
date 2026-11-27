'use client'
import { useState } from 'react'
import { bpStyles, BrokerFooter, CAL } from '../broker-programs/shared'

// Posts to the same Acoma Apps Script web app the other forms use.
const ENDPOINT =
  'https://script.google.com/macros/s/AKfycbze_jrkesBUQyu4rVUFko2EGoXDhOGw1WiNJ4iGaOuwW7rczi3EjG-F4uIxXYV93Gy4/exec'

const bqStyles = `
#bq { font-family:'Poppins',sans-serif; background:#fff; color:#202A54; }
#bq *,#bq *::before,#bq *::after { box-sizing:border-box; }
.bq-nav { background:#202A54; padding:16px 0; }
.bq-nav-row { display:flex; align-items:center; justify-content:space-between; }
.bq-nav img { height:34px; width:auto; display:block; }
.bq-back { font-size:11px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:rgba(255,255,255,0.6); text-decoration:none; }
.bq-back:hover { color:#fff; }
.bq-hero { background:#fff; padding:66px 0 40px; }
.bq-eyebrow { font-size:12px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#1179EC; margin-bottom:16px; display:flex; align-items:center; gap:12px; }
.bq-eyebrow::before { content:""; width:30px; height:3px; background:#1179EC; display:inline-block; }
.bq-h1 { font-family:'Poppins'; font-size:clamp(32px,5vw,52px); font-weight:900; line-height:1.05; letter-spacing:-0.02em; color:#202A54; margin-bottom:18px; max-width:16ch; }
.bq-sub { font-size:17px; color:#555; line-height:1.7; max-width:580px; margin-bottom:0; }
.bq-formwrap { background:#f4f6f9; border-top:1px solid #e8ecf0; padding:52px 0 92px; }
.bq-card { background:#fff; border:1px solid #e4e8f0; border-top:4px solid #2C9143; padding:40px 40px 42px; max-width:760px; box-shadow:0 12px 34px rgba(32,42,84,0.07); }
.bq-label { font-size:11px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#7a8499; margin-bottom:10px; }
.bq-rule { width:44px; height:4px; background:#2C9143; margin-bottom:26px; }
.bq-form { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
.bq-f { display:flex; flex-direction:column; } .bq-f.full { grid-column:1 / -1; }
.bq-f label { font-size:11px; font-weight:700; letter-spacing:0.07em; text-transform:uppercase; color:#8a8f99; margin-bottom:7px; }
.bq-f input, .bq-f select, .bq-f textarea { background:#fff; border:1px solid #d4d9e0; padding:12px 14px; font-size:15px; font-family:'Inter',sans-serif; color:#202A54; outline:none; }
.bq-f input, .bq-f select { height:46px; padding:0 14px; }
.bq-f textarea { min-height:106px; resize:vertical; line-height:1.5; }
.bq-f input:focus, .bq-f select:focus, .bq-f textarea:focus { border-color:#1179EC; box-shadow:0 0 0 2px rgba(17,121,236,0.14); }
.bq-submit { grid-column:1 / -1; background:#2C9143; color:#fff; border:0; height:54px; font-size:13px; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; cursor:pointer; margin-top:8px; }
.bq-submit:hover { background:#24793a; }
.bq-submit:disabled { opacity:0.65; cursor:wait; }
.bq-err { grid-column:1 / -1; font-size:13px; color:#c0392b; margin-top:8px; }
.bq-note { grid-column:1 / -1; font-size:12px; color:#9aa0ab; line-height:1.55; margin-top:8px; }
.bq-hp { position:absolute; left:-9999px; height:0; width:0; opacity:0; }
.bq-done { background:#fff; border:1px solid #e4e8f0; border-top:4px solid #2C9143; padding:52px 44px; max-width:760px; text-align:center; box-shadow:0 12px 34px rgba(32,42,84,0.07); }
.bq-done h3 { font-family:'Poppins'; font-size:26px; font-weight:900; color:#202A54; margin-bottom:12px; }
.bq-done p { font-size:15px; color:#555; line-height:1.6; max-width:460px; margin:0 auto; }
.bq-alt { margin-top:26px; font-size:14px; color:#666; }
.bq-alt a { color:#1179EC; text-decoration:none; font-weight:700; }
@media(max-width:760px){ .bq-form { grid-template-columns:1fr; } .bq-card,.bq-done { padding:32px 24px; } .bq-hero { padding:52px 0 32px; } .bq-formwrap { padding:40px 0 64px; } }
`

const PTYPES = ['Office', 'Retail', 'Warehouse / Industrial', 'Multifamily (5+ units)', 'Mixed-use', 'Land', 'Other']
const TIMELINES = ['Ready now', '1–3 months', '3–6 months', 'Just exploring']
const FINANCING = ['Paying cash', 'Will need financing', 'Not sure yet']

async function postJSON(payload) {
  const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify(payload) })
  const out = await res.json()
  if (!out || !out.ok) throw new Error('failed')
}

function ColorBar() {
  return (
    <div className="bp-colorbar">
      <span style={{ background: '#2C9143' }} /><span style={{ background: '#202A54' }} />
      <span style={{ background: '#1179EC' }} /><span style={{ background: '#F6D200' }} />
    </div>
  )
}

export default function BuyerQuestionnaire() {
  const [f, setF] = useState({ name: '', email: '', phone: '', ptype: '', area: '', budget: '', timeline: '', financing: '', notes: '' })
  const [hp, setHp] = useState('')
  const [status, setStatus] = useState('idle')
  const [err, setErr] = useState('')
  const [done, setDone] = useState(false)
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const submit = async (e) => {
    e.preventDefault(); setErr('')
    if (!f.name || !f.email || !f.phone) { setErr('Name, email, and phone are required.'); return }
    if (status === 'sending') return
    setStatus('sending')
    try {
      await postJSON({ formType: 'buyer_questionnaire', ...f, website: hp, page: '/buyer-questionnaire' })
      setStatus('idle'); setDone(true)
    } catch { setStatus('error'); setErr('Something went wrong. Email ginorod@acomacapitalpartners.com and we will take it from there.') }
  }

  return (
    <div id="bq">
      <style dangerouslySetInnerHTML={{ __html: bpStyles + bqStyles }} />
      <ColorBar />
      <nav className="bq-nav">
        <div className="bp-wrap bq-nav-row">
          <a href="/" aria-label="Acoma Capital Partners home"><img src="/acoma-logo-white.png" alt="Acoma Capital Partners" /></a>
          <a href="/" className="bq-back">← Back to Home</a>
        </div>
      </nav>

      <section className="bq-hero">
        <div className="bp-wrap">
          <p className="bq-eyebrow">Buyer Questionnaire</p>
          <h1 className="bq-h1">Tell us what you want to buy.</h1>
          <p className="bq-sub">Give us the shape of the property you are after and we will match you to the right opportunity, on and off market. One person reads it, usually the same day.</p>
        </div>
      </section>

      <section className="bq-formwrap">
        <div className="bp-wrap">
          {!done && (
            <div className="bq-card">
              <p className="bq-label">Start here</p>
              <div className="bq-rule" />
              <form className="bq-form" onSubmit={submit}>
                <input type="text" className="bq-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={hp} onChange={(e) => setHp(e.target.value)} />
                <div className="bq-f"><label>Name *</label><input type="text" placeholder="First and last name" value={f.name} onChange={set('name')} /></div>
                <div className="bq-f"><label>Phone *</label><input type="tel" placeholder="(720) 555-0100" value={f.phone} onChange={set('phone')} /></div>
                <div className="bq-f full"><label>Email *</label><input type="email" placeholder="you@email.com" value={f.email} onChange={set('email')} /></div>
                <div className="bq-f"><label>Property type</label><select value={f.ptype} onChange={set('ptype')}><option value="">Select one</option>{PTYPES.map((p) => <option key={p}>{p}</option>)}</select></div>
                <div className="bq-f"><label>Target market or area</label><input type="text" placeholder="City, metro, or submarket" value={f.area} onChange={set('area')} /></div>
                <div className="bq-f"><label>Price range</label><input type="text" placeholder="$500K – $1M" value={f.budget} onChange={set('budget')} /></div>
                <div className="bq-f"><label>Timeline</label><select value={f.timeline} onChange={set('timeline')}><option value="">Select one</option>{TIMELINES.map((t) => <option key={t}>{t}</option>)}</select></div>
                <div className="bq-f full"><label>Financing</label><select value={f.financing} onChange={set('financing')}><option value="">Select one</option>{FINANCING.map((x) => <option key={x}>{x}</option>)}</select></div>
                <div className="bq-f full"><label>What are you looking for?</label><textarea placeholder="Tell us about the property, the deal, or anything that helps us find the right fit." value={f.notes} onChange={set('notes')} /></div>
                <button className="bq-submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send It Over →'}</button>
                {err && <p className="bq-err">{err}</p>}
                <p className="bq-note">We use this to reach you about opportunities that fit. Nothing is shared.</p>
              </form>
            </div>
          )}

          {done && (
            <div className="bq-done">
              <h3>Got it. We are on it.</h3>
              <p>We will go through what you sent and come back with options that fit, usually the same day. If it is time-sensitive, call Gino directly at (720) 772-1327.</p>
            </div>
          )}

          <p className="bq-alt">Prefer to talk it through first? <a href={CAL} target="_blank" rel="noreferrer">Schedule a call →</a></p>
        </div>
      </section>

      <BrokerFooter />
    </div>
  )
}
