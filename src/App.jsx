import './App.css'

// Featured company pages. Companies pay for a page and post deals;
// shoppers follow the brands they love. React builds one card per company.
const companies = [
  { emoji: '👟', name: 'Stride', deal: '20% off all running shoes', followers: '12.4k' },
  { emoji: '🍔', name: 'BunHouse', deal: 'Free fries with any burger', followers: '8.1k' },
  { emoji: '🎮', name: 'PixelPlay', deal: '£10 off games over £40', followers: '23.7k' },
  { emoji: '☕', name: 'Bean & Co', deal: 'Buy 9 coffees, get 1 free', followers: '5.6k' },
  { emoji: '👕', name: 'Thread', deal: 'Buy one tee, get one half price', followers: '15.2k' },
  { emoji: '📚', name: 'PagePlus', deal: '3 for 2 on all books', followers: '9.9k' },
]

function App() {
  return (
    <div className="app">
      <header className="nav">
        <div className="brand">
          <svg className="logo" viewBox="0 0 44 32" role="img" aria-label="Market Me logo">
            <mask id="mm-cut">
              <rect x="0" y="0" width="44" height="32" fill="white" />
              <circle cx="8" cy="16" r="2.1" fill="black" />
              <text
                x="10.5"
                y="22"
                fontFamily="system-ui, Arial, sans-serif"
                fontSize="16"
                fontWeight="900"
                fill="black"
              >
                MM
              </text>
            </mask>
            <path
              d="M13 5 H38 Q41 5 41 8 V24 Q41 27 38 27 H13 L3 16 Z"
              fill="currentColor"
              mask="url(#mm-cut)"
            />
          </svg>
          Market Me
        </div>
        <nav className="nav-links">
          <a href="#">Browse</a>
          <a href="#">For business</a>
        </nav>
      </header>

      <section className="hero">
        <span className="hero-badge">✦ New deals every day</span>
        <h1 className="hero-title">Follow your favourite brands. Never miss a deal.</h1>
        <p className="hero-sub">
          Follow the companies you love and never miss a deal — or claim your
          business page and reach shoppers who already want to buy from you.
        </p>
        <div className="hero-actions">
          <button className="cta">Start following</button>
          <button className="cta cta-secondary">Claim your page</button>
        </div>
      </section>

      <section className="section-head">
        <h2 className="section-title">Featured pages</h2>
        <p className="section-sub">Companies on Market Me, posting deals right now.</p>
      </section>

      <section className="grid">
        {companies.map((company) => (
          <article className="card" key={company.name}>
            <div className="card-emoji">{company.emoji}</div>
            <h3 className="card-title">{company.name}</h3>
            <p className="card-deal">{company.deal}</p>
            <div className="card-meta">
              <span className="followers">{company.followers} followers</span>
              <button className="follow-btn">Follow</button>
            </div>
          </article>
        ))}
      </section>

      <footer className="footer">Market Me · built by Rhys · Shipyard summer</footer>
    </div>
  )
}

export default App
