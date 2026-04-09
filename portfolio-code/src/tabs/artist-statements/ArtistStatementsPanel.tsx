import { statementsHtml } from '../../content'

type Props = { hidden: boolean }

export function ArtistStatementsPanel({ hidden }: Props) {
  return (
    <section
      id="panel-statements"
      role="tabpanel"
      aria-labelledby="tab-statements"
      hidden={hidden}
      className="panel panel--text"
    >
      <h2 className="panel-title">Artist statements</h2>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: statementsHtml }}
      />
    </section>
  )
}
