import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <span className="logo-text">Shubham</span>
              <span className="logo-dot">.</span>
            </a>
            <p className="footer-tagline">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Navigation</h4>
              <a href="#hero">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-column">
              <h4>Projects</h4>
              <a href="https://burnbin.shubhx.dev" target="_blank" rel="noopener noreferrer">BurnBin</a>
              <a href="https://github.com/ShubhamKumar6299/ecommerce-mern" target="_blank" rel="noopener noreferrer">E-Commerce</a>
              <a href="https://github.com/ShubhamKumar6299/stream-wave" target="_blank" rel="noopener noreferrer">Meet Suite</a>
            </div>

            <div className="footer-column">
              <h4>Connect</h4>
              <a href="https://github.com/ShubhamKumar6299" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/shubhamkumar6299" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://twitter.com/ShubhamKumar6299" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="mailto:satyaanandsharma9534@gmail.com">Email</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Shubham Kumar. All rights reserved.
          </p>
          <p className="made-with">
            Made with <span className="heart">❤️</span> and React + Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}
