---
layout: splash
title: "My Files"
permalink: /files/
author_profile: false
---

<style>
body{
  background:#0d1117!important;
  color:#e6edf3!important;
  margin:0;
  overflow-x:hidden;
}
.page__hero,.page__content{
  padding-top:0!important;
  padding-bottom:0!important;
  margin:0!important;
}
.page__content a{color:#72d5e2;}
.page__content a:hover{color:#a7edf5;}

.files-hero{
  width:100%;
  margin:0 0 20px;
  overflow:hidden;
  border-radius:0 0 20px 20px;
  border-bottom:1px solid #25303a;
}
.files-hero img{
  width:100%;
  height:clamp(220px,32vw,360px);
  object-fit:cover;
  display:block;
  margin:0!important;
  max-width:none!important;
  border-radius:0!important;
  box-shadow:none!important;
}

.files-shell{
  max-width:1100px;
  margin:0 auto;
  padding:14px 18px 40px;
}
.files-intro{margin-bottom:20px;}
.files-eyebrow{
  margin:0 0 6px;
  color:#61d7e6;
  font-size:11px;
  font-weight:800;
  letter-spacing:.18em;
}
.files-intro h1{
  margin:0 0 8px;
  color:#fff;
  font-size:clamp(25px,3vw,34px);
}
.files-intro p{
  margin:0;
  max-width:680px;
  color:#8f9cab;
  font-size:13px;
  line-height:1.7;
}

.files-grid{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:14px;
}
.file-card{
  background:#0d141d;
  border:1px solid #26303c;
  border-radius:15px;
  overflow:hidden;
  transition:transform .22s ease,border-color .22s ease,box-shadow .22s ease;
}
.file-card:hover{
  transform:translateY(-3px);
  border-color:#3c8b98;
  box-shadow:0 14px 32px rgba(0,0,0,.2);
}
.file-card-head{
  display:grid;
  grid-template-columns:auto 1fr;
  gap:13px;
  padding:18px;
}
.file-icon{
  width:40px;
  height:40px;
  display:grid;
  place-items:center;
  border-radius:11px;
  color:#72dce8;
  background:rgba(61,184,201,.1);
  border:1px solid rgba(72,190,206,.22);
  font-size:18px;
}
.file-card h2{
  margin:0 0 4px;
  color:#fff;
  font-size:16px;
}
.file-card p{
  margin:0;
  color:#8592a2;
  font-size:12px;
  line-height:1.55;
}
.file-links{
  display:grid;
  gap:7px;
  padding:0 18px 18px;
}
.file-links a{
  display:flex;
  justify-content:space-between;
  gap:12px;
  padding:10px 11px;
  border-radius:9px;
  background:#101923;
  border:1px solid #22313c;
  color:#9ecbd4!important;
  text-decoration:none!important;
  font-size:12.5px;
  transition:.18s ease;
}
.file-links a:hover{
  color:#fff!important;
  border-color:#3c8490;
  transform:translateX(2px);
}

.journal-section{
  margin-top:18px;
  border:1px solid #27313c;
  border-radius:15px;
  background:radial-gradient(circle at 90% 10%,rgba(58,170,189,.08),transparent 30%),#0d141d;
  overflow:hidden;
}
.journal-section summary{
  list-style:none;
  cursor:pointer;
  display:grid;
  grid-template-columns:auto 1fr auto;
  gap:13px;
  align-items:center;
  padding:17px 18px;
}
.journal-section summary::-webkit-details-marker{display:none;}
.journal-mark{
  width:40px;
  height:40px;
  display:grid;
  place-items:center;
  border-radius:11px;
  color:#f1d76d;
  background:rgba(222,190,75,.08);
  border:1px solid rgba(222,190,75,.18);
}
.journal-title small{
  display:block;
  color:#5fd5e4;
  font-size:9px;
  font-weight:800;
  letter-spacing:.16em;
  margin-bottom:2px;
}
.journal-title strong{color:#fff;font-size:15px;}
.journal-chevron{
  color:#66d7e4;
  font-size:21px;
  transition:transform .25s ease;
}
.journal-section[open] .journal-chevron{transform:rotate(45deg);}
.journal-body{
  padding:2px 18px 18px;
  animation:journalReveal .28s ease;
}
@keyframes journalReveal{
  from{opacity:0;transform:translateY(-5px)}
  to{opacity:1;transform:translateY(0)}
}
.journal-timeline{
  position:relative;
  margin:6px 0 0;
  padding-left:24px;
}
.journal-timeline::before{
  content:"";
  position:absolute;
  left:7px;
  top:8px;
  bottom:8px;
  width:1px;
  background:linear-gradient(#55cbd9,rgba(85,203,217,.08));
}
.journal-entry{
  position:relative;
  padding:0 0 18px;
}
.journal-entry:last-child{padding-bottom:0;}
.journal-entry::before{
  content:"";
  position:absolute;
  left:-21px;
  top:7px;
  width:7px;
  height:7px;
  border-radius:50%;
  background:#62d6e4;
  box-shadow:0 0 12px rgba(98,214,228,.65);
}
.journal-date{
  display:block;
  color:#68d6e3;
  font-size:10px;
  font-weight:700;
  letter-spacing:.06em;
  margin-bottom:3px;
}
.journal-entry p{
  margin:0;
  color:#a8b2bf;
  font-size:12.5px;
  line-height:1.6;
}

.cheat-section{
  margin-top:18px;
  padding:22px;
  border-radius:15px;
  border:1px solid #27313c;
  background:#0d141d;
}
.cheat-heading{margin-bottom:15px;}
.cheat-heading small{
  display:block;
  color:#5fd5e4;
  font-size:9px;
  font-weight:800;
  letter-spacing:.16em;
  margin-bottom:3px;
}
.cheat-heading h2{
  margin:0 0 5px;
  color:#fff;
  font-size:17px;
}
.cheat-heading p{
  margin:0;
  color:#8492a2;
  font-size:12px;
}
.cheat-grid{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:12px;
}
.cheat-grid a{
  display:block;
  overflow:hidden;
  border-radius:11px;
  border:1px solid #28333e;
  background:#080d13;
}
.cheat-grid img{
  width:100%!important;
  max-width:none!important;
  height:220px!important;
  object-fit:cover;
  display:block;
  margin:0!important;
  border-radius:0!important;
  box-shadow:none!important;
  filter:saturate(.82) contrast(.95);
  transition:transform .35s ease,filter .35s ease;
}
.notes-section {
  margin: 60px 0;
}

.notes-section h2 {
  margin-bottom: 25px;
}

.notes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 300px));
  gap: 25px;
}

.note-card {
  display: block;
  text-decoration: none;
  color: inherit;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.25s ease;
}

.note-card:hover {
  transform: translateY(-6px);
}

.note-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}

.note-info {
  padding: 14px 4px;
}

.note-info h3 {
  margin: 0 0 5px;
  font-size: 1.15rem;
}

.note-info p {
  margin: 0;
  opacity: 0.7;
  font-size: 0.9rem;
}
  
.cheat-grid a:hover img{
  transform:scale(1.035);
  filter:saturate(1) contrast(1);
}
.files-note{
  margin-top:17px;
  text-align:center;
  color:#596675;
  font-size:10.5px;
}
@media(max-width:760px){
  .files-grid,.cheat-grid{grid-template-columns:1fr;}
  .cheat-grid img{height:230px!important;}
}
@media(prefers-reduced-motion:reduce){
  .file-card,.file-links a,.journal-body,.journal-chevron,.cheat-grid img{
    animation:none!important;
    transition:none!important;
  }
}
</style>

<div class="files-hero">
  <img src="/images/neww.png" alt="My Files">
</div>

<div class="files-shell">

  <section class="files-intro">
    <p class="files-eyebrow">ACADEMIC FILES</p>
    <h1>My Study Library</h1>
    <p>
      A compact collection of course notes, lecture files, milestones,
      and mathematical cheat sheets from my graduate studies.
    </p>
  </section>

  <section class="files-grid">

    <article class="file-card">
      <div class="file-card-head">
        <div class="file-icon">𝑃</div>
        <div>
          <h2>Probability & Statistics</h2>
          <p>Course notes and lecture material from my graduate coursework.</p>
        </div>
      </div>

      <div class="file-links">
        <a href="https://uofh-my.sharepoint.com/:f:/g/personal/arahmans_cougarnet_uh_edu/IgBb-MkFq-TgRr2y9ujVYAMbAUDwApIsmpDUmAedPIUK9Js?e=WF0Gsk" target="_blank" rel="noopener">
          Probability · Dr. Alan Haynes <span>↗</span>
        </a>
        <a href="https://uofh-my.sharepoint.com/:f:/g/personal/arahmans_cougarnet_uh_edu/IgAMM6bY1mv1RLZij_FfG5YEARbw05nOZGWJW1WiWGt-MrE?e=BhJhsU" target="_blank" rel="noopener">
          Statistics · Dr. Mikyoung <span>↗</span>
        </a>
      </div>
    </article>

    <article class="file-card">
      <div class="file-card-head">
        <div class="file-icon">∑</div>
        <div>
          <h2>Numerical Analysis</h2>
          <p>Graduate notes and lecture material for numerical methods.</p>
        </div>
      </div>

      <div class="file-links">
        <a href="https://uofh-my.sharepoint.com/:f:/r/personal/arahmans_cougarnet_uh_edu/Documents/Documents/NumericalAnalysis_Dr.He?csf=1&web=1&e=RtZVqx" target="_blank" rel="noopener">
          Numerical Analysis · Dr. He <span>↗</span>
        </a>
      </div>
    </article>

  </section>

  <!-- No "open" attribute: journal loads closed every time -->
  <details class="journal-section">
    <summary>
      <div class="journal-mark">✦</div>
      <div class="journal-title">
        <small>PERSONAL ACADEMIC TIMELINE</small>
        <strong>AB's PhD Journal</strong>
      </div>
      <div class="journal-chevron">+</div>
    </summary>

    <div class="journal-body">
      <div class="journal-timeline">

      <div class="journal-entry">
        <span class="journal-date">FALL 2026</span>
        <p>Began reading papers on neural representation from Dr. Hayden's lab at Baylor College of Medicine.</p>
      </div>
      
      <div class="journal-entry">
        <span class="journal-date">JUNE–JULY 2026</span>
        <p>Summer reading course on modelling neural circuits using Robert Rosenbaum's book with Dr. Krešimir Josić.</p>
      </div>
      
      <div class="journal-entry">
        <span class="journal-date">JUNE 21–27, 2026</span>
        <p>Attended the Summer School on Stochastic Dynamics and Persistence in Biology at Texas A&amp;M.</p>
      </div>
      
      <div class="journal-entry">
        <span class="journal-date">MAY 2026</span>
        <p>Cleared preliminary examinations in Probability / Statistics and Numerical Analysis.</p>
      </div>
      
      <div class="journal-entry">
        <span class="journal-date">AUGUST 2025</span>
        <p>Joined the PhD program at the University of Houston.</p>
      </div>
      </div>
    </div>
  </details>

<section class="notes-section">
  <h2>Short Notes & Summary</h2>

  <div class="notes-grid">

    <a
      class="note-card"
      href="https://uofh-my.sharepoint.com/:b:/g/personal/arahmans_cougarnet_uh_edu/IQDoKHgGpsotQ68lLZXDPwgoASW3sk8A2yD3gj9inCpx4RA?e=1yxyrG"
      target="_blank"
      rel="noopener"
    >
      <img
        src="{{ '/images/cats.png' | relative_url }}"
        alt="Bayesian Statistics Notes"
      >

      <div class="note-info">
        <h3>Bayesian Statistics</h3>
      </div>
    </a>

  </div>
</section>





  <section class="cheat-section">
    <div class="cheat-heading">
      <small>VISUAL REFERENCES</small>
      <h2>Images · Cheat Sheets</h2>
      <p>Quick visual references from probability, numerical analysis, and mathematics.</p>
    </div>

    <div class="cheat-grid">
      <a href="https://shafiq-abdulrahman.github.io/images/naa.png" target="_blank" rel="noopener">
        <img src="{{ '/images/naa.png' | relative_url }}" alt="Mathematics cheat sheet">
      </a>

      <a href="https://shafiq-abdulrahman.github.io/images/probb.png" target="_blank" rel="noopener">
        <img src="{{ '/images/probb.png' | relative_url }}" alt="Probability cheat sheet">
      </a>

      <a href="https://shafiq-abdulrahman.github.io/images/numerical.png" target="_blank" rel="noopener">
        <img src="{{ '/images/numerical.png' | relative_url }}" alt="Numerical analysis cheat sheet">
      </a>
      <a href="https://shafiq-abdulrahman.github.io/images/kkjst.jpg" target="_blank" rel="noopener">
        <img src="{{ '/images/kkjst.jpg' | relative_url }}" alt="Numerical analysis cheat sheet">
      </a>
    </div>
  </section>




  <div class="files-note">
    Learn · update · revisit · repeat.
  </div>

</div>
