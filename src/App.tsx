import { useState } from 'react'
import { aboutHtml, artworks, site, statementsHtml } from './content'
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
      <header className="header">
        <div className="brand">
          <h1 className="site-name">{site.name}</h1>
          <p className="site-subtitle">{site.subtitle}</p>
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
              tabIndex={tab === t.id ? 0 : -1}
              className={`tab ${tab === t.id ? 'tab--active' : ''}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="main">
        <section
          id="panel-artworks"
          role="tabpanel"
          aria-labelledby="tab-artworks"
          hidden={tab !== 'artworks'}
          className="panel"
        >
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
          className="panel prose"
        >
          <div dangerouslySetInnerHTML={{ __html: aboutHtml }} />
        </section>

        <section
          id="panel-statements"
          role="tabpanel"
          aria-labelledby="tab-statements"
          hidden={tab !== 'statements'}
          className="panel prose"
        >
          <div dangerouslySetInnerHTML={{ __html: statementsHtml }} />
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {site.name}</span>
      </footer>
    </div>
  )
}

export default App
