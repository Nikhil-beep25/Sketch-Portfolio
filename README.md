<div align="center">

# 📐 Nikhil Bhadauriya — Blueprint Portfolio

An interactive, motion-driven personal portfolio designed with a technical drafting blueprint aesthetic, physical paper textures, and 60 FPS kinetic scroll animations.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/)
[![Lenis](https://img.shields.io/badge/Lenis-Smooth_Scroll-000000?style=for-the-badge)](https://lenis.darkroom.engineering/)
[![Cloudflare](https://img.shields.io/badge/Cloudflare-Workers-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)

[**Explore Live Website ↗**](https://nikhilbhadauriya-portfolio.vercel.app/) &nbsp;&bull;&nbsp; [**View Source on GitHub**](https://github.com/Nikhil-beep25/Sketch-Portfolio) &nbsp;&bull;&nbsp; [**Download Resume (PDF)**](https://nikhilbhadauriya-portfolio.vercel.app/cv/Nikhil_Bhadauriya_Resume.pdf)

</div>

---

## 👨‍💻 About The Developer

I am **Nikhil Bhadauriya**, a **Python Full Stack Developer** at **S O Infotech (P) Ltd** (Noida, Uttar Pradesh, India). I specialize in architecting scalable, end-to-end web applications combining robust Python backend systems (Django / Flask) with reactive, high-performance frontend interfaces (React / MERN stack).

- 🏢 **Current Role**: Python Full Stack Developer at S O Infotech (P) Ltd
- 📍 **Location**: Noida, Uttar Pradesh, India
- 🛠️ **Core Technologies**: Python, Django, Flask, React, Node.js, Express, MongoDB, PostgreSQL, REST APIs, GSAP
- 📧 **Email**: [nikhilbhadauriya2500@gmail.com](mailto:nikhilbhadauriya2500@gmail.com)
- 💼 **LinkedIn**: [nikhil-bhadauriya](https://linkedin.com/in/nikhil-bhadauriya-308414321)
- 🐙 **GitHub**: [@Nikhil-beep25](https://github.com/Nikhil-beep25)

---

## 🎨 Creative Concept & Design Identity

Unlike conventional developer portfolios built on repetitive corporate templates, this portfolio is built around a **tactile technical drafting & blueprint theme**:

- **Blueprint Grid Aesthetic**: Mathematical Cartesian grid canvas (`#0B2545`) mimicking engineering drafting vellum.
- **Physical Paper Mechanics**: Realistic ripped paper borders, textured masking, kraft paper memo cards, adhesive tape overlays, and rubber stamping badges.
- **Interactive Drafting Reveal**: Hovering over project blueprints triggers a schematic scanning transition from engineering wireframe to colored production UI.
- **Motion & Physics**: Inertial smooth scrolling powered by **Lenis** coupled with **GSAP ScrollTrigger** timeline scrubbing and playful sprite interactions.

---

## 🚀 Key Features & Highlights

| Feature | Description |
| :--- | :--- |
| **Blueprint Schematics** | Custom vector grid lines and drafting coordinates rendered procedurally across viewport sections. |
| **Lenis Smooth Scroll** | Unified, inertia-based kinetic scrolling engine calibrated at 60 FPS with GSAP timeline synchronization. |
| **Interactive Dossier** | Full-screen technical spec sheets for each featured project with interactive problem/solution cards and design palettes. |
| **Resume Modal Viewer** | In-browser PDF dossier viewer with direct download trigger and print-ready rendering. |
| **Core Web Vitals Optimized** | Sub-second Largest Contentful Paint (<0.8s) leveraging next-gen AVIF/WebP image compression and font preloading. |
| **Edge-Ready Deployment** | Universal app shell routing supporting Cloudflare Workers edge runtime and Vercel static hosting. |
| **Comprehensive SEO** | Full OpenGraph metadata, JSON-LD structured data (Person & WebSite schemas), and dynamic document titles. |

---

## 🛠️ Tech Stack & Architecture

### Frontend Architecture
- **UI Framework**: [React 19](https://react.dev/) — Modern functional components, hooks, and clean state primitives.
- **Routing**: [React Router v7](https://reactrouter.com/) — Single Page App routing with instant transitions and 404 fallbacks.
- **Animation & Motion**: [GSAP 3](https://greensock.com/) (ScrollTrigger) — High-performance scroll scrubbing and SVG interpolation.
- **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/) — Fluid kinetic scrolling without layout thrashing.
- **Styling**: Vanilla CSS3 — Custom design tokens, CSS variables, CSS grid layouts, and hardware-accelerated transforms.
- **Typography**: Custom fonts (`collage_font`, `sharpie_font`) preloaded with zero FOIT (Flash of Invisible Text).

### Edge & Build Tooling
- **Bundler**: [Vite 8](https://vitejs.dev/) — Lightning-fast HMR and optimized production treeshaking.
- **Compression**: `vite-plugin-compression2` — Automated pre-compressed Brotli & Gzip assets.
- **Edge Runtime**: [Cloudflare Workers](https://workers.cloudflare.com/) (`wrangler`) — Universal app shell worker with asset binding.

---

## 📂 Project Structure

```text
Sketch-Portfolio/
├── public/
│   ├── cv/                 # Resume PDF assets (Nikhil_Bhadauriya_Resume.pdf)
│   ├── fonts/              # Custom typography (collage_font, sharpie_font)
│   ├── icons/              # SVG & UI icons
│   ├── images/             # AVIF & WebP optimized images (about, projects, title)
│   ├── sounds/             # Tactile audio feedback (Paper, Door)
│   ├── _headers            # Cloudflare Pages / Edge security headers
│   ├── _redirects          # SPA fallback routing
│   ├── llms.txt            # LLM-accessible site index
│   ├── robots.txt          # Crawler indexing rules
│   └── sitemap.xml         # XML Sitemap
├── src/
│   ├── components/         # Reusable UI components (PaperContainer, ProjectCard, Door, Title...)
│   ├── constants/          # Application constants & enumerations
│   ├── svg/                # Interactive SVG doodles & technical markers
│   ├── views/
│   │   ├── About/          # Interactive office/desk schematic view
│   │   ├── Contact/        # Kraft-paper notes grid, email, and social connections
│   │   ├── Home/           # Portfolio landing orchestration
│   │   ├── NotFound/       # 404 Error dossier
│   │   ├── ProjectDetails/ # Technical specification deep-dive view
│   │   ├── Projects/       # Project blueprint showcase
│   │   └── data/           # Structured case studies (projects.data.js)
│   ├── App.jsx             # Route definitions & scroll wrapper
│   ├── index.css           # Global typography, tokens & coordinate grids
│   └── main.jsx            # Application entry point
├── worker.js               # Cloudflare Worker edge handler
├── wrangler.jsonc          # Cloudflare configuration
├── vite.config.js          # Vite build pipeline & Brotli plugins
└── package.json            # Scripts & dependencies
```

---

## 🌟 Featured Projects Showcased

1. **Vidya Sanchar** — *Student Management System*
   - Full-stack academic administration platform with role-based access control (Admin / Teacher / Student).
   - Real-time attendance tracking, grade recording, and automated reporting.
   - Built with MERN Stack + TypeScript.
   - [View Repository ↗](https://github.com/Nikhil-beep25/VidyaSanchar)

2. **Carverse** — *Car Rental Management System*
   - Comprehensive vehicle fleet management and customer reservation portal.
   - Real-time availability checking, booking checkout workflows, and administrative dashboards.
   - Built with React, Node.js, Express, and MongoDB.
   - [View Repository ↗](https://github.com/Nikhil-beep25/CarVerse)

3. **Interactive Blueprint Portfolio** — *This Website*
   - Technical drafting aesthetic with procedural SVG paper tear dividers, GSAP timeline scrubbing, and 99+ Lighthouse performance scores.
   - [Live Demo ↗](https://nikhilbhadauriya-portfolio.vercel.app/) &bull; [Source Code ↗](https://github.com/Nikhil-beep25/Sketch-Portfolio)

---

## 💻 Getting Started Locally

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nikhil-beep25/Sketch-Portfolio.git
   cd Sketch-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup (Optional):**
   ```bash
   cp .env.example .env
   # Add your Google Analytics 4 Measurement ID if desired:
   # VITE_GA4_ID=G-XXXXXXXXXX
   ```

4. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

5. **Build for production:**
   ```bash
   npm run build
   ```
   Production bundle with pre-compressed Brotli assets will be output to `dist/`.

---

## ⚡ Performance & Core Web Vitals

- **Lighthouse Performance**: 99 / 100
- **Largest Contentful Paint (LCP)**: < 0.8s
- **Animation Frame Rate**: Constant 60 FPS via Lenis + GSAP RAF
- **Asset Compression**: Brotli pre-compression applied to all production chunks and JSON descriptors

---

## 📬 Contact & Connect

Feel free to connect with me for full-stack engineering roles, technical collaborations, or consulting inquiries:

- **Portfolio**: [nikhilbhadauriya-portfolio.vercel.app](https://nikhilbhadauriya-portfolio.vercel.app/)
- **Email**: [nikhilbhadauriya2500@gmail.com](mailto:nikhilbhadauriya2500@gmail.com)
- **LinkedIn**: [linkedin.com/in/nikhil-bhadauriya-308414321](https://linkedin.com/in/nikhil-bhadauriya-308414321)
- **GitHub**: [@Nikhil-beep25](https://github.com/Nikhil-beep25)

---

<div align="center">
  <sub>Designed & Developed by <strong>Nikhil Bhadauriya</strong> &bull; Built with React 19 & GSAP</sub>
</div>
