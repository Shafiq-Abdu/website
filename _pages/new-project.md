---
layout: splash
title: "Projects"
permalink: /new-project/
author_profile: false
---

<style>

/* =========================================================
   PROJECT PAGE
   ========================================================= */

.projects-wrapper {
  max-width: 1150px;
  margin: 0 auto;
  padding: 1rem 1.2rem 4rem;
}


/* ---------- Header ---------- */

.projects-header {
  text-align: center;
  margin-bottom: 3rem;
}

.projects-header h1 {
  font-size: clamp(2rem, 5vw, 3.2rem);
  margin-bottom: 0.7rem;
  font-weight: 750;
  letter-spacing: -0.04em;
}

.projects-header p {
  max-width: 720px;
  margin: 0 auto;
  font-size: 1.05rem;
  line-height: 1.75;
  color: #666;
}


/* ---------- Interest Tags ---------- */

.project-tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-bottom: 3rem;
}

.project-tab {
  padding: 0.55rem 1rem;
  border-radius: 999px;
  border: 1px solid #d6d6d6;
  font-size: 0.88rem;
  font-weight: 600;
  background: transparent;
  transition: all 0.25s ease;
}

.project-tab:hover {
  border-color: #1e90ff;
  color: #1e90ff;
  transform: translateY(-2px);
}


/* =========================================================
   FEATURED PROJECT
   ========================================================= */

.featured-project {
  position: relative;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 2.5rem;
  align-items: center;

  padding: 2.2rem;
  margin-bottom: 3.5rem;

  border: 1px solid rgba(30,144,255,0.25);
  border-radius: 22px;

  background:
    radial-gradient(
      circle at top right,
      rgba(30,144,255,0.12),
      transparent 38%
    );

  box-shadow:
    0 14px 40px rgba(0,0,0,0.06);

  overflow: hidden;
}

.featured-badge {
  display: inline-block;
  margin-bottom: 0.8rem;
  padding: 0.35rem 0.7rem;

  border-radius: 999px;

  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  color: #1e90ff;
  background: rgba(30,144,255,0.10);
}

.featured-project h2 {
  margin: 0 0 0.9rem;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  line-height: 1.25;
}

.featured-project p {
  line-height: 1.75;
  font-size: 1rem;
  color: #555;
}


/* ---------- Project Grid ---------- */

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}


/* ---------- Project Card ---------- */

.project-card {
  position: relative;

  display: flex;
  flex-direction: column;

  border: 1px solid #e2e2e2;
  border-radius: 18px;

  padding: 1.4rem;

  background: rgba(255,255,255,0.02);

  box-shadow:
    0 6px 22px rgba(0,0,0,0.045);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: rgba(30,144,255,0.45);

  box-shadow:
    0 15px 35px rgba(0,0,0,0.09);
}


/* ---------- Image ---------- */

.project-image-container {
  width: 100%;
  height: 210px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 1.25rem;

  border-radius: 14px;
  overflow: hidden;

  background: rgba(120,120,120,0.05);
}

.project-image {
  width: 100%;
  height: 100%;

  object-fit: contain;

  transition: transform 0.35s ease;
}

.project-card:hover .project-image {
  transform: scale(1.025);
}


/* ---------- Project Meta ---------- */

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 1rem;

  margin-bottom: 0.75rem;

  font-size: 0.78rem;
}

.project-category {
  color: #1e90ff;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.055em;
}

.project-date {
  color: #888;
}


/* ---------- Project Title ---------- */

.project-title {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.35;

  margin: 0 0 0.8rem;
}


/* ---------- Description ---------- */

.project-description {
  flex-grow: 1;

  font-size: 0.94rem;
  line-height: 1.7;

  color: #555;
}

.project-description ul {
  padding-left: 1.15rem;
  margin-top: 0.5rem;
}

.project-description li {
  margin-bottom: 0.45rem;
}


/* ---------- Tech Tags ---------- */

.tech-tags {
  display: flex;
  flex-wrap: wrap;

  gap: 0.4rem;

  margin: 1rem 0;
}

.tech-tag {
  padding: 0.28rem 0.58rem;

  border-radius: 6px;

  background: rgba(30,144,255,0.08);

  color: #1671c5;

  font-size: 0.73rem;
  font-weight: 600;
}


/* ---------- Buttons ---------- */

.project-links {
  display: flex;
  flex-wrap: wrap;

  gap: 0.55rem;

  margin-top: 1rem;
}

.project-button {
  display: inline-flex;
  align-items: center;

  padding: 0.48rem 0.82rem;

  border: 1px solid #d5d5d5;
  border-radius: 8px;

  color: inherit !important;
  text-decoration: none !important;

  font-size: 0.82rem;
  font-weight: 600;

  transition: all 0.2s ease;
}

.project-button:hover {
  border-color: #1e90ff;
  color: #1e90ff !important;
  transform: translateY(-1px);
}

.project-button.primary {
  background: #1e90ff;
  border-color: #1e90ff;
  color: white !important;
}

.project-button.primary:hover {
  background: #1878d1;
  color: white !important;
}


/* ---------- QR ---------- */

.project-media {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1.5rem;
}

.project-qr {
  width: 180px;
  height: 180px;

  padding: 7px;

  background: white;
  border: 1px solid #ddd;
  border-radius: 12px;
}


/* ---------- Project Status ---------- */

.project-status {
  display: inline-flex;
  align-items: center;

  width: fit-content;

  margin: 0 0 0.9rem;

  padding: 0.34rem 0.68rem;

  border-radius: 999px;

  background: rgba(30,144,255,0.10);
  color: #1671c5;

  font-size: 0.75rem;
  font-weight: 700;
}

.project-status.archived {
  background: rgba(120,120,120,0.12);
  color: #777;
}


/* ---------- Archived Note ---------- */

.project-note {
  margin-top: 0.8rem;

  padding: 0.7rem 0.85rem;

  border-left: 3px solid #aaa;
  border-radius: 4px;

  background: rgba(120,120,120,0.06);

  font-size: 0.88rem;
}


/* =========================================================
   SECTION DIVIDERS
   ========================================================= */

.project-section-heading {
  margin: 4rem 0 1.8rem;
}

.project-section-heading span {
  display: block;

  margin-bottom: 0.3rem;

  color: #1e90ff;

  font-size: 0.76rem;
  font-weight: 700;

  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.project-section-heading h2 {
  margin: 0;

  font-size: 1.75rem;
}

.project-section-heading p {
  max-width: 700px;

  margin-top: 0.6rem;

  color: #666;
  line-height: 1.6;
}


/* =========================================================
   DARK MODE
   ========================================================= */

@media (prefers-color-scheme: dark) {

  .projects-header p,
  .project-description,
  .featured-project p,
  .project-section-heading p {
    color: #bdbdbd;
  }

  .project-card {
    border-color: #353535;
  }

  .project-card:hover {
    border-color: rgba(30,144,255,0.65);
  }

  .project-tab {
    border-color: #444;
  }

  .project-date {
    color: #999;
  }

  .project-button {
    border-color: #444;
  }

  .project-status.archived {
    color: #aaa;
  }

}


/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 800px) {

  .featured-project {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-image-container {
    height: 190px;
  }

}


@media (max-width: 500px) {

  .projects-wrapper {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .project-card {
    padding: 1.1rem;
  }

  .project-media {
    flex-direction: column;
  }

  .project-qr {
    width: 150px;
    height: 150px;
  }

}

</style>


<div class="projects-wrapper">


<!-- ========================================================
     INTRO
     ======================================================== -->



<!-- ========================================================
     INTEREST TAGS
     ======================================================== -->

<div class="project-tabs">

  <span class="project-tab">Computational Neuroscience</span>
  <span class="project-tab">Machine Learning</span>
  <span class="project-tab">Artificial Intelligence</span>
  <span class="project-tab">Applied Mathematics</span>

</div>



<!-- ========================================================
     COMPUTATIONAL NEUROSCIENCE
     ======================================================== -->

<div class="project-section-heading">

  <span>Computational Neuroscience</span>

</div>



<!-- ========================================================
     PROJECT 01 — ctRNN
     ======================================================== -->

<div class="featured-project">

  <div>

    <span class="featured-badge">
      · Current Project
    </span>

    <h2>
      Continuous-Time Recurrent Neural Network (ctRNN) Learning Playground
    </h2>

    <div class="project-status">
      Currently Developing
    </div>

    <p>
      An interactive learning project for exploring continuous-time
      recurrent neural networks and understanding how recurrent dynamics
      evolve through time.
    </p>

    <p>
      The playground is designed for hands-on experimentation with
      network inputs, time constants, hidden-state dynamics, recurrent
      activity, training, and learned temporal behavior.
    </p>


    <div class="tech-tags">

      <span class="tech-tag">
        Computational Neuroscience
      </span>

      <span class="tech-tag">
        ctRNN
      </span>

      <span class="tech-tag">
        Recurrent Neural Networks
      </span>

      <span class="tech-tag">
        Dynamical Systems
      </span>

      <span class="tech-tag">
        PyTorch
      </span>

      <span class="tech-tag">
        Interactive Learning
      </span>

    </div>


    <div class="project-links">

      <a
        href="https://shafiq-abdu.github.io/ctrnn_learning_playground/training/index.html"
        target="_blank"
        rel="noopener noreferrer"
        class="project-button primary">
        Open Project ↗
      </a>

    </div>

  </div>


  <div class="project-media">

    <img
      src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https%3A%2F%2Fshafiq-abdu.github.io%2Fctrnn_learning_playground%2Ftraining%2Findex.html"
      alt="QR code for the ctRNN Learning Playground"
      class="project-qr">

  </div>

</div>



<!-- ========================================================
     MACHINE LEARNING & AI
     ======================================================== -->

<div class="project-section-heading">

  <span>Machine Learning & AI</span>

  <h2>Machine Learning & AI Projects</h2>

  <p>
    Selected projects exploring reinforcement learning and intelligent computational systems.
  </p>

</div>


<div class="projects-grid">



<!-- ========================================================
     AI SNAKE GAME
     ======================================================== -->

<div class="project-card">

  <div class="project-image-container">

    <img
      src="/images/1.gif"
      alt="AI Snake Game"
      class="project-image">

  </div>


  <div class="project-meta">

    <span class="project-category">
      Reinforcement Learning
    </span>

    <span class="project-date">
      Nov 2024
    </span>

  </div>


  <div class="project-title">
    AI Snake Game with Deep Reinforcement Learning
  </div>


  <div class="project-description">

    Developed an autonomous agent capable of learning
    to play the classic Snake game using Deep Q-Learning.

    <ul>

      <li>
        Implemented the reinforcement-learning environment
        and training pipeline in Python.
      </li>

      <li>
        Built a neural-network-based Q-function using PyTorch.
      </li>

      <li>
        Trained the agent through reward-driven interaction
        with the environment.
      </li>

    </ul>

  </div>


  <div class="tech-tags">

    <span class="tech-tag">Python</span>

    <span class="tech-tag">PyTorch</span>

    <span class="tech-tag">Deep Q-Learning</span>

    <span class="tech-tag">Pygame</span>

  </div>


  <div class="project-links">

    <a
      href="https://github.com/Shafiq-Abdu/Snake_Game_AI.git"
      target="_blank"
      rel="noopener noreferrer"
      class="project-button primary">
      GitHub ↗
    </a>


    <a
      href="https://youtu.be/-tuAOXsDKyw"
      target="_blank"
      rel="noopener noreferrer"
      class="project-button">
      Training Demo ↗
    </a>

  </div>

</div>



<!-- ========================================================
     AI FLASHCARD APP
     ======================================================== -->

<div class="project-card">

  <div class="project-image-container">

    <img
      src="/images/fl.png"
      alt="AI Flashcard Study App"
      class="project-image">

  </div>


  <div class="project-meta">

    <span class="project-category">
      AI Application
    </span>

    <span class="project-date">
      Archived
    </span>

  </div>


  <div class="project-title">
    AI Flashcard Study App
  </div>


  <div class="project-status archived">
    Archived · App No Longer Working
  </div>


  <div class="project-description">

    An AI-powered study application built to transform
    PDFs and lecture notes into interactive flashcards
    for active recall and self-study.

    <div class="project-note">

      This was an earlier experimental project.
      The deployed application is no longer operational.

    </div>

  </div>


  <div class="tech-tags">

    <span class="tech-tag">Python</span>

    <span class="tech-tag">FastAPI</span>

    <span class="tech-tag">OpenAI API</span>

    <span class="tech-tag">PWA</span>

  </div>

</div>


</div>



<!-- ========================================================
     SELECTED EARLIER PROJECTS
     ======================================================== -->

<div class="project-section-heading">

  <span>Selected Earlier Work</span>

  <h2>Mathematics & Optimization Projects</h2>

  <p>
    A small selection of earlier projects in optimization, applied linear algebra, machine learning, and quantitative modeling.
  </p>

</div>


<div class="projects-grid">



<!-- ========================================================
     SUPER TREND
     ======================================================== -->

<div class="project-card">

  <div class="project-image-container">

    <img
      src="/images/7.gif"
      alt="Supertrend Grid Search Optimization"
      class="project-image">

  </div>


  <div class="project-meta">

    <span class="project-category">
      Optimization
    </span>

    <span class="project-date">
      Jun – Dec 2023
    </span>

  </div>


  <div class="project-title">
    Supertrend Parameter Optimization for Sharpe Ratio
  </div>


  <div class="project-description">

    Developed a systematic parameter-search framework
    for improving risk-adjusted performance of a
    Supertrend-based trading strategy.

    <p>
      <strong>Advisor:</strong>
      Dr. Neelesh Upadhye, IIT Madras
    </p>

  </div>


  <div class="tech-tags">

    <span class="tech-tag">
      Grid Search
    </span>

    <span class="tech-tag">
      Optimization
    </span>

    <span class="tech-tag">
      Sharpe Ratio
    </span>

  </div>


  <div class="project-links">

    <a
      href="https://drive.google.com/file/d/12P2fP9daJdOuK8h4ZHe3NVbLzjM3QzZP/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      class="project-button primary">
      Report ↗
    </a>


    <a
      href="https://drive.google.com/file/d/12U5UjOgF31RsF6qTlEnapLzRuc1a1ElZ/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      class="project-button">
      Slides ↗
    </a>


    <a
      href="https://github.com/Shafiq-Abdu/Masters_Thesis-Seminar.git"
      target="_blank"
      rel="noopener noreferrer"
      class="project-button">
      GitHub ↗
    </a>

  </div>

</div>



<!-- ========================================================
     LINEAR ALGEBRA
     ======================================================== -->

<div class="project-card">

  <div class="project-image-container">

    <img
      src="/images/8.gif"
      alt="Linear Algebra for Machine Learning"
      class="project-image">

  </div>


  <div class="project-meta">

    <span class="project-category">
      Applied Linear Algebra
    </span>

    <span class="project-date">
      Jun – Dec 2021
    </span>

  </div>


  <div class="project-title">
    Linear Algebra for Machine Learning and Data Science
  </div>


  <div class="project-description">

    Collaborative project exploring how fundamental ideas
    from linear algebra appear in machine learning,
    data analysis, and autonomous systems.

    <p>
      <strong>Advisor:</strong>
      Dr. Suguna, GACBE
    </p>

  </div>


  <div class="tech-tags">

    <span class="tech-tag">
      Linear Algebra
    </span>

    <span class="tech-tag">
      Machine Learning
    </span>

    <span class="tech-tag">
      Data Science
    </span>

  </div>


  <div class="project-links">

    <a
      href="https://drive.google.com/file/d/17aJOT-fgtL5HDjNwfpwJnS-C-Py9wIw-/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      class="project-button primary">
      Report ↗
    </a>

  </div>

</div>


</div>

</div>
