import { useState, useEffect, useRef } from 'react'
import './App.css'
import { HiHome, HiFolder, HiDocumentText, HiBriefcase, HiAcademicCap, HiCode, HiLocationMarker, HiTerminal, HiMail, HiGlobe } from 'react-icons/hi'
import furkanImg from './assets/furkan.jpeg'
import fixaiImg from './assets/fixai.png'
import eczImg from './assets/ecz.webp'
import namegenaiImg from './assets/namegenai.png'
import linkedinLogo from './assets/linkedin.jpeg'
import githubLogo from './assets/github.png'
import instagramLogo from './assets/instagram.avif'
import upworkLogo from './assets/upwork.webp'
import bandr from './assets/bandr.png'
import bgImage from './assets/bg.jpeg'
interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link?: string;
}

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<'home' | 'experience' | 'projects' | 'education' | 'skills' | 'about'>('home');
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const mainContentRef = useRef<HTMLElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!mainContentRef.current) return;

      const scrollPosition = mainContentRef.current.scrollTop + 200;
      
      if (skillsRef.current && scrollPosition >= skillsRef.current.offsetTop) {
        setActiveSection('skills');
      } else if (educationRef.current && scrollPosition >= educationRef.current.offsetTop) {
        setActiveSection('education');
      } else if (projectsRef.current && scrollPosition >= projectsRef.current.offsetTop) {
        setActiveSection('projects');
      } else if (experienceRef.current && scrollPosition >= experienceRef.current.offsetTop) {
        setActiveSection('experience');
      } else if (aboutRef.current && scrollPosition >= aboutRef.current.offsetTop) {
        setActiveSection('about');
      } else {
        setActiveSection('home');
      }
    };

    const updateOverlayHeight = () => {
      if (overlayRef.current && contentWrapperRef.current) {
        const contentHeight = contentWrapperRef.current.scrollHeight;
        overlayRef.current.style.height = `${contentHeight}px`;
      }
    };

    const mainContent = mainContentRef.current;
    if (mainContent) {
      mainContent.addEventListener('scroll', handleScroll);
      updateOverlayHeight();
      
      // Update overlay height when content changes
      const resizeObserver = new ResizeObserver(updateOverlayHeight);
      if (contentWrapperRef.current) {
        resizeObserver.observe(contentWrapperRef.current);
      }

      return () => {
        mainContent.removeEventListener('scroll', handleScroll);
        resizeObserver.disconnect();
      };
    }
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Nöbetçi Eczane Uygulaması",
      image: eczImg,
      description: "Real-time on-duty pharmacy finder application. Fetches real-time on-duty pharmacy data via API and displays them on MapKit. Uses CoreLocation to detect user's location and lists the nearest pharmacies. Built with MVVM architecture for maintainable code structure. Uses Firebase Remote Config to manage API connections dynamically.",
      technologies: ["Swift", "SwiftUI", "MapKit", "CoreLocation", "MVVM", "Firebase Remote Config", "RESTful API"],
      link: "https://apps.apple.com/us/app/nöbetçi-eczaneler-81-il/id6739646595"
    },
    {
      id: 2,
      title: "FIXAI: AI Photo Generator",
      image: fixaiImg,
      description: "AI-powered photo generation and editing application using FluxContext AI model. Designed a modern and intuitive interface using SwiftUI. Integrated in-app purchase (IAP) system with credit system. Optimized API calls to ensure smooth user experience.",
      technologies: ["Swift", "SwiftUI", "FluxContext AI", "In-App Purchase", "RESTful API"],
      link: "https://apps.apple.com/us/app/glow-up-your-photos-fixai/id6747312191"
    },
    {
      id: 3,
      title: "NameGenAI For Babies",
      image: namegenaiImg,
      description: "AI-powered baby name generator application. Offers personalized, unique, and meaningful name suggestions tailored to your style and preferences. Features smart AI-based name suggestions, filter by origin, meaning, or style, and the ability to save and share favorite names.",
      technologies: ["Swift", "SwiftUI", "AI", "In-App Purchase", "RESTful API"],
      link: "https://apps.apple.com/us/app/namegenai-for-babies/id6740745177"
    },
    {
      id: 4,
      title: "TRT Bandrol Takip Uygulaması",
      image: bandr,
      description: "Bandrol tracking application developed using React Native CLI and TypeScript. Implemented OTP-based login and token refresh functionality. Developed a module that sends requested records to users in HTML format via mail endpoint.",
      technologies: ["React Native", "TypeScript", "OTP Authentication", "Token Refresh", "Email API"]
    }
  ];

  const experiences = [
    {
      company: "Türkiye Radyo Ve Televizyonu (TRT)",
      position: "Mobile Developer",
      period: "September 2025 - Present",
      responsibilities: [
        "Worked in Mobile Development using React Native CLI and TypeScript",
        "Implemented barcode and serial number reading with camera module",
        "Worked with multiple endpoints and structured code with proper architecture",
        "Developed OTP-based login and token refresh functionality",
        "Developed a module that sends requested records to users in HTML format via mail endpoint"
      ]
    },
    {
      company: "Runic Bytes",
      position: "Mobile Developer",
      period: "June 2024 - August 2024",
      responsibilities: [
        "Developed mobile applications using React Native and Expo",
        "Transferred photos, videos, and audio recordings from users to database via API",
        "Optimized application performance and user experience"
      ]
    }
  ];

  const education = {
    university: "Konya Technical University",
    degree: "Software Engineering",
    period: "2021 - 2025",
    thesis: "Turkey Tourist Application – Developed a mobile application for discovering tourist attractions using Firebase technologies and SwiftUI."
  };

  const skills = {
    languages: ["Swift", "React Native"],
    frameworks: ["RESTful APIs", "Firebase", "URLSession", "JSON Parsing", "Google AdMob"],
    architecture: ["MVVM", "SOLID Principles"]
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/furkan-buğra-karci-5142281a5/",
      icon: linkedinLogo
    },
    {
      name: "GitHub",
      url: "https://github.com/furblood13",
      icon: githubLogo
    },
    {
      name: "Instagram",
      url: "https://instagram.com/furkankarci111",
      icon: instagramLogo
    },
    {
      name: "Upwork",
      url: "https://www.upwork.com/freelancers/~01020bd3be00d77c37",
      icon: upworkLogo
    }
  ];

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-content">
          <div className="profile-section">
            <img src={furkanImg} alt="Furkan" className="profile-image" />
            <h1 className="profile-name">Furkan Buğra Karcı</h1>
            <p className="profile-title">Mobile Developer</p>
            <div className="contact-info">
              <div className="contact-item">
                <HiLocationMarker className="contact-icon" />
                <span>Ankara</span>
              </div>
              <a href="mailto:furkankarci80@outlook.com" className="contact-item">
                <HiMail className="contact-icon" />
                <span>furkankarci80@outlook.com</span>
              </a>
              <a href="https://github.com/furblood13" target="_blank" rel="noopener noreferrer" className="contact-item">
                <HiTerminal className="contact-icon" />
                <span>github.com/furblood13</span>
              </a>
              <a href="https://apps.apple.com/us/developer/furkan-bugra-karci/id1786455388" target="_blank" rel="noopener noreferrer" className="contact-item">
                <HiGlobe className="contact-icon" />
                <span>App Store Page</span>
              </a>
            </div>
          </div>

          <nav className="nav-section">
            <div 
              className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => {
                setActiveSection('home');
                mainContentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <HiHome className="nav-icon" />
              <span className="nav-text">Home</span>
            </div>
            <div 
              className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={() => {
                setActiveSection('experience');
                experienceRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <HiBriefcase className="nav-icon" />
              <span className="nav-text">Experience</span>
            </div>
            <div 
              className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => {
                setActiveSection('projects');
                projectsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <HiFolder className="nav-icon" />
              <span className="nav-text">Projects</span>
            </div>
            <div 
              className={`nav-item ${activeSection === 'education' ? 'active' : ''}`}
              onClick={() => {
                setActiveSection('education');
                educationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <HiAcademicCap className="nav-icon" />
              <span className="nav-text">Education</span>
            </div>
            <div 
              className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => {
                setActiveSection('skills');
                skillsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <HiCode className="nav-icon" />
              <span className="nav-text">Skills</span>
            </div>
            <div 
              className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => {
                setActiveSection('about');
                aboutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <HiDocumentText className="nav-icon" />
              <span className="nav-text">About</span>
            </div>
          </nav>

          <div className="social-section">
            <h3 className="social-title">Connect</h3>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                >
                  <img src={social.icon} alt={social.name} className="social-icon" />
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
            <div className="store-link">
              <a 
                href="https://apps.apple.com/us/developer/furkan-bugra-karci/id1786455388" 
                target="_blank" 
                rel="noopener noreferrer"
                className="store-link-button"
              >
                <HiGlobe className="store-icon" />
                <span>App Store Page</span>
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content" ref={mainContentRef} style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="background-overlay" ref={overlayRef}></div>
        <div className="content-wrapper" ref={contentWrapperRef}>
          <section className="about-section" ref={aboutRef}>
            <h2 className="section-heading">About Me</h2>
            <div className="section-content">
              <p>
              I graduated from Konya Technical University with a degree in Software Engineering in 2025. I am a mobile developer with one year of experience in SwiftUI, React Native, MVVM architecture, and API integrations. I have three published applications on the App Store, and I also developed an enterprise-distributed React Native application for TRT.

I'm eager to bring my skills to an innovative and dynamic team where I can contribute and continue to grow. You can find my published apps on my App Store page.

Outside of work, I enjoy traveling and exploring new cultures. I have been in US,Italy,Bulgaria and Sri Lanka, which broadened my perspective and strengthened my passion for discovering new places.
              </p>
            </div>
          </section>

          <section className="experience-section" ref={experienceRef}>
            <h2 className="section-heading">Experience</h2>
            <div className="experience-list">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <h3 className="experience-company">{exp.company}</h3>
                    <p className="experience-position">{exp.position}</p>
                    <p className="experience-period">{exp.period}</p>
                  </div>
                  <ul className="experience-responsibilities">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="projects-section" ref={projectsRef}>
            <h2 className="section-heading">Projects</h2>
            <div className="projects-list">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="project-item"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.title} className="project-thumbnail" />
                  </div>
                  <div className="project-details">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-preview">{project.description.substring(0, 150)}...</p>
                    <div className="project-tech">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="education-section" ref={educationRef}>
            <h2 className="section-heading">Education</h2>
            <div className="education-item">
              <h3 className="education-university">{education.university}</h3>
              <p className="education-degree">{education.degree}</p>
              <p className="education-period">{education.period}</p>
              <div className="education-thesis">
                <h4>Thesis Project:</h4>
                <p>{education.thesis}</p>
              </div>
            </div>
          </section>

          <section className="skills-section" ref={skillsRef}>
            <h2 className="section-heading">Skills</h2>
            <div className="skills-content">
              <div className="skill-category">
                <h3 className="skill-category-title">Programming Languages</h3>
                <div className="skill-tags">
                  {skills.languages.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3 className="skill-category-title">Frameworks & Tools</h3>
                <div className="skill-tags">
                  {skills.frameworks.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3 className="skill-category-title">Architecture & Design Patterns</h3>
                <div className="skill-tags">
                  {skills.architecture.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
            <div className="modal-header">
              <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
              <h2 className="modal-title">{selectedProject.title}</h2>
            </div>
            <div className="modal-body">
              <p className="modal-description">{selectedProject.description}</p>
              <div className="modal-tech">
                <h4>Technologies:</h4>
                <div className="tech-list">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-link"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
