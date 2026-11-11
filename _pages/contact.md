---
layout: page
title: Contact
permalink: /contact/
---

<style>
  .contact-container {
    max-width: 700px;
    margin: 0 auto;
    padding: 2rem;
    background: #f9f9f9;
    border-radius: 12px;
    box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
  }
  .contact-container h1 {
    text-align: center;
    margin-bottom: 1rem;
    color: #333;
  }
  .contact-note {
    text-align: center;
    font-style: italic;
    color: #666;
    margin-bottom: 2rem;
  }
  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 1.2rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
  }
  .contact-form button {
    width: 100%;
    padding: 14px;
    background-color: #222;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  .contact-form button:hover {
    background-color: #444;
  }
</style>

<div class="contact-container">
  <h1>Feel free to contact me 🚀</h1>
  <p class="contact-note">
    I usually reply quickly... unless I’m debugging something 🐛.<br>
    If I take a while, sorry in advance — but I promise I’ll get back to you! 😉
  </p>

  <form class="contact-form" target="_blank" action="https://formsubmit.co/arahmans@cougarnet.uh.edu" method="POST">
    <input type="text" name="name" placeholder="Full Name" required>
    <input type="email" name="email" placeholder="Email Address" required>
    <textarea name="message" rows="8" placeholder="Your Message..." required></textarea>
    <button type="submit">Send Message ✉️</button>
  </form>
</div>
