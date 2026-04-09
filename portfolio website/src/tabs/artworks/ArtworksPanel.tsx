import type { CSSProperties } from 'react'
import { artworks, worksIntro } from '../../content'

type Props = { hidden: boolean }

export function ArtworksPanel({ hidden }: Props) {
  return (
    <section
      id="panel-artworks"
      role="tabpanel"
      aria-labelledby="tab-artworks"
      hidden={hidden}
      className="panel panel--works"
    >
      {worksIntro ? <p className="works-intro">{worksIntro}</p> : null}
      <ul className="art-grid">
        {artworks.map((a, i) => (
          <li key={a.id} className="art-card">
            <div
              className="art-thumb"
              style={{ '--hue': `${(i * 47) % 360}` } as CSSProperties}
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
  )
}
