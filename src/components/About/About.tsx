import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';
import dsaCard from '../../assets/dsaCard.png';
import devCard from '../../assets/devCard.png';

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">Who I Am</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-visual-section"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Codolio Profile - Flip Card */}
            <div className="codolio-profile">
              <div 
                className={`flip-card ${isFlipped ? 'flipped' : ''}`}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img 
                      src={dsaCard} 
                      alt="DSA Profile Card"
                      className="codolio-image"
                    />
                  </div>
                  <div className="flip-card-back">
                    <img 
                      src={devCard} 
                      alt="Dev Profile Card"
                      className="codolio-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="about-text">
              I'm a passionate <span className="highlight">Full Stack Developer</span> with a deep 
              interest in building secure, performant, and user-friendly web applications. I love 
              tackling complex problems and turning ideas into reality through code.
            </p>
            
            <p className="about-text">
              My expertise spans across modern frontend frameworks like <span className="highlight">React</span> and
              <span className="highlight"> Next.js</span>, robust backend technologies including 
              <span className="highlight"> Node.js</span> and <span className="highlight">Python</span>, 
              and I have a strong focus on <span className="highlight">cryptography</span> and 
              <span className="highlight"> security</span>.
            </p>
            
            <p className="about-text">
              With <span className="highlight">800+ LeetCode</span> problems and <span className="highlight">600+ GeeksforGeeks</span> solutions, 
              I've honed my algorithmic thinking and problem-solving skills. When I'm not coding production apps, 
              you'll find me exploring the latest in web technologies and contributing to open-source.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🔐</div>
                <div className="highlight-text">
                  <strong>Security First</strong>
                  <span>Building with encryption & zero-knowledge architecture</span>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">⚡</div>
                <div className="highlight-text">
                  <strong>Performance Focused</strong>
                  <span>Optimizing for speed and scalability</span>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🎨</div>
                <div className="highlight-text">
                  <strong>Design Oriented</strong>
                  <span>Creating beautiful, intuitive interfaces</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* GitHub Stats Section - Full Width */}
        <motion.div
          className="github-stats-section"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="github-stats-title">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub Stats
          </h3>

          {/* Activity Graph */}
          <div className="github-activity-graph">
            <a href="https://github.com/ShubhamKumar6299" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://github-readme-activity-graph.vercel.app/graph?username=ShubhamKumar6299&theme=tokyo-night&hide_border=true&area=true&custom_title=Shubham%20Kumar's%20Contribution%20Graph" 
                alt="GitHub Activity Graph"
                className="activity-graph-img"
                loading="lazy"
              />
            </a>
          </div>

          {/* Let's Connect Section */}
          <div className="connect-section">
            <h4>🤝 Let's Connect!</h4>
            <div className="connect-links">
              <a href="https://www.linkedin.com/in/shubhamkumar6299/" target="_blank" rel="noopener noreferrer" className="connect-btn linkedin">
                LINKEDIN
              </a>
              <a href="https://leetcode.com/u/shubham_4518/" target="_blank" rel="noopener noreferrer" className="connect-btn leetcode">
                <span>🔥</span> LEETCODE
              </a>
              <a href="https://www.geeksforgeeks.org/user/shubham_codes/" target="_blank" rel="noopener noreferrer" className="connect-btn gfg">
                <span>💚</span> GEEKSFORGEEKS
              </a>
            </div>
          </div>

          {/* Snake Contribution */}
          <div className="snake-contribution">
            <a href="https://github.com/ShubhamKumar6299" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://raw.githubusercontent.com/platane/platane/output/github-contribution-grid-snake-dark.svg" 
                alt="Snake eating contributions"
                className="snake-img"
                loading="lazy"
              />
            </a>
          </div>

          {/* Happy Coding */}
          <div className="happy-coding">
            <p>💻 Happy Coding!</p>
            <div className="coding-badges">
              <span className="badge built-with">BUILT WITH ❤️</span>
              <span className="badge powered-by">POWERED BY COFFEE ☕</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
