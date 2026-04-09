import { useState } from 'react'
import { site } from './content'
import {
  AboutPanel,
  ArtistStatementsPanel,
  ArtworksPanel,
  type TabId,
  tabs,
} from './tabs'
import './App.css'

function App() {
  const [tab, setTab] = useState<TabId>('artworks')

  return (
    <div className="site">
      <div className="accent-bar" aria-hidden="true" />

      <header className="header">
        <div className="header-top">
          <div className="brand">
            <p className="site-subtitle">{site.subtitle}</p>
            <h1 className="site-name">{site.name}</h1>
            {site.tagline ? (
              <p className="site-tagline">{site.tagline}</p>
            ) : null}
          </div>
          <nav className="tabs" role="tablist" aria-label="Portfolio sections">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={tab === t.id}
                aria-controls={`panel-${t.id}`}
                tabIndex={0}
                className={`tab ${tab === t.id ? 'tab--active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="main">
        <ArtworksPanel hidden={tab !== 'artworks'} />
        <AboutPanel hidden={tab !== 'about'} />
        <ArtistStatementsPanel hidden={tab !== 'statements'} />
      </main>

      <footer className="footer">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
      </footer>
    </div>
  )
}

export default App
