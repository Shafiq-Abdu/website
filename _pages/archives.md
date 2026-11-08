---
layout: splash
title: "Archives"
permalink: /archives/
author_profile: true
---

<link rel="stylesheet" href="{{ '/assets/css/archives.css' | relative_url }}">

<div class="archive-studio" id="archive-studio">

  <!-- HEADER -->
  <header class="archive-intro">
    <div class="archive-kicker">
      / <span>THE PERSONAL ARCHIVE</span>
    </div>

    <h1>
      Visual Journal<span class="archive-period">.</span>
    </h1>

    <p class="archive-subtitle">
      Fragments of learning, discovery, and life along the way.
    </p>
  </header>

  <!-- CATEGORY FILTERS -->
  <nav class="archive-filters" aria-label="Filter photographs and videos">

    <button class="archive-filter is-active" type="button"
      data-filter="all" aria-pressed="true">All</button>

    <button class="archive-filter" type="button"
      data-filter="school" aria-pressed="false">School</button>

    <button class="archive-filter" type="button"
      data-filter="undergraduate" aria-pressed="false">Undergraduate</button>

    <button class="archive-filter" type="button"
      data-filter="masters" aria-pressed="false">Master's</button>

    <button class="archive-filter" type="button"
      data-filter="research" aria-pressed="false">Research</button>

    <button class="archive-filter" type="button"
      data-filter="teaching" aria-pressed="false">Teaching</button>

    <button class="archive-filter" type="button"
      data-filter="conferences" aria-pressed="false">Conferences</button>

    <button class="archive-filter" type="button"
      data-filter="workshops" aria-pressed="false">Workshops</button>

    <button class="archive-filter" type="button"
      data-filter="moments" aria-pressed="false">Moments</button>

  </nav>

  <!-- PHOTO AND VIDEO GALLERY -->
  <div class="archive-gallery" id="archive-gallery">

    <!-- 01. PORTRAIT -->
    <figure class="archive-item"
      data-category="moments"
      data-title="Portrait"
      data-meta="Personal Memories"
      data-kind="image">

      <button class="archive-photo" type="button"
        aria-label="Open Portrait">
        <img src="{{ '/images/archives/me.jpg' | relative_url }}"
          alt="Portrait" loading="lazy" decoding="async">

        <span class="archive-overlay">
          <strong>Portrait</strong>
          <small>Personal Memories</small>
        </span>
      </button>
    </figure>

    <!-- 02. IITM -->
    <figure class="archive-item"
      data-category="masters"
      data-title="IITM"
      data-meta="Master's Memories"
      data-kind="image">

      <button class="archive-photo" type="button"
        aria-label="Open IITM">
        <img src="{{ '/images/archives/iitm.jpeg' | relative_url }}"
          alt="IITM" loading="lazy" decoding="async">

        <span class="archive-overlay">
          <strong>IITM</strong>
          <small>Master's Memories</small>
        </span>
      </button>
    </figure>

    <!-- 03. TEACHING SCHOOL STUDENTS -->
    <figure class="archive-item"
      data-category="teaching"
      data-title="Teaching School Students"
      data-meta="Teaching"
      data-kind="image">

      <button class="archive-photo" type="button"
        aria-label="Open Teaching School Students">
        <img src="{{ '/images/archives/teachingschoolstudents.jpg' | relative_url }}"
          alt="Teaching School Students" loading="lazy" decoding="async">

        <span class="archive-overlay">
          <strong>Teaching School Students</strong>
          <small>Teaching</small>
        </span>
      </button>
    </figure>

    <!-- 04. UNDERGRADUATE STUDY ROOM -->
    <figure class="archive-item"
      data-category="undergraduate"
      data-title="Study Room"
      data-meta="Undergraduate Memories"
      data-kind="image">

      <button class="archive-photo" type="button"
        aria-label="Open Study Room">
        <img src="{{ '/images/archives/ugstudyroom.jpeg' | relative_url }}"
          alt="Undergraduate Study Room" loading="lazy" decoding="async">

        <span class="archive-overlay">
          <strong>Study Room</strong>
          <small>Undergraduate Memories</small>
        </span>
      </button>
    </figure>

    <!-- 05. EIGENVALUES PRESENTATION -->
    <figure class="archive-item"
      data-category="research"
      data-title="Eigenvalues Presentation"
      data-meta="Academic Presentations"
      data-kind="image">

      <button class="archive-photo" type="button"
        aria-label="Open Eigenvalues Presentation">
        <img src="{{ '/images/archives/eigenvaluespresentation.jpeg' | relative_url }}"
          alt="Eigenvalues Presentation" loading="lazy" decoding="async">

        <span class="archive-overlay">
          <strong>Eigenvalues Presentation</strong>
          <small>Academic Presentations</small>
        </span>
      </button>
    </figure>

    <!-- 06. JAM VIDEO -->
    <figure class="archive-item"
      data-category="moments"
      data-title="A Moment on Video"
      data-meta="Video Memory"
      data-kind="video">

      <button class="archive-photo" type="button"
        aria-label="Open A Moment on Video">

        <video muted playsinline preload="metadata" aria-hidden="true">
          <source src="{{ '/images/archives/jamvideo.mp4' | relative_url }}"
            type="video/mp4">
        </video>

        <span class="archive-play" aria-hidden="true">▶</span>

        <span class="archive-overlay">
          <strong>A Moment on Video</strong>
          <small>Video Memory</small>
        </span>
      </button>
    </figure>

    <!-- 07. IITM DIARIES -->
    <figure class="archive-item"
      data-category="masters"
      data-title="IITM Diaries"
      data-meta="Master's Memories"
      data-kind="image">

      <button class="archive-photo" type="button"
        aria-label="Open IITM Diaries">
        <img src="{{ '/images/archives/iitmdiaries.jpeg' | relative_url }}"
          alt="IITM Diaries" loading="lazy" decoding="async">

        <span class="archive-overlay">
          <strong>IITM Diaries</strong>
          <small>Master's Memories</small>
        </span>
      </button>
    </figure>

    <!-- 08. DRAWING COMPETITION -->
    <figure class="archive-item"
      data-category="moments"
      data-title="Drawing Competition"
      data-meta="Personal Memories"
      data-kind="image">

      <button class="archive-photo" type="button"
        aria-label="Open Drawing Competition">
        <img src="{{ '/images/archives/winningdrawingcomp.jpeg' | relative_url }}"
          alt="Drawing Competition" loading="lazy" decoding="async">

        <span class="archive-overlay">
          <strong>Drawing Competition</strong>
          <small>Personal Memories</small>
        </span>
      </button>
    </figure>

    <!-- 09. EXPLAINING CONCEPTS -->
    <figure class="archive-item"
      data-category="teaching"
      data-title="Explaining Concepts"
      data-meta="Learning and Teaching"
      data-kind="image">

      <button class="archive-photo" type="button"
        aria-label="Open Explaining Concepts">
        <img src="{{ '/images/archives/explainingnarayanan.jpg' | relative_url }}"
          alt="Explaining Concepts" loading="lazy" decoding="async">

        <span class="archive-overlay">
          <strong>Explaining Concepts</strong>
          <small>Learning and Teaching</small>
        </span>
      </button>
    </figure>

    <!-- 10. IITM DRAWING CLUB -->
    <figure class="archive-item"
      data-category="masters"
      data-title="Drawing Club at IITM"
      data-meta="Master's Memories"
      data-kind="image">

      <button class="archive-photo" type="button"
        aria-label="Open Drawing Club at IITM">
        <img src="{{ '/images/archives/drawingclubiitm.jpeg' | relative_url }}"
          alt="Drawing Club at IITM" loading="lazy" decoding="async">

        <span class="archive-overlay">
          <strong>Drawing Club at IITM</strong>
          <small>Master's Memories</small>
        </span>
      </button>
    </figure>

    <!-- 11. ROOM MEMORIES I -->
    <figure class="archive-item"
      data-category="masters"
      data-title="Room Memories I"
      data-meta="Master's Memories"
      data-kind="image">

      <button class="archive-photo" type="button"
        aria-label="Open Room Memories I">
        <img src="{{ '/images/archives/room1.jpg' | relative_url }}"
          alt="Room Memories I" loading="lazy" decoding="async">

        <span class="archive-overlay">
          <strong>Room Memories I</strong>
          <small>Master's Memories</small>
        </span>
      </button>
    </figure>

    <!-- 12. ACTIVE WORK -->
    <figure class="archive-item"
      data-category="research"
      data-title="Work in Progress"
      data-meta="Research Life"
      data-kind="image">

      <button class="archive-photo" type="button"
        aria-label="Open Work in Progress">
        <img src="{{ '/images/archives/activework.jpg' | relative_url }}"
          alt="Work in Progress" loading="lazy" decoding="async">

        <span class="archive-overlay">
          <strong>Work in Progress</strong>
          <small>Research Life</small>
        </span>
      </button>
    </figure>

    <!-- 13. ROOM MEMORIES II -->
    <figure class="archive-item"
      data-category="masters"
      data-title="Room Memories II"
      data-meta="Master's Memories"
      data-kind="image">

      <button class="archive-photo" type="button"
        aria-label="Open Room Memories II">
        <img src="{{ '/images/archives/room.jpeg' | relative_url }}"
          alt="Room Memories II" loading="lazy" decoding="async">

        <span class="archive-overlay">
          <strong>Room Memories II</strong>
          <small>Master's Memories</small>
        </span>
      </button>
    </figure>

    <!-- 14. PRESENTATION -->
    <figure class="archive-item"
      data-category="research"
      data-title="Presentation"
      data-meta="Academic Presentations"
      data-kind="image">

      <button class="archive-photo" type="button"
        aria-label="Open Presentation">
        <img src="{{ '/images/archives/presentation.jpg' | relative_url }}"
          alt="Academic Presentation" loading="lazy" decoding="async">

        <span class="archive-overlay">
          <strong>Presentation</strong>
          <small>Academic Presentations</small>
        </span>
      </button>
    </figure>

    <!-- 15. WORKING MOMENTS -->
    <figure class="archive-item"
      data-category="research"
      data-title="Working Moments"
      data-meta="Research Life"
      data-kind="image">

      <button class="archive-photo" type="button"
        aria-label="Open Working Moments">
        <img src="{{ '/images/archives/work.jpg' | relative_url }}"
          alt="Working Moments" loading="lazy" decoding="async">

        <span class="archive-overlay">
          <strong>Working Moments</strong>
          <small>Research Life</small>
        </span>
      </button>
    </figure>

    <!-- 16. CRICKET VIDEO II -->
    <figure class="archive-item"
      data-category="moments"
      data-title="Cricket Memories II"
      data-meta="Video Memory"
      data-kind="video">

      <button class="archive-photo" type="button"
        aria-label="Open Cricket Memories II">

        <video muted playsinline preload="metadata" aria-hidden="true">
          <source src="{{ '/images/archives/cricket2.mp4' | relative_url }}"
            type="video/mp4">
        </video>

        <span class="archive-play" aria-hidden="true">▶</span>

        <span class="archive-overlay">
          <strong>Cricket Memories II</strong>
          <small>Video Memory</small>
        </span>
      </button>
    </figure>

    <!-- 17. CRICKET VIDEO -->
    <figure class="archive-item"
      data-category="moments"
      data-title="Cricket Memories"
      data-meta="Video Memory"
      data-kind="video">

      <button class="archive-photo" type="button"
        aria-label="Open Cricket Memories">

        <video muted playsinline preload="metadata" aria-hidden="true">
          <source src="{{ '/images/archives/cricket.mp4' | relative_url }}"
            type="video/mp4">
        </video>

        <span class="archive-play" aria-hidden="true">▶</span>

        <span class="archive-overlay">
          <strong>Cricket Memories</strong>
          <small>Video Memory</small>
        </span>
      </button>
    </figure>

    <!-- 18. IITM SOCCER -->
    <figure class="archive-item"
      data-category="masters"
      data-title="IITM Soccer"
      data-meta="Master's Memories"
      data-kind="image">

      <button class="archive-photo" type="button"
        aria-label="Open IITM Soccer">
        <img src="{{ '/images/archives/iitmsoccer.jpeg' | relative_url }}"
          alt="IITM Soccer" loading="lazy" decoding="async">

        <span class="archive-overlay">
          <strong>IITM Soccer</strong>
          <small>Master's Memories</small>
        </span>
      </button>
    </figure>

    <!-- 19. IITM FAREWELL -->
    <figure class="archive-item"
      data-category="masters"
      data-title="IITM Farewell"
      data-meta="Master's Memories"
      data-kind="image">

      <button class="archive-photo" type="button"
        aria-label="Open IITM Farewell">
        <img src="{{ '/images/archives/iitmfarewell.jpg' | relative_url }}"
          alt="IITM Farewell" loading="lazy" decoding="async">

        <span class="archive-overlay">
          <strong>IITM Farewell</strong>
          <small>Master's Memories</small>
        </span>
      </button>
    </figure>

    <!-- 20. INTERNSHIP -->
    <figure class="archive-item"
      data-category="research"
      data-title="Internship"
      data-meta="Academic Journey"
      data-kind="image">

      <button class="archive-photo" type="button"
        aria-label="Open Internship">
        <img src="{{ '/images/archives/internship.jpg' | relative_url }}"
          alt="Internship" loading="lazy" decoding="async">

        <span class="archive-overlay">
          <strong>Internship</strong>
          <small>Academic Journey</small>
        </span>
      </button>
    </figure>

    <!-- 21. MTTS WORKSHOP -->
    <figure class="archive-item"
      data-category="workshops"
      data-title="MTTS Memories"
      data-meta="Mathematics Workshop"
      data-kind="image">

      <button class="archive-photo" type="button"
        aria-label="Open MTTS Memories">
        <img src="{{ '/images/archives/kumersan_mtts.jpeg' | relative_url }}"
          alt="MTTS Memories" loading="lazy" decoding="async">

        <span class="archive-overlay">
          <strong>MTTS Memories</strong>
          <small>Mathematics Workshop</small>
        </span>
      </button>
    </figure>

    <!-- 22. SCHOOL MEMORIES -->
    <figure class="archive-item"
      data-category="school"
      data-title="School Memories"
      data-meta="School Years"
      data-kind="image">

      <button class="archive-photo" type="button"
        aria-label="Open School Memories">
        <img src="{{ '/images/archives/schooltopper.jpeg' | relative_url }}"
          alt="School Memories" loading="lazy" decoding="async">

        <span class="archive-overlay">
          <strong>School Memories</strong>
          <small>School Years</small>
        </span>
      </button>
    </figure>

    <!-- 23. UNDERGRADUATE GOLD MEDAL -->
    <figure class="archive-item"
      data-category="undergraduate"
      data-title="Undergraduate Gold Medal"
      data-meta="Undergraduate Memories"
      data-kind="image">

      <button class="archive-photo" type="button"
        aria-label="Open Undergraduate Gold Medal">
        <img src="{{ '/images/archives/ug_goldmedalist.jpg' | relative_url }}"
          alt="Undergraduate Gold Medal" loading="lazy" decoding="async">

        <span class="archive-overlay">
          <strong>Undergraduate Gold Medal</strong>
          <small>Undergraduate Memories</small>
        </span>
      </button>
    </figure>

    <!-- 24. NITMB WORKSHOP -->
    <figure class="archive-item"
      data-category="conferences"
      data-title="NITMB Workshop"
      data-meta="Chicago · 2026"
      data-kind="image">

      <button class="archive-photo" type="button"
        aria-label="Open NITMB Workshop">
        <img src="{{ '/images/archives/nitmb.jpg' | relative_url }}"
          alt="NITMB Workshop" loading="lazy" decoding="async">

        <span class="archive-overlay">
          <strong>NITMB Workshop</strong>
          <small>Chicago · 2026</small>
        </span>
      </button>
    </figure>

  </div>

  <!-- EMPTY FILTER MESSAGE -->
  <p class="archive-empty" id="archive-empty" hidden>
    No memories in this collection yet.
  </p>

  <!-- FOOTER -->
  <footer class="archive-footer">
    A growing collection of moments worth remembering.
  </footer>

</div>


<!-- FULL-SCREEN IMAGE AND VIDEO VIEWER -->
<div
  class="archive-lightbox"
  id="archive-lightbox"
  role="dialog"
  aria-modal="true"
  aria-label="Media viewer"
  aria-hidden="true"
  hidden
>

  <button class="archive-close" type="button"
    aria-label="Close viewer">
    &times;
  </button>

  <button class="archive-prev" type="button"
    aria-label="Previous item">
    &#8592;
  </button>

  <div class="archive-lightbox-content">

    <div id="archive-lightbox-media"
      class="archive-lightbox-media">
    </div>

    <div class="archive-lightbox-caption">
      <strong id="archive-lightbox-title"></strong>
      <span id="archive-lightbox-meta"></span>
      <span id="archive-lightbox-count"></span>
    </div>

  </div>

  <button class="archive-next" type="button"
    aria-label="Next item">
    &#8594;
  </button>

</div>

<!-- GALLERY JAVASCRIPT -->
<script
  src="{{ '/assets/js/archives.js' | relative_url }}"
  defer>
</script>
