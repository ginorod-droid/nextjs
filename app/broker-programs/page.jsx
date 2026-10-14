// app/broker-programs/page.jsx
import { programs, bpStyles, BrokerNav, BrokerFooter, CAL, CREDIT } from './shared'

export const metadata = {
  title: 'Broker Programs | Commercial Loan Solutions | Acoma Capital Partners',
  description: 'Acoma commercial broker programs: Owner-Occupied Bank Statement, Lite Doc, and No Doc. Fast reads on tough commercial files. Bring us the deal.',
}

export default function BrokerProgramsHub() {
  return (
    <div id="bp">
      <style dangerouslySetInnerHTML={{ __html: bpStyles }} />

      <div className="bp-colorbar">
        <span style={{ background: '#2C9143' }} /><span style={{ background: '#202A54' }} />
        <span style={{ background: '#1179EC' }} /><span style={{ background: '#F6D200' }} />
      </div>

      <BrokerNav />

      <section className="bp-hub-hero">
        <div className="bp-wrap">
          <p className="bp-eyebrow" style={{ color: '#F6D200' }}>For Brokers · Commercial Loan Solutions</p>
          <h1 className="bp-h1">Broker<br />Programs.</h1>
          <p className="bp-hero-sub">Three ways to get a tough commercial file done. When the tax returns, the DTI, or the bank box says no, one of these usually says yes. Bring us the deal and we place it.</p>
          <div className="bp-cta-row">
            <a href={CAL} target="_blank" rel="noreferrer" className="bp-btn-yellow">Discuss a Deal</a>
          </div>
        </div>
      </section>

      <section className="bp-section">
        <div className="bp-wrap">
          <p className="bp-section-label">The Lineup</p>
          <div className="bp-rule" />
          <h2>Pick the program that fits the file.</h2>
          <div className="bp-hub-grid">
            {programs.map((p) => (
              <a key={p.slug} href={`/broker-programs/${p.slug}`} className="bp-prog-card" style={{ borderTopColor: p.accent }}>
                <img className="bp-prog-img" src={p.image} alt={`${p.name} commercial property`} loading="lazy" />
                <div className="bp-prog-body">
                  <div className="bp-prog-eyebrow">{p.eyebrow}</div>
                  <div className="bp-prog-name">{p.name}</div>
                  <p className="bp-prog-tag">{p.tagline}</p>
                  <span className="bp-prog-link" style={{ color: p.accent }}>View Program →</span>
                </div>
              </a>
            ))}
          </div>
          <p className="bp-credit"><strong>Credit required.</strong> {CREDIT}</p>
        </div>
      </section>

      <BrokerFooter />
    </div>
  )
}
