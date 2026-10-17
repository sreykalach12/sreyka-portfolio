/* Page intro: runs synchronously right after the #intro markup so the
   curtain is decided before first paint. Shown once per browser session;
   click, Enter, Space or Escape skips it. */
(function () {
  var intro = document.getElementById('intro');
  var root = document.documentElement;
  var seen = false;
  try { seen = sessionStorage.getItem('intro-seen') === '1'; } catch (e) {}
  if (seen) { intro.parentNode.removeChild(intro); return; }

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var km = true;
  try { km = localStorage.getItem('site-lang') !== 'en'; } catch (e) {}

  // Khmer is split by word (splitting letters would break its stacked
  // consonants); English letter by letter.
  var name = km ? 'ឡាច ស្រីកា' : 'Sreyka Lach';
  var parts = km ? name.split(/( )/) : name.split('');
  var nameEl = intro.querySelector('.intro-name');
  nameEl.setAttribute('aria-label', name);
  parts.forEach(function (p, i) {
    var s = document.createElement('span');
    s.className = 'intro-char';
    s.setAttribute('aria-hidden', 'true');
    s.style.setProperty('--i', i);
    s.textContent = p;
    nameEl.appendChild(s);
  });
  intro.querySelector('.intro-role').textContent = km ? 'អ្នករចនា UI/UX ច្នៃប្រឌិត' : 'Creative UI/UX Designer';
  intro.hidden = false;
  root.classList.add('intro-active');

  var done = false;
  function leave() {
    if (done) return;
    done = true;
    try { sessionStorage.setItem('intro-seen', '1'); } catch (e) {}
    root.classList.remove('intro-active');
    root.classList.add('intro-reveal');
    intro.classList.add('is-leaving');
    document.removeEventListener('keydown', onKey);
    setTimeout(function () {
      if (intro.parentNode) intro.parentNode.removeChild(intro);
      root.classList.remove('intro-reveal');
    }, 1100);
  }
  function onKey(e) {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') leave();
  }

  // Hold until the bar has filled and the page has loaded, but never
  // longer than 4s on a slow connection.
  var minTime = reduce ? 700 : 1900;
  var start = Date.now();
  function whenLoaded() { setTimeout(leave, Math.max(0, minTime - (Date.now() - start))); }
  if (document.readyState === 'complete') whenLoaded();
  else window.addEventListener('load', whenLoaded);
  setTimeout(leave, 4000);
  intro.addEventListener('click', leave);
  document.addEventListener('keydown', onKey);
})();
