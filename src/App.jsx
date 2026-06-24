import { useState, useEffect } from 'react'
import './App.css'
import { supabase } from './supabaseClient'

function App() {
  // The companies now come from the database, not a fixed list in the code.
  const [companies, setCompanies] = useState([])

  // When the page first loads, fetch the companies from Supabase once.
  useEffect(() => {
    async function loadCompanies() {
      const { data, error } = await supabase
        .from('companies')
        .select('*')
        .order('id')

      if (error) {
        console.error('Could not load companies:', error)
      } else {
        setCompanies(data)
      }
    }

    loadCompanies()
  }, [])

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
        <h1 className="hero-title">All your favourite brands, all their best deals</h1>
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
          <article className="card" key={company.id}>
            <div className="card-emoji">{company.emoji}</div>
            <h3 className="card-title">{company.name}</h3>
            <p className="card-deal">{company.deal}</p>
            <div className="card-meta">
              <span className="followers">
                {Number(company.followers).toLocaleString()} followers
              </span>
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
