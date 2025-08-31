<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Syuzanna Matevosyan — Portfolio</title>
  <style>
    :root{
      --bg:#ffffff; --text:#1f2328; --muted:#6b7280; --line:#e5e7eb; --card:#ffffff;
      --badge-adv:#d1fae5; --badge-int:#dbeafe; --badge-bas:#fde68a;
    }
    *{box-sizing:border-box}
    html,body{margin:0;background:var(--bg);color:var(--text);
      font: 400 16px/1.6 Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;}
    .wrap{max-width:1100px;margin:0 auto;padding:32px 20px 72px}

    /* Header */
    .header{display:flex;align-items:center;gap:16px;padding:18px 0 22px;border-bottom:1px solid var(--line)}
    .logo{width:56px;height:56px;border-radius:12px;background:#e5e7eb;display:grid;place-items:center;font-size:28px}
    h1{margin:0;font-weight:800;letter-spacing:-.02em}

    /* 2-column layout */
    .grid{display:grid;grid-template-columns: 0.9fr 1.4fr;gap:28px;margin-top:22px}
    @media (max-width: 900px){.grid{grid-template-columns:1fr}}

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
    .links-row{display:flex;gap:10px;flex-wrap:wrap}
    .plink{font-weight:600;text-decoration:none;color:#0f62fe}
  </style>
</head>
<body>
  <div class="wrap">
    <!-- Header -->
    <div class="header">
      <div class="logo">🧪</div>
      <div>
        <h1>THE Data Scientist’s Portfolio</h1>
      </div>
    </div>

    <div class="grid">
      <!-- LEFT: shorter About -->
      <section class="card">
        <div class="name">SYUZANNA MATEVOSYAN</div>
        <div class="roles">AI & Rehabilitation • Biosignals • Medical Imaging</div>
        <p class="about">I design data‑driven tools for prosthetics & neuro‑rehab: real‑time sEMG control, AR interactions, gait modeling (OpenSim/Moco), and medical‑image segmentation.</p>
        <div class="links">
          <a class="btn" href="#" target="_blank">GitHub ↗</a>
          <a class="btn" href="#" target="_blank">LinkedIn ↗</a>
          <a class="btn" href="#" target="_blank">Download CV ↗</a>
        </div>
      </section>

      <!-- RIGHT: Skills only -->
      <section class="card">
        <div class="h3">Skills</div>
        <div class="tabs">
          <div class="tab active"><span class="dot"></span>Software</div>
          <div class="tab"><span class="dot"></span>Expertise</div>
          <div class="tab"><span class="dot"></span>Language</div>
        </div>

        <!-- Software -->
        <div class="grid-chips">
          <div class="chip"><span>Python</span><span class="badge adv">Advanced</span></div>
          <div class="chip"><span>NumPy · Pandas</span><span class="badge adv">Advanced</span></div>
          <div class="chip"><span>scikit‑learn</span><span class="badge adv">Advanced</span></div>
          <div class="chip"><span>TensorFlow · Keras</span><span class="badge int">Intermediate</span></div>
          <div class="chip"><span>PyTorch</span><span class="badge bas">Basic</span></div>
          <div class="chip"><span>OpenCV</span><span class="badge int">Intermediate</span></div>
          <div class="chip"><span>MATLAB</span><span class="badge int">Intermediate</span></div>
          <div class="chip"><span>Unity (C/C#)</span><span class="badge int">Intermediate</span></div>
          <div class="chip"><span>OpenSim & Moco</span><span class="badge int">Intermediate</span></div>
          <div class="chip"><span>Git / GitHub</span><span class="badge adv">Advanced</span></div>
          <div class="chip"><span>Jupyter / Colab</span><span class="badge adv">Advanced</span></div>
          <div class="chip"><span>Biometrics DataLite DLL</span><span class="badge int">Intermediate</span></div>
        </div>

        <!-- Expertise -->
        <div style="height:18px"></div>
        <div class="h3">Expertise</div>
        <div class="grid-chips">
          <div class="chip"><span>sEMG Acquisition & Control</span><span class="badge adv">Real‑time</span></div>
          <div class="chip"><span>AR/VR Interactions</span><span class="badge int">Unity</span></div>
          <div class="chip"><span>Gesture Classification</span><span class="badge int">17 classes</span></div>
          <div class="chip"><span>Signal Processing</span><span class="badge int">Filtering · Features</span></div>
          <div class="chip"><span>Texture Features</span><span class="badge int">GLCM · LBP</span></div>
          <div class="chip"><span>Segmentation</span><span class="badge int">U‑Net</span></div>
          <div class="chip"><span>Biomechanics</span><span class="badge int">Gait · Hemiparesis</span></div>
          <div class="chip"><span>Optimization</span><span class="badge int">Moco</span></div>
          <div class="chip"><span>Dataset Curation</span><span class="badge int">Ninapro DB7</span></div>
        </div>

        <!-- Languages -->
        <div style="height:18px"></div>
        <div class="h3">Languages</div>
        <div class="grid-chips">
          <div class="chip"><span>English</span><span class="badge adv">C1</span></div>
          <div class="chip"><span>French</span><span class="badge int">Intermediate</span></div>
          <div class="chip"><span>Romanian</span><span class="badge bas">Learning</span></div>
          <div class="chip"><span>Armenian</span><span class="badge adv">Native</span></div>
          <div class="chip"><span>Greek</span><span class="badge bas">Basic</span></div>
        </div>
      </section>
    </div>

    <!-- Projects start full width below -->
    <div class="projects">
      <div class="h3">Projects</div>
      <div class="cards">
        <article class="proj">
          <h4>Real‑time sEMG Acquisition & Control</h4>
          <div class="tags"><span class="tag">Python</span><span class="tag">Biometrics DLL</span><span class="tag">UDP → Unity</span></div>
          <p class="kv"><b>Problem:</b> Need robust, low‑latency control for training & research.</p>
          <p class="kv"><b>Approach:</b> Windowed features → classifier; UDP to a Unity game for feedback.</p>
          <p class="kv"><b>Results:</b> Stable control across 17 movement classes; real‑time demos.</p>
        </article>

        <article class="proj">
          <h4>AR‑based Myoelectric Training</h4>
          <div class="tags"><span class="tag">Unity</span><span class="tag">C#</span><span class="tag">sEMG</span></div>
          <p class="kv"><b>Problem:</b> Traditional training is monotonous; poor engagement.</p>
          <p class="kv"><b>Approach:</b> AR tasks mapped to decoded gestures; adaptive difficulty; analytics.</p>
          <p class="kv"><b>Results:</b> Higher engagement & smoother signal separation during sessions.</p>
        </article>

        <article class="proj">
          <h4>Gait Modeling for Hemiparesis (OpenSim/Moco)</h4>
          <div class="tags"><span class="tag">OpenSim</span><span class="tag">Moco</span><span class="tag">Optimization</span></div>
          <p class="kv"><b>Problem:</b> Quantify effects of weakness and retraining strategies.</p>
          <p class="kv"><b>Approach:</b> Build subject‑specific models; cost functions for symmetry & effort.</p>
          <p class="kv"><b>Results:</b> Insights on strengthening vs. retraining trade‑offs; reproducible notebooks.</p>
        </article>

        <article class="proj">
          <h4>Medical Imaging Segmentation</h4>
          <div class="tags"><span class="tag">U‑Net</span><span class="tag">OpenCV</span><span class="tag">GLCM/LBP</span></div>
          <p class="kv"><b>Problem:</b> Tissue delineation & texture characterization.</p>
          <p class="kv"><b>Approach:</b> U‑Net baseline + classical features for analysis; clean training pipeline.</p>
          <p class="kv"><b>Results:</b> Strong Dice on validation; interpretable texture metrics for regions.</p>
        </article>

        <article class="proj">
          <h4>Stroke Rehabilitation Modeling</h4>
          <div class="tags"><span class="tag">OpenSim</span><span class="tag">Moco</span><span class="tag">Rehab</span></div>
          <p class="kv"><b>Problem:</b> Hemiparesis‑related gait abnormalities require tailored strategies.</p>
          <p class="kv"><b>Approach:</b> Simulate muscle strengthening and gait retraining in OpenSim with optimization.</p>
          <p class="kv"><b>Results:</b> Identified effective intervention parameters; draft thesis simulations.</p>
        </article>

        <article class="proj">
          <h4>EMG + AR Games for Prosthetics</h4>
          <div class="tags"><span class="tag">Unity</span><span class="tag">Python</span><span class="tag">UDP</span></div>
          <p class="kv"><b>Problem:</b> Amputees need motivating pre‑prosthetic training.</p>
          <p class="kv"><b>Approach:</b> Virtual arm controlled via EMG; AR games to encourage repeated practice.</p>
          <p class="kv"><b>Results:</b> Prototype tested; smoother muscle signal generation in sessions.</p>
        </article>
      </div>
        </div>

    <!-- FULL-WIDTH PROJECTS -->
    <section class="card" style="margin-top:24px">
      <div class="h3">Projects</div>
      <p class="muted" style="margin-top:0">Selected, recent & in‑progress. Problem → Approach → Results. Links to code / demos when available.</p>
      <div class="cards" style="margin-top:12px">
        <!-- 1 -->
        <article class="proj">
          <h4>Real‑time sEMG Acquisition & Control</h4>
          <div class="tags"><span class="tag">Python</span><span class="tag">Biometrics DLL</span><span class="tag">UDP → Unity</span><span class="tag">Keras</span></div>
          <p class="kv"><b>Problem:</b> Robust, low‑latency control for research & training.</p>
          <p class="kv"><b>Approach:</b> Windowed features → NN classifier; streaming via UDP to game engine; logging & replay.</p>
          <p class="kv"><b>Results:</b> Stable control across <b>17 movement classes</b>; reproducible pipeline.</p>
          <div class="links-row"><a class="plink" href="#">Code</a> · <a class="plink" href="#">Demo</a></div>
        </article>
        <!-- 2 -->
        <article class="proj">
          <h4>EMG‑Controlled Virtual Arm (Pre‑prosthetic Training)</h4>
          <div class="tags"><span class="tag">Unity</span><span class="tag">C#</span><span class="tag">sEMG</span></div>
          <p class="kv"><b>Problem:</b> Users need engaging practice before prosthesis fitting.</p>
          <p class="kv"><b>Approach:</b> UDP‑driven avatar + task library; calibration & adaptive thresholds; session analytics.</p>
          <p class="kv"><b>Results:</b> Robust control & improved session engagement.</p>
          <div class="links-row"><a class="plink" href="#">Video</a></div>
        </article>
        <!-- 3 -->
        <article class="proj">
          <h4>AR‑Based Myoelectric Training</h4>
          <div class="tags"><span class="tag">AR</span><span class="tag">Unity</span><span class="tag">Interaction</span></div>
          <p class="kv"><b>Problem:</b> Monotony leads to abandonment in training.</p>
          <p class="kv"><b>Approach:</b> AR tasks mapped to decoded gestures; adaptive difficulty; real‑time feedback.</p>
          <p class="kv"><b>Results:</b> Higher engagement & smoother signal separation.</p>
          <div class="links-row"><a class="plink" href="#">Video</a></div>
        </article>
        <!-- 4 -->
        <article class="proj">
          <h4>Gait Modeling for Hemiparesis (OpenSim/Moco)</h4>
          <div class="tags"><span class="tag">OpenSim</span><span class="tag">Moco</span><span class="tag">Optimization</span></div>
          <p class="kv"><b>Problem:</b> Evaluate strengthening vs. gait retraining strategies.</p>
          <p class="kv"><b>Approach:</b> Subject‑specific models; symmetry/effort costs; parameter sweeps.</p>
          <p class="kv"><b>Results:</b> Clear trade‑off insights; reusable notebooks for replication.</p>
          <div class="links-row"><a class="plink" href="#">Notebook</a></div>
        </article>
        <!-- 5 -->
        <article class="proj">
          <h4>Medical Imaging Segmentation</h4>
          <div class="tags"><span class="tag">U‑Net</span><span class="tag">OpenCV</span><span class="tag">PyTorch/TensorFlow</span></div>
          <p class="kv"><b>Problem:</b> Tissue delineation for downstream quantification.</p>
          <p class="kv"><b>Approach:</b> U‑Net baseline; training pipeline with augmentation & QA.</p>
          <p class="kv"><b>Results:</b> Strong Dice on validation; clean inference scripts.</p>
          <div class="links-row"><a class="plink" href="#">Repo</a> · <a class="plink" href="#">Report</a></div>
        </article>
        <!-- 6 -->
        <article class="proj">
          <h4>Tissue Characterization & Clustering</h4>
          <div class="tags"><span class="tag">GLCM</span><span class="tag">LBP</span><span class="tag">11×11</span><span class="tag">44 features</span></div>
          <p class="kv"><b>Problem:</b> Foreground/background & tissue‑type separation.</p>
          <p class="kv"><b>Approach:</b> Per‑pixel feature vectors on 11×11 neighborhoods; classical stats + clustering.</p>
          <p class="kv"><b>Results:</b> Reliable separation; interpretable feature importance.</p>
          <div class="links-row"><a class="plink" href="#">Notebook</a></div>
        </article>
        <!-- 7 -->
        <article class="proj">
          <h4>Ninapro DB7 Multimodal Decoding</h4>
          <div class="tags"><span class="tag">sEMG</span><span class="tag">IMU</span><span class="tag">PCA</span><span class="tag">Tensor Decomp</span></div>
          <p class="kv"><b>Problem:</b> Decode task variables from EMG/IMU.</p>
          <p class="kv"><b>Approach:</b> Dimensionality reduction + supervised classifiers; response characterization.</p>
          <p class="kv"><b>Results:</b> Competitive accuracy; clear visualizations of components.</p>
          <div class="links-row"><a class="plink" href="#">Code</a></div>
        </article>
        <!-- 8 -->
        <article class="proj">
          <h4>Socket‑Level Haptic Feedback (Closed‑Loop)</h4>
          <div class="tags"><span class="tag">Prototype</span><span class="tag">Haptics</span><span class="tag">sEMG</span></div>
          <p class="kv"><b>Status:</b> In progress.</p>
          <p class="kv"><b>Goal:</b> Combine EMG control with tactile cues for simultaneous motor & perception training.</p>
          <div class="links-row"><a class="plink" href="#">Design Notes</a></div>
        </article>
      </div>
    </section>

  </div>
</body>
</html>
