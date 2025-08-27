import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [open, setOpen] = useState(false);

  const LINKS = {
    github: "https://github.com/symatevo",
    linkedin: "https://www.linkedin.com/in/symatevo/",
    cv: "/Syuzanna_Matevosyan_CV.pdf",
  };

  const nav = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#publications", label: "Publications" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen text-gray-900 bg-white relative overflow-hidden">
      {/* Subtle animated background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15, scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 20 }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-100 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15, scale: [1.1, 1, 1.1] }}
        transition={{ repeat: Infinity, duration: 25 }}
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-sky-100 blur-3xl"
      />

      {/* Header - Minimal Academic Style */}
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

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Biomedical Engineer
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Focused on AI-driven biosignals, medical imaging, prosthetics, and rehabilitation. Erasmus Mundus MSc Biomedical Engineering scholar with hands-on experience in EMG control, AR/VR therapy systems, and OpenSim gait modelling.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                GitHub ↗
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                LinkedIn ↗
              </a>
              <a
                href={LINKS.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Download CV ↗
              </a>
            </div>
          </motion.div>
        </div>
      </section>
                {/* About */}
<section id="about" className="border-b border-gray-200">
  <div className="max-w-6xl mx-auto px-4 py-16">
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">About</h2>
    <div className="mt-6 grid md:grid-cols-12 gap-8 items-start">
      <div className="md:col-span-7">
        <p className="text-gray-700">
          I blend machine learning with clinical needs to build practical tools for prosthetics and neuro-rehabilitation.
        </p>
        <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-700">
          <li>Real-time sEMG acquisition & control (Biometrics DLL → Python → UDP → Unity).</li>
          <li>AR-based myoelectric training (up to 17 movement classes).</li>
          <li>OpenSim & Moco gait modelling for hemiparesis.</li>
          <li>Imaging: 44-feature descriptors + U-Net segmentation.</li>
        </ul>
        <div className="mt-6 flex gap-3 flex-wrap">
          <a href="#projects" className="px-4 py-2 rounded-md border text-gray-900 hover:bg-gray-50">View projects</a>
          <a href="mailto:syuzi.matevosyan1802@gmail.com" className="px-4 py-2 rounded-md border text-gray-900 hover:bg-gray-50">Email me</a>
        </div>
      </div>
      <div className="md:col-span-5">
        <div className="rounded-xl border p-5">
          <h3 className="text-sm font-semibold text-gray-900">Quick facts</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>📍 Based in Greece · from Armenia</li>
            <li>🎓 Erasmus Mundus MSc Biomedical Engineering</li>
            <li>🧠 Focus: EMG, rehab tech, imaging, HTA</li>
            <li>💬 English, Armenian, Russian</li>
          </ul>
          <div className="mt-4 flex gap-2 flex-wrap">
            <a href="https://www.linkedin.com/in/symatevo/" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-md border text-xs hover:bg-gray-50">LinkedIn</a>
            <a href="https://github.com/symatevo" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-md border text-xs hover:bg-gray-50">GitHub</a>
            <a href="/Syuzanna_Matevosyan_CV.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-md border text-xs hover:bg-gray-50">CV</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
