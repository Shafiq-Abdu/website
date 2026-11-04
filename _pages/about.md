---
permalink: /
title: #"Shafiq Abdul Rahman"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<style>
/* =========================================================
   SHAFIQ ABDUL RAHMAN — HOMEPAGE
   Scoped styles so they do not interfere with the site theme
========================================================= */

.ab-home {
  --ab-accent: #2f80ed;
  --ab-accent-2: #7b61ff;
  --ab-text: #1f2937;
  --ab-muted: #667085;
  --ab-card: #ffffff;
  --ab-border: rgba(47,128,237,0.14);
  --ab-soft: rgba(47,128,237,0.06);

  color: var(--ab-text);
  line-height: 1.7;
}

.ab-home * {
  box-sizing: border-box;
}

.ab-top-image {
  margin: 0 0 22px 0;
}

.ab-top-image img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 0;
}

/* ---------- Hero ---------- */

.ab-hero {
  padding: 24px 0 28px 0;
}

.ab-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 18px;
  align-items: center;
}

.ab-eyebrow {
  display: inline-block;
  margin-bottom: 10px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--ab-accent);
}

.ab-title {
  margin: 0;
  font-size: clamp(1.85rem, 3.4vw, 2.75rem);
  line-height: 1.10;
  letter-spacing: -0.035em;
  font-weight: 800;
}

.ab-subtitle {
  margin: 14px 0 8px 0;
  font-size: clamp(0.92rem, 1.5vw, 1.05rem);
  color: var(--ab-muted);
  font-weight: 500;
}

.ab-focus {
  margin-top: 18px;
  font-size: 0.90rem;
}

.ab-focus strong {
  color: var(--ab-accent);
}

.ab-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
}

.ab-tag {
  display: inline-block;
  padding: 7px 11px;
  border-radius: 999px;
  background: var(--ab-soft);
  border: 1px solid var(--ab-border);
  font-size: 0.84rem;
  font-weight: 600;
}

.ab-hero-photo {
  width: 100%;
  max-width: 280px;
  justify-self: center;
  border-radius: 22px;
  box-shadow: 0 18px 45px rgba(0,0,0,0.12);
  display: block;
}

.ab-current {
  margin-top: 28px;
  padding: 14px 16px;
  border-left: 4px solid var(--ab-accent);
  border-radius: 10px;
  background: var(--ab-soft);
}

.ab-current-label {
  font-weight: 700;
  color: var(--ab-accent);
}

/* ---------- Sections ---------- */

.ab-section {
  margin-top: 42px;
}

.ab-section-head {
  margin-bottom: 20px;
}

.ab-section-kicker {
  font-size: 0.76rem;
  font-weight: 700;
  color: var(--ab-accent);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.ab-section-title {
  margin: 3px 0 5px 0;
  font-size: clamp(1.28rem, 2vw, 1.65rem);
  line-height: 1.18;
  letter-spacing: -0.02em;
}

.ab-section-note {
  margin: 0;
  color: var(--ab-muted);
  max-width: 760px;
}

/* ---------- Research cards ---------- */

.ab-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.ab-card {
  padding: 17px;
  border: 1px solid var(--ab-border);
  border-radius: 16px;
  background: var(--ab-card);
  box-shadow: 0 8px 22px rgba(0,0,0,0.045);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.ab-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(0,0,0,0.08);
}

.ab-card-icon {
  font-size: 1.6rem;
  margin-bottom: 10px;
}

.ab-card h3 {
  margin: 0 0 8px 0;
  font-size: 0.98rem;
}

.ab-card p {
  margin: 0;
  color: var(--ab-muted);
  font-size: 0.94rem;
}

/* ---------- Current research ---------- */

.ab-project {
  padding: 22px;
  border-radius: 18px;
  border: 1px solid var(--ab-border);
  background:
    linear-gradient(135deg, rgba(47,128,237,0.06), rgba(123,97,255,0.04));
}

.ab-project h3 {
  margin-top: 0;
  margin-bottom: 8px;
}

.ab-project p {
  margin-bottom: 0;
}

/* ---------- Background timeline ---------- */

.ab-timeline {
  display: grid;
  gap: 14px;
}

.ab-timeline-item {
  padding: 16px 18px;
  border-left: 3px solid var(--ab-accent);
  background: rgba(127,127,127,0.045);
  border-radius: 0 12px 12px 0;
}

.ab-timeline-title {
  font-weight: 700;
}

.ab-timeline-meta {
  color: var(--ab-muted);
  font-size: 0.92rem;
  margin-top: 2px;
}

.ab-timeline-item ul {
  margin-bottom: 0;
}

/* ---------- Collapsible sections ---------- */

.ab-home details {
  margin: 12px 0;
  border: 1px solid var(--ab-border);
  border-radius: 12px;
  background: var(--ab-card);
  overflow: hidden;
}

.ab-home summary {
  cursor: pointer;
  padding: 14px 16px;
  font-weight: 700;
  list-style: none;
}

.ab-home summary::-webkit-details-marker {
  display: none;
}

.ab-home summary::after {
  content: "+";
  float: right;
  color: var(--ab-accent);
  font-size: 1.2rem;
}

.ab-home details[open] summary::after {
  content: "–";
}

.ab-details-body {
  padding: 0 18px 16px 18px;
  color: var(--ab-text);
}

  .ab-divider {
  border: 0;
  height: 1px;
  background: #dce3ea;
  margin: 24px 0;
}


.ab-details-body ul {
  margin-bottom: 0;
}

/* ---------- Typewriter ---------- */

#typewriter-container {
  margin-top: 20px;
  opacity: 0;
  transition: opacity 0.5s ease-in;
}

#typewriter {
  font-family: "Courier New", monospace;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--ab-accent);
}

#typewriter::after {
  content: "|";
  animation: blink 1.2s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* ---------- Responsive ---------- */

@media (max-width: 820px) {
  .ab-hero-grid {
    grid-template-columns: 1fr;
  }

  .ab-hero-photo {
    max-width: 220px;
    justify-self: start;
  }

  .ab-grid-3 {
    grid-template-columns: 1fr;
  }
}

</style>

<div class="ab-home">

<!-- =========================================================
     HERO
========================================================= -->

<div class="ab-top-image">
  <img src="/images/789.png" alt="Shafiq Abdul Rahman">
</div>

<section class="ab-hero">

  <div class="ab-hero-grid">
    <div class="ab-intro">

      <span class="ab-eyebrow">
        Applied Mathematics × Neuroscience
      </span>

      <p class="ab-subtitle">
        PhD researcher at
        <a href="https://www.math.uh.edu/~josic/"
           target="_blank"
           rel="noopener">Dr. Krešo's lab</a>,
        University of Houston
      </p>


      <!-- Research areas -->
    <div class="ab-tags">
      <span class="ab-tag">Computational Neuroscience</span>
      <span class="ab-tag">Neural Representation</span>
      <span class="ab-tag">Neural Dynamics</span>
      <span class="ab-tag">Bayesian Inference</span>
      span class="ab-tag">Neural Data Analysis</span>
      <span class="ab-tag">Machine Learning</span>
      <span class="ab-tag">Artificial Intelligence</span>
    </div>


      <!-- Typewriter -->

      <div id="typewriter-container">
        <div id="typewriter"></div>
      </div>


      <!-- Small divider -->

      <hr class="ab-divider">


      <!-- Research description -->

      <p class="ab-focus">
        I work at the intersection of
        <strong>computational neuroscience</strong>,
        <strong>dynamical systems</strong>, and
        <strong>neural data analysis</strong>, with an interest in how
        mathematical structure can help explain neural computation
        and representation.
      </p>
      <div class="ab-current">
        <span class="ab-current-label">
          On my desk right now →
        </span>
        Neural representation · Modelling neural circuits ·
        Cognitive Neuroscience · Artem's Neuro playlist 
      </div>
    </div>
  </div>
</section>

{% raw %}
<script>
(function () {
  const text = "Check out my current projects in the Project section....";
  const el = document.getElementById("typewriter");
  const container = document.getElementById("typewriter-container");
  if (!el || !container) return;
  let i = 0;
  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, 28);
    }
  }

  container.style.opacity = 1;
  type();
})();
</script>
{% endraw %}

<!-- =========================================================
     RESEARCH
========================================================= -->

<section class="ab-section">
  <div class="ab-section-head">
    <div class="ab-section-kicker">Research</div>
    <h2 class="ab-section-title">Questions I am interested in</h2>
    <p class="ab-section-note">
      My research interests connect mathematical modelling with neural computation,
      population-level representations, and data-driven analysis.
    </p>
  </div>
  <div class="ab-grid-3">
    <div class="ab-card">
      <div class="ab-card-icon">🧠</div>
      <h3>Neural Representation</h3>
      <p>
        Understanding the geometry and structure of population activity,
        including how neural systems represent task variables and abstract quantities.
      </p>
    </div>
    <div class="ab-card">
      <div class="ab-card-icon">📐</div>
      <h3>Neural Circuit Modelling</h3>
      <p>
        Studying mathematical models of neurons and circuits using nonlinear
        dynamics, stability, bifurcation theory, and computational simulation.
      </p>
    </div>
    <div class="ab-card">
      <div class="ab-card-icon">📊</div>
      <h3>Neural Data Analysis</h3>
      <p>
        Using statistical and computational tools to analyze spike trains,
        neural population activity, and low-dimensional structure in high-dimensional data.
      </p>
    </div>
  </div>
</section>

<!-- =========================================================
     CURRENT WORK
========================================================= -->

<!-- <section class="ab-section">
  <div class="ab-section-head">
    <div class="ab-section-kicker">Current work</div>
    <h2 class="ab-section-title">What I am working on now</h2>
  </div>
  <div class="ab-project">
    <h3>Computational neuroscience & neural representation</h3>
    <p>
      I am currently studying neural population representations and computational
      approaches for analyzing how task variables are encoded in neural activity.
      In parallel, I am developing my background in mathematical models of neural
      circuits and nonlinear neuronal dynamics.
    </p>
  </div>

</section> -->
<!-- =========================================================
     ABOUT
========================================================= -->
<section class="ab-section">
  <div class="ab-section-head">
    <div class="ab-section-kicker">About</div>
    <h2 class="ab-section-title">A little about me</h2>
  </div>

  <p>
    Officially I’m <strong>Abdul Rahman</strong>, also known as
    <strong>Shafiq</strong>, and I often go by <strong>A.B.</strong>
    <em>(/eɪ biː/)</em> — pick your favorite.
  </p>

  <p>
    I am a PhD researcher in Applied Mathematics at the
    <a href="https://www.uh.edu/" target="_blank">University of Houston</a>.
    My mathematical background spans dynamical systems, probability, stochastic
    analysis, mathematical biology, statistics, and mathematical finance.
    I am especially interested in using mathematics and computation to understand
    complex biological systems, particularly the brain.
  </p>

  <p>
    Before beginning my PhD, I completed an M.Sc. in Mathematics at
    <a href="https://www.iitm.ac.in/" target="_blank">IIT Madras</a>.
    My earlier research interests included limit-order-book modelling, stochastic
    processes, machine learning, agent-based simulation, reinforcement learning,
    and time-series methods in financial markets.
  </p>

  <p>
    Outside academics, I enjoy painting, photography, soccer, chess, fitness,
    and thought-provoking films. I am always happy to connect with people interested
    in mathematics, neuroscience, computation, or interdisciplinary research.
  </p>

</section>

<!-- =========================================================
     ACADEMIC BACKGROUND
========================================================= -->

<section class="ab-section">

  <div class="ab-section-head">
    <div class="ab-section-kicker">Background</div>
    <h2 class="ab-section-title">Academic journey</h2>
  </div>

  <div class="ab-timeline">

    <div class="ab-timeline-item">
      <div class="ab-timeline-title">M.Sc. in Mathematics</div>
      <div class="ab-timeline-meta">IIT Madras · 2022–2024</div>
      <ul>
        <li>Master’s thesis: Technical Analysis in Mathematical Finance</li>
        <li>Institute Merit Scholarship recipient</li>
        <li>
          Coursework included stochastic calculus in finance, stochastic processes,
          probability and measure theory, mathematical finance, applied statistics,
          differential equations, functional analysis, and data visualization.
        </li>
      </ul>
    </div>

    <div class="ab-timeline-item">
      <div class="ab-timeline-title">B.Sc. in Mathematics</div>
      <div class="ab-timeline-meta">Government Arts College, Coimbatore · 2018–2021</div>
      <ul>
        <li>Undergraduate project: Linear Algebra and its Applications in Machine Learning</li>
        <li>Minor coursework in Physics and Statistics</li>
        <li>First Rank Holder · Gold Medalist</li>
      </ul>
    </div>

  </div>
</section>

<!-- =========================================================
     PROFESSIONAL DETAILS
========================================================= -->

<section class="ab-section">

  <div class="ab-section-head">
    <div class="ab-section-kicker">More</div>
    <h2 class="ab-section-title">Professional highlights</h2>
  </div>

  <details>
    <summary>Professional Memberships</summary>
    <div class="ab-details-body">
      <ul>
        <li>Organization for Computational Neurosciences (OCNS), Student Member</li>
        <li>Society for Industrial and Applied Mathematics (SIAM), Student Member / UH Student Chapter</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>Honors & Awards</summary>
    <div class="ab-details-body">
      <ul>
        <li style="list-style: none; margin: 0.5rem 0 0.8rem -1.2rem;">
        <strong style="color: #1e90ff;">PhD</strong>
       </li>
        <li><b>2026:</b> NSM Alumni Association (Eckhard Pfeifer/Carolyn Farb) Scholarship, University of Houston Alumni Association Foundation (UHAAF), 2026–2027 Academic Year</li>
        <!-- ===================== DIVIDER ===================== -->

      <li style="list-style: none; margin: 1.4rem 0 1rem -1.2rem;">
        <div style="
          border-top: 1px solid #d8d8d8;
          padding-top: 0.8rem;
          font-size: 0.85rem;
          font-weight: 700;
          color: #777;
          letter-spacing: 0.03em;
        ">
          Master's & Undergraduate
        </div>
      </li>
        <li><b>2025:</b> Qualified CSIR NET, JRF — Eligible to be Assistant Professor in India</li>
        <li><b>2024:</b> Qualified Graduate Aptitude Test in Engineering (GATE)</li>
        <li><b>2022:</b> All India Rank 196 in IIT-JAM (among 12,716 mathematics aspirants)</li>
        <li><b>2021:</b> Rank 1, Department of Mathematics, Government Arts College, Coimbatore</li>
        <li><b>2018:</b> District Runner, Mathematics Model Exam, CSI College of Engineering, Nilgiris, India</li>
        <li><b>2018:</b> Rank 1, Young Ramanujam of School Award, Dhanish Ahmed Institute of Engineering, Coimbatore</li>
        <li><b>2016:</b> Nilgiri District Achiever, Tamil Nadu School Associations</li>
        <li><b>2016:</b> Kaitlyn Jeyaraj & Bryan Wood Cash Award for Centum in Mathematics</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>Talks & Presentations</summary>
    <div class="ab-details-body">
      <ul>
        <li style="list-style: none; margin: 0.5rem 0 0.8rem -1.2rem;">
        <strong style="color: #1e90ff;">PhD</strong>
      </li>
        <!-- ===================== DIVIDER ===================== -->

      <li style="list-style: none; margin: 1.4rem 0 1rem -1.2rem;">
        <div style="
          border-top: 1px solid #d8d8d8;
          padding-top: 0.8rem;
          font-size: 0.85rem;
          font-weight: 700;
          color: #777;
          letter-spacing: 0.03em;
        ">
          Master's & Undergraduate
        </div>
      </li>
        <li><b>June 2024:</b> Contributory lectures on “Gaussian Functions, Errors and Stirling’s Approximations” — Summer Workshop on Pure Mathematics</li>
        <li><b>April 2024:</b> Presented “Itô's Rule” proof under Prof. Neelesh Upadhye, IIT Madras — Mathematical Finance</li>
        <li><b>Feb 2024:</b> Presented approximation of a class of functions by simple functions using convolution and measure theory under Prof. Barun Sarkar, IIT Madras</li>
        <li><b>Feb 2024:</b> Seminar on “Itô's Integration” for research scholars under Prof. Barun Sarkar, IIT Madras</li>
        <li><b>May 2023:</b> Seminar on “GCD over Euclidean Domains” — Mathematics Training and Talent Search Programme, IIT Madras</li>
        <li><b>May 2022:</b> Co-led discussion on “Significance of Eigenvalues and Eigenvectors” with Dr. Saranya, Government Arts College, Coimbatore</li>
      </ul>
    </div>
  </details>


<details>
  <summary>Workshops & Conferences</summary>

  <div class="ab-details-body">
    <ul>

      <!-- ===================== PhD ===================== -->

      <li style="list-style: none; margin: 0.5rem 0 0.8rem -1.2rem;">
        <strong style="color: #1e90ff;">PhD</strong>
      </li>

      <li>
        <b>2026:</b> Summer School on Stochastic Dynamics and Persistence in Biology,
        Texas A&M (Jun 21–27)
      </li>


      <!-- ===================== DIVIDER ===================== -->

      <li style="list-style: none; margin: 1.4rem 0 1rem -1.2rem;">
        <div style="
          border-top: 1px solid #d8d8d8;
          padding-top: 0.8rem;
          font-size: 0.85rem;
          font-weight: 700;
          color: #777;
          letter-spacing: 0.03em;
        ">
          Master's & Undergraduate
        </div>
      </li>


      <!-- ===================== MASTER'S / UNDERGRAD ===================== -->

      <li>
        <b>2024:</b> Mini Course on Markov Chains by Prof. Manjunath Krishnapur,
        IISc Bangalore
      </li>

      <li>
        <b>2024:</b> International FDP on Financial Mathematics, SPDE Theory,
        and Mathematical Modeling — VIT AP University
      </li>

      <li>
        <b>2024:</b> International Conference on Stochastic Calculus & Applications
        to Finance — King’s College London & IIT Madras
      </li>

      <li>
        <b>2024:</b> Workshop on Valuation of Equity Options using the
        Black–Scholes Model — IIQF
      </li>

      <li>
        <b>2024:</b> Python in Finance & Open Range Breakout Strategy Workshop —
        StockGro at IIT Madras
      </li>

      <li>
        <b>2024:</b> Statistical Modeling & Quant Challenge —
        Millennium Investment Management, IIT Madras
      </li>

      <li>
        <b>2024:</b> Advanced Training School on PDEs & MATLAB —
        K. J. Somaiya College, Mumbai
      </li>

      <li>
        <b>2023:</b> One-month Summer School integrating Linear Algebra,
        Probability, Markov Chains, and Differential Equations — IIT Madras
      </li>

      <li>
        <b>2023:</b> MTTS Programme — Linear Algebra, Complex Analysis,
        Topology, Module & Ring Theory, IIT Madras
      </li>

      <li>
        <b>2023:</b> Mathematics In-house Symposium — IIT Madras
      </li>

      <li>
        <b>2022:</b> National Conference on Computational Mathematics —
        NIT Puducherry
      </li>

      <li>
        <b>2022:</b> Workshop on Nonlinear Phenomena in Mathematical Biology —
        IIITM Gwalior
      </li>

      <li>
        <b>2021:</b> NPTEL Modern Algebra Course —
        Madurai Kamaraj University
      </li>

      <li>
        <b>2021:</b> KLA Workshop on AI & HPC in Semiconductor Manufacturing —
        IIT Madras
      </li>

      <li>
        <b>2020:</b> Initiation into Linear Algebra —
        International Workshop, Mar Thoma College
      </li>

      <li>
        <b>2020:</b> Vedic Mathematics & Foundations —
        Government Arts College, Coimbatore
      </li>
    </ul>
  </div>
</details>

  <details>
    <summary>Entrepreneurial & Extracurricular Activities</summary>
    <div class="ab-details-body">
      <ul>
        <li><b>Professional Coaching — Theory & Thought:</b> Guided thinking and mentorship in Mathematics and Statistics for graduate learners (Jun 2025–Present)</li>
        <li><b>Organizer & Initiator:</b> Weekly Student Seminar Series, Department of Mathematics, IIT Madras (Nov 2023–May 2024)</li>
        <li><b>Student Chief Coordinator:</b> MTTS Programme, IIT Madras (May 2023) — Facilitated 150+ students</li>
        <li><b>Super Coordinator:</b> FORAYS 23, IIT Madras (Feb 2023) — Annual mathematics fest</li>
        <li><b>Founder:</b> SMART CART OFFICIAL — Online art & craft studio (Jan 2019–Jun 2025)</li>
        <li><b>Photographer:</b> EYES OF ABDUL — Photography & videography portfolio</li>
      </ul>
    </div>
  </details>

  <details>
  <summary>CV / Resume (Updated Fall 26)</summary>
  <div class="ab-details-body">
    <ul>
      <li>
        <a href="https://drive.google.com/file/d/1qENdg9ZravFvvTaBSDhjnZkzPVPE1wqh/view?usp=sharing"
           target="_blank"
           rel="noopener noreferrer">
          <b>Curriculum Vitae</b>
        </a>
      </li>
    </ul>
  </div>
</details>

</section>

</div>
