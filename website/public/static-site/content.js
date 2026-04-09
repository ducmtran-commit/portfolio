/**
 * Static portfolio copy — edit here.
 * File path: public/static-site/content.js
 *
 * For images from the upload tool, use a root path so it works with the dev server, e.g.:
 *   imageSrc: '/uploads/1730000000000-myfile.jpg'
 */
window.portfolioContent = {
  site: {
    name: 'Your Name',
    subtitle: 'Visual artist',
    tagline: 'Paintings, works on paper, and studies of light in quiet rooms.',
  },

  worksIntro: 'Selected works',

  tabs: [
    { id: 'artworks', label: 'artworks' },
    { id: 'about', label: 'about' },
    { id: 'statements', label: 'artist statements' },
  ],

  artworks: [
    {
      id: 'clownfish',
      title: 'See What I Found — A Clownfish',
      year: '2026',
      medium: 'Digital illustration',
      imageSrc: 'art/clownfish.png',
      imageAlt:
        'Digital illustration of a clownfish with clown makeup and the text See What I Found, A Clownfish',
    },
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
  ],

  aboutHtml: `
<p>I work between observation and memory—building images that hold stillness and small shifts of light.</p>
<p>Replace this text in <code>public/static-site/content.js</code> with your biography, education, exhibitions, or contact details.</p>
`,

  statementsHtml: `
<p><em>On process</em> — I return to the same motifs until they loosen: a window, a figure turning away, the edge of a room.</p>
<p><em>On materials</em> — Surface matters as much as image. Note supports, scale, and what you want viewers to feel before they read the title.</p>
`,
}
