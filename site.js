// Shows the English or Hindi text on every page and remembers the choice.
(function () {
  var buttons = document.querySelectorAll('.lang button');
  function setLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-en]').forEach(function (el) { el.hidden = lang !== 'en'; });
    document.querySelectorAll('[data-hi]').forEach(function (el) { el.hidden = lang !== 'hi'; });
    buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.set === lang)); });
    try { localStorage.setItem('dawasaathi-lang', lang); } catch (e) {}
  }
  buttons.forEach(function (b) { b.addEventListener('click', function () { setLang(b.dataset.set); }); });
  var start = new URLSearchParams(location.search).get('lang');
  if (!start) {
    try { start = localStorage.getItem('dawasaathi-lang'); } catch (e) {}
  }
  setLang(start === 'hi' ? 'hi' : 'en');
})();
