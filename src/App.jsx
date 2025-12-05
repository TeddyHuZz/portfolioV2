import "./App.css";

// Import all your assets
import javascriptIcon from "./assets/javascript.svg";
import reactIcon from "./assets/react.svg";
import nodejsIcon from "./assets/nodejs.svg";
import javaIcon from "./assets/java.svg";
import pythonIcon from "./assets/python.svg";
import rustIcon from "./assets/rust.svg";
import cssIcon from "./assets/css.svg";
import gitIcon from "./assets/git.svg";
import figmaIcon from "./assets/figma.svg";
import githubIcon from "./assets/github.svg";
import linuxIcon from "./assets/linux.svg";
import supabaseIcon from "./assets/supabase.png";
import portfolioV1Image from "./assets/portfoliov1.png";
import asmJavaImage from "./assets/asmjava.png";
import solventImage from "./assets/solvent.png";
import realmQuestImage from "./assets/realmquest.png";
import portfolioV2Image from "./assets/portfoliov2.png";
import pixCatImage from "./assets/pix-cat.png";
import twitterImage from "./assets/twitter.svg";
import linkedinImage from "./assets/linkedin.svg";
import emailImage from "./assets/email.svg";
import githubImage from "./assets/github2.svg";

const techstack = [
  { name: "JAVASCRIPT", icon: javascriptIcon },
  { name: "REACT.JS", icon: reactIcon },
  { name: "NODE.JS", icon: nodejsIcon },
  { name: "JAVA", icon: javaIcon },
  { name: "PYTHON", icon: pythonIcon },
  { name: "RUST", icon: rustIcon },
  { name: "CSS", icon: cssIcon },
  { name: "GIT", icon: gitIcon },
  { name: "FIGMA", icon: figmaIcon },
  { name: "GITHUB", icon: githubIcon },
  { name: "LINUX", icon: linuxIcon },
  { name: "SUPABASE", icon: supabaseIcon },
];

const experience = [
  {
    title: "Developer Relation Committee",
    company: "APU Blockchain & Cryptocurrency Club",
    duration: "September 2025 - Present",
    description: [
      "Facilitated communication and engagement between developers and the club community, ensuring seamless collaboration on Web3 and blockchain-related initiatives.",
      "Contributed to organizing developer-focused events such as hackathons, coding workshops, and technical sessions to enhance members’ practical blockchain development skills.",
      "Support the creation and maintenance of open-source projects and documentation to encourage community contribution and knowledge sharing.",
      "Act as the primary strategic liaison between the technical engineering team and the broader club community of 2,000+ members, translating complex Web3 and blockchain technical concepts into accessible content to foster a more inclusive developer ecosystem.",
      "Champion a culture of knowledge sharing by curating comprehensive technical documentation and developer guides, significantly lowering the barrier to entry for students transitioning from Web2 to Web3 development.",
    ],
    link: "https://www.linkedin.com/company/apu-blockchain-crypto-club-apu-bcc/",
  },
  {
    title: "Event Department Leader",
    company: "APU Blockchain & Cryptocurrency Club",
    duration: "September 2024 - September 2025",
    description: [
      "One of the Project Manager and spearheaded the planning and execution of DEVMatch 2.0, recognized as the largest student blockchain hackathon in Malaysia, successfully managing logistics and engagement for over 500+ participants and 80+ submitted projects.",
      "Served as the Event Deparment Leader for Southeast Asia's leading blockchain club, driving engagement and providing value to a growing community of 2,000+ members.",
      "Oversaw the end-to-end lifecycle of diverse technical events including bootcamps, industry meetups, and workshops aimed at bridging the gap between academic theory and real-world Web3 application.",
      "Cultivated a collaborative team environment by implementing clear communication channels and ownership structures, ensuring the seamless delivery of complex events under tight deadlines",
      "Mentored and guided a dedicated committee of student organizers, fostering their professional growth in project management, event coordination, and technical leadership.",
    ],
    link: "https://www.linkedin.com/company/apu-blockchain-crypto-club-apu-bcc/",
  },
  {
    title: "Software Support & Implementation (Intern)",
    company: "Info-Tech System Integrators (M) Sdn Bhd",
    duration: "October 2024 - February 2025",
    description: [
      "Delivered comprehensive first line technical support for the company's cloud-based Human Resource and Accounting software, troubleshooting complex software behaviors to ensure system stability for end-users.",
      "Directly assisted and resolved inquiries for a total of 226 customers, achieving high resolution rates through detailed problem analysis and effective solution delivery via phone call and CRM channels.",
      "Drove customer satisfaction and contributed to company revenue growth by leveraging deep product knowledge to identify user needs, executing strategic customer outreach, and supporting effective sales initiatives through the sales of Year-End Workshop.",
      "Served as a critical bridge between clients and internal developer teams, translating actual user feedback into actionable insights while maintaining professional communication standards under pressure.",
    ],
    link: "https://www.linkedin.com/company/info-tech-systems-ltd/",
  },
];

const projects = [
  {
    name: "Portfolio Website Version One",
    description:
      "I have designed and developed my first ever portfolio website using React.js, JavaScript, and CSS when I first stepped into the Web Development field. It was a simple static website that showcased my projects, experiences, and skills. This project laid the foundation for my udnderstanding of web development and inspired me to further explore into the field",
    image: portfolioV1Image,
    link: "https://swenfei.vercel.app/",
  },
  {
    name: "OWSB System",
    description:
      "I have developed the Finance role for the OWSB System as the course work of my university subject using Object-Oriented Programming in Java. The OWSB System is a desktop application that helps businesses to manage their inventory system, sales, and finances. My role was to implement the finance module that handles invoicing, payments, and financial reports.",
    image: asmJavaImage,
    link: "https://github.com/JNHNG0205/java_asm",
  },
  {
    name: "Solvent | Onchain Gas Tank",
    description:
      "Solvet is an onchain gas tank solution that allows developers to manage and pay for the gas fees in a safer way through x402. It is built using Rust for smart contract development and JavaScript for the front-end development. The project aims to provide a seamless experience for developers to interact with blockchain networks without worrying about their wallets getting drain.",
    image: solventImage,
    link: "https://github.com/TeddyHuZz/solvent",
  },
  {
    name: "Realm Quest | DND Board Game",
    description:
      "Realm Quest is a DND-inspired hybrid board game that combines both physical and digital elements to create an immersive gaming experience. Players can interact with the physical map with QR codes that link to the digital content with multiplayer mode. The project is built using JavaScript and React.js for the front-end development, Node.js for the back-end development, Supabase for the database, Render and Vercel for the deployment.",
    image: realmQuestImage,
    link: "https://realmquest.vercel.app/",
  },
  {
    name: "Portfolio Website Version Two",
    description:
      "I have redesigned my portfolio website using React.js, JavaScript, and CSS to showcase my skills and projects in a more modern and professional way. The new design features a sleek and responsive layout, and smooth animations to enhance the user experience. This project allowed me to improve my web development skills and create a more impressive online presence.",
    image: portfolioV2Image,
    link: "https://wenfei.vercel.app/",
  },
];

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <div className="top-section">
            <a href="#home">
              <h2>
                Software Engineer <span>/</span>
              </h2>
            </a>
            <div className="navigation-menu">
              <a href="#about">
                <h2>About</h2>
              </a>
              <a href="#tech-stack">
                <h2>Tech Stack</h2>
              </a>
              <a href="#experience">
                <h2>Experience</h2>
              </a>
              <a href="#projects">
                <h2>Projects</h2>
              </a>
              <a href="#contact">
                <h2>Contact</h2>
              </a>
            </div>
          </div>

          <div className="main-section" id="home">
            <img src={pixCatImage} />
            <div className="main-section-text">
              <div className="main-section-text-first">
                <h1>Hi, I am Wen Fei.</h1>
              </div>
              <div className="main-section-text-gradient">
                <h1>Software Engineer</h1>
              </div>
            </div>
          </div>

          <div className="tech-stack-section" id="tech-stack">
            <div className="tech-stack-scroller">
              {techstack.map((tech) => (
                <div className="tech-stack-item" key={tech.name}>
                  <img src={tech.icon} alt={tech.name} />
                  <h2>
                    {tech.name}
                    <span>/</span>
                  </h2>
                </div>
              ))}
              {techstack.map((tech) => (
                <div className="tech-stack-item" key={`${tech.name}-clone`}>
                  <img src={tech.icon} alt={tech.name} />
                  <h2>
                    {tech.name}
                    <span>/</span>
                  </h2>
                </div>
              ))}
            </div>
          </div>

          <div className="about-section" id="about">
            <div className="about-section-content">
              <h1>About.</h1>
              <p>
                Hi, I'm Wen Fei. I am a Software Engineer and student at Asia
                Pacific University. More importantly, I am a builder passionate
                about Web Development and Blockchain Development. My technical
                toolkit is broad—ranging from front-end proficiency in
                JavaScript and React.js to backend logic in Java and Python.
              </p>
              <p>
                However, my work extends beyond just commits and pull requests.
                I believe in the power of community. My experience managing a
                massive blockchain club of 2,000+ members taught me the
                importance of leadership and communication in the tech world.
                Now, acting as a Developer Relations committee, I combine my
                technical background with my people skills to foster innovation
                and collaboration. I am currently open to opportunities where I
                can apply my skills in full-stack development and blockchain
                technology.
              </p>
            </div>
          </div>

          <div className="experience-section" id="experience">
            <div className="experience-section-content">
              <h1>Experience.</h1>
              {experience.map((exp, index) => (
                <div className="experience-item" key={index}>
                  <h2 className="experience-duration">{exp.duration}</h2>
                  <div className="experience-details">
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h2 className="experience-company">{exp.company}</h2>
                    </a>
                    <h2 className="experience-title">{exp.title}</h2>
                    <ul className="experience-description">
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="project-section" id="projects">
            <h1>Projects.</h1>
            <div className="project-section-content">
              {projects.map((project, index) => (
                <div className="project-item" key={index}>
                  <div className="project-section-left">
                    <h2 className="project-name">{project.name}</h2>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={project.image}
                        alt={project.name}
                        className="project-image"
                      />
                    </a>
                  </div>
                  <div className="project-section-right">
                    <p className="project-description">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-section" id="contact">
            <div className="contact-section-content">
              <h1>Contact.</h1>
              <h2>Connect with me or follow my social media</h2>
              <div className="contact-section-first-column">
                <div className="linkedin">
                  <img src={linkedinImage} alt="Linkedin" />
                  <h3
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/swenfei/",
                        "_blank"
                      )
                    }
                  >
                    Linkedin
                  </h3>
                </div>
                <div className="github">
                  <img src={githubImage} alt="GitHub" />
                  <h3
                    onClick={() =>
                      window.open("https://github.com/TeddyHuZz", "_blank")
                    }
                  >
                    GitHub
                  </h3>
                </div>
              </div>
              <div className="contact-section-second-column">
                <div className="twitter">
                  <img src={twitterImage} alt="Twitter" />
                  <h3
                    onClick={() =>
                      window.open("https://x.com/TeddyHuZz", "_blank")
                    }
                  >
                    Twitter
                  </h3>
                </div>
                <div className="email">
                  <img src={emailImage} alt="Email" />
                  <h3
                    onClick={() =>
                      window.open("mailto:swenfei04@gmail.com", "_blank")
                    }
                  >
                    E-mail
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h2>© 2025 | Wen Fei, Kuala Lumpur</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
