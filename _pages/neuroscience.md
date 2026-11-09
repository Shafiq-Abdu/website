---
layout: splash
title: "CompNeuro"
permalink: /neuroscience/
author_profile: true
---

<section class="compneuro-hero">

  <div class="compneuro-text">
    <p class="eyebrow">CURRENT RESEARCH</p>
    <h1>Computational Neuroscience</h1>
    <p class="subtitle">
      Mathematical models of neural circuits, neural representation,
      dynamical systems, and stochastic neural computation.
    </p>
    <div class="topics">
      Neural Circuits · Dynamical Systems · Neural Geometry · Modeling
    </div>
  </div>

  <!-- =================================== -->
  <!-- COMPUTATIONAL NEUROSCIENCE VIDEO -->
  <!-- =================================== -->

  <div class="neuron-container">

    <video
      class="compneuro-video"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      aria-label="Computational neuroscience visualization"
    >
      <source
        src="{{ '/images/cns.mp4' | relative_url }}"
        type="video/mp4"
      >
      Your browser does not support HTML5 video.
    </video>

  </div>

</section>







<!-- =====================================================
     COMPUTATIONAL NEUROSCIENCE LEARNING FRAMEWORK
     Four Umbrellas with Expandable Subsections
====================================================== -->

<section class="neuro-framework" id="learning-framework">

  <div class="neuro-framework-heading">
    <p class="neuro-framework-eyebrow">LEARNING</p>
    <h2>Framework</h2>
  </div>

  <!-- FOUR HORIZONTAL UMBRELLA TABS -->
  <div class="neuro-umbrella-tabs" role="tablist"
       aria-label="Computational neuroscience areas">

    <button class="neuro-tab active" type="button"
            role="tab" id="tab-dynamics"
            aria-selected="true" tabindex="0"
            aria-controls="panel-dynamics"
            data-neuro-tab="dynamics">
      <span>Neural Dynamics &amp; Circuit Modeling</span>
    </button>

    <button class="neuro-tab" type="button"
            role="tab" id="tab-geometry"
            aria-selected="false" tabindex="-1"
            aria-controls="panel-geometry"
            data-neuro-tab="geometry">
      <span>Neural Representations &amp; Geometry</span>
    </button>

    <button class="neuro-tab" type="button"
            role="tab" id="tab-coding"
            aria-selected="false" tabindex="-1"
            aria-controls="panel-coding"
            data-neuro-tab="coding">
      <span>Neural Coding &amp; Probabilistic Inference</span>
    </button>

    <button class="neuro-tab" type="button"
            role="tab" id="tab-methods"
            aria-selected="false" tabindex="-1"
            aria-controls="panel-methods"
            data-neuro-tab="methods">
      <span>Neural Data Analysis &amp; Machine Learning</span>
    </button>

  </div>

  <!-- UMBRELLA 1 -->
  <div class="neuro-panel active" id="panel-dynamics"
       role="tabpanel" aria-labelledby="tab-dynamics">

    <h3>Neural Dynamics and Circuit Modeling</h3>
    <p class="neuro-panel-description">
      How does neural activity evolve over time, and how do
      neural circuits generate computations?
    </p>

    <details class="neuro-topic">
      <summary>Dynamical Systems</summary>
      <p>ODEs, SDEs, linear and nonlinear dynamics, fixed points,
      stability, bifurcations, oscillations, chaos.</p>
    </details>

    <details class="neuro-topic">
      <summary>Attractor Networks</summary>
      <p>Point, continuous, ring, torus and bump attractors;
      Hopfield networks.</p>
    </details>

    <details class="neuro-topic">
      <summary>Recurrent Neural Networks</summary>
      <p>Vanilla RNNs, continuous-time RNNs, gated RNNs
      (GRU/LSTM), low-rank, task-trained and spiking RNNs.</p>
    </details>

    <details class="neuro-topic">
      <summary>Biophysical Neuron Models</summary>
      <p>Hodgkin–Huxley, integrate-and-fire, Izhikevich,
      conductance-based and compartmental models.</p>
    </details>

    <details class="neuro-topic">
      <summary>Neural Circuit and Population Models</summary>
      <p>Wilson–Cowan models, excitation-inhibition networks,
      balanced networks, mean-field theory, neural mass
      and neural field models.</p>
    </details>

    <details class="neuro-topic">
      <summary>Learning and Plasticity</summary>
      <p>Hebbian learning, STDP, homeostatic plasticity,
      reward-modulated learning and adaptation.</p>
    </details>

    <details class="neuro-topic">
      <summary>Advanced Dynamical Methods</summary>
      <p>Koopman operators, dynamic mode decomposition,
      system identification, control theory,
      observability and controllability.</p>
    </details>

  </div>

  <!-- UMBRELLA 2 -->
  <div class="neuro-panel" id="panel-geometry"
       role="tabpanel" aria-labelledby="tab-geometry" hidden>

    <h3>Neural Representations and Geometry</h3>
    <p class="neuro-panel-description">
      How is information structured and organized in
      neural population activity?
    </p>

    <details class="neuro-topic">
      <summary>Neural Population Representations</summary>
      <p>Population state spaces, mixed selectivity,
      distributed representations and neural trajectories.</p>
    </details>

    <details class="neuro-topic">
      <summary>Representational Dimensionality</summary>
      <p>Intrinsic and effective dimensionality,
      latent representations, dimensionality expansion
      and compression.</p>
    </details>

    <details class="neuro-topic">
      <summary>Neural Manifold Geometry</summary>
      <p>Neural manifolds, differential and Riemannian geometry,
      curvature, geodesics and manifold alignment.</p>
    </details>

    <details class="neuro-topic">
      <summary>Topology of Neural Activity</summary>
      <p>Homology, cohomology, Betti numbers,
      persistent homology and cohomology,
      ring and torus topology.</p>
    </details>

    <details class="neuro-topic">
      <summary>Representational Similarity</summary>
      <p>RSA, representational distances,
      CCA-based alignment, cross-condition generalization
      and invariance.</p>
    </details>

    <details class="neuro-topic">
      <summary>Geometry of Neural Computation</summary>
      <p>Coding and null spaces, orthogonality,
      rotational dynamics, manifold capacity,
      untangling and linear separability.</p>
    </details>

    <details class="neuro-topic">
      <summary>High-Dimensional Geometry</summary>
      <p>Random projections, random matrix theory,
      concentration of measure and geometric
      classification theory.</p>
    </details>

  </div>

  <!-- UMBRELLA 3 -->
  <div class="neuro-panel" id="panel-coding"
       role="tabpanel" aria-labelledby="tab-coding" hidden>

    <h3>Neural Coding and Probabilistic Inference</h3>
    <p class="neuro-panel-description">
      How do neural systems encode, decode and use
      information under uncertainty?
    </p>

    <details class="neuro-topic">
      <summary>Neural Coding Principles</summary>
      <p>Rate, temporal, population, sparse and distributed
      coding; tuning curves and receptive fields.</p>
    </details>

    <details class="neuro-topic">
      <summary>Neural Encoding Models</summary>
      <p>LN/LNP models, GLMs, Poisson and point-process
      encoding, spike-history models.</p>
    </details>

    <details class="neuro-topic">
      <summary>Neural Decoding</summary>
      <p>Bayesian, maximum-likelihood, MAP,
      linear and population decoding.</p>
    </details>

    <details class="neuro-topic">
      <summary>Information Theory</summary>
      <p>Entropy, mutual information, Fisher information,
      Cramér–Rao bounds and efficient coding.</p>
    </details>

    <details class="neuro-topic">
      <summary>Bayesian and Probabilistic Inference</summary>
      <p>Bayesian estimation, graphical models,
      variational inference, sampling and predictive coding.</p>
    </details>

    <details class="neuro-topic">
      <summary>Probabilistic Neural Representations</summary>
      <p>Probabilistic population codes (PPCs),
      distributed distributional codes (DDCs),
      sampling-based codes, uncertainty and
      posterior representations.</p>
    </details>

    <details class="neuro-topic">
      <summary>Sequential Inference and Decision-Making</summary>
      <p>HMMs, Kalman and particle filters,
      drift-diffusion models, evidence accumulation
      and POMDPs.</p>
    </details>

    <details class="neuro-topic">
      <summary>Normative Neural Computation</summary>
      <p>Efficient coding, information bottleneck,
      optimal estimation, Bayesian decision theory
      and active inference.</p>
    </details>

  </div>

  <!-- UMBRELLA 4 -->
  <div class="neuro-panel" id="panel-methods"
       role="tabpanel" aria-labelledby="tab-methods" hidden>

    <h3>Neural Data Analysis and Machine Learning Methods</h3>
    <p class="neuro-panel-description">
      Mathematical, statistical and computational tools
      for analyzing, modeling and predicting neural activity.
    </p>

    <details class="neuro-topic">
      <summary>Probability and Statistical Methods</summary>
      <p>Probability distributions, MLE/MAP,
      hypothesis testing, bootstrap, permutation tests
      and cross-validation.</p>
    </details>

    <details class="neuro-topic">
      <summary>Spike-Train and Neural Data Analysis</summary>
      <p>PSTHs, firing rates, spike-count statistics,
      Fano factor, correlations and spike sorting.</p>
    </details>

    <details class="neuro-topic">
      <summary>Dimensionality Reduction</summary>
      <p>PCA/SVD, FA/GPFA, ICA, LDA, CCA,
      dPCA, jPCA, t-SNE and UMAP.</p>
    </details>

    <details class="neuro-topic">
      <summary>Statistical Machine Learning</summary>
      <p>Regression, GLMs, SVMs, random forests,
      Gaussian processes, clustering and classifiers.</p>
    </details>

    <details class="neuro-topic">
      <summary>Deep Learning Methods</summary>
      <p>Feedforward networks, CNNs, RNNs, transformers,
      autoencoders and generative models.</p>
    </details>

    <details class="neuro-topic">
      <summary>Neural Signal Processing</summary>
      <p>Fourier and wavelet analysis, filtering,
      spectral analysis, EEG, LFP, MEG
      and calcium imaging.</p>
    </details>

    <details class="neuro-topic">
      <summary>Time-Series and Latent-State Modeling</summary>
      <p>State-space models, HMMs, Kalman filters,
      latent dynamics and system identification.</p>
    </details>

    <details class="neuro-topic">
      <summary>Optimization and Scientific Computing</summary>
      <p>Gradient methods, backpropagation,
      regularization, numerical methods,
      Python/MATLAB and reproducibility.</p>
    </details>

  </div>

  <p class="neuro-framework-note">
    A flexible learning framework for theoretical and
    computational neuroscience. Topics may overlap across areas.
  </p>

</section>

<!-- =====================================================
     STYLES
====================================================== -->

<style>
/* Independent dark-themed learning framework */
.neuro-framework {
  margin: 3rem 0;
  padding: clamp(22px, 3.5vw, 48px);
  border: 1px solid #263241;
  border-radius: 22px;
  background: #090f19;
  color: #eaf0f7;
  font-family: inherit;
  color-scheme: dark;
}
.neuro-framework-heading { margin-bottom: 24px; }
.neuro-framework-eyebrow {
  margin: 0 0 7px; color: #8ea3b8; font-size: .76rem;
  font-weight: 700; letter-spacing: .14em;
}
.neuro-framework-heading h2 {
  margin: 0 0 10px; color: #f5f8fc; font-size: clamp(1.5rem, 3vw, 2rem);
}
.neuro-framework-heading > p:last-child {
  margin: 0; color: #a5b1c0; font-size: .95rem; line-height: 1.65;
}
/* Compact horizontal pill tabs, matching the teaching portfolio */
.neuro-framework .neuro-umbrella-tabs {
  display: flex; flex-wrap: wrap; gap: 9px;
  margin: 0 0 26px; padding: 0;
}
.neuro-framework .neuro-tab {
  display: inline-flex; flex: 0 1 auto; align-items: center;
  justify-content: center; width: auto; min-height: 43px;
  margin: 0; padding: 10px 17px;
  border: 1px solid #344153; border-radius: 999px;
  background: #111a27; color: #b7c4d3;
  font-family: inherit; font-size: .86rem; font-weight: 500; line-height: 1.35; text-align: center;
  cursor: pointer; box-shadow: none;
  transition: background .18s ease, border-color .18s ease, color .18s ease;
}
.neuro-framework .neuro-tab:hover {
  background: #192738; color: #fff; border-color: #278fa3;
  transform: none;
}
.neuro-framework .neuro-tab.active,
.neuro-framework .neuro-tab[aria-selected="true"] {
  background: #118b9e; border-color: #118b9e;
  color: #fff; box-shadow: none;
}
.neuro-framework .neuro-tab:focus-visible,
.neuro-framework .neuro-topic summary:focus-visible {
  outline: 2px solid #4fd4e5; outline-offset: 3px;
}
/* Keep the learning panels independent of resource hub panels */
.neuro-framework .neuro-panel {
  display: none; padding: clamp(16px, 2.2vw, 28px);
  border: 1px solid #273443; border-radius: 16px;
  background: #0d1520; color: #eaf0f7;
}
.neuro-framework .neuro-panel.active:not([hidden]) { display: block; }
.neuro-framework .neuro-panel[hidden] { display: none !important; }
.neuro-framework .neuro-panel h3 {
  margin: 0 0 9px; color: #f4f7fb;
  font-size: clamp(1.08rem, 2vw, 1.35rem);
}
.neuro-framework .neuro-panel-description {
  margin: 0 0 22px; color: #aab6c6;
  opacity: 1; font-size: .92rem; line-height: 1.65;
}
.neuro-framework .neuro-topic {
  margin: 0 0 9px; overflow: hidden;
  border: 1px solid #293849; border-radius: 10px;
  background: #111b28; color: #e8eef7;
}
.neuro-framework .neuro-topic summary {
  display: flex; align-items: center; justify-content: space-between;
  gap: 12px; padding: 14px 17px; list-style: none;
  cursor: pointer; color: #eaf0f7;
  font-size: .92rem; font-weight: 600; line-height: 1.5;
}
.neuro-framework .neuro-topic summary::-webkit-details-marker { display: none; }
.neuro-framework .neuro-topic summary::after {
  content: "+"; color: #52c7d8; font-size: 1.25rem;
  font-weight: 400; flex-shrink: 0;
}
.neuro-framework .neuro-topic[open] summary::after { content: "−"; }
.neuro-framework .neuro-topic summary:hover { background: #182637; }
.neuro-framework .neuro-topic[open] { border-color: #258da2; }
.neuro-framework .neuro-topic p {
  margin: 0; padding: 0 17px 16px; color: #b6c3d2;
  opacity: 1; font-size: .9rem; line-height: 1.7;
}
.neuro-framework .neuro-framework-note {
  margin: 18px 0 0; color: #92a1b3;
  opacity: 1; font-size: .8rem; font-style: italic;
}
@media (max-width: 640px) {
  .neuro-framework .neuro-umbrella-tabs { gap: 8px; }
  .neuro-framework .neuro-tab { padding: 9px 13px; font-size: .8rem; }
}
@media (prefers-reduced-motion: reduce) {
  .neuro-framework .neuro-tab { transition: none; }
}
</style>

<!-- =====================================================
     TAB FUNCTIONALITY
====================================================== -->

<script>
(function () {
  function initializeNeuroFramework() {
    const framework = document.getElementById("learning-framework");
    if (!framework) return;

    const tabs = Array.from(
      framework.querySelectorAll("[data-neuro-tab]")
    );

    const panels = Array.from(
      framework.querySelectorAll('[role="tabpanel"]')
    );

    function activateTab(tab, moveFocus) {
      const targetId = "panel-" + tab.dataset.neuroTab;

      tabs.forEach(function (item) {
        const selected = item === tab;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-selected", String(selected));
        item.tabIndex = selected ? 0 : -1;
      });

      panels.forEach(function (panel) {
        const selected = panel.id === targetId;
        panel.hidden = !selected;
        panel.classList.toggle("active", selected);
      });

      if (moveFocus) tab.focus();
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () {
        activateTab(tab, false);
      });

      tab.addEventListener("keydown", function (event) {
        let nextIndex;

        if (event.key === "ArrowRight") {
          nextIndex = (index + 1) % tabs.length;
        } else if (event.key === "ArrowLeft") {
          nextIndex = (index - 1 + tabs.length) % tabs.length;
        } else if (event.key === "Home") {
          nextIndex = 0;
        } else if (event.key === "End") {
          nextIndex = tabs.length - 1;
        } else {
          return;
        }

        event.preventDefault();
        activateTab(tabs[nextIndex], true);
      });
    });

    if (tabs.length) activateTab(tabs[0], false);
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initializeNeuroFramework
    );
  } else {
    initializeNeuroFramework();
  }
})();
</script>










<!-- =========================================================
     COMPUTATIONAL NEUROSCIENCE RESOURCE HUB
========================================================= -->

<section class="neuro-resources">

  <div class="resource-heading">
    <p class="resource-eyebrow">LEARNING &amp; RESEARCH</p>
    <h2>🧠 Computational Neuroscience Resource Hub</h2>
  </div>


<!-- =====================================================
     TAB BUTTONS
====================================================== -->

<div class="neuro-tabs" role="tablist" aria-label="Research resources">

  <button type="button" class="resource-tab active" data-tab="learning" role="tab" id="resource-tab-learning" aria-controls="learning" aria-selected="true">
    📘 Learning
  </button>

  <button type="button" class="resource-tab" data-tab="books" role="tab" id="resource-tab-books" aria-controls="books" aria-selected="false" tabindex="-1">
    📝 Books
  </button>

  <button type="button" class="resource-tab" data-tab="institutes" role="tab" id="resource-tab-institutes" aria-controls="institutes" aria-selected="false" tabindex="-1">
    🏛 Institutes
  </button>

  <button type="button" class="resource-tab" data-tab="conferences" role="tab" id="resource-tab-conferences" aria-controls="conferences" aria-selected="false" tabindex="-1">
    🎤 Conferences
  </button>

  <button type="button" class="resource-tab" data-tab="people" role="tab" id="resource-tab-people" aria-controls="people" aria-selected="false" tabindex="-1">
    🧠 People
  </button>

  <button type="button" class="resource-tab" data-tab="tools" role="tab" id="resource-tab-tools" aria-controls="tools" aria-selected="false" tabindex="-1">
    💻 Tools
  </button>

  <button type="button" class="resource-tab" data-tab="datasets" role="tab" id="resource-tab-datasets" aria-controls="datasets" aria-selected="false" tabindex="-1">
    📊 Data
  </button>

  <button type="button" class="resource-tab" data-tab="media" role="tab" id="resource-tab-media" aria-controls="media" aria-selected="false" tabindex="-1">
    🎧 Media
  </button>

  <button type="button" class="resource-tab" data-tab="more-resources" role="tab" id="resource-tab-more-resources" aria-controls="more-resources" aria-selected="false" tabindex="-1">
    🔗 More
  </button>

</div>


<!-- =====================================================
     LEARNING
====================================================== -->

<div class="resource-panel active" id="learning" role="tabpanel" aria-labelledby="resource-tab-learning">

  <h3>Courses &amp; Learning Resources</h3>

  <div class="resource-grid">

    <a class="resource-card"
       href="https://compneuro.neuromatch.io/tutorials/intro.html"
       target="_blank"
       rel="noopener noreferrer">

      <span class="resource-icon">📘</span>

      <div>
        <strong>Neuromatch Computational Neuroscience</strong>
        <p>
          Tutorials, prerequisite material and computational neuroscience
          course videos.
        </p>
      </div>

    </a>


    <a class="resource-card"
       href="https://neural-reckoning.org/comp-neuro-resources.html"
       target="_blank"
       rel="noopener noreferrer">

      <span class="resource-icon">🎓</span>

      <div>
        <strong>Dan Goodman's (Neural Reckoning) Resources</strong>
        <p>
          Collection of resources and links for computational neuroscience.
        </p>
      </div>

    </a>


    <a class="resource-card"
       href="https://lcnwww.epfl.ch/gerstner/NeuronalDynamics-MOOCall.html"
       target="_blank"
       rel="noopener noreferrer">

      <span class="resource-icon">🎓</span>

      <div>
        <strong>EPFL (Gerstner) Neuronal Dynamics Course</strong>
        <p>
          Full computational neuroscience course from the
          Laboratory of Computational Neuroscience.
        </p>
      </div>

    </a>


    <a class="resource-card"
       href="https://www.cambridge.org/core/books/handson-network-machine-learning-with-python/9735741A096973A9C963E930BBAF5368"
       target="_blank"
       rel="noopener noreferrer">

      <span class="resource-icon">🐍</span>

      <div>
        <strong>Network Machine Learning with Python</strong>
        <p>
          Networks, machine learning and Python.
        </p>
      </div>

    </a>


    <a class="resource-card"
       href="https://kordinglab.com/resources/"
       target="_blank"
       rel="noopener noreferrer">

      <span class="resource-icon">🤖</span>

      <div>
        <strong>Kording Lab (Penn) Resources</strong>
        <p>
          Collection of resources and links for computational neuroscience.
        </p>
      </div>

    </a>

  </div>

</div>


<!-- =====================================================
     BOOKS
====================================================== -->

<div class="resource-panel" id="books" role="tabpanel" aria-labelledby="resource-tab-books" hidden>

  <h3>Textbooks</h3>

  <div class="resource-grid">

    <a class="resource-card"
       href="https://mitpress.mit.edu/9780262541855/theoretical-neuroscience/"
       target="_blank"
       rel="noopener noreferrer">

      <span class="resource-icon">🧠</span>

      <div>
        <strong>Theoretical Neuroscience</strong>
        <p>
          Peter Dayan &amp; L. F. Abbott — neural coding, biophysics,
          networks, learning and plasticity.
        </p>
      </div>

    </a>


    <a class="resource-card"
       href="https://neuronaldynamics.epfl.ch/"
       target="_blank"
       rel="noopener noreferrer">

      <span class="resource-icon">⚡</span>

      <div>
        <strong>Neuronal Dynamics</strong>
        <p>
          Gerstner, Kistler, Naud &amp; Paninski — neurons, networks,
          neural coding and dynamics.
        </p>
      </div>

    </a>


    <a class="resource-card"
       href="https://www.routledge.com/Theoretical-Neuroscience-Understanding-Cognition/Wang/p/book/9781032604817"
       target="_blank"
       rel="noopener noreferrer">

      <span class="resource-icon">🧩</span>

      <div>
        <strong>Theoretical Neuroscience: Understanding Cognition</strong>
        <p>
          Xiao-Jing Wang — neural circuits, dynamical systems,
          cognition and decision making.
        </p>
      </div>

    </a>


    <a class="resource-card"
       href="https://mitpress.mit.edu/9780262548083/modeling-neural-circuits-made-simple-with-python/"
       target="_blank"
       rel="noopener noreferrer">

      <span class="resource-icon">🐍</span>

      <div>
        <strong>Modeling Neural Circuits Made Simple with Python</strong>
        <p>
          Robert Rosenbaum — mathematical and computational modeling
          of neurons and neural circuits.
        </p>
      </div>

    </a>


    <a class="resource-card"
       href="https://mitpress.mit.edu/9780262013277/dynamical-systems-in-neuroscience/"
       target="_blank"
       rel="noopener noreferrer">

      <span class="resource-icon">📈</span>

      <div>
        <strong>Dynamical Systems in Neuroscience</strong>
        <p>
          Eugene Izhikevich — nonlinear dynamics, excitability,
          bifurcations and neuronal models.
        </p>
      </div>

    </a>


    <a class="resource-card"
       href="https://mitpress.mit.edu/9780262681087/spikes/"
       target="_blank"
       rel="noopener noreferrer">

      <span class="resource-icon">📊</span>

      <div>
        <strong>Spikes</strong>
        <p>
          Rieke, Warland, de Ruyter van Steveninck &amp; Bialek —
          neural coding and information in spike trains.
        </p>
      </div>

    </a>
    <a class="resource-card"
       href="https://fbullo.github.io/lnd/"
       target="_blank"
       rel="noopener noreferrer">

      <span class="resource-icon">🐍</span>

      <div>
        <strong>Neural Dynamics</strong>
        <p>
          Lectures by Francesco Bullo
        </p>
      </div>

    </a>

  </div>

</div>

  
<!-- =====================================================
     INSTITUTES
====================================================== -->

<div class="resource-panel" id="institutes" role="tabpanel" aria-labelledby="resource-tab-institutes" hidden>
  <h3>Leading Institutes</h3>

  <div class="resource-grid">

    <a class="resource-card"
       href="https://mcgovern.mit.edu/"
       target="_blank" rel="noopener noreferrer">
      <span class="resource-icon">🏛️</span>
      <div>
        <strong>MIT McGovern Institute</strong>
      </div>
    </a>

    <a class="resource-card"
       href="https://pni.princeton.edu/"
       target="_blank" rel="noopener noreferrer">
      <span class="resource-icon">🎓</span>
      <div>
        <strong>Princeton Neuroscience Institute</strong>
      </div>
    </a>

    <a class="resource-card"
       href="https://www.ucl.ac.uk/life-sciences/gatsby"
       target="_blank" rel="noopener noreferrer">
      <span class="resource-icon">🧠</span>
      <div>
        <strong>Gatsby Computational Neuroscience Unit - UCL</strong>
      </div>
    </a>

    <a class="resource-card"
       href="https://alleninstitute.org/"
       target="_blank" rel="noopener noreferrer">
      <span class="resource-icon">🔬</span>
      <div>
        <strong>Allen Institute</strong>
      </div>
    </a>

    <a class="resource-card"
       href="https://www.janelia.org/"
       target="_blank" rel="noopener noreferrer">
      <span class="resource-icon">🧬</span>
      <div>
        <strong>Janelia Research Campus</strong>
      </div>
    </a>

    <a class="resource-card"
       href="https://ctn.zuckermaninstitute.columbia.edu/"
       target="_blank" rel="noopener noreferrer">
      <span class="resource-icon">📐</span>
      <div>
        <strong>Columbia Center for Theoretical Neuroscience</strong>
      </div>
    </a>

    <a class="resource-card"
       href="https://cbs.fas.harvard.edu/"
       target="_blank" rel="noopener noreferrer">
      <span class="resource-icon">💡</span>
      <div>
        <strong>Center for Brain Science - Harvard University</strong>
      </div>
    </a>

    <a class="resource-card"
       href="https://www.kitp.ucsb.edu/"
       target="_blank" rel="noopener noreferrer">
      <span class="resource-icon">⚛️</span>
      <div>
        <strong>Kavli Institute for Theoretical Physics - UC Santa Barbara</strong>
      </div>
    </a>

    <a class="resource-card"
       href="https://bsi-ni.brain.riken.jp/dbtools"
       target="_blank" rel="noopener noreferrer">
      <span class="resource-icon">📊</span>
      <div>
        <strong>Laboratory for Mathematical Neuroscience - RIKEN (Historical)</strong>
      </div>
    </a>

    <a class="resource-card"
       href="https://roboti.us/lab/"
       target="_blank" rel="noopener noreferrer">
      <span class="resource-icon">🦾</span>
      <div>
        <strong>Movement Control Laboratory - UC San Diego (Historical)</strong>
      </div>
    </a>

    <a class="resource-card"
       href="https://redwood.berkeley.edu/"
       target="_blank" rel="noopener noreferrer">
      <span class="resource-icon">🌲</span>
      <div>
        <strong>Redwood Center for Theoretical Neuroscience - UC Berkeley</strong>
      </div>
    </a>

    <a class="resource-card"
       href="https://sccn.ucsd.edu/"
       target="_blank" rel="noopener noreferrer">
      <span class="resource-icon">〰️</span>
      <div>
        <strong>Swartz Center for Computational Neuroscience - UC San Diego</strong>
      </div>
    </a>

    <a class="resource-card"
       href="https://inc.ucsd.edu/"
       target="_blank" rel="noopener noreferrer">
      <span class="resource-icon">🔗</span>
      <div>
        <strong>Institute for Neural Computation - UC San Diego</strong>
      </div>
    </a>

    <a class="resource-card"
       href="https://www.simonsfoundation.org/flatiron/computational-neuroscience/"
       target="_blank" rel="noopener noreferrer">
      <span class="resource-icon">🧮</span>
      <div>
        <strong>Flatiron Institute - Center for Computational Neuroscience</strong>
      </div>
    </a>

    <a class="resource-card"
       href="https://seunglab.org/"
       target="_blank" rel="noopener noreferrer">
      <span class="resource-icon">🕸️</span>
      <div>
        <strong>Seung Lab - Princeton University</strong>
      </div>
    </a>

    <a class="resource-card"
       href="https://fietelab.mit.edu/"
       target="_blank" rel="noopener noreferrer">
      <span class="resource-icon">🧭</span>
      <div>
        <strong>Fiete Lab - MIT</strong>
      </div>
    </a>

    <a class="resource-card"
       href="https://compneuroweb.com/labs.html"
       target="_blank" rel="noopener noreferrer">
      <span class="resource-icon">🌐</span>
      <div>
        <strong>Computational Neuroscience on the Web - Laboratory Directory</strong>
      </div>
    </a>
    <a class="resource-card"
       href="https://www.nitmb.org/"
       target="_blank" rel="noopener noreferrer">
      <span class="resource-icon">🔢</span>
      <div>
        <strong>NITMB - National Institute for Theory and Mathematics in Biology</strong>
      </div>
    </a>
  </div>
</div>



  <!-- =====================================================
       CONFERENCES
  ====================================================== -->

  <div class="resource-panel" id="conferences" role="tabpanel" aria-labelledby="resource-tab-conferences" hidden>
    <h3>Major Conferences</h3>
    <div class="resource-grid">
     <a class="resource-card"
         href="https://www.cosyne.org/"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">🎤</span>
        <div>
          <strong>COSYNE</strong>
          <p>Computational and Systems Neuroscience.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://ccneuro.org/"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">🎤</span>
        <div>
          <strong>CCN</strong>
          <p>Cognitive Computational Neuroscience.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://www.cnsorg.org/"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">🎤</span>
        <div>
          <strong>CNS</strong>
          <p>Annual Computational Neuroscience Meeting.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://www.sfn.org/"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">🧠</span>
        <div>
          <strong>Society for Neuroscience</strong>
          <p>SfN annual neuroscience meeting.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://neurips.cc/"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">🤖</span>
        <div>
          <strong>NeurIPS</strong>
          <p>Neural information processing systems.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://bernstein-network.de/en/bernstein-conference/"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">🇩🇪</span>
        <div>
          <strong>Bernstein Conference</strong>
          <p>Computational neuroscience conference.</p>
        </div>
      </a>
    </div>
  </div>



  <!-- =====================================================
       PEOPLE
  ====================================================== -->
<div class="resource-panel" id="people" role="tabpanel" aria-labelledby="resource-tab-people" hidden>
  <h3>Computational Neuroscientists</h3>
  <div class="people-list">
    <div class="person">
      <a href="https://www.salk.edu/scientist/terrence-sejnowski/"
         target="_blank" rel="noopener noreferrer"><strong>Terrence Sejnowski</strong></a>
      <span>Salk Institute / UC San Diego </span>
      <small>
        Neural computation • Neural networks • Learning and memory •
        Computational neuroscience • Brain-inspired AI
      </small>
    </div>
    <div class="person">
      <a href="https://www.epfl.ch/labs/lcn/"
         target="_blank" rel="noopener noreferrer"><strong>Wulfram Gerstner</strong></a>
      <span>EPFL Switzerland</span>
      <small>
        Spiking neuron models • Synaptic plasticity • Learning rules •
        Neural dynamics • Computational neuroscience
      </small>
    </div>
    <div class="person">
      <a href="https://www.simonsfoundation.org/people/larry-abbott/"
         target="_blank" rel="noopener noreferrer"><strong>Larry Abbott</strong></a>
      <span>Columbia University </span>
      <small>
        Neural circuits • Population coding • Neural dynamics •
        Theoretical neuroscience • Learning
      </small>
    </div>
    <div class="person">
      <a href="https://profiles.stanford.edu/surya-ganguli"
         target="_blank" rel="noopener noreferrer"><strong>Surya Ganguli</strong></a>
      <span>Stanford University </span>
      <small>
        Neural networks • Deep learning theory • Neural population geometry •
        High-dimensional data • Theoretical neuroscience
      </small>
    </div>
    <div class="person">
      <a href="https://med.stanford.edu/profiles/scott-linderman"
         target="_blank" rel="noopener noreferrer"><strong>Scott Linderman</strong></a>
      <span>Stanford University </span>
      <small>
        Statistical neuroscience • Machine learning • Neural data analysis •
        Latent dynamical systems • Bayesian modeling
      </small>
    </div>
    <div class="person">
      <a href="https://www.stat.columbia.edu/~cunningham/"
         target="_blank" rel="noopener noreferrer"><strong>John Cunningham</strong></a>
      <span>Columbia University </span>
      <small>
        Computational neuroscience • Machine learning • Neural data analysis •
        Dimensionality reduction • Neural population activity
      </small>
    </div>
    <div class="person">
      <a href="https://www.gatsby.ucl.ac.uk/~pel/"
         target="_blank" rel="noopener noreferrer"><strong>Peter Latham</strong></a>
      <span>Gatsby, UCL </span>
      <small>
        Theoretical neuroscience • Neural coding • Neural computation •
        Probabilistic inference • Network dynamics
      </small>
    </div>
    <div class="person">
      <a href="https://www.ucl.ac.uk/icn/people/maneesh-sahani"
         target="_blank" rel="noopener noreferrer"><strong>Maneesh Sahani</strong></a>
      <span>Gatsby , UCL</span>
      <small>
        Machine learning • Neural coding • Statistical neuroscience •
        Sensory processing • Neural data analysis
      </small>
    </div>
    <div class="person">
      <a href="https://www.ucl.ac.uk/icn/people/claudia-clopath"
         target="_blank" rel="noopener noreferrer"><strong>Claudia Clopath</strong></a>
      <span>Imperial College London </span>
      <small>
        Synaptic plasticity • Learning and memory • Neural circuits •
        Network dynamics • Computational neuroscience
      </small>
    </div>
    <div class="person">
      <a href="https://psychology.princeton.edu/person/jonathan-pillow"
         target="_blank" rel="noopener noreferrer"><strong>Jonathan Pillow</strong></a>
      <span>Princeton </span>
      <small>
        Computational neuroscience • Neural coding • Statistical modeling •
        Bayesian inference • Neural data analysis
      </small>
    </div>
    <div class="person">
      <a href="https://www.buzsakilab.com/"
         target="_blank" rel="noopener noreferrer"><strong>György Buzsáki</strong></a>
      <span>NYU Grossman School of Medicine NY</span>
      <small>
        Neural oscillations • Hippocampus • Memory • Neural circuits •
        Population dynamics
      </small>
    </div>
    <div class="person">
      <a href="https://www.fil.ion.ucl.ac.uk/~karl/"
         target="_blank" rel="noopener noreferrer"><strong>Karl Friston</strong></a>
      <span>UCL</span>
      <small>
        Computational neuroscience • Predictive coding • Free-energy principle •
        Active inference • Neuroimaging
      </small>
    </div>
    <div class="person">
      <a href="https://neural-reckoning.org/dan_goodman.html"
         target="_blank" rel="noopener noreferrer"><strong>Dan Goodman</strong></a>
      <span>Imperial College London (Neuromatch)</span>
      <small>
        Computational neuroscience • Auditory neuroscience • Neural coding •
        Spiking neural networks • Neuromatch
      </small>
    </div>
  </div>
</div>

  <!-- =====================================================
       TOOLS
  ====================================================== -->

  <div class="resource-panel" id="tools" role="tabpanel" aria-labelledby="resource-tab-tools" hidden>
    <h3>Simulation & Computational Tools</h3>
    <div class="resource-grid">
      <a class="resource-card"
         href="https://brian2.readthedocs.io/"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">⚡</span>
        <div>
          <strong>Brian2</strong>
          <p>Spiking neural network simulator.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://www.neuron.yale.edu/neuron/"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">🧠</span>
        <div>
          <strong>NEURON</strong>
          <p>Biophysical neuron simulation.</p>
        </div>
      </a>
     <a class="resource-card"
         href="https://www.nest-simulator.org/"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">🔗</span>
        <div>
          <strong>NEST Simulator</strong>
          <p>Large-scale spiking neural networks.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://www.mooseneuro.org/"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">🫎</span>
        <div>
          <strong>MOOSE Neuro</strong>
          <p>Multiscale neuronal and biochemical simulation.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://pytorch.org/"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">🔥</span>
        <div>
          <strong>PyTorch</strong>
          <p>Machine learning and NeuroAI.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://jax.readthedocs.io/"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">∇</span>
        <div>
          <strong>JAX</strong>
          <p>Differentiable scientific computing.</p>
        </div>
      </a>
    </div>
  </div>



  <!-- =====================================================
       DATA
  ====================================================== -->

  <div class="resource-panel" id="datasets" role="tabpanel" aria-labelledby="resource-tab-datasets" hidden>
    <h3>Public Brain Datasets</h3>
    <div class="resource-grid">
      <a class="resource-card"
         href="https://portal.brain-map.org/"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">🗺</span>
        <div>
          <strong>Allen Brain Map</strong>
          <p>Open brain atlas and neuroscience datasets.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://openneuro.org/"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">🧠</span>
        <div>
          <strong>OpenNeuro</strong>
          <p>Open neuroimaging datasets.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://about.dandiarchive.org/"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">📊</span>
        <div>
          <strong>DANDI Archive</strong>
          <p>Neurophysiology data archive.</p>
        </div>
     </a>
      <a class="resource-card"
         href="https://modeldb.science/"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">🧮</span>
        <div>
          <strong>ModelDB</strong>
          <p>Database of computational neuroscience models.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://opensourcebrain.org/"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">🧠</span>
        <div>
          <strong>Open Source Brain</strong>
          <p>Open models, projects, tutorials and computational neuroscience resources.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://neuromorpho.org/"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">🌳</span>
        <div>
          <strong>NeuroMorpho.Org</strong>
          <p>Digitally reconstructed neuronal morphologies.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://www.ebi.ac.uk/biomodels/"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">🧬</span>
        <div>
          <strong>BioModels</strong>
          <p>Repository of computational models of biological systems.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://www.humanconnectome.org/"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">🕸</span>
        <div>
          <strong>Human Connectome Project</strong>
          <p>Human brain connectivity datasets.</p>
       </div>
      </a>
    </div>
  </div>



  <!-- =====================================================
       MEDIA
  ====================================================== -->

  <div class="resource-panel" id="media" role="tabpanel" aria-labelledby="resource-tab-media" hidden>
    <h3>Articles, Podcasts &amp; YouTube</h3>
    <div class="resource-grid">
      <a class="resource-card"
         href="https://www.youtube.com/artemkirsanov"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">▶️</span>
        <div>
          <strong>Artem Kirsanov</strong>
          <p>Computational neuroscience YouTube channel.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://www.thetransmitter.org/"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">📰</span>
        <div>
          <strong>The Transmitter</strong>
          <p>Neuroscience news, commentary and research.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://www.brainfacts.org/"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">🧠</span>
        <div>
          <strong>BrainFacts</strong>
          <p>Neuroscience education from the Society for Neuroscience.</p>
        </div>
      </a>
      <a class="resource-card"
         href="https://braininspired.co/"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">🎧</span>
        <div>
          <strong>Brain Inspired Podcast</strong>
          <p>Conversations about neuroscience, AI and cognition.</p>
        </div>
      </a>
         <a class="resource-card"
         href="https://www.diygenius.com/best-neuroscience-documentaries/"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">🎧</span>
        <div>
          <strong>Brain Documentaries</strong>
          <p>Videos on neuroscience, brain and cognition.</p>
        </div>
      </a>
        <a class="resource-card"
         href="https://kids.frontiersin.org/articles/neuroscience-and-psychology?sort=most-popular"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">🧠</span>
        <div>
          <strong>Frontiers for Young Minds</strong>
          <p>Neuroscience and psychology articles for younger readers.</p>
        </div>
      </a>
        <a class="resource-card"
         href="http://www.youtube.com/@BrainPrize"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">🔬</span>
        <div>
          <strong>Brain Prize</strong>
          <p>Videos and lectures featuring neuroscience research and discoveries.</p>
        </div>
      </a>
    </div>
  </div>


  <!-- =====================================================
       LABS & RESEARCH GROUPS
  ====================================================== -->


  <!-- =====================================================
       MORE RESOURCES
  ====================================================== -->

  <div class="resource-panel" id="more-resources" role="tabpanel" aria-labelledby="resource-tab-more-resources" hidden>
    <h3>More Computational Neuroscience Resources</h3>
    <div class="resource-grid">

      <a class="resource-card"
         href="https://compneuroweb.com/"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">🌐</span>
        <div>
          <strong>Computational Neuroscience on the Web</strong>
          <p>Links to labs, researchers and computational neuroscience resources.</p>
        </div>
      </a>

      <a class="resource-card"
         href="http://compneuropapers.tumblr.com/"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">📚</span>
        <div>
          <strong>Interesting Computational Neuroscience Papers</strong>
          <p>A collection of papers related to computational neuroscience.</p>
        </div>
      </a>

      <a class="resource-card"
         href="http://compneuro.uwaterloo.ca/research/theoretical-neuroscience/comments-on-theoretical-neuroscience-books.html"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">📖</span>
        <div>
          <strong>Comments on Theoretical Neuroscience Books</strong>
          <p>Notes and recommendations on theoretical neuroscience texts.</p>
        </div>
      </a>

      <a class="resource-card"
         href="http://www.genesis-sim.org/cnslecs/cnslecs.html"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">🎓</span>
        <div>
          <strong>Introductory Computational Neuroscience Lectures</strong>
          <p>Introductory lecture material for computational neuroscience.</p>
        </div>
      </a>

      <a class="resource-card"
         href="https://github.com/OpenSourceBrain/OSB_Documentation/blob/master/contents/Help/08_Simulators.md"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">🛠️</span>
        <div>
          <strong>Open Source Brain Simulator Guide</strong>
          <p>Overview of simulators used for computational neuroscience models.</p>
        </div>
      </a>

      <a class="resource-card"
         href="https://neuroml.org/"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">🧩</span>
        <div>
          <strong>NeuroML</strong>
          <p>A model description language for computational neuroscience.</p>
        </div>
      </a>

    </div>
  </div>

</section>

<style>
/* =========================
   Hero
========================= */
.compneuro-hero {
  display: grid;
  grid-template-columns: minmax(280px, 0.85fr) minmax(350px, 1.15fr);
  align-items: center;
  gap: 30px;
  min-height: 600px;
  margin-top: 0;
  padding: clamp(35px, 6vw, 80px) clamp(25px, 5vw, 70px);
  overflow: hidden;
  border: 1px solid rgba(120, 140, 255, 0.18);
  border-radius: 22px;
  background:
    radial-gradient(circle at 75% 45%, rgba(78, 96, 255, 0.16), transparent 35%),
    radial-gradient(circle at 60% 70%, rgba(0, 180, 255, 0.08), transparent 40%),
    linear-gradient(145deg, #050a13, #080d1c 60%, #03050b);
}


/* =========================================
   COMPUTATIONAL NEUROSCIENCE HERO VIDEO
========================================= */

.compneuro-hero .neuron-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  overflow: hidden;
}

.compneuro-video {
  display: block;
  width: 100%;
  max-width: 650px;
  height: auto;
  object-fit: contain;
  border: none;
  background: transparent;
  pointer-events: none;
}

/* Mobile responsiveness */

@media (max-width: 768px) {
  .compneuro-video {
    width: 100%;
    max-width: 500px;
    height: auto;
  }
}


  
.compneuro-text {
  z-index: 2;
}

.eyebrow {
  margin-bottom: 12px;
  color: #87a7ff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.18em;
}

.compneuro-text h1 {
  margin-bottom: 20px;
  color: white;
  font-size: clamp(34px, 5vw, 60px);
  line-height: 1.05;
}

.subtitle {
  max-width: 520px;
  color: rgba(235, 240, 255, 0.72);
  font-size: 17px;
  line-height: 1.7;
}

.topics {
  margin-top: 25px;
  color: #90a8ff;
  font-size: 14px;
  letter-spacing: 0.03em;
}

/* =========================
   Brain graphic
========================= */
.neuron-container {
  width: 100%;
  transition: filter 0.3s ease;
}

.neuron-container:hover {
  filter: brightness(1.18);
}

.neuron-svg,
.brain-svg {
  width: 100%;
  max-width: 750px;
  height: 100%;
  overflow: visible;
}

.side-brain-outline {
  fill: rgba(68, 100, 190, 0.025);
  stroke: rgba(110, 145, 255, 0.52);
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  filter: url(#brainGlow);
  animation: brainOutlinePulse 6s ease-in-out infinite;
}

.secondary-outline {
  stroke-width: 2;
  opacity: 0.65;
}

.brain-connections path {
  fill: none;
  stroke: rgba(105, 140, 255, 0.38);
  stroke-width: 1.8;
  stroke-linecap: round;
  animation: connectionBreath 5s ease-in-out infinite;
}

.brain-nodes circle {
  fill: #7797ff;
  filter: url(#brainGlow);
  transform-box: fill-box;
  transform-origin: center;
  animation: nodePulse 3.8s ease-in-out infinite;
}

.brain-nodes circle:nth-child(2n) {
  animation-delay: 0.7s;
}

.brain-nodes circle:nth-child(3n) {
  animation-delay: 1.5s;
}

.brain-nodes circle:nth-child(5n) {
  animation-delay: 2.1s;
}

.brain-signal {
  fill: #8df9ff;
  filter: url(#brainGlowStrong);
}

/* =========================
   Research section
========================= */
.research-section {
  padding: 28px 10px 10px;
}

.research-section h2 {
  margin-bottom: 15px;
}

.research-section > p {
  max-width: 700px;
  line-height: 1.7;
}

.research-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 35px;
}

.research-card {
  padding: 24px;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.03);
}

.research-card h3 {
  margin-top: 0;
  color: #4c7eff;
}

.research-card p {
  font-size: 15px;
  line-height: 1.6;
}

/* =========================
   Resource hub
========================= */
.neuro-resources {
  margin-top: 18px;
  padding: clamp(25px, 5vw, 55px);
  color: white;
  border: 1px solid #252b3a;
  border-radius: 20px;
  background: linear-gradient(145deg, #080b13, #0d111d);
}

.resource-heading {
  margin-bottom: 18px;
}

.resource-eyebrow {
  margin-bottom: 6px;
  color: #7f9cff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.15em;
}

.resource-heading h2 {
  margin-top: 0;
  color: white;
}

.resource-heading p {
  max-width: 750px;
  color: #aeb5c5;
}

/* Tabs */
.neuro-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 30px;
  padding-bottom: 12px;
  overflow-x: auto;
  scrollbar-width: thin;
}

.neuro-resources .resource-tab {
  flex: 0 0 auto;
  padding: 10px 16px;
  color: #aeb9d5;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid #343c51;
  border-radius: 30px;
  background: #111725;
  transition: all 0.25s ease;
}

.neuro-resources .resource-tab:hover {
  color: white;
  border-color: #6685ff;
}

.neuro-resources .resource-tab.active {
  color: white;
  border-color: #526fff;
  background: #526fff;
  box-shadow: 0 0 18px rgba(82, 111, 255, 0.35);
}

.neuro-resources .resource-panel {
  display: none;
  animation: resourceFade 0.3s ease;
}

.neuro-resources .resource-panel.active:not([hidden]) {
  display: block;
}

.neuro-resources .resource-panel h3 {
  margin-bottom: 22px;
  color: white;
}

/* Resource cards */
.resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 14px;
}

.resource-card {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 18px;
  text-decoration: none !important;
  border: 1px solid #262e40;
  border-radius: 12px;
  background: #0e1420;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
}

.resource-card:hover {
  transform: translateY(-3px);
  border-color: #5d7cff;
  background: #111a2b;
}

.resource-card strong {
  color: #8fa8ff;
  font-size: 15px;
}

.resource-card p {
  margin: 5px 0 0;
  color: #9da7ba;
  font-size: 13px;
  line-height: 1.55;
}

.resource-icon {
  font-size: 22px;
}

/* People */
.people-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 14px;
}

.person {
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
}

.people-list a {
  color: #91a8ff;
  text-decoration: none !important;
}

.people-list a:hover {
  color: white;
}

/* =========================
   Animations
========================= */
@keyframes nodePulse {
  0%,
  100% {
    opacity: 0.45;
    transform: scale(0.85);
  }

  50% {
    opacity: 1;
    transform: scale(1.3);
  }
}

@keyframes connectionBreath {
  0%,
  100% {
    opacity: 0.35;
  }

  50% {
    opacity: 0.8;
  }
}

@keyframes brainOutlinePulse {
  0%,
  100% {
    opacity: 0.55;
  }

  50% {
    opacity: 0.95;
  }
}

@keyframes resourceFade {
  from {
    opacity: 0;
    transform: translateY(5px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* =========================
   Responsive
========================= */
@media (max-width: 800px) {
  .compneuro-hero,
  .research-grid {
    grid-template-columns: 1fr;
  }

  .compneuro-hero {
    min-height: auto;
  }

  .neuron-container {
    margin-top: 20px;
  }
}

@media (max-width: 600px) {
  .neuro-resources {
    padding: 22px 16px;
  }

  .resource-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .side-brain-outline,
  .brain-connections path,
  .brain-nodes circle {
    animation: none;
  }

  .brain-signal {
    display: none;
  }
  .neuro-resources .resource-panel { animation: none; }
}

.neuro-resources .resource-panel[hidden] { display: none !important; }
.neuro-resources .resource-tab:focus-visible { outline: 2px solid #9ab0ff; outline-offset: 3px; }
.neuro-resources .resource-tab { font-family: inherit; }
.neuro-resources .resource-panel .person span,
.neuro-resources .resource-panel .person small { display: block; margin-top: 6px; color: #aeb9d5; line-height: 1.5; }
</style>

<script>
(function () {
  function initializeResourceHub() {
    const hub = document.querySelector('.neuro-resources');
    if (!hub) return;

    const tabs = Array.from(hub.querySelectorAll('.resource-tab'));
    const panels = Array.from(hub.querySelectorAll('.resource-panel'));

    function activate(tab, focus) {
      const target = tab.dataset.tab;
      tabs.forEach(function (item) {
        const selected = item === tab;
        item.classList.toggle('active', selected);
        item.setAttribute('aria-selected', String(selected));
        item.tabIndex = selected ? 0 : -1;
      });
      panels.forEach(function (panel) {
        const selected = panel.id === target;
        panel.classList.toggle('active', selected);
        panel.hidden = !selected;
      });
      if (focus) tab.focus();
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener('click', function () { activate(tab, false); });
      tab.addEventListener('keydown', function (event) {
        let next;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = tabs.length - 1;
        else return;
        event.preventDefault();
        activate(tabs[next], true);
      });
    });
    if (tabs.length) activate(tabs[0], false);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeResourceHub);
  } else {
    initializeResourceHub();
  }
})();
</script>
