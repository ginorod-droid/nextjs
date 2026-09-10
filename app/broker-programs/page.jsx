// app/broker-programs/page.jsx
import { programs, bpStyles, BrokerNav, BrokerFooter, CAL } from './shared'

export const metadata = {
  title: 'Broker Programs | Commercial Loan Solutions | Acoma Capital Partners',
  description: 'Acoma broker programs: No Doc Streamline, Owner-Occupied Bank Statement, Multifamily, and DSCR commercial loan solutions. Fast reads on tough files.',
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
          <p className="bp-eyebrow" style={{ color: '#F6D200' }}>Commercial Loan Solutions</p>
          <h1 className="bp-h1">Broker<br />Programs.</h1>
          <p className="bp-hero-sub">Four ways to get a tough file done. When the tax returns, the DTI, or the bank box says no, one of these usually says yes.</p>
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
                <div className="bp-prog-eyebrow">{p.eyebrow}</div>
                <div className="bp-prog-name">{p.name}</div>
                <p className="bp-prog-tag">{p.tagline}</p>
                <span className="bp-prog-link" style={{ color: p.accent }}>View Program →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <BrokerFooter />
    </div>
  )
}
