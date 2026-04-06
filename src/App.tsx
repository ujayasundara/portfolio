import { motion } from 'framer-motion';
import { 
  Terminal, 
  ExternalLink, 
  Mail, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Layers
} from 'lucide-react';
import './App.css';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <strong>UJ</strong>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <motion.section 
        className="hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="hero-subtitle">Backend Engineer</span>
        <h1>Udayanga Jayasundara</h1>
        <p className="hero-tagline">
          Building high-performance microservices and scalable enterprise solutions at American Express.
        </p>
      </motion.section>

      <motion.section 
        id="about" 
        className="section"
        {...fadeIn}
      >
        <h2 className="section-title"><Code2 size={24} /> About</h2>
        <p>
          Passionate software engineer with 5+ years of experience building robust and scalable applications within the fintech domain. 
          Currently focused on designing impactful microservices with Java and Spring Boot for the Amex Travel & Lifestyle team.
        </p>
      </motion.section>

      <section id="experience" className="section">
        <motion.h2 className="section-title" {...fadeIn}>
          <Briefcase size={24} /> Experience
        </motion.h2>
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              company: "American Express",
              role: "Software Engineer II",
              date: "Jan 2024 - Present",
              desc: "Engineering critical backend services for Travel & Lifestyle with a focus on high availability and cloud-native architecture."
            },
            {
              company: "American Express",
              role: "Software Engineer I",
              date: "July 2022 - Jan 2024",
              desc: "Developed enterprise microservices using Java and Spring Boot, optimizing performance for global scale."
            },
            {
              company: "American Express",
              role: "Software Engineer",
              date: "July 2020 - July 2022",
              desc: "Full-stack development and collaboration on core fintech systems."
            }
          ].map((exp, i) => (
            <motion.div key={i} className="experience-card" variants={fadeIn}>
              <div className="experience-header">
                <span className="experience-company">{exp.company}</span>
                <span className="experience-date">{exp.date}</span>
              </div>
              <div className="experience-role">{exp.role}</div>
              <p>{exp.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="skills" className="section">
        <motion.h2 className="section-title" {...fadeIn}>
          <Layers size={24} /> Stack
        </motion.h2>
        <div className="skills-container">
          {["Java", "Spring Boot", "Microservices", "TypeScript", "React", "Node.js", "SQL", "REST APIs", "System Design"].map((skill, i) => (
            <motion.span 
              key={i} 
              className="skill-tag"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, borderColor: 'var(--accent)' }}
              transition={{ delay: i * 0.05 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      <section id="education" className="section">
        <motion.h2 className="section-title" {...fadeIn}>
          <GraduationCap size={24} /> Education
        </motion.h2>
        <motion.div className="experience-card" {...fadeIn}>
          <div className="experience-header">
            <span className="experience-company">Lamar University</span>
            <span className="experience-date">2017 - 2019</span>
          </div>
          <div className="experience-role">MS in Computer Science</div>
        </motion.div>
        <motion.div className="experience-card" {...fadeIn}>
          <div className="experience-header">
            <span className="experience-company">University of Peradeniya</span>
            <span className="experience-date">2008 - 2013</span>
          </div>
          <div className="experience-role">BS in Computer Science, Stats & Math</div>
        </motion.div>
      </section>

      <section id="contact" className="section">
        <motion.h2 className="section-title" {...fadeIn}>
          <Terminal size={24} /> Connect
        </motion.h2>
        <div className="contact-grid">
          <motion.a href="mailto:udayangajayasundara@gmail.com" className="contact-item" whileHover={{ y: -5 }} variants={fadeIn}>
            <Mail size={24} />
            <span>Email</span>
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/udayanga-jayasundara" target="_blank" className="contact-item" whileHover={{ y: -5 }} variants={fadeIn}>
            <ExternalLink size={24} />
            <span>LinkedIn</span>
          </motion.a>
          <motion.a href="https://github.com" target="_blank" className="contact-item" whileHover={{ y: -5 }} variants={fadeIn}>
            <Code2 size={24} />
            <span>GitHub</span>
          </motion.a>
        </div>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Udayanga Jayasundara. Built with React, Vite & Framer Motion.</p>
      </footer>
    </>
  );
}

export default App;
