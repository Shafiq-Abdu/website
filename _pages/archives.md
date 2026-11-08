---
layout: splash
title: "The Archives"
permalink: /archives/
author_profile: true
---

<link rel="stylesheet" href="{{ '/assets/css/archives.css' | relative_url }}">

<div class="archive-studio" id="archive-studio">
  <header class="archive-intro">
    <div class="archive-kicker">/<span>2023 — PRESENT</span></div>
    <h1>Visual Journal<span class="archive-period">.</span></h1>
  </header>

  <nav class="archive-filters" aria-label="Filter photographs">
    <button type="button" class="archive-filter is-active" data-filter="all" aria-pressed="true">All photographs</button>
  </nav>

  <!-- Replace these sample paths with files in your GitHub /images/archives/ folder.
       Add more <figure> blocks using the same pattern. -->
  <div class="archive-gallery" id="archive-gallery">
    <figure class="archive-item" data-category="conferences" data-title="Conference conversations" data-meta="Conference · 2026">
      <button class="archive-photo" type="button" aria-label="View Conference conversations">
        <img src="{{ '/images/archives/nitmb.jpg' | relative_url }}" alt="Conference gathering" loading="lazy" decoding="async">
        <span class="archive-overlay"><strong>Conference conversations</strong><small>Conference · 2026</small></span>
      </button>
    </figure>
    <figure class="archive-item" data-category="research" data-title="Ideas on the board" data-meta="Research life · 2026">
      <button class="archive-photo" type="button" aria-label="View Ideas on the board">
        <img src="{{ '/images/archives/research-01.jpg' | relative_url }}" alt="Mathematics on a chalkboard" loading="lazy" decoding="async">
        <span class="archive-overlay"><strong>Ideas on the board</strong><small>Research life · 2026</small></span>
      </button>
    </figure>
    <figure class="archive-item" data-category="workshops" data-title="Learning together" data-meta="Workshop · 2026">
      <button class="archive-photo" type="button" aria-label="View Learning together">
        <img src="{{ '/images/archives/workshop-01.jpg' | relative_url }}" alt="Academic workshop" loading="lazy" decoding="async">
        <span class="archive-overlay"><strong>Learning together</strong><small>Workshop · 2026</small></span>
      </button>
    </figure>
    <figure class="archive-item" data-category="moments" data-title="Between sessions" data-meta="Moments · 2026">
      <button class="archive-photo" type="button" aria-label="View Between sessions">
        <img src="{{ '/images/archives/moment-01.jpg' | relative_url }}" alt="Travel and campus moment" loading="lazy" decoding="async">
        <span class="archive-overlay"><strong>Between sessions</strong><small>Moments · 2026</small></span>
      </button>
    </figure>
    <figure class="archive-item" data-category="conferences" data-title="New perspectives" data-meta="Conference · 2026">
      <button class="archive-photo" type="button" aria-label="View New perspectives">
        <img src="{{ '/images/archives/conference-02.jpg' | relative_url }}" alt="Conference presentation" loading="lazy" decoding="async">
        <span class="archive-overlay"><strong>New perspectives</strong><small>Conference · 2026</small></span>
      </button>
    </figure>
    <figure class="archive-item" data-category="workshops" data-title="At the workshop" data-meta="Workshop · 2025">
      <button class="archive-photo" type="button" aria-label="View At the workshop">
        <img src="{{ '/images/archives/workshop-02.jpg' | relative_url }}" alt="Workshop activity" loading="lazy" decoding="async">
        <span class="archive-overlay"><strong>At the workshop</strong><small>Workshop · 2025</small></span>
      </button>
    </figure>
  </div>
  <p class="archive-empty" id="archive-empty" hidden>No photographs in this collection yet.</p>
  <footer class="archive-footer">A growing collection of moments worth remembering.</footer>
</div>

<!-- Modal is moved to <body> by JS to avoid theme layout clipping. -->
<div class="archive-lightbox" id="archive-lightbox" role="dialog" aria-modal="true" aria-label="Photograph viewer" aria-hidden="true" hidden>
  <button class="archive-close" type="button" aria-label="Close photograph viewer">&times;</button>
  <button class="archive-prev" type="button" aria-label="Previous photograph">&#8592;</button>
  <div class="archive-lightbox-content">
    <img id="archive-lightbox-image" alt="">
    <div class="archive-lightbox-caption"><strong id="archive-lightbox-title"></strong><span id="archive-lightbox-meta"></span><span id="archive-lightbox-count"></span></div>
  </div>
  <button class="archive-next" type="button" aria-label="Next photograph">&#8594;</button>
</div>
<script src="{{ '/assets/js/archives.js' | relative_url }}" defer></script>

