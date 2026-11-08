---
layout: splash
title: "Archives"
permalink: /archives/
author_profile: true
---

<link rel="stylesheet" href="{{ '/assets/css/archives.css' | relative_url }}">

<div class="archive-studio" id="archive-studio">

  <header class="archive-intro">
    <div class="archive-kicker">
      /<span>2023 — PRESENT</span>
    </div>

    <h1>
      Visual Journal<span class="archive-period">.</span>
    </h1>
  </header>

  <nav class="archive-filters" aria-label="Filter photographs">
    <button
      type="button"
      class="archive-filter is-active"
      data-filter="all"
      aria-pressed="true"
    >
      All photographs
    </button>
  </nav>

  <!-- PHOTO GALLERY -->

  <div class="archive-gallery" id="archive-gallery">

    <figure
      class="archive-item"
      data-category="conferences"
      data-title="NITMB Workshop"
      data-meta="Chicago · November 2026"
    >

      <button
        class="archive-photo"
        type="button"
        aria-label="View NITMB Workshop photograph"
      >

        <img
          src="{{ '/images/archives/nitmb.jpg' | relative_url }}"
          alt="NITMB Workshop in Chicago, November 2026"
          loading="lazy"
          decoding="async"
        >

        <span class="archive-overlay">
          <strong>NITMB Workshop</strong>
          <small>Chicago · November 2026</small>
        </span>

      </button>

    </figure>

  </div>

  <p class="archive-empty" id="archive-empty" hidden>
    No photographs in this collection yet.
  </p>

  <footer class="archive-footer">
    A growing collection of moments worth remembering.
  </footer>

</div>


<!-- FULLSCREEN PHOTO VIEWER -->

<div
  class="archive-lightbox"
  id="archive-lightbox"
  role="dialog"
  aria-modal="true"
  aria-label="Photograph viewer"
  aria-hidden="true"
  hidden
>

  <button
    class="archive-close"
    type="button"
    aria-label="Close photograph viewer"
  >
    &times;
  </button>

  <button
    class="archive-prev"
    type="button"
    aria-label="Previous photograph"
  >
    &#8592;
  </button>

  <div class="archive-lightbox-content">

    <img id="archive-lightbox-image" alt="">

    <div class="archive-lightbox-caption">
      <strong id="archive-lightbox-title"></strong>
      <span id="archive-lightbox-meta"></span>
      <span id="archive-lightbox-count"></span>
    </div>

  </div>

  <button
    class="archive-next"
    type="button"
    aria-label="Next photograph"
  >
    &#8594;
  </button>

</div>

<script
  src="{{ '/assets/js/archives.js' | relative_url }}"
  defer
></script>
