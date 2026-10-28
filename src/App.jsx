import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  return (
    <main className="page">
      <nav className="nav">
        <a className="brand" href="/" aria-label="Launchpad home">
          <span className="brand-mark">L</span>
          <span>Launchpad</span>
        </a>
        <span className="status"><span className="status-dot" /> Deployment test</span>
      </nav>

      <section className="hero">
        <div className="eyebrow"><span /> YOUR FIRST LIVE REACT SITE</div>
        <h1>Build it.<br /><span>Ship it.</span></h1>
        <p className="intro">
          A small, working React website to test your GitHub and Vercel deployment.
          If you can see this page online, your frontend is live.
        </p>
        <div className="actions">
          <a className="button primary" href="#test">Test the website <span>↓</span></a>
          <a className="button secondary" href="https://vite.dev/" target="_blank" rel="noreferrer">Explore Vite ↗</a>
        </div>
        <div className="hero-note"><span className="check">✓</span> React + Vite <span className="separator">/</span> Ready to deploy</div>
      </section>

      <section className="test-panel" id="test">
        <div className="panel-heading">
          <div>
            <div className="eyebrow">INTERACTIVE DEMO</div>
            <h2>Check that it works</h2>
          </div>
          <span className="live-pill"><span /> LIVE</span>
        </div>
        <div className="demo-grid">
          <div className="demo-card counter-card">
            <div className="card-icon">＋</div>
            <h3>Button test</h3>
            <p>Click the button to check React interactivity.</p>
            <div className="counter">{count}</div>
            <button className="button primary full" onClick={() => setCount((n) => n + 1)}>
              Click counter
            </button>
            <button className="reset" onClick={() => setCount(0)}>Reset counter</button>
          </div>
          <div className="demo-card">
            <div className="card-icon">Aa</div>
            <h3>Input test</h3>
            <p>Type a name to test form input and state.</p>
            <label htmlFor="name">Your name</label>
            <input id="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your name" />
            <div className="greeting" aria-live="polite">
              {name.trim() ? `Hello, ${name.trim()}!` : 'Your greeting will appear here.'}
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span>Launchpad <span className="muted">· React deployment test</span></span>
        <span>Built with React + Vite</span>
      </footer>
    </main>
  )
}
