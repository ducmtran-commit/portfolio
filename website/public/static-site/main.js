;(function () {
  const c = window.portfolioContent
  if (!c) {
    console.error('portfolioContent missing — load content.js before main.js')
    return
  }

  const TAB_IDS = ['artworks', 'about', 'statements']

  function renderHeader() {
    const sub = document.getElementById('site-subtitle')
    const name = document.getElementById('site-name')
    const tag = document.getElementById('site-tagline')
    if (sub) sub.textContent = c.site.subtitle
    if (name) name.textContent = c.site.name
    if (tag) {
      tag.textContent = c.site.tagline || ''
    }

    const footerName = document.getElementById('footer-name')
    const footerYear = document.getElementById('footer-year')
    if (footerName) footerName.textContent = c.site.name
    if (footerYear) footerYear.textContent = String(new Date().getFullYear())
  }

  function renderTabs() {
    const nav = document.getElementById('tablist')
    if (!nav || !c.tabs) return
    nav.innerHTML = ''
    c.tabs.forEach(function (t) {
      const btn = document.createElement('button')
      btn.type = 'button'
      btn.setAttribute('role', 'tab')
      btn.id = 'tab-' + t.id
      btn.setAttribute('aria-controls', 'panel-' + t.id)
      btn.tabIndex = 0
      btn.className = 'tab'
      btn.dataset.tabId = t.id
      btn.textContent = t.label
      nav.appendChild(btn)
    })
  }

  function renderArtworks() {
    const intro = document.getElementById('works-intro')
    const list = document.getElementById('art-grid')
    if (!list) return

    if (intro) {
      intro.textContent = c.worksIntro || ''
    }

    list.innerHTML = ''
    ;(c.artworks || []).forEach(function (a, i) {
      const li = document.createElement('li')
      li.className = 'art-card'

      const thumb = document.createElement('div')
      thumb.className = 'art-thumb'
      thumb.style.setProperty('--hue', String((i * 47) % 360))

      if (a.imageSrc) {
        const img = document.createElement('img')
        img.src = a.imageSrc
        img.alt = a.imageAlt || a.title || ''
        img.loading = 'lazy'
        thumb.appendChild(img)
      }

      const meta = document.createElement('div')
      meta.className = 'art-meta'

      const h2 = document.createElement('h2')
      h2.className = 'art-title'
      h2.textContent = a.title

      const p = document.createElement('p')
      p.className = 'art-detail'
      p.textContent = a.year + ' · ' + a.medium

      meta.appendChild(h2)
      meta.appendChild(p)
      li.appendChild(thumb)
      li.appendChild(meta)
      list.appendChild(li)
    })
  }

  function renderProse() {
    const aboutEl = document.getElementById('about-body')
    const stmtEl = document.getElementById('statements-body')
    if (aboutEl) aboutEl.innerHTML = c.aboutHtml
    if (stmtEl) stmtEl.innerHTML = c.statementsHtml
  }

  function setTab(activeId) {
    TAB_IDS.forEach(function (id) {
      const panel = document.getElementById('panel-' + id)
      const tab = document.getElementById('tab-' + id)
      const on = id === activeId
      if (panel) panel.hidden = !on
      if (tab) {
        tab.setAttribute('aria-selected', on ? 'true' : 'false')
        tab.classList.toggle('tab--active', on)
      }
    })
  }

  function wireTabs() {
    const nav = document.getElementById('tablist')
    if (!nav) return
    nav.addEventListener('click', function (e) {
      const btn = e.target.closest('button[data-tab-id]')
      if (!btn || !nav.contains(btn)) return
      setTab(btn.dataset.tabId)
    })
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderHeader()
    renderTabs()
    renderArtworks()
    renderProse()
    wireTabs()
    setTab('artworks')
  })
})()
