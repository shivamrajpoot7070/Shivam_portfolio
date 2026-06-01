import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <span className="logo-text">Shivam</span>
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
              <a href="https://prepprime.vercel.app/" target="_blank" rel="noopener noreferrer">Ai-Career-Coach</a>
              <a href="https://project-partners-khkm.vercel.app/" target="_blank" rel="noopener noreferrer">Project Partners</a>
              <a href="https://github.com/shivamrajpoot7070/Task_Scheduler_Project" target="_blank" rel="noopener noreferrer">Task Scheduler Platform</a>
            </div>

            <div className="footer-column">
              <h4>Connect</h4>
              <a href="https://github.com/shivamrajpoot7070" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/shivamkumar1828" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:shivamrajpoot7070@gmail.com">Email</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Shivam Kumar. All rights reserved.
          </p>
          <p className="made-with">
            Made with <span className="heart">❤️</span> and React + Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}
