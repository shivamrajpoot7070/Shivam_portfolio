import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiAmazonwebservices,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiGithub,
  SiLinux,
  SiVite,
  SiPostman
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import './Skills.css';

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: <SiReact />, color: '#61dafb', category: 'Frontend' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff', category: 'Frontend' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6', category: 'Frontend' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06b6d4', category: 'Frontend' },
  { name: 'HTML5', icon: <SiHtml5 />, color: '#e34f26', category: 'Frontend' },
  { name: 'CSS3', icon: <SiCss3 />, color: '#1572b6', category: 'Frontend' },
  { name: 'Redux', icon: <SiRedux />, color: '#764abc', category: 'Frontend' },
  
  // Backend
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933', category: 'Backend' },
  { name: 'Express.js', icon: <SiExpress />, color: '#ffffff', category: 'Backend' },
  { name: 'Python', icon: <SiPython />, color: '#3776ab', category: 'Backend' },
  { name: 'Java', icon: <FaJava />, color: '#ed8b00', category: 'Backend' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248', category: 'Backend' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791', category: 'Backend' },
  { name: 'Firebase', icon: <SiFirebase />, color: '#ffca28', category: 'Backend' },
  
  // Tools & Others
  { name: 'Git', icon: <SiGit />, color: '#f05032', category: 'Tools' },
  { name: 'GitHub', icon: <SiGithub />, color: '#ffffff', category: 'Tools' },
  { name: 'Docker', icon: <SiDocker />, color: '#2496ed', category: 'Tools' },
  { name: 'AWS', icon: <SiAmazonwebservices />, color: '#ff9900', category: 'Tools' },
  { name: 'Vercel', icon: <SiVercel />, color: '#ffffff', category: 'Tools' },
  { name: 'Vite', icon: <SiVite />, color: '#646cff', category: 'Tools' },
  { name: 'Linux', icon: <SiLinux />, color: '#fcc624', category: 'Tools' },
  { name: 'Postman', icon: <SiPostman />, color: '#ff6c37', category: 'Tools' },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="skill-card"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      style={{ '--skill-color': skill.color } as React.CSSProperties}
    >
      <span className="skill-card-icon">{skill.icon}</span>
      <span className="skill-card-name">{skill.name}</span>
    </motion.div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categories = useMemo(() => {
    const cats = [...new Set(skills.map(s => s.category))];
    return cats.map(cat => ({
      name: cat,
      skills: skills.filter(s => s.category === cat),
    }));
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="skills-categories">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
            >
              <h3 className="category-title">{category.name}</h3>
              <div className="category-skills">
                {category.skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coding Profiles Section */}
        <motion.div
          className="coding-profiles-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="coding-section-title">
            <span className="title-icon">💻</span>
            Coding Profiles
          </h3>
          
          {/* LeetCode Section with Graph and Badges */}
          <div className="leetcode-showcase">
            <div className="leetcode-header">
              <a href="https://leetcode.com/u/shubham_4518/" target="_blank" rel="noopener noreferrer" className="platform-link">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="#ffa116">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
                <span>LeetCode</span>
                <span className="problem-count">800+ Problems</span>
              </a>
            </div>
            
            {/* LeetCode Activity Graph */}
            <div className="leetcode-graph-container">
              <img 
                src="https://leetcard.jacoblin.cool/shubham_4518?theme=dark&font=Fira%20Code&ext=activity" 
                alt="LeetCode Stats"
                className="leetcode-graph"
                loading="lazy"
              />
            </div>
            
            {/* LeetCode Badges */}
            <div className="leetcode-badges">
              <h4 className="badges-title">🏆 Badges Earned</h4>
              <div className="badges-grid">
                <div className="badge-item">
                  <img src="https://assets.leetcode.com/static_assets/marketing/2024-50.gif" alt="50 Days Badge 2024" />
                  <span>50 Days 2024</span>
                </div>
                <div className="badge-item">
                  <img src="https://assets.leetcode.com/static_assets/marketing/2024-100.gif" alt="100 Days Badge 2024" />
                  <span>100 Days 2024</span>
                </div>
                <div className="badge-item">
                  <img src="https://leetcode.com/static/images/badges/2024/gif/2024-01.gif" alt="Annual Badge" />
                  <span>Jan 2024</span>
                </div>
                <div className="badge-item">
                  <img src="https://leetcode.com/static/images/badges/2024/gif/2024-02.gif" alt="Feb Badge" />
                  <span>Feb 2024</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* GFG Stats */}
          <div className="gfg-showcase">
            <a href="https://www.geeksforgeeks.org/user/shubham_codes/" target="_blank" rel="noopener noreferrer" className="platform-link gfg-link">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="#2f8d46">
                <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.319-1.49c0-.54.107-1.054.319-1.49a3.79 3.79 0 0 1 2.135-2.078 4.51 4.51 0 0 1 3.116-.016 3.691 3.691 0 0 1 1.104.695c.231.213.422.465.565.745.143.28.247.58.309.895h-2.07c-.174-.348-.454-.607-.795-.758a2.364 2.364 0 0 0-1.9.022 1.93 1.93 0 0 0-1.097 1.106c-.123.313-.186.65-.186 1.008 0 .359.063.695.186 1.008a1.93 1.93 0 0 0 1.097 1.106 2.364 2.364 0 0 0 1.9.022c.341-.151.621-.41.795-.758h2.07c-.062.314-.166.615-.309.895zM8.88 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078A3.571 3.571 0 0 1 1.64 12.17c0-.54.107-1.054.319-1.49a3.79 3.79 0 0 1 2.135-2.078 4.51 4.51 0 0 1 3.116-.016c.431.156.82.394 1.104.695.231.213.422.465.565.745.143.28.247.58.309.895H7.12c-.174-.348-.454-.607-.795-.758a2.364 2.364 0 0 0-1.9.022 1.93 1.93 0 0 0-1.097 1.106c-.123.313-.186.65-.186 1.008 0 .359.063.695.186 1.008a1.93 1.93 0 0 0 1.097 1.106 2.364 2.364 0 0 0 1.9.022c.341-.151.621-.41.795-.758h2.07c-.063.314-.167.615-.31.895z"/>
              </svg>
              <span>GeeksforGeeks</span>
              <span className="problem-count gfg-count">600+ Problems</span>
            </a>
            <div className="gfg-stats">
              <div className="gfg-stat-item">
                <span className="stat-number">600+</span>
                <span className="stat-label">Problems Solved</span>
              </div>
              <div className="gfg-stat-item">
                <span className="stat-number">Top</span>
                <span className="stat-label">Coding Score</span>
              </div>
              <div className="gfg-stat-item">
                <span className="stat-number">5⭐</span>
                <span className="stat-label">Rating</span>
              </div>
            </div>
          </div>
          
          {/* Codolio Profile */}
          <div className="codolio-showcase">
            <a href="https://codolio.com/profile/ToUrIsT45" target="_blank" rel="noopener noreferrer" className="platform-link codolio-link">
              <span className="codolio-icon">📊</span>
              <span>Codolio</span>
              <span className="view-profile">View Full Profile →</span>
            </a>
            <div className="codolio-embed">
              <img 
                src="https://codolio.com/api/card?username=ToUrIsT45&theme=dark" 
                alt="Codolio Profile"
                className="codolio-image"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.add('show');
                }}
              />
              <div className="codolio-fallback">
                <p>View my complete coding journey on Codolio</p>
                <a href="https://codolio.com/profile/ToUrIsT45" target="_blank" rel="noopener noreferrer" className="codolio-btn">
                  Visit Profile
                </a>
              </div>
            </div>
          </div>
          
          {/* All Coding Profiles Links */}
          <div className="all-profiles-links">
            <h4 className="profiles-title">🔗 Connect on All Platforms</h4>
            <div className="profiles-grid">
              <a href="https://leetcode.com/u/shubham_4518/" target="_blank" rel="noopener noreferrer" className="profile-chip leetcode-chip">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
                LeetCode
              </a>
              <a href="https://www.geeksforgeeks.org/user/shubham_codes/" target="_blank" rel="noopener noreferrer" className="profile-chip gfg-chip">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.319-1.49c0-.54.107-1.054.319-1.49a3.79 3.79 0 0 1 2.135-2.078 4.51 4.51 0 0 1 3.116-.016 3.691 3.691 0 0 1 1.104.695c.231.213.422.465.565.745.143.28.247.58.309.895h-2.07c-.174-.348-.454-.607-.795-.758a2.364 2.364 0 0 0-1.9.022 1.93 1.93 0 0 0-1.097 1.106c-.123.313-.186.65-.186 1.008 0 .359.063.695.186 1.008a1.93 1.93 0 0 0 1.097 1.106 2.364 2.364 0 0 0 1.9.022c.341-.151.621-.41.795-.758h2.07c-.062.314-.166.615-.309.895zM8.88 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078A3.571 3.571 0 0 1 1.64 12.17c0-.54.107-1.054.319-1.49a3.79 3.79 0 0 1 2.135-2.078 4.51 4.51 0 0 1 3.116-.016c.431.156.82.394 1.104.695.231.213.422.465.565.745.143.28.247.58.309.895H7.12c-.174-.348-.454-.607-.795-.758a2.364 2.364 0 0 0-1.9.022 1.93 1.93 0 0 0-1.097 1.106c-.123.313-.186.65-.186 1.008 0 .359.063.695.186 1.008a1.93 1.93 0 0 0 1.097 1.106 2.364 2.364 0 0 0 1.9.022c.341-.151.621-.41.795-.758h2.07c-.063.314-.167.615-.31.895z"/>
                </svg>
                GeeksforGeeks
              </a>
              <a href="https://www.codechef.com/users/shubham_4518" target="_blank" rel="noopener noreferrer" className="profile-chip codechef-chip">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M11.257.004a3.115 3.115 0 0 0-1.593.39 3.137 3.137 0 0 0-.776.605c.263.133.49.314.668.53.177.217.3.463.36.727.062.265.06.544-.006.813a2.125 2.125 0 0 1-.376.753 2.14 2.14 0 0 1-.634.551c-.247.144-.522.24-.81.278a2.06 2.06 0 0 1-.858-.071 2.044 2.044 0 0 1-.743-.4 2.1 2.1 0 0 1-.51-.633 2.152 2.152 0 0 1-.213-1.056c-.246.18-.466.395-.652.638a3.088 3.088 0 0 0-.44.772 3.102 3.102 0 0 0-.09 1.867c.108.306.254.593.436.854-.183.186-.35.387-.5.601a4.576 4.576 0 0 0-.554 1.164 4.623 4.623 0 0 0-.18 1.302 4.55 4.55 0 0 0 .21 1.26c.14.408.33.793.564 1.146.234.353.508.673.817.953a5.04 5.04 0 0 0 1.03.742c.08.046.163.087.247.127a2.786 2.786 0 0 0-.134.323c-.072.2-.119.408-.14.62a2.624 2.624 0 0 0 .02.635c.043.21.111.413.204.604.092.191.208.369.344.527.137.159.293.3.464.42.172.12.358.218.554.29.197.073.403.12.612.138a2.505 2.505 0 0 0 .627-.028 2.467 2.467 0 0 0 1.132-.53 2.548 2.548 0 0 0 .722-1.004 4.37 4.37 0 0 0 .39.038 4.47 4.47 0 0 0 1.305-.157c.42-.118.818-.3 1.178-.536.36-.237.68-.525.949-.855.27-.33.486-.697.639-1.089a4.363 4.363 0 0 0 .281-1.252 4.429 4.429 0 0 0-.094-1.28 4.478 4.478 0 0 0-.411-1.2 4.543 4.543 0 0 0-.71-1.012c.143-.15.274-.311.39-.483.116-.17.218-.35.304-.537a2.967 2.967 0 0 0 .203-.586 3.067 3.067 0 0 0 .032-1.264 3.093 3.093 0 0 0-.371-1.008 3.056 3.056 0 0 0-.636-.8 3.07 3.07 0 0 0-.842-.562 3.129 3.129 0 0 0-.972-.281 3.144 3.144 0 0 0-1.013.04z"/>
                </svg>
                CodeChef
              </a>
              <a href="https://codolio.com/profile/ToUrIsT45" target="_blank" rel="noopener noreferrer" className="profile-chip codolio-chip">
                📊 Codolio
              </a>
              <a href="https://github.com/ShubhamKumar6299" target="_blank" rel="noopener noreferrer" className="profile-chip github-chip">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a href="https://linkedin.com/in/shubhamkumar6299" target="_blank" rel="noopener noreferrer" className="profile-chip linkedin-chip">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
