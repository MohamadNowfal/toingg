import React, { useState } from 'react';
import './App.css';

function App() {
  // State to manage navigation toggle
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle navigation
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Render function
  return (
    <div className="container">
      {/* Marquee component */}
      <div className="marquee">
        <p>Welcome to Toingg!!!!!!! We provide solution </p>
      </div>

      {/* Header component */}
      <header className="header">
        <div className="brand">Toingg</div>
        <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
          <a href="#">Contact</a>
          <a href="#">Pricing</a>
          <a href="#">Documentation</a>
          <a href="#">Join our community</a>
        </nav>
        {/* Navigation toggle button */}
        <div className="nav-toggle" onClick={toggleNav}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </header>

      {/* Main section */}
      <main className="main">
        {/* Information section */}
        <section className="info">
          <h1>Build AI Calling Agent that can do</h1>
          <h2>Sales Call</h2>
          <button className="btn build-btn">Build your own voice agent 'It’s free!'</button>
          <button className="btn action-btn">Hear it in action</button>
        </section>

        {/* Form section */}
        <section className="form-container">
          <h1 className="form-heading">Try Now</h1>
          <h2 className="form-subheading">Get a call from Toingg</h2>
          <form>
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <div className="phone-container">
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
              </div>
            </div>
            <div className="form-group">
              <select id="language" name="language">
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="tamil">Tamil</option>
              </select>
            </div>
            <button type="submit" className="submit-btn">📞 Submit</button>
          </form>
        </section>

        {/* Integrations section */}
        <section className="integrations-container">
          <header className="integrations-header">
            <h1>Automate your agent with 5000+ integrations like</h1>
            <div className="icons">
              <img src="icon1.png" alt="Integration 1" />
              <img src="icon2.png" alt="Integration 2" />
              <img src="icon3.png" alt="Integration 3" />
              <img src="icon4.png" alt="Integration 4" />
            </div>
          </header>
          {/* Remaining sections */}
          {/* Video section */}
          <div className="video-section">
            <div className="video-placeholder">Video</div>
          </div>
          {/* Feature section */}
          <div className="feature-section">
            <h2>Explore TOINGG in GPT Store</h2>
            <ul>
              <li>Interactive Communication: Engage in single or batch calls using TOINGG GPT.</li>
              <li>Advanced Features: Leverage GPT for real-time sentiment analysis during calls.</li>
              <li>Data Export: Conveniently export call logs to CSV.</li>
              <li>Enhanced Usability: Tailored for users familiar with CSV functionalities.</li>
            </ul>
            <button className="explore-button">Explore more</button>
          </div>
          {/* CTA section */}
          <div className="cta-section">
            <h2>Ultra-Fast Response</h2>
            <p>Experience lightning-quick interactions with an impressive 500 ms response time, ensuring seamless conversations.</p>
            <button className="try-button">Try now</button>
          </div>
          {/* Dots section */}
          <div className="dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </section>
      </main>

      {/* Footer section */}
      <footer className="footer">
        {/* Footer content */}
        <h1>TOINGG</h1>
        <p>We are here to grow your business ❤️</p>
        <div className="footer-links">
          <a href="/terms">Terms and conditions</a>
          <a href="/privacy">Privacy policy</a>
          <a href="/help">Help center</a>
          <a href="/api">API docs</a>
          <a href="/careers">Careers</a>
        </div>
        {/* Social media icons */}
        <div className="social-media">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png" alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png" alt="Instagram" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png" alt="Twitter" />
          </a>
          <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" alt="Discord" />
          </a>
        </div>
        {/* Copyright */}
        <p className="copyright">
          Copyright © 2024 Toingg Inc. All rights reserved.
        </p>
        {/* Community link */}
        <a href="https://www.discord.com" className="community-link" target="_blank" rel="noopener noreferrer">
          Join our community <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdFppYSPNvc7bLKWHeCa5inhmK4mlHA3XWEQ&s" alt="Discord" />
        </a>
      </footer>
    </div>
  );
}

export default App;
