// Carga no bloqueante de Google Fonts sin requerir 'unsafe-inline' en script-src.
// Reemplaza el atributo inline onload="this.media='all'" del <link> de fuentes.
document.querySelectorAll('link[data-font-swap]').forEach((link) => {
  link.addEventListener('load', () => { link.media = 'all' }, { once: true })
})
