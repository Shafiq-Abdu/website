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

<div class="neuron-container">

  <svg
    class="neuron-svg brain-svg"
    viewBox="0 0 800 500"
    xmlns="http://www.w3.org/2000/svg"
  >

    <defs>
      <filter id="brainGlow">
        <feGaussianBlur stdDeviation="4" result="blur"/>
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>

      <filter id="brainGlowStrong">
        <feGaussianBlur stdDeviation="7" result="blur"/>
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>


    <!-- =================================== -->
    <!-- SIDE VIEW BRAIN OUTLINE -->
    <!-- =================================== -->

    <path
      class="side-brain-outline"
      d="
        M190 265

        C160 235 170 195 205 175

        C200 135 240 105 285 112

        C310 75 365 63 405 88

        C445 61 505 72 530 108

        C575 103 612 132 615 172

        C650 186 662 223 648 251

        C667 282 650 318 620 331

        C613 368 575 385 540 375

        C515 407 475 410 446 389

        C425 416 385 420 360 398

        C330 415 290 398 282 366

        C247 368 220 346 218 317

        C190 308 174 285 190 265
      "
    />


    <!-- LOWER TEMPORAL / BRAINSTEM SHAPE -->

    <path
      class="side-brain-outline secondary-outline"
      d="
        M360 398
        C375 420 390 437 408 450
        C425 460 444 454 447 438
        C450 420 445 404 446 389
      "
    />


    <!-- =================================== -->
    <!-- INTERNAL CORTICAL CONNECTIONS -->
    <!-- =================================== -->

    <g class="brain-connections">

      <!-- frontal -->
      <path d="M225 205 C265 185 300 185 330 205"/>
      <path d="M225 205 C245 235 260 252 290 270"/>
      <path d="M290 270 C310 235 320 220 330 205"/>

      <!-- upper frontal/parietal -->
      <path d="M285 135 C320 155 350 175 380 205"/>
      <path d="M330 205 C350 180 365 165 395 150"/>
      <path d="M395 150 C430 140 470 150 500 175"/>

      <!-- parietal -->
      <path d="M380 205 C420 200 455 205 490 225"/>
      <path d="M500 175 C510 200 505 215 490 225"/>
      <path d="M490 225 C525 230 555 250 575 275"/>

      <!-- central -->
      <path d="M330 205 C350 235 365 255 390 280"/>
      <path d="M390 280 C425 255 455 240 490 225"/>

      <!-- temporal -->
      <path d="M290 270 C320 295 350 305 390 305"/>
      <path d="M390 305 C420 300 450 300 480 315"/>
      <path d="M480 315 C515 320 545 310 575 275"/>

      <!-- lower / posterior -->
      <path d="M390 305 C385 335 390 360 415 382"/>
      <path d="M415 382 C445 365 465 345 480 315"/>
      <path d="M480 315 C500 340 515 355 540 365"/>

      <!-- long-range connections -->
      <path d="M225 205 C310 150 405 125 500 175"/>
      <path d="M290 270 C360 240 430 240 490 225"/>
      <path d="M330 205 C380 260 430 295 480 315"/>
      <path d="M290 270 C330 335 370 365 415 382"/>

    </g>


    <!-- =================================== -->
    <!-- NEURAL NODES -->
    <!-- =================================== -->

    <g class="brain-nodes">

      <circle cx="225" cy="205" r="5"/>
      <circle cx="285" cy="135" r="5"/>

      <circle cx="330" cy="205" r="7"/>
      <circle cx="290" cy="270" r="6"/>

      <circle cx="395" cy="150" r="6"/>
      <circle cx="380" cy="205" r="5"/>

      <circle cx="500" cy="175" r="6"/>
      <circle cx="490" cy="225" r="7"/>

      <circle cx="390" cy="280" r="8"/>

      <circle cx="390" cy="305" r="6"/>
      <circle cx="480" cy="315" r="7"/>

      <circle cx="575" cy="275" r="5"/>

      <circle cx="415" cy="382" r="6"/>
      <circle cx="540" cy="365" r="5"/>

    </g>


    <!-- =================================== -->
    <!-- MOVING ELECTRICAL SIGNALS -->
    <!-- =================================== -->

    <circle class="brain-signal" r="5">
      <animateMotion
        dur="5.5s"
        repeatCount="indefinite"
        path="
          M225 205
          C265 185 300 185 330 205
          C350 235 365 255 390 280
          C425 255 455 240 490 225
        "
      />
    </circle>


    <circle class="brain-signal" r="4">
      <animateMotion
        dur="6.3s"
        begin="1.4s"
        repeatCount="indefinite"
        path="
          M285 135
          C320 155 350 175 380 205
          C420 200 455 205 490 225
          C525 230 555 250 575 275
        "
      />
    </circle>


    <circle class="brain-signal" r="4">
      <animateMotion
        dur="7s"
        begin="2.8s"
        repeatCount="indefinite"
        path="
          M290 270
          C320 295 350 305 390 305
          C420 300 450 300 480 315
          C500 340 515 355 540 365
        "
      />
    </circle>


    <circle class="brain-signal" r="4">
      <animateMotion
        dur="6.7s"
        begin="3.6s"
        repeatCount="indefinite"
        path="
          M500 175
          C430 140 350 150 290 270
        "
      />
    </circle>

  </svg>

</div>
</section>



<section class="research-section">

  <h2>Current Research Direction</h2>

  <p>
    I am interested in understanding how neural population activity
    represents information and how mathematical structure emerges from
    neural data.
  </p>

  <div class="research-grid">
    <div class="research-card">
      <h3>Neural Representation</h3>
      <p>
        Studying geometry and structure in population-level neural activity.
      </p>
    </div>
    <div class="research-card">
      <h3>Neural Circuits</h3>
      <p>
        Modeling interactions between neurons using dynamical systems
        and stochastic processes.
      </p>
    </div>
    <div class="research-card">
      <h3>Computational Models</h3>
      <p>
        Building mathematical and computational models to connect theory,
        neural data, and behavior.
      </p>
    </div>

  </div>

</section>


<!-- =========================================================
     COMPUTATIONAL NEUROSCIENCE RESOURCE HUB
========================================================= -->

<section class="neuro-resources">

  <div class="resource-heading">
    <p class="resource-eyebrow">LEARNING & RESEARCH</p>
    <h2>🧠 Computational Neuroscience Resource Hub</h2>
  </div>


<!-- =====================================================
     TAB BUTTONS
====================================================== -->

<div class="neuro-tabs" role="tablist">

  <button class="neuro-tab active" data-tab="learning">
    📘 Learning
  </button>

  <button class="neuro-tab" data-tab="books">
    📝 Books
  </button>

  <button class="neuro-tab" data-tab="institutes">
    🏛 Institutes
  </button>

  <button class="neuro-tab" data-tab="conferences">
    🎤 Conferences
  </button>

  <button class="neuro-tab" data-tab="people">
    🧠 People
  </button>

  <button class="neuro-tab" data-tab="tools">
    💻 Tools
  </button>

  <button class="neuro-tab" data-tab="datasets">
    📊 Data
  </button>

  <button class="neuro-tab" data-tab="media">
    🎧 Media
  </button>

  <button class="neuro-tab" data-tab="more-resources">
    🔗 More
  </button>

</div>


<!-- =====================================================
     LEARNING
====================================================== -->

<div class="neuro-panel active" id="learning">

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

<div class="neuro-panel" id="books">

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

<div class="neuro-panel" id="institutes">
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

  <div class="neuro-panel" id="conferences">
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
<div class="neuro-panel" id="people">
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

  <div class="neuro-panel" id="tools">
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

  <div class="neuro-panel" id="datasets">
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

  <div class="neuro-panel" id="media">
    <h3>Articles, Podcasts & YouTube</h3>
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
          <strong>Brain -Documentaries</strong>
          <p>Videos on neuroscience, brain and cognition.</p>
        </div>
      </a>
        <a class="resource-card"
         href="https://kids.frontiersin.org/articles/neuroscience-and-psychology?sort=most-popular"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">🧠</span>
        <div>
          <strong>Frontiers for young minds</strong>
          <p>Neuroscience & Psychology articles for kids .</p>
        </div>
      </a>
        <a class="resource-card"
         href="http://www.youtube.com/@BrainPrize"
         target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">🔬</span>
        <div>
          <strong>Brain Prize</strong>
          <p>Playlist to get motivation and discipline</p>
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

  <div class="neuro-panel" id="more-resources">
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

.neuro-tab {
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

.neuro-tab:hover {
  color: white;
  border-color: #6685ff;
}

.neuro-tab.active {
  color: white;
  border-color: #526fff;
  background: #526fff;
  box-shadow: 0 0 18px rgba(82, 111, 255, 0.35);
}

.neuro-panel {
  display: none;
  animation: resourceFade 0.3s ease;
}

.neuro-panel.active {
  display: block;
}

.neuro-panel h3 {
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
}
</style>

<script>
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".neuro-tab");
  const panels = document.querySelectorAll(".neuro-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => item.classList.remove("active"));
      panels.forEach((panel) => panel.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(tab.dataset.tab)?.classList.add("active");
    });
  });
});
</script>
