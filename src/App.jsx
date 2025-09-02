import { useEffect, useState, useRef } from "react";

export default function App() {
  useEffect(() => {
    document.title = "Syuzanna Matevosyan — Portfolio";
  }, []);

  // One-time typing animation for SUBTITLE (first visit only)
  const subtitleFull = "Erasmus Mundus Master in Biomedical Engineering";
  const [typedSubtitle, setTypedSubtitle] = useState("");
  const [isSubtitleTyping, setIsSubtitleTyping] = useState(false);

  useEffect(() => {
    setIsSubtitleTyping(true);
    setTypedSubtitle("");
    const speed = 45; // ms per character
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

  // Refs for scroll tracking
  const softwareRef = useRef(null);
  const expertiseRef = useRef(null);
  const languagesRef = useRef(null);

  useEffect(() => {
    const sections = [
      { id: "software", el: softwareRef.current },
      { id: "expertise", el: expertiseRef.current },
      { id: "languages", el: languagesRef.current },
    ].filter(s => s.el);

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0.1, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach(s => obs.observe(s.el));
    return () => obs.disconnect();
  }, []);

  const css = `
    :root{
      --bg:#ffffff; --text:#1f2328; --muted:#6b7280; --line:#e5e7eb; --card:#ffffff;
      --mast:#f3f4f6;
      --badge-adv:#d1fae5; --badge-int:#dbeafe; --badge-bas:#fde68a;
    }
    *{box-sizing:border-box}
    html,body{margin:0;background:var(--bg);color:var(--text);
      font: 400 16px/1.6 Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;}
    html{scroll-behavior:smooth}

    /* Top gray header (made a bit taller so the text sits lower on the page) */
    .masthead{position:relative;height:180px;background:var(--mast);border-bottom:1px solid var(--line);overflow:hidden}
    .hero{height:100%;display:flex;align-items:flex-end;padding-bottom:0}

    .wrap{max-width:1100px;margin:0 auto;padding:24px 20px 72px}

    /* Header text */
    .header{display:flex;align-items:center;gap:16px;padding:18px 0 0}
    h1{
      margin:0;
      font-weight:600;           /* title: no animation, minimal look */
      letter-spacing:-.01em;
      font-size:22px;
      color:#111827;
    }
    .subtitle{font-style:italic;font-size:14px;color:var(--muted);margin-top:4px}

    .title-wrap{padding-right:280px}
    .header-art{position:absolute;top:0;right:0;height:100%;width:auto;pointer-events:none;opacity:.9}
    @media (max-width: 900px){.title-wrap{padding-right:0}.header-art{display:none}}

    /* caret for subtitle typing */
    .caret{display:inline-block;width:2px;height:1.15em;background:#111827;margin-left:2px;vertical-align:-0.15em;animation:blink 1s step-end infinite}
    @keyframes blink{50%{opacity:0}}

    /* 2-column layout */
    .grid{display:grid;grid-template-columns: 0.9fr 1.4fr;gap:28px;margin-top:8px}
    @media (max-width: 900px){.grid{grid-template-columns:1fr}}

    .card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:18px}
    .muted{color:var(--muted)}
    .h3{font-size:18px;font-weight:700;margin:0 0 12px}

    /* Left column */
    .roles{font-weight:600;color:#374151}
    .about{margin-top:10px; text-align:justify; text-justify:inter-word; hyphens:auto}

    .links{display:flex;gap:10px;flex-wrap:wrap;margin-top:14px}
    .btn{border:1px solid var(--line);background:var(--card);padding:8px 12px;border-radius:10px;text-decoration:none;color:var(--text);font-weight:600}
    .btn:hover{background:#f3f4f6}

    /* Tabs as anchor links */
    .tabs{display:flex;gap:18px;margin:0 0 14px}
    .tab{
      display:flex;align-items:center;gap:8px;color:var(--muted);font-weight:600;
      text-decoration:none; cursor:pointer;
    }
    .tab .dot{width:8px;height:8px;border-radius:999px;background:#1113;transition:background .15s ease}
    .tab.active{color:var(--text)}
    .tab.active .dot{background:#000} /* black when active */
    .tab:focus-visible{outline:2px solid #0002; outline-offset:2px; border-radius:6px}

    .grid-chips{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
    @media (max-width: 700px){.grid-chips{grid-template-columns:1fr 1fr}}
    .chip{background:#f9fafb;border:1px solid var(--line);border-radius:10px;padding:12px 12px;display:flex;align-items:center;justify-content:space-between;gap:10px}
    .badge{font-size:12px;padding:4px 8px;border-radius:999px;border:1px solid #0001;background:#fff}
    .adv{background:var(--badge-adv);border-color:#065f46;color:#064e3b}
    .int{background:var(--badge-int);border-color:#1d4ed8;color:#1e40af}
    .bas{background:var(--badge-bas);border-color:#92400e;color:#78350f}

    /* Projects */
    .projects{margin-top:32px}
    .cards{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    @media (max-width: 900px){.cards{grid-template-columns:1fr}}
    .proj{border:1px solid var(--line);border-radius:12px;background:#fff;padding:14px}
    .proj h4{margin:2px 0 8px;font-size:16px}
    .tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px}
    .tag{font-size:12px;padding:3px 8px;border-radius:999px;background:#f3f4f6;border:1px solid var(--line);color:#374151}
    .kv{margin:0 0 8px}
    .kv b{color:#111827}
    .kv{
  margin: 0 0 8px;
  text-align: justify;
  hyphens: auto;           /* nicer line breaks when justified */
}
    .links-row{display:flex;gap:10px;flex-wrap:wrap}
    .plink{font-weight:600;text-decoration:none;color:#0f62fe}
    .center{display:flex;justify-content:center;margin-top:16px}

    /* Anchor offset */
    .section-anchor{position:relative;top:-8px;display:block;height:1px}
  `;

  const handleTabClick = (id) => setActive(id);

  return (
    <>
      <style>{css}</style>

      {/* Gray masthead */}
      <div className="masthead">
        <div className="wrap hero">
          <div className="header">
            <div className="title-wrap">
              {/* Title: static (no animation) */}
              <h1 aria-label="Syuzanna Matevosyan — Portfolio">Syuzanna Matevosyan — Portfolio</h1>
              {/* Subtitle: animated on first visit only */}
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
          <section className="card">
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

          {/* RIGHT: Skills (all visible + anchor tabs) */}
          <section className="card">
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
              <div className="chip"><span>Gesture Classification</span><span className="badge int">SVM · DT · RF RNN</span></div>
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
              {/* Russian → green */}
              <div className="chip"><span>Russian</span><span className="badge adv">C2</span></div>
              <div className="chip"><span>Armenian</span><span className="badge adv">Native</span></div>
              <div className="chip"><span>French</span><span className="badge int">Intermediate</span></div>
            </div>
          </section>
        </div>

        {/* FULL-WIDTH PROJECTS */}
        <section className="card" style={{ marginTop: 24 }}>
          <div className="h3">Projects</div>
          <p className="muted" style={{ marginTop: 0 }}>
            Highlights on my research and applied work, with code or demos where available.
          </p>
          <div className="cards" style={{ marginTop: 12 }}>
{/* 1 */}
<article className="proj">
  <h4>Augmented Reality System for Myoelectric Prosthesis Training</h4>
  <div className="tags">
    <span className="tag">Python</span>
    <span className="tag">Biometrics DLL</span>
    <span className="tag">UDP → Unity</span>
    <span className="tag">Keras</span>
  </div>
  <p className="kv">
    I built a gamified training platform for amputees to practice 17 hand gestures before prosthesis fitting. 
    Using AR, users could see a virtual arm and control it with their own EMG signals. 
    The system achieved ~70% classification accuracy, and participants described the experience as engaging and motivating.
  </p>
  <div className="links-row">
    <a
      className="plink"
      href="/prosthesis-ar-training.pdf"     // put PDF in /public
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open the article PDF in a new tab"
    >
      Article (PDF)
    </a>
    {" · "}
    <a
      className="plink"
      href="https://youtube.com/shorts/EhQfJGpvC8A"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Watch the demo on YouTube"
    >
      Demo
    </a>
  </div>
</article>
{/* 2 */}
<article className="proj">
  <h4>Decoding & Characterizing 17 Motor Intentions from sEMG</h4>
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
    <a
      className="plink"
      href="https://colab.research.google.com/drive/1gtwZ_kMRnot8MxaHUsqpGvB5tyPescMG?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
    >
      Notebook
    </a>
    {" · "}
    <a
      className="plink"
      href="https://www.canva.com/design/DAGx1GroYW4/34abG64NkOJUTzC06bMWtA/view?utm_content=DAGx1GroYW4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h844003efbe"
      target="_blank"
      rel="noopener noreferrer"
    >
      Presentation
    </a>
  </div>
</article>
            {/* 3 */}
<article className="proj">
  <h4>AI-Powered Chest X-ray Interpretation (Hackathon → Startup)</h4>
  <div className="tags">
    <span className="tag">Deep Learning</span>
    <span className="tag">Chest X-ray</span>
    <span className="tag">Radiology</span>
    <span className="tag">Startup</span>
  </div>
  <p className="kv">
    Built a deep learning tool to assist radiologists in detecting chest masses and generating descriptions. 
    Incubated at TUMO Labs and awarded <b>1st place among 12 teams</b>.
  </p>
  <div className="links-row">
    <a
      className="plink"
      href="https://www.youtube.com/watch?v=v3KYiwwXzuE"
      target="_blank"
      rel="noopener noreferrer"
    >
      Video
    </a>
  </div>
</article>
            {/* 4 */}
            <article className="proj">
              <h4>Gait Modeling for Hemiparesis (OpenSim/Moco)</h4>
              <div className="tags"><span className="tag">OpenSim</span><span className="tag">Moco</span><span className="tag">Optimization</span></div>
              <p className="kv"><b>Problem:</b> Evaluate strengthening vs. gait retraining strategies.</p>
              <p className="kv"><b>Approach:</b> Subject-specific models; symmetry/effort costs; parameter sweeps.</p>
              <p className="kv"><b>Results:</b> Clear trade-off insights; reusable notebooks for replication.</p>
              <div className="links-row"><a className="plink" href="#">Notebook</a></div>
            </article>
            {/* 5 */}
            <article className="proj">
              <h4>Medical Imaging Segmentation</h4>
              <div className="tags"><span className="tag">U-Net</span><span className="tag">OpenCV</span><span className="tag">PyTorch/TensorFlow</span></div>
              <p className="kv"><b>Problem:</b> Tissue delineation for downstream quantification.</p>
              <p className="kv"><b>Approach:</b> U-Net baseline; training pipeline with augmentation & QA.</p>
              <p className="kv"><b>Results:</b> Strong Dice on validation; clean inference scripts.</p>
              <div className="links-row"><a className="plink" href="#">Repo</a> · <a className="plink" href="#">Report</a></div>
            </article>
            {/* 6 */}
            <article className="proj">
              <h4>Tissue Characterization & Clustering</h4>
              <div className="tags"><span className="tag">GLCM</span><span className="tag">LBP</span><span className="tag">11×11</span><span className="tag">44 features</span></div>
              <p className="kv"><b>Problem:</b> Foreground/background & tissue-type separation.</p>
              <p className="kv"><b>Approach:</b> Per-pixel feature vectors on 11×11 neighborhoods; classical stats + clustering.</p>
              <p className="kv"><b>Results:</b> Reliable separation; interpretable feature importance.</p>
              <div className="links-row"><a className="plink" href="#">Notebook</a></div>
            </article>
            {/* 7 */}
            <article className="proj">
              <h4>Ninapro DB7 Multimodal Decoding</h4>
              <div className="tags"><span className="tag">sEMG</span><span className="tag">IMU</span><span className="tag">PCA</span><span className="tag">Tensor Decomp</span></div>
              <p className="kv"><b>Problem:</b> Decode task variables from EMG/IMU.</p>
              <p className="kv"><b>Approach:</b> Dimensionality reduction + supervised classifiers; response characterization.</p>
              <p className="kv"><b>Results:</b> Competitive accuracy; clear visualizations of components.</p>
              <div className="links-row"><a className="plink" href="#">Code</a></div>
            </article>
            {/* 8 */}
            <article className="proj">
              <h4>Socket-Level Haptic Feedback (Closed-Loop)</h4>
              <div className="tags"><span className="tag">Prototype</span><span className="tag">Haptics</span><span className="tag">sEMG</span></div>
              <p className="kv"><b>Status:</b> In progress.</p>
              <p className="kv"><b>Goal:</b> Combine EMG control with tactile cues for simultaneous motor & perception training.</p>
              <div className="links-row"><a className="plink" href="#">Design Notes</a></div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
