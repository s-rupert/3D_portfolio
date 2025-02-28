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
        <div id="search-container">
          <input type="text" id="contact" placeholder="Type your message..." />
          <button onclick={() => sendEmail()}>
            Contact
          </button>   
        </div>

        <div class="feedback-container">
          <h2>Feedback</h2>
          <form id="feedbackForm">
            <input type="text" id="name" placeholder="Your Name" required />
            <input type="email" id="email" placeholder="Your Email" required />
            <textarea id="message" placeholder="Your Feedback" required></textarea>
            <button type="submit">Submit Feedback</button>
          </form>
        </div>
      </div>
      <div className="row">
        <div id="logo">
          <div id="l-top">RUPESH</div>
          <div id="l-bottom">&lt;INFO/&gt;</div>
        </div>
      </div>

      <div className="row">
        <div className="col-6 text-center">
          <div>Home</div>
          <div>About us</div>
          <div>Services</div>
          <div>Projects</div>
          <div>Testimonials</div>
          <div>Contact</div>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <a href="https://www.facebook.com/profile.php?id=100049601832381" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/s_rupert01/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/srupert/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="copyright">
        ©2024 <span>Rupesh</span> All Rights Reserved, Inc.
      </div>
    </div>
  );
};

export { Footer };
