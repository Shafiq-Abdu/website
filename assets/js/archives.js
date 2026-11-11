(() => {
  'use strict';
  const gallery = document.getElementById('archive-gallery');
  const lightbox = document.getElementById('archive-lightbox');
  if (!gallery || !lightbox) return;
  // Move out of theme containers to avoid clipping or stacking-context problems.
  document.body.appendChild(lightbox);
  const items = Array.from(gallery.querySelectorAll('.archive-item'));
  const filters = Array.from(document.querySelectorAll('.archive-filter'));
  const empty = document.getElementById('archive-empty');
  const mediaBox = document.getElementById('archive-lightbox-media');
  const title = document.getElementById('archive-lightbox-title');
  const meta = document.getElementById('archive-lightbox-meta');
  const count = document.getElementById('archive-lightbox-count');
  const prev = lightbox.querySelector('.archive-prev');
  const next = lightbox.querySelector('.archive-next');
  const close = lightbox.querySelector('.archive-close');
  let visible = items.slice(), index = 0, returnFocus = null;
  function applyFilter(value) {
    visible = items.filter(item => value === 'all' || item.dataset.category === value);
    items.forEach(item => { item.hidden = !visible.includes(item); });
    filters.forEach(button => {
      const active = button.dataset.filter === value;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    if (empty) empty.hidden = visible.length > 0;
    if (!lightbox.hidden) hide();
  }
  function render() {
    const item = visible[index];
    if (!item) return;
    mediaBox.replaceChildren();
    const source = item.querySelector(item.dataset.kind === 'video' ? 'video source' : 'img');
    if (!source) return;
    let media;
    if (item.dataset.kind === 'video') {
      media = document.createElement('video');
      media.src = source.src;
      media.controls = true;
      media.playsInline = true;
      media.preload = 'metadata';
      // No autoplay: users decide when to play a memory video.
    } else {
      media = document.createElement('img');
      media.src = source.currentSrc || source.src;
      media.alt = item.querySelector('img')?.alt || item.dataset.title || 'Archive photograph';
    }
    mediaBox.appendChild(media);
    title.textContent = item.dataset.title || '';
    meta.textContent = item.dataset.meta || '';
    count.textContent = `${index + 1} / ${visible.length}`;
    prev.hidden = next.hidden = visible.length <= 1;
  }
  function show(item) {
    const i = visible.indexOf(item);
    if (i < 0) return;
    returnFocus = document.activeElement;
    index = i;
    lightbox.hidden = false;
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('archive-modal-open');
    render();
    close.focus();
  }
  function hide() {
    mediaBox.replaceChildren(); // stops video playback
    lightbox.hidden = true;
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('archive-modal-open');
    if (returnFocus?.isConnected) returnFocus.focus();
  }
  function move(delta) {
    if (!visible.length) return;
    index = (index + delta + visible.length) % visible.length;
    render();
  }
  filters.forEach(button => button.addEventListener('click', () => applyFilter(button.dataset.filter)));
  items.forEach(item => item.querySelector('.archive-photo')?.addEventListener('click', () => show(item)));
  close.addEventListener('click', hide);
  prev.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  lightbox.addEventListener('click', event => { if (event.target === lightbox) hide(); });
  document.addEventListener('keydown', event => {
    if (lightbox.hidden) return;
    if (event.key === 'Escape') hide();
    else if (event.key === 'ArrowLeft') move(-1);
    else if (event.key === 'ArrowRight') move(1);
    else if (event.key === 'Tab') {
      const controls = [close, prev, next].filter(el => !el.hidden);
      const focusables = [...controls, ...mediaBox.querySelectorAll('video[controls]')];
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  applyFilter('all');
})();
