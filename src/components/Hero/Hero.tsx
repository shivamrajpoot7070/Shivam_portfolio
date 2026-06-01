import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-canvas">
        <div className="animated-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
      </div>
      
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-text"
        >
          <motion.span 
            className="hero-greeting"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Hello, I'm
          </motion.span>
          
          <motion.h1 
            className="hero-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Shubham Kumar
          </motion.h1>
          
          <motion.h2 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Full Stack Developer
          </motion.h2>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            Building secure, scalable, and beautiful web applications.
            <br />
            Passionate about cryptography, real-time systems & modern UI/UX.
          </motion.p>
          
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>Get In Touch</span>
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="stat-item">
            <span className="stat-number">800+</span>
            <span className="stat-label">LeetCode Problems</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">600+</span>
            <span className="stat-label">GFG Solutions</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects Built</span>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span>Scroll Down</span>
        <div className="scroll-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14m-7-7 7 7 7-7"/>
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
