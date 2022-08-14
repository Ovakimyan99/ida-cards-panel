export function disableScroll() {
  const body = window.document.body
  body.dbscrollY = window.scrollY
  body.style.cssText = `
  position: fixed;
  left: 0;
  top: ${~window.scrollY}px;
  max-height: 100vh;
  width: 100%;
  overflow: hidden;
  `
}

export function enablesScroll() {
  const body = window.document.body
  body.style.cssText = ''
  window.scroll({ top: document.body.dbscrollY })
}
