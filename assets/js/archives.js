(function () {
  'use strict';
  function init() {
    const root = document.getElementById('archive-studio');
    const modal = document.getElementById('archive-lightbox');
    if (!root || !modal) return;
    // Theme containers can clip position:fixed descendants.
    document.body.appendChild(modal);
    const items = Array.from(root.querySelectorAll('.archive-item'));
    const filters = Array.from(root.querySelectorAll('.archive-filter'));
    const empty = root.querySelector('#archive-empty');
    const photo = modal.querySelector('#archive-lightbox-image');
    const title = modal.querySelector('#archive-lightbox-title');
    const meta = modal.querySelector('#archive-lightbox-meta');
    const count = modal.querySelector('#archive-lightbox-count');
    const closeButton = modal.querySelector('.archive-close');
    let visible = items.slice();
    let index = 0;
    let previousFocus = null;

    function filterBy(category) {
      filters.forEach(button => {
        const active = button.dataset.filter === category;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
      });
      items.forEach(item => { item.hidden = category !== 'all' && item.dataset.category !== category; });
      visible = items.filter(item => !item.hidden);
      empty.hidden = visible.length !== 0;
      if (!modal.hidden) close();
    }

    function render() {
      if (!visible.length) return;
      const item = visible[index];
      const img = item.querySelector('img');
      photo.src = img.currentSrc || img.src;
      photo.alt = img.alt;
      title.textContent = item.dataset.title || '';
      meta.textContent = item.dataset.meta || '';
      count.textContent = `${index + 1} / ${visible.length}`;
    }

    function open(item) {
      index = visible.indexOf(item);
      if (index < 0) return;
      previousFocus = document.activeElement;
      render();
      modal.hidden = false;
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('archive-lightbox-open');
      closeButton.focus();
    }

    function close() {
      modal.hidden = true;
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('archive-lightbox-open');
      photo.removeAttribute('src');
      if (previousFocus && previousFocus.isConnected) previousFocus.focus();
    }

    function move(step) {
      if (!visible.length) return;
      index = (index + step + visible.length) % visible.length;
      render();
    }

    filters.forEach(button => button.addEventListener('click', () => filterBy(button.dataset.filter)));
    items.forEach(item => item.querySelector('.archive-photo').addEventListener('click', () => open(item)));
    closeButton.addEventListener('click', close);
    modal.querySelector('.archive-prev').addEventListener('click', () => move(-1));
    modal.querySelector('.archive-next').addEventListener('click', () => move(1));
    modal.addEventListener('click', event => { if (event.target === modal) close(); });
    document.addEventListener('keydown', event => {
      if (modal.hidden) return;
      if (event.key === 'Escape') close();
      else if (event.key === 'ArrowLeft') move(-1);
      else if (event.key === 'ArrowRight') move(1);
      else if (event.key === 'Tab') {
        const controls = [closeButton, modal.querySelector('.archive-prev'), modal.querySelector('.archive-next')];
        const current = controls.indexOf(document.activeElement);
        if (event.shiftKey && (current === 0 || current === -1)) { event.preventDefault(); controls[controls.length - 1].focus(); }
        else if (!event.shiftKey && current === controls.length - 1) { event.preventDefault(); controls[0].focus(); }
      }
    });
    // Simple swipe support for touch devices.
    let startX = null;
    modal.addEventListener('touchstart', e => { startX = e.changedTouches[0].clientX; }, {passive:true});
    modal.addEventListener('touchend', e => {
      if (startX === null) return;
      const delta = e.changedTouches[0].clientX - startX;
      if (Math.abs(delta) > 55) move(delta > 0 ? -1 : 1);
      startX = null;
    }, {passive:true});
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
