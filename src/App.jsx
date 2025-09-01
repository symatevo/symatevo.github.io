import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "Syuzanna Matevosyan — Portfolio";
  }, []);

  const css = `
    :root{
      --bg:#ffffff; --text:#1f2328; --muted:#6b7280; --line:#e5e7eb; --card:#ffffff;
      --badge-adv:#d1fae5; --badge-int:#dbeafe; --badge-bas:#fde68a;
    }
    *{box-sizing:border-box}
    html,body{margin:0;background:var(--bg);color:var(--text);
      font:400 16px/1.6 Inter,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif}
    .wrap{max-width:1100px;margin:0 auto;padding:32px 20px 72px}

    /* Header */
    .header{display:flex;align-items:center;gap:16px;padding:18px 0 22px;border-bottom:1px solid var(--line);position:relative}
    .logo{width:56px;height:56px;border-radius:12px;background:#e5e7eb;display:grid;place-items:center;font-size:28px}
    h1{margin:0;font-weight:800;letter-spacing:-.02em}
    .subtitle{margin-top:4px;color:var(--muted);font-size:14px;font-weight:500}
    .header-art{margin-left:auto;height:90px;max-width:46vw;object-fit:contain;pointer-events:none}
    @media (max-width:900px){.header-art{display:none}}

    /* 2-column layout */
    .grid{display:grid;grid-template-columns:.9fr 1.4fr;gap:28px;margin-top:22px}
    @media (max-width:900px){.grid{grid-template-columns:1fr}}

    .card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:18px}
    .muted{color:var(--muted)}
    .h3{font-size:18px;font-weight:700;margin:0 0 12px}

    /* Left column */
    .name{font-weight:800;font-size:22px;margin:2px 0 2px}
    .roles{font-weight:700;color:#374151}
    .about{margin-top:10px}
    .links{display:flex;gap:10px;flex-wrap:wrap;margin-top:14px}
    .btn{border:1px solid var(--line);background:var(--card);padding:8px 12px;border-radius:10px;text-decoration:none;color:var(--text);font-weight:600}
    .btn:hover{background:#f3f4f6}

    /* Skills */
    .tabs{display:flex;gap:18px;margin:0 0 14px}
    .tab{display:flex;align-items:center;gap:8px;color:var(--muted);font-weight:600}
    .tab.active{color:var(--text)}
    .tab .dot{width:8px;height:8px;border-radius:999px;background:#1113}
    .tab.active .dot{background:#1119}

    .grid-chips{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
    @media (max-width:700px){.grid-chips{grid-template-columns:1fr 1fr}}
    .chip{background:#f9fafb;border:1px solid var(--line);border-radius:10px;padding:12px;display:flex;align-items:center;justify-content:space-between;gap:10px}
    .badge{font-size:12px;padding:4px 8px;border-radius:999px;border:1px solid #0001;background:#fff}
    .adv{background:var(--badge-adv);border-color:#065f46;color:#064e3b}
    .int{background:var(--badge-int);border-color:#1d4ed8;color:#1e40af}
    .bas{background:var(--badge-bas);border-color:#92400e;color:#78350f}

    /* Projects */
    .projects{margin-top:32px}
    .cards{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    @media (max-width:900px){.cards{grid-template-columns:1fr}}
    .proj{border:1px solid var(--line);border-radius:12px;background:#fff;padding:14px}
    .proj h4{margin:2px 0 8px;font-size:16px}
    .tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px}
    .tag{font-size:12px;padding:3px 8px;border-radius:999px;background:#f3f4f6;border:1px solid var(--line);color:#374151}
    .kv{margin:0 0 8px}
    .kv b{color:#111827}
    .links-row{display:flex;gap:10px;flex-wrap:wrap}
    .plink{font-weight:600;text-decoration:none;color:#0f62fe}
    .center{display:flex;justify-content:center;margin-top:16px}
  `;

  return (
    <>
      <style>{css}</style>

      <div className="wrap">
        {/* Header */}
        <div className="header">
          <div className="logo">🧪</div>
          <div>
            <h1>Syuzanna Matevosyan — Portfolio</h1>
            <div className="subtitle">Erasmus Mundus Master in Biomedical Engineering</div>
          </div>
          {/* <<< header art on the right >>> */}
          <img className="header-art" src="/images/header-wave.png" alt="" />
        </div>

        <div className="grid">
          {/* LEFT: shorter About */}
          <section className="card">
            <div className="name">SYUZANNA MATEVOSYAN</div>
            <div className="roles">AI & Rehabilitation • Biosignals • Medical Imaging</div>
            <p className="about">
              I design data-driven tools for prosthetics & neuro-rehab: real-time sEMG control, AR interactions,
              gait modeling (OpenSim/Moco), and medical-image segmentation.
            </p>
            <div className="links">
              <a className="btn" href="https://github.com/symatevo" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a className="btn" href="https://www.linkedin.com/in/symatevo/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a className="btn" href="/Syuzanna_Matevosyan_CV.pdf" target="_blank" rel="noreferrer">Download CV ↗</a>
            </div>
          </section>

          {/* RIGHT: Skills */}
          <section className="card">
            <div className="h3">Skills</div>
            <div className="tabs">
              <div className="tab active"><span className="dot" />Software</div>
              <div className="tab"><span className="dot" />Expertise</div>
              <div className="tab"><span className="dot" />Language</div>
            </div>

            <div className="grid-chips">
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

            <div style={{ height: "18px" }} />
            <div className="h3">Expertise</div>
            <div className="grid-chips">
              <div className="chip"><span>sEMG Acquisition & Control</span><span className="badge adv">Real-time</span></div>
              <div className="chip"><span>AR/VR Interactions</span><span className="badge int">Unity</span></div>
              <div className="chip"><span>Gesture Classification</span><span className="badge int">17 classes</span></div>
              <div className="chip"><span>Signal Processing</span><span className="badge int">Filtering · Features</span></div>
              <div className="chip"><span>Texture Features</span><span className="badge int">GLCM · LBP</span></div>
              <div className="chip"><span>Segmentation</span><span className="badge int">U-Net</span></div>
              <div className="chip"><span>Biomechanics</span><span className="badge int">Gait · Hemiparesis</span></div>
              <div className="chip"><span>Optimization</span><span className="badge int">Moco</span></div>
              <div className="chip"><span>Dataset Curation</span><span className="badge int">Ninapro DB7</span></div>
            </div>

            <div style={{ height: "18px" }} />
            <div className="h3">Languages</div>
            <div className="grid-chips">
              <div className="chip"><span>English</span><span className="badge adv">C1</span></div>
              <div className="chip"><span>French</span><span className="badge int">Intermediate</span></div>
              <div className="chip"><span>Romanian</span><span className="badge bas">Learning</span></div>
              <div className="chip"><span>Armenian</span><span className="badge adv">Native</span></div>
              <div className="chip"><span>Greek</span><span className="badge bas">Basic</span></div>
            </div>
          </section>
        </div>

        {/* PROJECTS (unchanged content) */}
        <div className="projects">
          <div className="h3">Projects</div>
          <div className="cards">
            <article className="proj">
              <h4>Real-time sEMG Acquisition & Control</h4>
              <div className="tags"><span className="tag">Python</span><span className="tag">Biometrics DLL</span><span className="tag">UDP → Unity</span></div>
              <p className="kv"><b>Problem:</b> Need robust, low-latency control for training & research.</p>
              <p className="kv"><b>Approach:</b> Windowed features → classifier; UDP to a Unity game for feedback.</p>
              <p className="kv"><b>Results:</b> Stable control across 17 movement classes; real-time demos.</p>
            </article>

            <article className="proj">
              <h4>AR-based Myoelectric Training</h4>
              <div className="tags"><span className="tag">Unity</span><span className="tag">C#</span><span className="tag">sEMG</span></div>
              <p className="kv"><b>Problem:</b> Traditional training is monotonous; poor engagement.</p>
              <p className="kv"><b>Approach:</b> AR tasks mapped to decoded gestures; adaptive difficulty; analytics.</p>
              <p className="kv"><b>Results:</b> Higher engagement & smoother signal separation during sessions.</p>
            </article>

            <article className="proj">
              <h4>Gait Modeling for Hemiparesis (OpenSim/Moco)</h4>
              <div className="tags"><span className="tag">OpenSim</span><span className="tag">Moco</span><span className="tag">Optimization</span></div>
              <p className="kv"><b>Problem:</b> Quantify effects of weakness and retraining strategies.</p>
              <p className="kv"><b>Approach:</b> Build subject-specific models; cost functions for symmetry & effort.</p>
              <p className="kv"><b>Results:</b> Insights on strengthening vs. retraining trade-offs; reproducible notebooks.</p>
            </article>

            <article className="proj">
              <h4>Medical Imaging Segmentation</h4>
              <div className="tags"><span className="tag">U-Net</span><span className="tag">OpenCV</span><span className="tag">GLCM/LBP</span></div>
              <p className="kv"><b>Problem:</b> Tissue delineation & texture characterization.</p>
              <p className="kv"><b>Approach:</b> U-Net baseline + classical features for analysis; clean training pipeline.</p>
              <p className="kv"><b>Results:</b> Strong Dice on validation; interpretable texture metrics for regions.</p>
            </article>

            <article className="proj">
              <h4>Stroke Rehabilitation Modeling</h4>
              <div className="tags"><span className="tag">OpenSim</span><span className="tag">Moco</span><span className="tag">Rehab</span></div>
              <p className="kv"><b>Problem:</b> Hemiparesis-related gait abnormalities require tailored strategies.</p>
              <p className="kv"><b>Approach:</b> Simulate muscle strengthening and gait retraining in OpenSim with optimization.</p>
              <p className="kv"><b>Results:</b> Identified effective intervention parameters; draft thesis simulations.</p>
            </article>

            <article className="proj">
              <h4>EMG + AR Games for Prosthetics</h4>
              <div className="tags"><span className="tag">Unity</span><span className="tag">Python</span><span className="tag">UDP</span></div>
              <p className="kv"><b>Problem:</b> Amputees need motivating pre-prosthetic training.</p>
              <p className="kv"><b>Approach:</b> Virtual arm controlled via EMG; AR games to encourage repeated practice.</p>
              <p className="kv"><b>Results:</b> Prototype tested; smoother muscle signal generation in sessions.</p>
            </article>
          </div>
        </div>

        {/* FULL-WIDTH PROJECTS */}
        <section className="card" style={{ marginTop: 24 }}>
          <div className="h3">Projects</div>
          <p className="muted" style={{ marginTop: 0 }}>
            Selected, recent & in-progress. Problem → Approach → Results. Links to code / demos when available.
          </p>
          <div className="cards" style={{ marginTop: 12 }}>
            {/* 1 */}
            <article className="proj">
              <h4>Real-time sEMG Acquisition & Control</h4>
              <div className="tags"><span className="tag">Python</span><span className="tag">Biometrics DLL</span><span className="tag">UDP → Unity</span><span className="tag">Keras</span></div>
              <p className="kv"><b>Problem:</b> Robust, low-latency control for research & training.</p>
              <p className="kv"><b>Approach:</b> Windowed features → NN classifier; streaming via UDP to game engine; logging & replay.</p>
              <p className="kv"><b>Results:</b> Stable control across <b>17 movement classes</b>; reproducible pipeline.</p>
              <div className="links-row"><a className="plink" href="#">Code</a> · <a className="plink" href="#">Demo</a></div>
            </article>
            {/* 2 */}
            <article className="proj">
              <h4>EMG-Controlled Virtual Arm (Pre-prosthetic Training)</h4>
              <div className="tags"><span className="tag">Unity</span><span className="tag">C#</span><span className="tag">sEMG</span></div>
              <p className="kv"><b>Problem:</b> Users need engaging practice before prosthesis fitting.</p>
              <p className="kv"><b>Approach:</b> UDP-driven avatar + task library; calibration & adaptive thresholds; session analytics.</p>
              <p className="kv"><b>Results:</b> Robust control & improved session engagement.</p>
              <div className="links-row"><a className="plink" href="#">Video</a></div>
            </article>
            {/* 3 */}
            <article className="proj">
              <h4>AR-Based Myoelectric Training</h4>
              <div className="tags"><span className="tag">AR</span><span className="tag">Unity</span><span className="tag">Interaction</span></div>
              <p className="kv"><b>Problem:</b> Monotony leads to abandonment in training.</p>
              <p className="kv"><b>Approach:</b> AR tasks mapped to decoded gestures; adaptive difficulty; real-time feedback.</p>
              <p className="kv"><b>Results:</b> Higher engagement & smoother signal separation.</p>
              <div className="links-row"><a className="plink" href="#">Video</a></div>
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
