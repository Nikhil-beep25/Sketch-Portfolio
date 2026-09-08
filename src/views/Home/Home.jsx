import SmoothScroll from "../../components/SmoothScroll/SmoothScroll.jsx";
import Title from "../../components/Title/Title.jsx";
import Character from "../../components/Character/Character.jsx";
import ScrollTip from "../../components/ScrollTip/ScrollTip.jsx";
import About from "../About/About.jsx";
import Projects from "../Projects/Projects.jsx";
import Contact from "../Contact/Contact.jsx";
import PaperContainer from "../../components/PaperContainer/PaperContainer.jsx";
import SEOHead from "../../components/SEOHead/SEOHead.jsx";
import JsonLd from "../../components/JsonLd/JsonLd.jsx";
import PlanePaper from "../../components/PlanePaper/PlanePaper.jsx";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nikhil Bhadauriya",
  jobTitle: "Python Full Stack Developer",
  url: "https://nikhilbhadauriya-portfolio.vercel.app/",
  email: "mailto:nikhilbhadauriya2500@gmail.com",
  sameAs: [
    "https://github.com/Nikhil-beep25",
    "https://linkedin.com/in/nikhil-bhadauriya",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "personal",
    name: "Email",
    email: "nikhilbhadauriya2500@gmail.com",
    availableLanguage: ["English", "Hindi"],
  },
  knowsAbout: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Python",
    "Django",
    "Flask",
    "JavaScript",
    "Full Stack Development",
    "RESTful APIs",
    "PostgreSQL",
    "MySQL",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nikhil Bhadauriya — Portfolio",
  url: "https://nikhilbhadauriya-portfolio.vercel.app/",
  description:
    "Personal portfolio of Nikhil Bhadauriya, Python Full Stack Developer & MERN Specialist.",
  author: {
    "@type": "Person",
    name: "Nikhil Bhadauriya",
  },
};

export default function Home() {
  return (
    <>
      <SEOHead
        description="Nikhil Bhadauriya is a Python Full Stack Developer specializing in MERN stack and Python development, crafting scalable and efficient web applications."
        canonical="/"
      />
      <JsonLd data={personSchema} />
      <JsonLd data={websiteSchema} />
      <SmoothScroll />
      <PlanePaper />
      <main id="main-content">
        <Title />
        <ScrollTip />
        <Character />
        <PaperContainer className="section-separator" />
        <About />
        <PaperContainer className="section-separator" />
        <Projects />
        <PaperContainer className="section-separator" />
        <Contact />
      </main>
    </>
  );
}

