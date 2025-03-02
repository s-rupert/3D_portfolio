import React from 'react';
import './Footerstyle.css';

const Footer = () => {
  function sendEmail() {
    var body = document.getElementById('body')?.value || "";
    var mailtoLink = `mailto:officialrupesh.s@gmail.com?body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  }

  return (
    <div id="footer-section">
      <div id="contact-feeedback">
        <div id="contact-container">
          <input type="text"  placeholder="Type your message..." />
          <button onclick={() => sendEmail()}>
            Contact
          </button> 
          <p>Feel free to reach out through the provided channels. I'm available for full-time and part-time opportunities and open to contributing to large-scale projects to gain valuable experience. Thank you for visiting my website!</p>  
        </div>

        <div id="feedback-container">
        <form id="feedbackForm">
          <h2>Feedback</h2>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea id="message" rows="10" cols="50" placeholder="Your Feedback" required></textarea>
            <button type="submit">Submit Feedback</button>
            
          </form>
        </div>
      </div>
        <div id="contact-channels">
          <a href="https://github.com/s-rupert" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://x.com/Srupesh01" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/s_rupert01/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/srupert/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
      </div>

      <div id="copyright">
        ©2024 <span>Rupesh</span>. All Rights Reserved, Inc.
      </div>
    </div>
  );
};

export { Footer };
