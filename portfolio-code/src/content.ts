/** Edit this file to personalize your portfolio. */

export const site = {
  name: 'Your Name',
  subtitle: 'Visual artist',
  tagline: 'Paintings, works on paper, and studies of light in quiet rooms.',
}

export const worksIntro = 'Selected works'

export type Artwork = {
  id: string
  title: string
  year: string
  medium: string
  imageSrc?: string
}

export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Study in Blue',
    year: '2025',
    medium: 'Acrylic on panel',
  },
  {
    id: '2',
    title: 'Interior Light',
    year: '2024',
    medium: 'Oil on linen',
  },
  {
    id: '3',
    title: 'Walking Figure',
    year: '2024',
    medium: 'Charcoal and ink',
  },
  {
    id: '4',
    title: 'Untitled (Garden)',
    year: '2023',
    medium: 'Watercolor',
  },
]

export const aboutHtml = `
<p>I work between observation and memory—building images that hold stillness and small shifts of light.</p>
<p>Replace this text in <code>src/content.ts</code> with your biography, education, exhibitions, or contact details.</p>
`

export const statementsHtml = `
<p><em>On process</em> — I return to the same motifs until they loosen: a window, a figure turning away, the edge of a room.</p>
<p><em>On materials</em> — Surface matters as much as image. Note supports, scale, and what you want viewers to feel before they read the title.</p>
`
