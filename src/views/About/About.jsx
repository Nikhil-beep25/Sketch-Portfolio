import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AnimatedElement from "../../components/AnimatedElement/AnimatedElement.jsx";
import Door from "../../components/Door/Door.jsx";
import AnimatedPaper from "../../components/AnimatedPaper/AnimatedPaper.jsx";
import DoodleArrow from "../../svg/DoodleArrow/DoodleArrow.jsx";
import DoodlePlane from "../../svg/DoodlePlane/DoodlePlane.jsx";
import DoodleHeadset from "../../svg/DoodleHeadset/DoodleHeadset.jsx";

import { SIDE } from "../../constants/constants";

import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const LAPTOP_DECORATIONS = [
  { src: "images/about/html5.webp", top: "2%", left: "12%", rotate: -15 },
  { src: "images/about/css3.webp", top: "4%", left: "40%", rotate: 12 },
  { src: "images/about/javascript.webp", top: "3%", left: "68%", rotate: -10 },
  { src: "images/about/typescript.webp", top: "24%", left: "8%", rotate: 18 },
  { src: "images/about/react.webp", top: "22%", left: "36%", rotate: -14 },
  { src: "images/about/nextjs.webp", top: "21%", left: "74%", rotate: 16 },
  { src: "images/about/tailwindcss.webp", top: "44%", left: "10%", rotate: -12 },
  { src: "images/about/nodejs.webp", top: "42%", left: "43%", rotate: 10 },
  { src: "images/about/java.webp", top: "43%", left: "78%", rotate: -18 },
  { src: "images/about/postgresql.webp", top: "64%", left: "14%", rotate: 15 },
  { src: "images/about/supabase.webp", top: "65%", left: "46%", rotate: -8 },
  { src: "images/about/vercel.webp", top: "64%", left: "80%", rotate: 20 },
  { src: "images/about/git.webp", top: "84%", left: "18%", rotate: -16 },
  { src: "images/about/github.webp", top: "85%", left: "48%", rotate: 14 },
  { src: "images/about/vscode.webp", top: "84%", left: "76%", rotate: -10 },
];

const PAPER_CONTENT = {
  laptop: {
    title: "My Tech Stack",
    content:
      "A comprehensive overview of my tech stack, frameworks, tools, and full-stack development capabilities across Python and MERN ecosystems.",
    categories: [
      {
        name: "Frontend",
        skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Redux", "Responsive UI"],
      },
      {
        name: "Backend",
        skills: ["Python", "Django", "Flask", "Node.js", "Express.js", "RESTful APIs"],
      },
      {
        name: "Databases",
        skills: ["MongoDB", "MySQL", "PostgreSQL", "Query Optimization"],
      },
      {
        name: "Tools & Practices",
        skills: ["Git", "GitHub", "VS Code", "Postman", "Linux", "Clean Code"],
      },
      {
        name: "Architecture & Core",
        skills: ["Full Stack Architecture", "State Management", "MVC", "Authentication", "Performance Optimization"],
      },
    ],
  },
  chair: {
    title: "Development & Product Thinking",
    content:
      "I approach software development with a strong focus on writing clean, efficient, and maintainable code. By combining Python backend architectures with dynamic React interfaces, I craft scalable applications optimized for performance and reliability.",
  },
  experience: {
    title: "Professional Experience",
    content:
      "Currently working as a Python Full Stack Developer at S O Infotech (P) Ltd in Noida, Uttar Pradesh, India.",
    experience: {
      role: "Python Full Stack Developer — S O Infotech (P) Ltd",
      achievement: [
        "Develop and maintain full-stack web applications using Python backend frameworks and modern React frontend architectures.",
        "Design scalable application architectures, implement RESTful APIs, and create responsive user interfaces.",
        "Collaborate across the complete software development lifecycle from requirements and design to testing and deployment.",
      ],
    },
  },
  solutions: {
    title: "Featured Projects & Solutions",
    content:
      "I build full-stack web applications solving real business and management needs, emphasizing role-based security, modular architectures, and clean UX.",
    experience: {
      role: "Full Stack Developer",
      achievement: [
        "Developed Vidya Sanchar (Student Management System) using MERN stack with TypeScript, featuring role-based access control, real-time attendance analytics, and student lifecycle tracking.",
        "Built Carverse (Car Rental Management System) featuring real-time vehicle booking, reservation workflows, and administrative dashboards.",
        "Follow clean code standards and scalable design patterns across every project.",
      ],
    },
  },
  globe: {
    title: "Continuous Learning & Exploration",
    content:
      "I continually learn and adapt to modern technologies across the Python and JavaScript ecosystems, staying current with modern engineering practices.",
  },
  gym: {
    title: "Consistency & Growth",
    content:
      "My goal is to continually sharpen my engineering fundamentals, tackle complex technical challenges, and build reliable digital solutions.",
  },
};

const getPaperContent = (value) => {
  return (
    <div className="about__paper-content">
      <h3 className="about__paper-title">{value.title}</h3>
      <p className="about__paper-text">{value.content}</p>

      {value.categories && (
        <div className="paper-modal__tech-categories">
          {value.categories.map((cat) => (
            <div key={cat.name} className="paper-modal__category-group">
              <h4 className="paper-modal__category-name">{cat.name}</h4>
              <div className="paper-modal__skills-list">
                {cat.skills.map((skill) => (
                  <span key={skill} className="paper-modal__skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {value.experience && (
        <div className="paper-modal__experience-section">
          <h4 className="paper-modal__experience-title">Achievements:</h4>

          <div className="paper-modal__work-item">
            <span className="paper-modal__role-name">
              {value.experience.role}
            </span>
            {value.experience.achievement.map((achievement) => (
              <p key={achievement} className="paper-modal__achievement-text">
                <span>•</span> {achievement}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function About() {
  const [isPaperOpen, setIsPaperOpen] = useState(false);
  const [paperContent, setPaperContent] = useState(null);

  const contentRef = useRef(null);

  const laptopValue = "laptop";
  const chairValue = "chair";
  const globeValue = "globe";
  const gymValue = "gym";
  const solutionsValue = "solutions";
  const experienceValue = "experience";

  const handlePaperOpen = (e) => {
    e.preventDefault();
    const value = e.target.dataset.value;
    if (value) {
      setPaperContent(getPaperContent(PAPER_CONTENT[value]));
    }
    setIsPaperOpen(true);
  };

  const handlePaperClose = () => {
    setIsPaperOpen(false);
  };

  useEffect(() => {
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      const sections = contentRef.current.querySelectorAll(".about__section");

      sections.forEach((section) => {
        const elements = section.querySelectorAll(".animated-element");
        if (elements.length === 0) return;

        const tl = gsap.timeline({
          repeat: -1,
          repeatDelay: 1.5,
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play pause resume pause",
          },
        });

        tl.to(elements, {
          scale: 1.14,
          rotation: () => (Math.random() - 0.5) * 14,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.1,
        }).to(elements, {
          scale: 1,
          rotation: 0,
          duration: 0.25,
          ease: "back.out(1.7)",
          stagger: 0.08,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="about" ref={contentRef}>
      <AnimatedPaper isOpen={isPaperOpen} onClose={handlePaperClose}>
        {paperContent}
      </AnimatedPaper>
      <Door
        label="About Me"
        openImage="images/door_open.avif"
        closedImage="images/door_close.avif"
      />
      <h2 className="about__title" aria-label="About Nikhil Bhadauriya">
        About Nikhil
      </h2>

      <div className="about__sections">
        <section
          className="about__section about__section--laptop"
          id="main-content"
        >
          <div className="about__main about__main--left">
            <AnimatedElement
              imageSrc="images/about/laptop.avif"
              alt="Laptop on the desk"
              side={SIDE.LEFT}
              onClick={handlePaperOpen}
              value={laptopValue}
            />
            <img
              className="about__secondary-image"
              src="images/about/desk.avif"
              alt="Laptop on the desk"
              loading="lazy"
              draggable={false}
            />
          </div>

          <div className="about__doodles" aria-hidden="true">
            <DoodleArrow
              className="about__doodle about__doodle--arrow"
              color="#1e1e1e"
            />
            <span
              className="about__doodle about__doodle--welcome"
              aria-hidden="true"
            >
              Welcome!!!
            </span>
            <span
              className="about__doodle about__doodle--floor-scratch"
              aria-hidden="true"
            >
              My Tech Stack
            </span>
          </div>
          <div className="about__scatter" aria-hidden="true">
            {LAPTOP_DECORATIONS.map((deco) => (
              <img
                key={deco.src}
                src={deco.src}
                alt="Tech Stack Decoration"
                className="about__scatter-img"
                style={{
                  top: deco.top,
                  left: deco.left,
                  transform: `rotate(${deco.rotate}deg)`,
                }}
                loading="lazy"
                draggable={false}
              />
            ))}
          </div>
        </section>

        <section className="about__section about__section--chair">
          <div className="about__main about__main--right">
            <AnimatedElement
              imageSrc="images/about/chair.avif"
              alt="Chair in the office"
              side={SIDE.RIGHT}
              onClick={handlePaperOpen}
              value={chairValue}
            />
            <img
              className="about__secondary-image"
              src="images/about/rug.avif"
              alt="Chair in the office"
              loading="lazy"
              draggable={false}
            />
            <p className="about__job--title" aria-hidden="true">
              Work Experience
            </p>
            <div className="about__job">
              <AnimatedElement
                imageSrc="images/about/experience_logo.avif"
                alt="Professional Experience"
                side={SIDE.LEFT}
                onClick={handlePaperOpen}
                value={experienceValue}
              />
              <AnimatedElement
                imageSrc="images/about/solutions_logo.avif"
                alt="Projects and Solutions"
                side={SIDE.LEFT}
                onClick={handlePaperOpen}
                value={solutionsValue}
              />
            </div>
          </div>
          <div className="about__window-stack" aria-hidden="true">
            <img
              className="about__window-img"
              src="images/about/window.avif"
              alt="View from the window draw"
              loading="lazy"
              draggable={false}
            />
          </div>
        </section>

        <section className="about__section about__section--globe">
          <div className="about__main about__main--left">
            <AnimatedElement
              imageSrc="images/about/travel.avif"
              alt="Traveling earth globe"
              side={SIDE.LEFT}
              onClick={handlePaperOpen}
              value={globeValue}
            />
          </div>
          <DoodlePlane
            className="about__plane-img"
            color="#1e1e1e"
          />
        </section>

        <section className="about__section about__section--gym">
          <div className="about__main about__main--right">
            <AnimatedElement
              imageSrc="images/about/gym.avif"
              alt="Gym bell weights"
              side={SIDE.RIGHT}
              onClick={handlePaperOpen}
              value={gymValue}
            />
          </div>
          <DoodleHeadset
            className="about__headsets-img"
            color="#1e1e1e"
          />
          <DoodleArrow
            className="about__doodle-arrow-img"
            color="#1e1e1e"
            width="130px"
          />
        </section>
      </div>

      <Door
        label="Projects"
        openImage="images/door_open.avif"
        closedImage="images/door_close.avif"
      />
    </section>
  );
}
