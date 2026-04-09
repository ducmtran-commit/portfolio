import { aboutHtml } from '../../content'

type Props = { hidden: boolean }

export function AboutPanel({ hidden }: Props) {
  return (
    <section
      id="panel-about"
      role="tabpanel"
      aria-labelledby="tab-about"
      hidden={hidden}
      className="panel panel--text"
    >
      <h2 className="panel-title">About</h2>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: aboutHtml }}
      />
    </section>
  )
}
