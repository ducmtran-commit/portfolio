/** Tab ids and nav labels — edit labels here to change the tab buttons. */

export type TabId = 'artworks' | 'about' | 'statements'

export const tabs: { id: TabId; label: string }[] = [
  { id: 'artworks', label: 'Artworks' },
  { id: 'about', label: 'About' },
  { id: 'statements', label: 'Artist statements' },
]
