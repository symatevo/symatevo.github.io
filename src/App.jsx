import { useEffect, useState, useRef } from "react";

export default function App() {
  useEffect(() => {
    document.title = "Syuzanna Matevosyan — Portfolio";
  }, []);

  // Subtitle typing (every visit)
  const subtitleFull = "Erasmus Mundus Master in Biomedical Engineering";
  const [typedSubtitle, setTypedSubtitle] = useState("");
  const [isSubtitleTyping, setIsSubtitleTyping] = useState(false);
  useEffect(() => {
    setIsSubtitleTyping(true);
    setTypedSubtitle("");
    const speed = 45;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTypedSubtitle(subtitleFull.slice(0, i));
      if (i >= subtitleFull.length) {
        clearInterval(id);
        setIsSubtitleTyping(false);
      }
    }, speed);
    return () => clearInterval(id);
  }, []);

  // Active tab for dot highlight
  const [active, setActive] = useState("software");

  // Project filter
  const [filter, setFilter] = useState("all");
  const visible = (key) => filter === "all" || key === filter;

  // Refs for scroll tracking
  const softwareRef = useRef(null);
  const expertiseRef = useRef(null);
  const languagesRef = useRef(null);

  useEffect(() => {
    const sections = [
      { id: "software", el: softwareRef.current },
      { id: "expertise", el: expertiseRef.current },
      { id: "languages", el: languagesRef.current },
    ].filter((s) => s.el);

    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = visibleEntry?.target?.id;
        if (id) setActive(id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0.1, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => obs.observe(s.el));
    return () => obs.disconnect();
  }, []);

  const css = `
    :root{
      --bg:#ffffff; --text:#1f2328; --muted:#6b7280; --line:#e5e7eb; --card:#ffffff;
      --mast:#fbfbfc; --accent:#2563eb; --accent-ink:#1e40af;
    }
    *{box-sizing:border-box}
    html,body{margin:0;background:var(--bg);color:var(--text);
      -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale;
      font: 400 16px/1.7 Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;}
    html{scroll-behavior:smooth}

    /* Masthead with very subtle mesh/pastel glow */
    .masthead{position:relative;height:200px;background:var(--mast);border-bottom:1px solid var(--line);overflow:hidden}
    .masthead:before{content:"";position:absolute;inset:-40% -20% -40% -20%;
      background:
        radial-gradient(600px 400px at 85% -10%, rgba(191,219,254,.55) 0%, rgba(191,219,254,0) 60%),
        radial-gradient(600px 400px at -10% 120%, rgba(167,243,208,.55) 0%, rgba(167,243,208,0) 60%);
      filter: blur(20px); opacity:.45; pointer-events:none;
    }
    .hero{height:100%;display:flex;align-items:flex-end;padding-bottom:0}

    .wrap{max-width:1100px;margin:0 auto;padding:24px 20px 72px}

    /* Header text */
    .header{display:flex;align-items:flex-end;gap:16px;padding:18px 0 16px}
    h1{margin:0;font-weight:600;letter-spacing:-.01em;font-size:24px;color:#0f172a}
    .subtitle{font-style:italic;font-size:15px;color:var(--muted);margin-top:6px}

    .caret{display:inline-block;width:2px;height:1.15em;background:#111827;margin-left:2px;vertical-align:-0.15em;animation:blink 1s step-end infinite}
    @keyframes blink{50%{opacity:0}}

    /* Light reveal animation */
    .reveal{opacity:0;transform:translateY(8px);animation:fadeUp .6s ease forwards}
    .reveal:nth-of-type(2){animation-delay:.05s}
    .reveal:nth-of-type(3){animation-delay:.1s}
    @keyframes fadeUp{to{opacity:1;transform:none}}
    @media (prefers-reduced-motion: reduce){.reveal{animation:none;opacity:1;transform:none}}

    /* 2-col layout */
    .grid{display:grid;grid-template-columns: 0.9fr 1.4fr;gap:28px;margin-top:8px}
    @media (max-width: 900px){.grid{grid-template-columns:1fr}}

    .card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:18px;
      box-shadow: 0 1px 1px rgba(17,24,39,.04), 0 10px 24px rgba(17,24,39,.06)}
    .muted{color:var(--muted)}
    .h3{font-size:18px;font-weight:600;margin:0 0 12px}

    /* Left column */
    .roles{font-weight:500;color:#334155; letter-spacing:.02em}
    .about{margin-top:10px;text-align:justify;hyphens:auto}

    .links{display:flex;gap:10px;flex-wrap:wrap;margin-top:14px}
    .btn{border:1px solid var(--line);background:var(--card);padding:9px 12px;border-radius:999px;text-decoration:none;color:var(--text);font-weight:600}
    .btn:hover{background:#f3f4f6}
    .btn:focus-visible{outline:2px solid #0002; outline-offset:2px}

    /* Tabs */
    .tabs{display:flex;gap:18px;margin:0 0 14px}
    .tab{display:flex;align-items:center;gap:8px;color:var(--muted);font-weight:600;text-decoration:none;cursor:pointer}
    .tab .dot{width:8px;height:8px;border-radius:999px;background:#1113;transition:background .15s ease}
    .tab.active{color:var(--text)}
    .tab.active .dot{background:#000}
    .tab:focus-visible{outline:2px solid #0002; outline-offset:2px; border-radius:6px}

    /* Chips */
    .grid-chips{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
    @media (max-width: 700px){.grid-chips{grid-template-columns:1fr 1fr}}
    .chip{background:#fff;border:1px solid var(--line);border-radius:12px;padding:12px 12px;display:flex;align-items:center;justify-content:space-between;gap:10px}
    .badge{font-size:12px;padding:4px 8px;border-radius:999px;border:1px solid #0001;background:#fff}
    .adv{background:#ecfdf5;border-color:#065f46;color:#064e3b}
    .int{background:#eff6ff;border-color:#1d4ed8;color:#1e40af}
    .bas{background:#fef3c7;border-color:#92400e;color:#78350f}

    /* Projects */
    .projects{margin-top:32px}
    .cards{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    @media (max-width: 900px){.cards{grid-template-columns:1fr}}
    .proj{border:1px solid var(--line);border-radius:12px;background:#fff;padding:14px;transition:transform .12s ease, box-shadow .12s ease;overflow:hidden}
    .proj:hover{transform:translateY(-2px);box-shadow:0 6px 24px rgba(17,24,39,.08)}
    .proj h4{margin:2px 0 8px;font-size:16px;font-weight:600;letter-spacing:.005em}
    .tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px}
    .tag{font-size:12px;padding:3px 8px;border-radius:999px;background:#f8fafc;border:1px solid var(--line);color:#374151}
    .kv{margin:0 0 8px;text-align:justify;hyphens:auto}
    .links-row{display:flex;gap:10px;flex-wrap:wrap}
    .plink{font-weight:600;text-decoration:none;color:var(--accent)}
    .plink:hover{text-decoration:underline}

    /* Pills under titles */
    .meta{display:flex;gap:8px;flex-wrap:wrap;margin:6px 0 8px}
    .pill{font-size:12px;padding:4px 8px;border-radius:999px;background:#f1f5f9;border:1px solid var(--line);color:#334155}

    /* Feature cards: text + video side-by-side */
    .proj.feature{display:grid;grid-template-columns: 1.15fr 1fr;gap:16px;align-items:start}
    .cards .proj.feature{grid-column:1 / -1}
    @media (max-width: 900px){.proj.feature{grid-template-columns:1fr}}

    /* Video preview wrapper: keeps iframes INSIDE boxes */
    .preview.video{width:100%;border-radius:10px;overflow:hidden;background:#000;border:1px solid var(--line)}
    .preview.video iframe{display:block;width:100%;aspect-ratio:16/9;height:auto;border:0}

    /* Filter buttons */
    .filters{display:flex;gap:8px;flex-wrap:wrap;margin:8px 0 0}
    .fbtn{border:1px solid var(--line);background:#fff;border-radius:999px;padding:6px 12px;font-weight:600;cursor:pointer}
    .fbtn[aria-pressed="true"]{background:#eef2ff;border-color:#c7d2fe;color:#1e3a8a}
    .fbtn:focus-visible{outline:2px solid #0002;outline-offset:2px}

    /* Section anchor offset */
    .section-anchor{position:relative;top:-80px;display:block;height:1px}

    /* Footer */
    footer{padding:18px 0;color:var(--muted);font-size:14px}
  `;

  const handleTabClick = (id) => setActive(id);

  return (
    <>
      <style>{css}</style>

      {/* Masthead */}
      <div className="masthead">
        <div className="wrap hero">
          <div className="header">
            <div>
              <h1 aria-label="Syuzanna Matevosyan — Portfolio">Syuzanna Matevosyan — Portfolio</h1>
              <div className="subtitle">
                {typedSubtitle}
                {isSubtitleTyping && <span className="caret" aria-hidden="true" />}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="grid">
          {/* LEFT: About */}
          <section className="card reveal">
            <div className="roles">AI & Rehabilitation • Biosignals • Medical Imaging</div>
            <p className="about">
              Biomedical engineer specializing in AI-driven signal/image processing. Hands-on experience developing
              EMG-based control systems, AR rehabilitation tools, and deep learning models.
            </p>
            <div className="links">
              <a className="btn" href="https://github.com/symatevo" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a className="btn" href="https://www.linkedin.com/in/symatevo/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a className="btn" href="/Syuzanna_Matevosyan_CV.pdf" target="_blank" rel="noreferrer">CV ↗</a>
            </div>
          </section>

          {/* RIGHT: Skills */}
          <section className="card reveal">
            <div className="h3">Skills</div>

            <nav className="tabs" aria-label="Jump to skills sections">
              <a
                className={`tab ${active === "software" ? "active" : ""}`}
                href="#software"
                onClick={() => handleTabClick("software")}
              >
                <span className="dot" />Software
              </a>
              <a
                className={`tab ${active === "expertise" ? "active" : ""}`}
                href="#expertise"
                onClick={() => handleTabClick("expertise")}
              >
                <span className="dot" />Expertise
              </a>
              <a
                className={`tab ${active === "languages" ? "active" : ""}`}
                href="#languages"
                onClick={() => handleTabClick("languages")}
              >
                <span className="dot" />Language
              </a>
            </nav>

            {/* SOFTWARE */}
            <a id="software" className="section-anchor" ref={softwareRef} />
            <div className="h3">Software</div>
            <div className="grid-chips" aria-label="Software">
              <div className="chip"><span>Python</span><span className="badge adv">Advanced</span></div>
              <div className="chip"><span>NumPy · Pandas</span><span className="badge adv">Advanced</span></div>
              <div className="chip"><span>scikit-learn</span><span className="badge adv">Advanced</span></div>
              <div className="chip"><span>TensorFlow · Keras</span><span className="badge int">Intermediate</span></div>
              <div className="chip"><span>PyTorch</span><span className="badge bas">Basic</span></div>
              <div className="chip"><span>OpenCV</span><span className="badge int">Intermediate</span></div>
              <div className="chip"><span>MATLAB</span><span className="badge int">Intermediate</span></div>
              <div className="chip"><span>Unity (C/C#)</span><span className="badge int">Intermediate</span></div>
              <div className="chip"><span>OpenSim & Moco</span><span className="badge int">Intermediate</span></div>
              <div className="chip"><span>Git / GitHub</span><span className="badge adv">Advanced</span></div>
              <div className="chip"><span>Jupyter / Colab</span><span className="badge adv">Advanced</span></div>
              <div className="chip"><span>Biometrics DataLite DLL</span><span className="badge int">Intermediate</span></div>
            </div>

            {/* EXPERTISE */}
            <a id="expertise" className="section-anchor" ref={expertiseRef} />
            <div style={{ height: "18px" }} />
            <div className="h3">Expertise</div>
            <div className="grid-chips" aria-label="Expertise">
              <div className="chip"><span>sEMG Acquisition & Control</span><span className="badge adv">Real-time</span></div>
              <div className="chip"><span>AR/VR Interactions</span><span className="badge int">Unity</span></div>
              <div className="chip"><span>Gesture Classification</span><span className="badge int">SVM · DT · RF · RNN</span></div>
              <div className="chip"><span>Signal Processing</span><span className="badge int">Feature · Selection</span></div>
              <div className="chip"><span>Texture Features</span><span className="badge int">GLCM · LBP</span></div>
              <div className="chip"><span>Segmentation</span><span className="badge int">CNN · U-Net</span></div>
              <div className="chip"><span>Biomechanics</span><span className="badge int">Gait · Hemiparesis</span></div>
              <div className="chip"><span>Optimization</span><span className="badge int">Moco</span></div>
              <div className="chip"><span>Dataset Curation</span><span className="badge int">Ninapro DB7</span></div>
            </div>

            {/* LANGUAGES */}
            <a id="languages" className="section-anchor" ref={languagesRef} />
            <div style={{ height: "18px" }} />
            <div className="h3">Language</div>
            <div className="grid-chips" aria-label="Languages">
              <div className="chip"><span>English</span><span className="badge adv">C1</span></div>
              <div className="chip"><span>Russian</span><span className="badge adv">C2</span></div>
              <div className="chip"><span>Armenian</span><span className="badge adv">Native</span></div>
              <div className="chip"><span>French</span><span className="badge int">Intermediate</span></div>
            </div>
          </section>
        </div>
        {/* FULL-WIDTH PROJECTS */}
        <section id="projects" className="card reveal" style={{ marginTop: 24 }}>
          <div className="h3">Projects</div>
          <p className="muted" style={{ marginTop: 0 }}>
            Highlights of my research and applied work. Use filters to browse.
          </p>

          {/* Filters */}
          <div className="filters" role="toolbar" aria-label="Filter projects">
            {[
              ["all","All"],
              ["emg","EMG / AR"],
              ["imaging","Medical Imaging"],
              ["bci","EEG / BCI"],
            ].map(([key,label]) => (
              <button
                key={key}
                type="button"
                className="fbtn"
                aria-pressed={filter===key}
                onClick={() => setFilter(key)}
              >{label}</button>
            ))}
          </div>

          <div className="cards" style={{ marginTop: 8 }}>
            {/* FEATURED 1: EMG/AR with YouTube video on the right */}
            <article className="proj feature" style={{display: visible('emg')?undefined:'none'}}>
              <div>
                <h4>Augmented Reality System for Myoelectric Prosthesis Training</h4>
                <div className="meta">
                  <span className="pill">EMG · AR</span>
                  <span className="pill">Research Prototype</span>
                  <span className="pill">~70% cls. acc.</span>
                </div>
                <div className="tags">
                  <span className="tag">Python</span>
                  <span className="tag">Biometrics DLL</span>
                  <span className="tag">UDP → Unity</span>
                  <span className="tag">Keras</span>
                </div>
                <p className="kv">
                  Built a gamified training platform for amputees to practice 17 hand gestures before prosthesis fitting.
                  Using AR, users could see a virtual arm and control it with their own EMG signals.
                  The system achieved mean ~70% classification accuracy, and participants described the experience as engaging and motivating.
                </p>
                <div className="links-row">
                  <a className="plink" href="/prosthesis-ar-training.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open the article PDF in a new tab">Article (PDF)</a>
                  {" · "}
                  <a className="plink" href="https://www.youtube.com/shorts/CcYEttrG2xQ" target="_blank" rel="noopener noreferrer" aria-label="Watch the demo on YouTube">Demo</a>
                </div>
              </div>
              <div className="preview video" aria-hidden="true">
                <iframe
                  src="https://www.youtube.com/shorts/CcYEttrG2xQ"
                  title="AR Prosthesis Training Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </article>

            {/* 2: sEMG analysis */}
            <article className="proj" style={{display: visible('emg')?undefined:'none'}}>
              <h4>Decoding & Characterizing 17 Motor Intentions from sEMG</h4>
              <div className="meta"><span className="pill">EMG</span><span className="pill">Ninapro DB7</span><span className="pill">Up to 98% (SS)</span></div>
              <div className="tags">
                <span className="tag">sEMG</span>
                <span className="tag">Ninapro DB7</span>
                <span className="tag">PCA</span>
                <span className="tag">Tensor Decomposition</span>
                <span className="tag">Classification</span>
              </div>
              <p className="kv">
                Analyzed Ninapro DB7 sEMG signals to decode 17 upper-limb gestures.
                Reduced dimensionality with PCA and tensor decomposition to reveal key muscle activation patterns, then benchmarked classifiers from SVM/LDA to deep neural networks.
                DNNs achieved the best performance, reaching up to 98% accuracy in subject-specific cases.
              </p>
              <div className="links-row">
                <a className="plink" href="https://colab.research.google.com/drive/1gtwZ_kMRnot8MxaHUsqpGvB5tyPescMG?usp=sharing" target="_blank" rel="noopener noreferrer">Notebook</a>
                {" · "}
                <a className="plink" href="https://www.canva.com/design/DAGx1GroYW4/34abG64NkOJUTzC06bMWtA/view?utm_content=DAGx1GroYW4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h844003efbe" target="_blank" rel="noopener noreferrer">Presentation</a>
              </div>
            </article>

            {/* 3: U-Net Polyp */}
            <article className="proj" style={{display: visible('imaging')?undefined:'none'}}>
              <h4>U-Net Polyp Segmentation for Colorectal Cancer Prevention</h4>
              <div className="meta"><span className="pill">Imaging</span><span className="pill">Semantic Segmentation</span><span className="pill">Kvasir-SEG</span></div>
              <div className="tags">
                <span className="tag">Deep Learning</span>
                <span className="tag">U-Net</span>
                <span className="tag">Kvasir-SEG</span>
                <span className="tag">Semantic Segmentation</span>
                <span className="tag">Medical Imaging</span>
              </div>
              <p className="kv">
                Developed and optimized U-Net architectures to segment gastrointestinal polyps from Kvasir-SEG images, helping improve early detection of colorectal cancer.
                Modified the depth, skip connections, and convolutional modules across variants, achieving up to 97% accuracy and Dice/IoU scores exceeding 70%.
              </p>
              <div className="links-row">
                <a className="plink" href="https://colab.research.google.com/drive/1_7CyWgiHTNXJ4y4GnHwJHUdUhKxTFpvq?usp=sharing" target="_blank" rel="noopener noreferrer">Notebook</a>
              </div>
            </article>

            {/* FEATURED 2: Chest X-ray with video */}
            <article className="proj feature" style={{display: visible('imaging')?undefined:'none'}}>
              <div>
                <h4>AI-Powered Chest X-ray Interpretation (Hackathon/Startup)</h4>
                <div className="meta"><span className="pill">Imaging</span><span className="pill">Radiology</span><span className="pill">1st place</span></div>
                <div className="tags">
                  <span className="tag">Deep Learning</span>
                  <span className="tag">Chest X-ray</span>
                  <span className="tag">Radiology</span>
                  <span className="tag">Startup</span>
                </div>
                <p className="kv">
                  Developed a supervised deep learning system to detect lung masses and generate descriptive reports from chest X-rays.
                  Designed to support radiologists and improve workflow efficiency in private hospitals. Incubated at TUMO Labs, won <b>1st place among 12 teams</b>.
                </p>
                <div className="links-row">
                  <a className="plink" href="https://github.com/symatevo/Chest-Xray-Mass-Detection" target="_blank" rel="noopener noreferrer">Code</a>
                  {" · "}
                  <a className="plink" href="https://www.youtube.com/watch?v=v3KYiwwXzuE" target="_blank" rel="noopener noreferrer">Demo</a>
                </div>
              </div>
              <div className="preview video" aria-hidden="true">
                <iframe
                  src="https://www.youtube.com/embed/v3KYiwwXzuE"
                  title="Chest X-ray Project Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </article>

            {/* 5: BCI */}
            <article className="proj" style={{display: visible('bci')?undefined:'none'}}>
              <h4>Brain–Computer Interface from EEG</h4>
              <div className="meta"><span className="pill">EEG / BCI</span><span className="pill">MNE · CSP</span><span className="pill">Up to 86%</span></div>
              <div className="tags">
                <span className="tag">EEG</span>
                <span className="tag">MNE</span>
                <span className="tag">CSP · SPoC</span>
                <span className="tag">PCA</span>
                <span className="tag">Random Forest</span>
              </div>
              <p className="kv">
                Built a BCI pipeline using the EEGBCI dataset to decode executed and imagined hand/foot movements.
                Applied preprocessing, ICA, and spatial filters (CSP/SPoC) combined with PCA and machine learning classifiers.
                Compared pipelines (LDA, Logistic Regression, Random Forest) and achieved up to 86% accuracy with CSP + Random Forest.
              </p>
              <div className="links-row">
                <a className="plink" href="https://github.com/symatevo/Total-Perspective-Vortex/tree/main" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </div>
            </article>

            {/* 6: EMG hardware */}
            <article className="proj" style={{display: visible('emg')?undefined:'none'}}>
              <h4>EMG Signal Acquisition System (Bachelor Thesis)</h4>
              <div className="meta"><span className="pill">EMG</span><span className="pill">Hardware + Software</span><span className="pill">SVM · RF · DT</span></div>
              <div className="tags">
                <span className="tag">EMG</span>
                <span className="tag">Hardware + Software</span>
                <span className="tag">Signal Processing</span>
                <span className="tag">SVM · RF · DT</span>
              </div>
              <p className="kv">
                Designed and built a three-electrode EMG acquisition system to capture hand movement signals.
                Collected data from volunteers, extracted features, and evaluated multiple ML algorithms (SVM, Random Forest, Decision Tree).
                Achieved up to 72.6% accuracy with SVM (RBF), with results highlighting subject variability and the need for more channels for robust prosthetic control.
              </p>
              <div className="links-row">
                <a className="plink" href="https://github.com/symatevo/EMG-Signals-Classification" target="_blank" rel="noopener noreferrer">Code</a>
                {" · "}
                <a className="plink" href="/Syuzanna%20Matevosyan%20Poster.pdf" target="_blank" rel="noopener noreferrer">Poster</a>
              </div>
            </article>

            {/* 7: In-progress */}
            <article className="proj" style={{display: visible('emg')?undefined:'none'}}>
              <h4>Socket-Level Haptic Feedback - Closed-Loop Virtual Arm for Amputees Training</h4>
              <div className="meta"><span className="pill">Prototype</span><span className="pill">Haptics</span><span className="pill">sEMG</span></div>
              <p className="kv"><b>Status:</b> In progress.</p>
              <p className="kv"><b>Goal:</b> Combine EMG control with tactile cues for simultaneous motor & perception training of amputees.</p>
              <div className="links-row"><a className="plink" href="#">Design Notes</a></div>
            </article>
          </div>
        </section>

        <footer className="wrap" style={{paddingTop:0}}>
          © {new Date().getFullYear()} Syuzanna Matevosyan • Built with React
        </footer>
      </div>
    </>
  );
}
