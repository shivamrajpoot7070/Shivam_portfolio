import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  color: string;
  link: string;
  github: string;
  features: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "BurnBin",
    description: "Secure ephemeral pastebin with client-side AES-256-GCM encryption. Messages self-destruct after viewing or expiration. Zero-knowledge architecture ensures complete privacy.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Web Crypto API"],
    color: "#ef4444",
    link: "https://burnbin.shubhx.dev",
    github: "https://github.com/ShubhamKumar6299/burnbin",
    features: ["AES-256-GCM Encryption", "Self-Destructing Messages", "Zero-Knowledge", "Password Protection"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&q=80"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-stack MERN shopping platform with complete user authentication, product catalog, shopping cart, and secure payment integration via Stripe.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Stripe", "Redux"],
    color: "#10b981",
    link: "#",
    github: "https://github.com/ShubhamKumar6299/ecommerce-mern",
    features: ["User Authentication", "Payment Integration", "Order Management", "Admin Dashboard"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Meet Suite",
    description: "Real-time video conferencing application built with Next.js and WebRTC. Features include screen sharing, chat, and multiple participant support.",
    tech: ["Next.js", "TypeScript", "WebRTC", "Socket.io", "Tailwind CSS"],
    color: "#8b5cf6",
    link: "https://meet-suite.vercel.app/",
    github: "https://github.com/ShubhamKumar6299/meet-suite",
    features: ["Video Conferencing", "Screen Sharing", "Real-time Chat", "Room Management"],
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=400&fit=crop&q=80"
  }
];

function ProjectCardComponent({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ '--accent-color': project.color } as React.CSSProperties}
    >
      <div className="project-image-container">
        <img 
          src={project.image} 
          alt={project.title}
          className="project-image"
          loading="lazy"
        />
        <div className="project-image-overlay"></div>
        <div 
          className="project-accent-glow"
          style={{ 
            background: `radial-gradient(circle, ${project.color}40 0%, transparent 70%)`,
            opacity: isHovered ? 0.8 : 0.3
          }}
        />
      </div>
      
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <div className="project-links">
            {project.link !== "#" && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <p className="project-description">{project.description}</p>
        
        <div className="project-features">
          {project.features.map((feature, i) => (
            <span key={i} className="feature-tag">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {feature}
            </span>
          ))}
        </div>
        
        <div className="project-tech">
          {project.tech.map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Featured Work</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A collection of projects showcasing my expertise in full-stack development,
            security, and real-time applications.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCardComponent key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
