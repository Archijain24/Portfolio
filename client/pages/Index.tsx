import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  ChevronRight,
  Code2,
  Database,
  Download,
  GraduationCap,
  Mail,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    number: "01",
    name: "EXCELLA",
    eyebrow: "AI PRODUCT · SPREADSHEET AUTOMATION",
    summary: "An AI-powered productivity tool for exploring workbook data, previewing transformations, and generating filtered files.",
    problem: "Finding useful information in spreadsheets can take time and repetitive manual filtering.",
    solution: "Ask in plain language, inspect the transformation, and create a filtered file from one workspace.",
    architecture: "React interface styled with Tailwind CSS, a Node.js backend, and Groq AI API integration.",
    technologies: ["React.js", "Tailwind CSS", "Groq AI API"],
    features: ["Retrieve workbook data by criteria", "Generate filtered files", "Preview transformations in real time"],
    mark: "E",
    art: "sheet",

  },
  {
    number: "02",
    name: "Parking Management System",
    eyebrow: "BACKEND SYSTEM · MICROSERVICES",
    summary: "A production-style parking management backend built around modular services, persistent data, and clear API boundaries.",
    problem: "Parking workflows need coordinated services and dependable access to shared data.",
    solution: "A modular system for managing parking operations through dedicated services and REST APIs.",
    architecture: "Spring Boot microservices communicate service-to-service, with MySQL persistence behind REST APIs.",
    technologies: ["Java", "Spring Boot", "Microservices", "REST APIs", "MySQL"],
    features: ["Modular service boundaries", "Service-to-service communication", "Persistent relational data"],
    mark: "P",
    art: "network",

  },
  {
    number: "03",
    name: "Trendy Movies App",
    eyebrow: "WEB APPLICATION · MOVIE DISCOVERY",
    summary: "A polished real-time movie discovery experience, bringing current titles into a clean, easy-to-explore interface.",
    problem: "Finding what to watch can mean jumping between scattered movie listings.",
    solution: "A focused discovery app that presents current movie information in one approachable experience.",
    architecture: "A browser-based interface built with HTML, CSS, and JavaScript, connected to a movie data API.",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    features: ["Real-time movie discovery", "Responsive browsing experience", "API-powered content"],
    mark: "T",
    art: "frames",

  },
  {
    number: "04",
    name: "DemandSignal",
    eyebrow: "DATA SCIENCE · RETAIL FORECASTING",
    summary: "A retail demand-forecasting workbench that turns product sales history into explainable forecasts and inventory signals.",
    problem: "Seasonality, promotions, and sparse SKU histories make stock planning difficult to evaluate consistently.",
    solution: "Compare transparent baselines with machine-learning forecasts, then surface uncertainty alongside every estimate.",
    architecture: "Validated sales data flows through time-aware feature engineering and model backtests into a forecast API and planner dashboard.",
    technologies: ["Python", "Pandas", "scikit-learn", "FastAPI", "PostgreSQL"],
    features: ["Rolling-origin backtesting", "Forecast intervals by SKU and horizon", "Low-stock review queue"],
    mark: "D",
    art: "forecast",

  },
  {
    number: "05",
    name: "FraudLens",
    eyebrow: "DATA SCIENCE · TRANSACTION RISK",
    summary: "A transaction anomaly-review tool that helps analysts investigate unusual patterns with clear, reviewable risk signals.",
    problem: "Rare fraud events create heavily imbalanced datasets, while opaque alerts are difficult to prioritize and audit.",
    solution: "Evaluate interpretable risk signals against a review queue, keeping human investigation in the decision loop.",
    architecture: "A reproducible feature pipeline feeds imbalanced-model evaluation and a scoring API that records analyst feedback.",
    technologies: ["Python", "Pandas", "scikit-learn", "FastAPI", "SQL"],
    features: ["Precision-recall threshold analysis", "Reason codes for each review", "Feedback-ready audit trail"],
    mark: "F",
    art: "fraud",

  },
  {
    number: "06",
    name: "Tracepoint",
    eyebrow: "AI ENGINEERING · INCIDENT RESPONSE",
    summary: "An incident workspace that connects noisy service events into an evidence-linked timeline for engineering teams.",
    problem: "During an incident, related signals are scattered across logs and services, slowing investigation and handoffs.",
    solution: "Group events by time and service, then draft source-cited summaries that engineers can verify before acting.",
    architecture: "An event-normalization pipeline and retrieval layer supply cited context to a review-first incident console.",
    technologies: ["TypeScript", "Node.js", "LLM API", "PostgreSQL"],
    features: ["Correlated event timeline", "Evidence-linked incident summaries", "Human-approved action checklist"],
    mark: "T",
    art: "trace",

  },
];

const stackGroups = [
  { label: "Languages", items: ["Java", "C++", "JavaScript"], icon: Braces },
  { label: "Frontend", items: ["React", "Tailwind CSS"], icon: Code2 },
  { label: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Spring", "Spring Boot"], icon: TerminalSquare },
  { label: "Data & tools", items: ["MySQL", "Git", "GitHub"], icon: Database },
];

const reveal: Variants = {
  hidden: { opacity: 1, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

function SectionLink({ to, className, children }: { to: string; className?: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className={className}
      onClick={() => {
        requestAnimationFrame(() => {
          document.getElementById(to.slice(1))?.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
          });
        });
      }}
    >
      {children}
    </Link>
  );
}

function SectionHeading({ index, title, note }: { index: string; title: string; note: string }) {
  return (
    <div className="section-heading">
      <span className="section-index">{index}</span>
      <div className="section-heading-copy">
        <h2>{title}</h2>
        <p>{note}</p>
      </div>
      <span className="section-rule" />
    </div>
  );
}

export default function Index() {
  const reduceMotion = useReducedMotion();
  const motionProps = reduceMotion
    ? {}
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport: { once: true, amount: 0.16 } };

  return (
    <main className="portfolio-shell">
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="brand-mark" aria-label="Archi Jain, home">AJ<span>.</span></Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            <SectionLink to="#projects">Projects</SectionLink>
            <SectionLink to="#experience">Experience</SectionLink>
            <SectionLink to="#about">About</SectionLink>
          </nav>
          <SectionLink to="#contact" className="header-cta">Let’s talk <ArrowUpRight size={15} /></SectionLink>
        </div>
      </header>

      <section className="hero-section page-width">
        <div className="hero-copy">
          <motion.div
            className="availability-pill"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="availability-dot" />
            OPEN TO AI / ML / GENAI / SOFTWARE ENGINEERING OPPORTUNITIES
          </motion.div>
          <motion.p
            className="hero-kicker"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            AI ENGINEER <span>•</span> SOFTWARE ENGINEER
          </motion.p>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.14 }}
          >
            ARCHI<br /><span>JAIN</span>
          </motion.h1>
          <motion.p
            className="hero-statement"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.23 }}
          >
            “I build intelligent software systems that solve real-world problems.”
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
          >
            <SectionLink to="#projects" className="button-primary">View projects <ArrowDownRight size={16} /></SectionLink>
            <Link to="/Archi-Jain-Resume.txt" reloadDocument download className="button-secondary"><Download size={15} /> Download resume</Link>
          </motion.div>
          <motion.div
            className="hero-proof"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            <span className="proof-line" />
            <span>Experience at <strong>Capgemini</strong></span>
            <span className="proof-separator">/</span>
            <span>Building with AI &amp; software</span>
          </motion.div>
        </div>

        <motion.div
          className="hero-board"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={reduceMotion ? undefined : { rotateX: -1.5, rotateY: -2, z: 12 }}
          aria-label="Index of Archi Jain's AI, data, backend, and web projects"
        >
          <div className="hero-board-top"><span>AJ / ENGINEERING INDEX</span><span>06 PROJECTS <i /></span></div>
          <div className="hero-board-intro">
            <div className="board-emblem"><span>AJ</span><i /><i /><i /></div>
            <span className="board-label">AI · DATA · SOFTWARE</span>
            <h2>AI, data &amp;<br /><span>engineered systems.</span></h2>
            <p>Products and systems for complex problems.</p>
          </div>
          <div className="hero-board-list">
            <div><span className="board-number">01</span><span className="board-name">EXCELLA</span><span className="board-type">AI PRODUCT</span><i /></div>
            <div><span className="board-number">02</span><span className="board-name">PARKING SYSTEM</span><span className="board-type">MICROSERVICES</span><i /></div>
            <div><span className="board-number">03</span><span className="board-name">TRENDY MOVIES</span><span className="board-type">WEB APP</span><i /></div>
            <div><span className="board-number">04</span><span className="board-name">DEMANDSIGNAL</span><span className="board-type">FORECASTING</span><i /></div>
            <div><span className="board-number">05</span><span className="board-name">FRAUDLENS</span><span className="board-type">DATA SCIENCE</span><i /></div>
            <div><span className="board-number">06</span><span className="board-name">TRACEPOINT</span><span className="board-type">AI ENGINEERING</span><i /></div>
          </div>
          <div className="hero-board-footer"><span>CAPGEMINI EXPERIENCE</span><span>B.TECH · COMPUTER SCIENCE</span></div>
        </motion.div>

        <SectionLink to="#projects" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={13} /></SectionLink>
      </section>

      <div className="ticker-wrap" aria-hidden="true">
        <div className="ticker page-width">
          <span>AI DEVELOPMENT</span><i /><span>SOFTWARE ENGINEERING</span><i /><span>PRODUCT THINKING</span><i /><span>CAPGEMINI</span><i /><span>AI DEVELOPMENT</span>
        </div>
      </div>

      <section id="about" className="about-section page-width section-space">
        <SectionHeading index="01" title="A little about me" note="ENGINEERED FOR IMPACT" />
        <motion.div className="about-grid" {...motionProps} variants={reveal}>
          <p className="about-lead">I’m an engineer who turns <span>complex ideas into practical products.</span></p>
          <div className="about-detail">
            <p>With experience at <strong>Capgemini</strong>, I bring together AI development and software engineering to build useful, thoughtfully designed systems—from AI-assisted productivity tools to modular backend applications.</p>
            <p>I care about the details behind a good product: clear architecture, reliable APIs, and experiences that make powerful technology feel straightforward.</p>
            <div className="about-tags"><span><Sparkles size={13} /> AI &amp; GenAI</span><span><Code2 size={13} /> Software systems</span><span><ArrowDownRight size={13} /> Product-minded</span></div>
          </div>
        </motion.div>
      </section>

      <section id="projects" className="projects-section page-width section-space">
        <SectionHeading index="02" title="Project showcase" note="AI · BACKEND · DATA SCIENCE" />
        <div className="project-grid">
          {projects.map((project) => (
            <motion.article key={project.number} className="project-card" {...motionProps} variants={reveal} whileHover={reduceMotion ? undefined : { rotateX: -1.25, rotateY: 1.25, z: 10 }}>
              <div className={`project-art project-art-${project.art}`} aria-hidden="true">
                <span className="project-art-kicker">PROJECT {project.number} <i /> {project.eyebrow}</span>
                {project.art === "sheet" && <div className="art-sheet"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>}
                {project.art === "network" && <div className="art-network"><i /><i /><i /><i /><i /><span /><span /></div>}
                {project.art === "frames" && <div className="art-frames"><i /><i /><i /></div>}
                {project.art === "forecast" && <div className="art-forecast"><i /><i /><i /><i /><i /><span /></div>}
                {project.art === "fraud" && <div className="art-fraud"><i /><i /><i /><i /><i /><span /></div>}
                {project.art === "trace" && <div className="art-trace"><i /><i /><i /><i /><i /><span /></div>}
                <span className="project-art-glyph">{project.mark}</span>
                <span className="project-art-index">AJ / CASE {project.number}</span>
              </div>
              <div className="card-topline"><span>{project.number} / {project.eyebrow}</span></div>
              <h3>{project.name}</h3>
              <p className="card-summary">{project.summary}</p>
              <div className="project-details">
                <div><span className="detail-label">THE PROBLEM</span><p>{project.problem}</p></div>
                <div><span className="detail-label">THE SOLUTION</span><p>{project.solution}</p></div>
                <div><span className="detail-label">ARCHITECTURE</span><p>{project.architecture}</p></div>
                <div><span className="detail-label">KEY FEATURES</span><ul>{project.features.map((feature) => <li key={feature}><ChevronRight size={12} />{feature}</li>)}</ul></div>
              </div>
              <span className="detail-label">TECHNOLOGIES</span>
              <div className="tech-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="stack-section section-space">
        <div className="page-width">
          <SectionHeading index="03" title="Engineering stack" note="TOOLS FOR BUILDING END TO END" />
          <motion.div className="stack-grid" {...motionProps} variants={reveal}>
            {stackGroups.map(({ label, items, icon: Icon }) => (
              <div className="stack-group" key={label}>
                <div className="stack-group-heading"><Icon size={16} /><span>{label}</span></div>
                <div className="stack-items">{items.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="experience" className="experience-section page-width section-space">
        <SectionHeading index="04" title="Experience & education" note="THE FOUNDATION BEHIND THE WORK" />
        <div className="timeline-grid">
          <motion.article className="timeline-card experience-card" {...motionProps} variants={reveal}>
            <div className="timeline-marker"><span /></div>
            <div className="timeline-content">
              <div className="timeline-meta"><span>EXPERIENCE</span></div>
              <h3>Capgemini</h3>
              <div className="editable-fields">
                <p><span>DATES</span><strong>August 2026 - Present&nbsp;</strong></p>
                <p><span>RESPONSIBILITIES</span><strong>Software Analyst</strong></p>
              </div>
            </div>
          </motion.article>
          <motion.article className="timeline-card education-card" {...motionProps} variants={reveal}>
            <div className="timeline-marker education-marker"><GraduationCap size={16} /></div>
            <div className="timeline-content">
              <div className="timeline-meta"><span>EDUCATION</span><span>2022 — 2026</span></div>
              <h3>B.Tech Computer Science<br />&amp; Engineering</h3>
              <p className="timeline-role">Lakshmi Narain College of Technology</p>
              <div className="education-bottom"><span>CGPA</span><strong>8.12</strong></div>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="recognition-section page-width">
        <motion.div className="recognition-card" {...motionProps} variants={reveal}>
          <div className="recognition-icon"><Sparkles size={19} /></div>
          <div><span className="detail-label">A MOMENT OF MAKING</span><h3>Idea-Hackathon</h3><p>Participation</p></div>
          <span className="recognition-note">Curiosity, collaboration<br />&amp; building ideas</span>
        </motion.div>
      </section>

      <section id="contact" className="contact-section page-width section-space">
        <motion.div className="contact-panel" {...motionProps} variants={reveal}>
          <div className="contact-orb" />
          <span className="contact-kicker"><span /> OPEN TO WHAT’S NEXT</span>
          <h2>Let’s build something<br /><span>impactful.</span></h2>
          <p>Exploring AI, ML, GenAI, and software engineering opportunities.</p>
          <div className="contact-actions">
            <Link to="/Archi-Jain-Resume.txt" reloadDocument download className="button-primary"><Download size={15} /> Download resume</Link>
            <span className="contact-link-unavailable"><ArrowUpRight size={15} /> LinkedIn link not provided</span>
            <span className="contact-link-unavailable"><Code2 size={15} /> GitHub link not provided</span>
            <span className="contact-link-unavailable"><Mail size={15} /> Contact details not provided</span>
          </div>
        </motion.div>
      </section>

      <footer className="site-footer page-width">
        <Link to="/" className="footer-brand">AJ<span>.</span></Link>
        <p>Designed with intention. Built to be useful.</p>
        <span>© {new Date().getFullYear()} ARCHI JAIN</span>
      </footer>
    </main>
  );
}
