import { useState } from 'react'
import {
  aboutHtml,
  artworks,
  site,
  statementsHtml,
  worksIntro,
} from './content'
import './App.css'

type TabId = 'artworks' | 'about' | 'statements'

const tabs: { id: TabId; label: string }[] = [
  { id: 'artworks', label: 'Artworks' },
  { id: 'about', label: 'About' },
  { id: 'statements', label: 'Artist Statements' },
]

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
        <section
          id="panel-artworks"
          role="tabpanel"
          aria-labelledby="tab-artworks"
          hidden={tab !== 'artworks'}
          className="panel panel--works"
        >
          {worksIntro ? (
            <p className="works-intro">{worksIntro}</p>
          ) : null}
          <ul className="art-grid">
            {artworks.map((a, i) => (
              <li key={a.id} className="art-card">
                <div
                  className="art-thumb"
                  style={{ '--hue': `${(i * 47) % 360}` } as React.CSSProperties}
                >
                  {a.imageSrc ? (
                    <img src={a.imageSrc} alt="" loading="lazy" />
                  ) : null}
                </div>
                <div className="art-meta">
                  <h2 className="art-title">{a.title}</h2>
                  <p className="art-detail">
                    {a.year} · {a.medium}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="panel-about"
          role="tabpanel"
          aria-labelledby="tab-about"
          hidden={tab !== 'about'}
          className="panel panel--text"
        >
          <h2 className="panel-title">About</h2>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: aboutHtml }}
          />
        </section>

        <section
          id="panel-statements"
          role="tabpanel"
          aria-labelledby="tab-statements"
          hidden={tab !== 'statements'}
          className="panel panel--text"
        >
          <h2 className="panel-title">Artist statements</h2>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: statementsHtml }}
          />
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {site.name}</span>
      </footer>
    </div>
  )
}

export default App
