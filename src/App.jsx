import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [open, setOpen] = useState(false);

  const LINKS = {
    github: "https://github.com/symatevo",
    linkedin: "https://www.linkedin.com/in/symatevo/",
    cv: "/Syuzanna_Matevosyan_CV.pdf",
    email: "syuzi.matevosyan1802@gmail.com",
  };

  // asset paths in /public/images
  const IMAGES = {
    arSketch: "/images/ar-virtual-arm.png",
    opensimGait: "/images/opensim-gait-sketch.png",
    unetSketch: "/images/unet-diagram-sketch.png",
    ninaproSketch: "/images/ninapro-flow-sketch.png",
    paper: "/images/paper-texture.png",
    heroAccent: "/images/ink-swoosh-1.png",
    heroPortrait: "/images/hero-portrait.png",
    aboutDesk: "/images/about-desk.png",
    aboutScribble: "/images/about-emg-scribble.png",
  };

  const nav = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#publications", label: "Publications" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  // Reusable sketch component that hides itself if image is missing
  const Sketch = ({ src, alt = "", className = "", initial, animate, transition }) => {
    const [ok, setOk] = useState(true);
    if (!ok || !src) return null;
    return (
      <motion.img
        src={src}
        alt={alt}
        onError={() => setOk(false)}
        className={className}
        initial={initial}
        animate={animate}
        transition={transition}
      />
    );
  };

  return (
    <div className="min-h-screen text-gray-900 bg-white relative overflow-hidden scroll-smooth">
      {/* Paper texture overlay (very subtle) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
        style={{ backgroundImage: `url(${IMAGES.paper})`, backgroundSize: "600px 600px", backgroundRepeat: "repeat" }}
      />
      {/* Subtle page background accents */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12, scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 20 }}
        className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-100 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12, scale: [1.05, 1, 1.05] }}
        transition={{ repeat: Infinity, duration: 24 }}
        className="pointer-events-none absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-sky-100 blur-3xl"
      />

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-20">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-gray-900">Syuzanna Matevosyan</span>
            <span className="text-sm text-gray-500">Biomedical Engineer · AI & Rehab Tech</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-gray-600 hover:text-gray-900">
                {n.label}
              </a>
            ))}
            <a href={LINKS.cv} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              CV ↗
            </a>
            <a
              href="#contact"
              className="ml-4 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm"
            >
              Contact
            </a>
          </nav>
          <button
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-gray-300"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-gray-200 bg-white px-4 py-3 grid gap-2 text-sm">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-gray-700" onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
            <a href={LINKS.cv} target="_blank" rel="noopener noreferrer" className="text-gray-700">
              CV ↗
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-200">
        {/* Hero accent lines & portrait (optional) */}
        <Sketch
          src={IMAGES.heroAccent}
          alt="abstract ink accent"
          className="absolute -top-6 right-6 w-48 opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 14, repeat: Infinity }}
        />
        <Sketch
          src={IMAGES.heroPortrait}
          alt="Syuzanna portrait"
          className="hidden md:block absolute bottom-0 right-8 w-60 translate-y-8 opacity-90 drop-shadow-xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Biomedical Engineer</h1>
            <p className="mt-4 text-lg text-gray-600">
              Focused on AI‑driven biosignals, medical imaging, prosthetics, and rehabilitation. Erasmus Mundus MSc Biomedical Engineering scholar with hands‑on experience in EMG control, AR/VR therapy systems, and OpenSim gait modelling.
            </p>
            <div className="mt-6 flex gap-4">
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">GitHub ↗</a>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">LinkedIn ↗</a>
              <a href={LINKS.cv} target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">Download CV ↗</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative overflow-hidden border-b border-gray-200 scroll-mt-24"> 
        {/* artistic accents for About */}
        <Sketch
          src={IMAGES.aboutScribble}
          alt="EMG electrodes doodle"
          className="absolute -top-3 left-3 w-24 opacity-30"
          animate={{ opacity: [0.2, 0.35, 0.2], y: [0, -2, 0] }}
          transition={{ duration: 16, repeat: Infinity }}
        />
        <Sketch
          src={IMAGES.aboutDesk}
          alt="Desk with EMG setup"
          className="hidden md:block absolute -bottom-6 right-6 w-72 opacity-15 mix-blend-multiply"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="max-w-6xl mx-auto px-4 py-16">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">About</motion.h2>
          <div className="mt-6 grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7">
              <p className="text-gray-700">I blend machine learning with clinical needs to build practical tools for prosthetics and neuro‑rehabilitation. I thrive at the interface of engineering and healthcare: rapid prototyping, clear evaluation, and clinician collaboration.</p>
              <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-700">
                <li>Real‑time sEMG acquisition & control (Biometrics Ltd DataLITE DLL → Python → UDP → Unity).</li>
                <li>AR‑based myoelectric training game; explored up to 17 movement classes with advanced control strategies.</li>
                <li>Gait modelling in OpenSim & Moco for hemiparesis; investigating strengthening vs. retraining strategies.</li>
                <li>Medical imaging & tissue characterization: 44‑feature descriptors (stat, GLCM, LBP) and U‑Net segmentation.</li>
              </ul>
              <div className="mt-6 flex gap-3 flex-wrap">
                <a href="#projects" className="px-4 py-2 rounded-md border text-gray-900 hover:bg-gray-50">View projects</a>
                <a href={`mailto:${LINKS.email}`} className="px-4 py-2 rounded-md border text-gray-900 hover:bg-gray-50">Email me</a>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-xl border p-5">
                <h3 className="text-sm font-semibold text-gray-900">Quick facts</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li>📍 Based in Greece · from Armenia</li>
                  <li>🎓 Erasmus Mundus MSc Biomedical Engineering (Serbia · Greece · Romania)</li>
                  <li>🧠 Focus: EMG, rehab tech, imaging, HTA</li>
                  <li>💬 English, Armenian, Russian (learning Greek & Romanian)</li>
                </ul>
                <div className="mt-4 flex gap-2 flex-wrap">
                  <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-md border text-xs hover:bg-gray-50">LinkedIn</a>
                  <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-md border text-xs hover:bg-gray-50">GitHub</a>
                  <a href={LINKS.cv} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-md border text-xs hover:bg-gray-50">CV</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-b border-gray-200 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Projects</motion.h2>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {/* Project 1 with artistic floating sketch */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border p-6 hover:shadow-sm transition-shadow relative overflow-hidden group"
            >
              {/* floating blob */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-16 w-96 h-96 md:w-[28rem] md:h-[28rem] rounded-full bg-indigo-100/60 blur-2xl"
                initial={{ opacity: 0.35 }}
                animate={{ opacity: [0.25, 0.4, 0.25], scale: [1, 1.05, 1] }}
                transition={{ duration: 14, repeat: Infinity }}
              />
              {/* drifting sketch */}
              <Sketch
                src={IMAGES.arSketch}
                alt="AR display & myoelectric control sketch"
                className="pointer-events-none select-none absolute -top-10 -right-12 w-[17.5rem] md:w-[23rem] lg:w-[28rem] opacity-30 mix-blend-multiply"
                animate={{ y: [0, -6, 0], rotate: [0, -2, 2, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="flex items-start justify-between gap-4 relative z-10">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">AR‑based Myoelectric Prosthesis Training</h3>
                  <p className="text-sm text-gray-500 mt-1">Unity · Python · Biometrics DataLITE · UDP</p>
                </div>
                <div className="flex gap-2">
                  <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-md border text-sm hover:bg-gray-50">Code ↗</a>
                </div>
              </div>
              <div className="mt-3 relative z-10">
                <p className="prose prose-sm max-w-none text-gray-700">End‑to‑end pipeline to acquire sEMG via vendor DLL, process in Python (windowing, features, NN classifier), and stream to Unity for interactive AR tasks. Explored 17 movement classes and advanced control strategies for robust control.</p>
                <div className="mt-3 flex gap-2 flex-wrap text-xs text-gray-600">
                  <span className="px-2 py-1 rounded-full border bg-white/70">Real‑time EMG</span>
                  <span className="px-2 py-1 rounded-full border bg-white/70">AR/VR Rehab</span>
                  <span className="px-2 py-1 rounded-full border bg-white/70">Gesture Classification</span>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-xl border p-6 hover:shadow-sm transition-shadow relative overflow-hidden">
              {/* floating gait sketch */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-12 w-72 h-72 rounded-full bg-sky-100/60 blur-2xl"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.22, 0.38, 0.22], scale: [1, 1.06, 1] }}
                transition={{ duration: 16, repeat: Infinity }}
              />
              <Sketch
                src={IMAGES.opensimGait}
                alt="Gait silhouette sketch"
                className="pointer-events-none absolute -top-8 -right-6 w-56 opacity-25 mix-blend-multiply"
                animate={{ y: [0, -6, 0], rotate: [0, -2, 2, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="flex items-start justify-between gap-4 relative z-10">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Stroke Rehabilitation Modelling</h3>
                  <p className="text-sm text-gray-500 mt-1">OpenSim & Moco</p>
                </div>
                <div className="flex gap-2">
                  <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-md border text-sm hover:bg-gray-50">Methods ↗</a>
                </div>
              </div>
              <p className="prose prose-sm max-w-none text-gray-700 mt-3">Modelled hemiparesis‑related gait abnormalities and tested interventions (muscle strengthening, gait retraining) using trajectory optimization to compare outcomes.</p>
              <div className="mt-3 flex gap-2 flex-wrap text-xs text-gray-600 relative z-10">
                <span className="px-2 py-1 rounded-full border bg-white/70">Gait</span>
                <span className="px-2 py-1 rounded-full border bg-white/70">Optimization</span>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-xl border p-6 hover:shadow-sm transition-shadow relative overflow-hidden">
              <Sketch
                src={IMAGES.unetSketch}
                alt="U‑Net block sketch"
                className="pointer-events-none absolute -top-10 -right-6 w-56 opacity-25 mix-blend-multiply"
                animate={{ y: [0, -4, 0], rotate: [0, -1, 1, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="flex items-start justify-between gap-4 relative z-10">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Medical Image Segmentation & Clustering</h3>
                  <p className="text-sm text-gray-500 mt-1">U‑Net · GLCM/LBP · Tissue characterization</p>
                </div>
                <div className="flex gap-2">
                  <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-md border text-sm hover:bg-gray-50">Code ↗</a>
                </div>
              </div>
              <p className="prose prose-sm max-w-none text-gray-700 mt-3">Built a 44‑feature descriptor over 11×11 neighborhoods (mean, entropy; GLCM: contrast, homogeneity, energy; LBP) for foreground/background clustering; implemented U‑Net variants with thorough metric evaluation.</p>
              <div className="mt-3 flex gap-2 flex-wrap text-xs text-gray-600 relative z-10">
                <span className="px-2 py-1 rounded-full border bg-white/70">Imaging</span>
                <span className="px-2 py-1 rounded-full border bg-white/70">ML</span>
              </div>
            </motion.div>

            {/* Project 4 */}
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-xl border p-6 hover:shadow-sm transition-shadow relative overflow-hidden">
              <Sketch
                src={IMAGES.ninaproSketch}
                alt="Ninapro flow sketch"
                className="pointer-events-none absolute -top-6 -right-5 w-56 opacity-25 mix-blend-multiply"
                animate={{ y: [0, -4, 0], rotate: [0, 1, -1, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="flex items-start justify-between gap-4 relative z-10">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Ninapro DB7 — sEMG & IMU Analysis</h3>
                  <p className="text-sm text-gray-500 mt-1">Dimensionality reduction · Classification</p>
                </div>
                <div className="flex gap-2">
                  <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-md border text-sm hover:bg-gray-50">Notebook ↗</a>
                </div>
              </div>
              <p className="prose prose-sm max-w-none text-gray-700 mt-3">Extracted features and applied PCA/tensor methods to decode task variables and characterize neuromuscular responses for movement classification.</p>
              <div className="mt-3 flex gap-2 flex-wrap text-xs text-gray-600 relative z-10">
                <span className="px-2 py-1 rounded-full border bg-white/70">PCA</span>
                <span className="px-2 py-1 rounded-full border bg-white/70">Tensor Decomposition</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="border-b border-gray-200 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Publications & Presentations</motion.h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border p-6">
              <h3 className="font-semibold">Electromyography Signal Acquisition Development and Analysis</h3>
              <p className="text-sm text-gray-500 mt-1">Bachelor Thesis · YSU · 2024</p>
              <p className="mt-2 text-gray-700 text-sm">End‑to‑end EMG acquisition and analysis pipeline with hardware integration and signal processing for classification/control.</p>
            </div>
            <div className="rounded-xl border p-6">
              <h3 className="font-semibold">TCL Programming Language in Bioinformatics</h3>
              <p className="text-sm text-gray-500 mt-1">In the World of Science · Journal 2 · 2022</p>
              <p className="mt-2 text-gray-700 text-sm">Exploratory paper on TCL for bioinformatics workflows and scripting in computational biology.</p>
            </div>
            <div className="rounded-xl border p-6">
              <h3 className="font-semibold">AR‑Based Prosthesis Training — Oral Presentation</h3>
              <p className="text-sm text-gray-500 mt-1">2025</p>
              <p className="mt-2 text-gray-700 text-sm">Unity–Python–Biometrics pipeline and preliminary tasks for myoelectric training; movement‑class scalability.</p>
            </div>
            <div className="rounded-xl border p-6">
              <h3 className="font-semibold">Posters</h3>
              <p className="text-sm text-gray-500 mt-1">2024–2025</p>
              <ul className="list-disc ml-5 text-sm text-gray-700 mt-2">
                <li>EMG‑based Control Systems</li>
                <li>Biomedical Image Processing & Segmentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-b border-gray-200 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Skills</motion.h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border p-6">
              <h3 className="text-sm font-semibold text-gray-900">Programming</h3>
              <ul className="list-disc ml-5 mt-3 text-sm text-gray-700 space-y-1">
                <li>Python, C/C++, MATLAB, TCL</li>
                <li>TensorFlow/Keras, scikit‑learn</li>
              </ul>
            </div>
            <div className="rounded-xl border p-6">
              <h3 className="text-sm font-semibold text-gray-900">Biomedical & Systems</h3>
              <ul className="list-disc ml-5 mt-3 text-sm text-gray-700 space-y-1">
                <li>sEMG/EEG/IMU acquisition & processing</li>
                <li>Signal & Image Processing, U‑Net</li>
                <li>OpenSim & Moco (gait), Unity AR/VR</li>
                <li>Healthcare Technology Assessment (HTA)</li>
              </ul>
            </div>
            <div className="rounded-xl border p-6">
              <h3 className="text-sm font-semibold text-gray-900">Highlights</h3>
              <ul className="list-disc ml-5 mt-3 text-sm text-gray-700 space-y-1">
                <li>ECTS A in core modules</li>
                <li>Interdisciplinary collaboration with clinicians</li>
                <li>Rapid prototyping & evaluation mindset</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="border-b border-gray-200 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Education</motion.h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border p-6">
              <h3 className="font-semibold">Erasmus Mundus MSc in Biomedical Engineering</h3>
              <p className="text-sm text-gray-500 mt-1">2024 – Present · Serbia · Greece · Romania</p>
              <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1 mt-2">
                <li>Sem 1: University of Kragujevac — A grades in core BME courses</li>
                <li>Sem 2: University of Patras — Medical Imaging, Rehabilitation Eng., HTA (all A)</li>
                <li>Sem 3: UMF "Grigore T. Popa" — thesis & industry links</li>
              </ul>
            </div>
            <div className="rounded-xl border p-6">
              <h3 className="font-semibold">BSc Biophysics & Bioinformatics</h3>
              <p className="text-sm text-gray-500 mt-1">Yerevan State University · 2024</p>
              <p className="text-sm text-gray-700 mt-2">Thesis: Electromyography Signal Acquisition Development and Analysis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Contact</motion.h2>
          <div className="mt-6 grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-gray-700">Open to PhD collaborations, internships, and research projects in prosthetics, rehabilitation, and intelligent biosignal processing.</p>
              <div className="mt-6 flex gap-3 flex-wrap text-sm">
                <a href={`mailto:${LINKS.email}`} className="px-4 py-2 rounded-md border text-gray-900 hover:bg-gray-50">Email</a>
                <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md border text-gray-900 hover:bg-gray-50">LinkedIn ↗</a>
                <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md border text-gray-900 hover:bg-gray-50">GitHub ↗</a>
                <a href={LINKS.cv} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md border text-gray-900 hover:bg-gray-50">Download CV ↗</a>
              </div>
            </div>
            <form className="rounded-xl border p-6 grid gap-4">
              <div>
                <label className="text-sm text-gray-600">Name</label>
                <input type="text" className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input type="email" className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Message</label>
                <textarea className="mt-1 w-full border rounded-md px-3 py-2 h-28 focus:outline-none focus:ring-1 focus:ring-gray-300" placeholder="Short message…" />
              </div>
              <button type="button" className="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-black">Send (opens email)</button>
              <p className="text-xs text-gray-500">This demo form does not submit to a server. Use the Email/LinkedIn buttons to reach me.</p>
            </form>
          </div>
          <p className="mt-10 text-xs text-gray-500">© {new Date().getFullYear()} Syuzanna Matevosyan</p>
        </div>
      </section>
    </div>
  );
}
