import "./App.css";

const techstack = [
  { name: "JAVASCRIPT", icon: "src/assets/javascript.svg" },
  { name: "REACT.JS", icon: "src/assets/react.svg" },
  { name: "NODE.JS", icon: "src/assets/nodejs.svg" },
  { name: "JAVA", icon: "src/assets/java.svg" },
  { name: "PYTHON", icon: "src/assets/python.svg" },
  { name: "RUST", icon: "src/assets/rust.svg" },
  { name: "CSS", icon: "src/assets/css.svg" },
  { name: "GIT", icon: "src/assets/git.svg" },
  { name: "FIGMA", icon: "src/assets/figma.svg" },
  { name: "GITHUB", icon: "src/assets/github.svg" },
  { name: "LINUX", icon: "src/assets/linux.svg" },
  { name: "SUPABASE", icon: "src/assets/supabase.png" },
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
  },
];

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <div className="top-section">
            <h2>
              Software Engineer <span>/</span>
            </h2>
            <div className="navigation-menu">
              <h2>About</h2>
              <h2>Tech Stack</h2>
              <h2>Experience</h2>
              <h2>Projects</h2>
              <h2>Contact</h2>
            </div>
          </div>

          <div className="main-section">
            <img src="src/assets/pix-cat.png" />
            <div className="main-section-text">
              <div className="main-section-text-first">
                <h1>Hi, I am Wen Fei.</h1>
              </div>
              <div className="main-section-text-gradient">
                <h1>Software Engineer</h1>
              </div>
            </div>
          </div>

          <div className="tech-stack-section">
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

          <div className="about-section">
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

          <div className="experience-section">
            <div className="experience-section-content">
              <h1>Experience.</h1>
              {experience.map((exp, index) => (
                <div className="experience-item" key={index}>
                  <h2 className="experience-duration">{exp.duration}</h2>
                  <div className="experience-details">
                    <h2 className="experience-company">{exp.company}</h2>
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

          <div className="project-section">
            <h1>Projects.</h1>
            <div className="project-section-content"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
