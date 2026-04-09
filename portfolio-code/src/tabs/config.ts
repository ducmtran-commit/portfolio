/** Tab buttons — labels shown in the nav. */

export type TabId = 'artworks' | 'about' | 'statements'

export const tabs: { id: TabId; label: string }[] = [
  { id: 'artworks', label: 'artworks' },
  { id: 'about', label: 'about' },
  { id: 'statements', label: 'artist statements' },
]
