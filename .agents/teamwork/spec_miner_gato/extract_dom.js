// extract_dom.js
(() => {
  const result = {};

  // 1. Title, meta
  result.title = document.title;
  result.meta = Array.from(document.querySelectorAll('meta')).map(m => ({
    name: m.getAttribute('name'),
    property: m.getAttribute('property'),
    content: m.getAttribute('content')
  }));

  // 2. Sections
  const sections = Array.from(document.querySelectorAll('section, header, footer, nav, main, aside, form'));
  result.tagSummary = sections.map(s => ({
    tagName: s.tagName,
    id: s.id,
    className: s.className,
    textSnippet: s.innerText?.slice(0, 100)
  }));

  // 3. All headings
  result.headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => ({
    tag: h.tagName,
    text: h.innerText?.trim(),
    className: h.className
  }));

  // 4. Links and buttons
  result.interactiveElements = Array.from(document.querySelectorAll('a, button, input, select, textarea')).map(el => ({
    tag: el.tagName,
    type: el.type,
    text: el.innerText?.trim() || el.value || el.placeholder,
    href: el.href,
    className: el.className,
    name: el.name,
    id: el.id
  }));

  return JSON.stringify(result, null, 2);
})();
