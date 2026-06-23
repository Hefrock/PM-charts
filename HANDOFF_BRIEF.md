# PM Chart Library — Handoff Brief
# Complete instructions for packaging session
# Paste this into a fresh Claude.ai chat to continue

---

## MISSION

Build and package a complete PM Chart Library as a GitHub Pages site.
Deliver a single `pm-chart-library.zip` file ready to upload to GitHub.

---

## SITE STRUCTURE

```
pm-chart-library/
├── index.html
├── assets/
│   ├── styles.css        (design token system — provided below)
│   ├── chart.min.js      (Chart.js CDN copy — fetch from cdnjs)
│   └── nav.js            (shared navigation component)
├── charts/
│   ├── 01-gantt.html
│   ├── 02-s-curve.html
│   ├── 03-priority-roadmap.html
│   ├── 04-risk-matrix.html
│   ├── 05-critical-path.html
│   ├── 06-stakeholder-grid.html
│   ├── 07-burn-down.html
│   ├── 08-raci-matrix.html
│   ├── 09-resource-histogram.html
│   ├── 10-evm-curves.html
│   ├── 11-pareto-chart.html
│   ├── 12-tornado-diagram.html
│   ├── 13-cumulative-flow.html
│   ├── 14-control-chart.html
│   └── 15-fishbone.html
├── LICENSE
└── README.md
```

---

## CRITICAL RULES

1. NO dot files (no .gitignore etc) — user uploads manually to GitHub
2. All chart pages are self-contained HTML — no external dependencies
   except Chart.js loaded from assets/chart.min.js
3. Every colour uses CSS variables from assets/styles.css — no hardcoded hex
4. All pages must work in light AND dark mode automatically
5. Navigation bar appears on every page
6. ZIP filename: pm-chart-library.zip

---

## DESIGN TOKEN SYSTEM (assets/styles.css)

```css
/* PM Chart Library — Shared Design Tokens */
/* assets/styles.css */

:root {
  --pm-coral-50:#FAECE7;  --pm-coral-200:#F0997B;  --pm-coral-400:#D85A30;
  --pm-coral-600:#993C1D; --pm-coral-800:#712B13;  --pm-coral-900:#4A1B0C;

  --pm-purple-50:#EEEDFE; --pm-purple-200:#AFA9EC; --pm-purple-400:#7F77DD;
  --pm-purple-600:#534AB7;--pm-purple-800:#3C3489; --pm-purple-900:#26215C;

  --pm-blue-50:#E6F1FB;   --pm-blue-200:#85B7EB;   --pm-blue-400:#378ADD;
  --pm-blue-600:#185FA5;  --pm-blue-800:#0C447C;   --pm-blue-900:#042C53;

  --pm-teal-50:#E1F5EE;   --pm-teal-200:#5DCAA5;   --pm-teal-400:#1D9E75;
  --pm-teal-600:#0F6E56;  --pm-teal-800:#085041;   --pm-teal-900:#04342C;

  --pm-amber-50:#FAEEDA;  --pm-amber-200:#EF9F27;  --pm-amber-400:#BA7517;
  --pm-amber-600:#854F0B; --pm-amber-800:#633806;  --pm-amber-900:#412402;

  --pm-red-50:#FCEBEB;    --pm-red-200:#F09595;    --pm-red-400:#E24B4A;
  --pm-red-600:#A32D2D;   --pm-red-800:#791F1F;    --pm-red-900:#501313;

  --pm-green-50:#EAF3DE;  --pm-green-200:#97C459;  --pm-green-400:#639922;
  --pm-green-600:#3B6D11; --pm-green-800:#27500A;  --pm-green-900:#173404;

  --pm-gray-50:#F1EFE8;   --pm-gray-200:#B4B2A9;   --pm-gray-400:#888780;
  --pm-gray-600:#5F5E5A;  --pm-gray-800:#444441;   --pm-gray-900:#2C2C2A;

  /* Category tokens */
  --pm-people-bg:var(--pm-coral-50);   --pm-people-bd:var(--pm-coral-400);
  --pm-people-tx:var(--pm-coral-800);  --pm-people-sl:var(--pm-coral-400);

  --pm-process-bg:var(--pm-purple-50); --pm-process-bd:var(--pm-purple-600);
  --pm-process-tx:var(--pm-purple-800);--pm-process-sl:var(--pm-purple-600);

  --pm-tools-bg:var(--pm-blue-50);     --pm-tools-bd:var(--pm-blue-600);
  --pm-tools-tx:var(--pm-blue-800);    --pm-tools-sl:var(--pm-blue-600);

  --pm-env-bg:var(--pm-teal-50);       --pm-env-bd:var(--pm-teal-400);
  --pm-env-tx:var(--pm-teal-800);      --pm-env-sl:var(--pm-teal-400);

  --pm-mat-bg:var(--pm-amber-50);      --pm-mat-bd:var(--pm-amber-400);
  --pm-mat-tx:var(--pm-amber-800);     --pm-mat-sl:var(--pm-amber-400);

  --pm-meas-bg:var(--pm-gray-50);      --pm-meas-bd:var(--pm-gray-400);
  --pm-meas-tx:var(--pm-gray-800);     --pm-meas-sl:var(--pm-gray-600);

  /* Status tokens */
  --pm-good-bg:var(--pm-green-50);  --pm-good-tx:var(--pm-green-800); --pm-good-bd:var(--pm-green-400);
  --pm-warn-bg:var(--pm-amber-50);  --pm-warn-tx:var(--pm-amber-800); --pm-warn-bd:var(--pm-amber-400);
  --pm-bad-bg:var(--pm-red-50);     --pm-bad-tx:var(--pm-red-800);    --pm-bad-bd:var(--pm-red-400);
  --pm-info-bg:var(--pm-blue-50);   --pm-info-tx:var(--pm-blue-800);  --pm-info-bd:var(--pm-blue-600);

  /* Chart.js */
  --pm-chart-grid:rgba(0,0,0,0.07);
  --pm-chart-axis:#888780;
  --pm-chart-tooltip-bg:#ffffff;
  --pm-chart-tooltip-bd:rgba(0,0,0,0.15);
  --pm-chart-tooltip-tx:#2C2C2A;

  /* Surfaces */
  --pm-surface:#ffffff;
  --pm-surface-sub:#F1EFE8;
  --pm-border:rgba(0,0,0,0.10);
  --pm-border-strong:rgba(0,0,0,0.20);
  --pm-tx-primary:#2C2C2A;
  --pm-tx-secondary:#5F5E5A;
  --pm-tx-tertiary:#888780;

  /* Spacing */
  --pm-radius-sm:6px; --pm-radius-md:8px;
  --pm-radius-lg:12px; --pm-radius-pill:20px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --pm-people-bg:var(--pm-coral-900);  --pm-people-bd:var(--pm-coral-200);  --pm-people-tx:var(--pm-coral-50);
    --pm-process-bg:var(--pm-purple-900);--pm-process-bd:var(--pm-purple-200);--pm-process-tx:var(--pm-purple-50);
    --pm-tools-bg:var(--pm-blue-900);    --pm-tools-bd:var(--pm-blue-200);    --pm-tools-tx:var(--pm-blue-50);
    --pm-env-bg:var(--pm-teal-900);      --pm-env-bd:var(--pm-teal-200);      --pm-env-tx:var(--pm-teal-50);
    --pm-mat-bg:var(--pm-amber-900);     --pm-mat-bd:var(--pm-amber-200);     --pm-mat-tx:var(--pm-amber-50);
    --pm-meas-bg:var(--pm-gray-900);     --pm-meas-bd:var(--pm-gray-200);     --pm-meas-tx:var(--pm-gray-50);

    --pm-good-bg:var(--pm-green-900);  --pm-good-tx:var(--pm-green-50);  --pm-good-bd:var(--pm-green-400);
    --pm-warn-bg:var(--pm-amber-900);  --pm-warn-tx:var(--pm-amber-50);  --pm-warn-bd:var(--pm-amber-400);
    --pm-bad-bg:var(--pm-red-900);     --pm-bad-tx:var(--pm-red-50);     --pm-bad-bd:var(--pm-red-400);
    --pm-info-bg:var(--pm-blue-900);   --pm-info-tx:var(--pm-blue-50);   --pm-info-bd:var(--pm-blue-400);

    --pm-chart-grid:rgba(255,255,255,0.08);
    --pm-chart-axis:#B4B2A9;
    --pm-chart-tooltip-bg:#2C2C2A;
    --pm-chart-tooltip-bd:rgba(255,255,255,0.15);
    --pm-chart-tooltip-tx:#F1EFE8;

    --pm-surface:#1a1a18;
    --pm-surface-sub:#242422;
    --pm-border:rgba(255,255,255,0.10);
    --pm-border-strong:rgba(255,255,255,0.20);
    --pm-tx-primary:#F1EFE8;
    --pm-tx-secondary:#B4B2A9;
    --pm-tx-tertiary:#888780;
  }
}

/* Shared component classes */
* { box-sizing: border-box; }

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 12px;
  color: var(--pm-tx-primary);
  background: var(--pm-surface-sub);
  margin: 0;
  padding: 0;
}

.pm-tab-btn {
  font-size: 12px; padding: 5px 14px;
  border: 0.5px solid var(--pm-border-strong);
  border-radius: 20px; background: transparent;
  color: var(--pm-tx-secondary); cursor: pointer;
  transition: background .12s, color .12s;
}
.pm-tab-btn.on {
  background: var(--pm-coral-400);
  color: #fff; border-color: var(--pm-coral-400);
}

.pm-kpi {
  background: var(--pm-surface); border: 0.5px solid var(--pm-border);
  border-radius: 8px; padding: .65rem .875rem; text-align: center;
}
.pm-kpi-good { background:var(--pm-good-bg); border-color:var(--pm-good-bd); color:var(--pm-good-tx); }
.pm-kpi-warn { background:var(--pm-warn-bg); border-color:var(--pm-warn-bd); color:var(--pm-warn-tx); }
.pm-kpi-bad  { background:var(--pm-bad-bg);  border-color:var(--pm-bad-bd);  color:var(--pm-bad-tx); }
.pm-kpi-info { background:var(--pm-info-bg); border-color:var(--pm-info-bd); color:var(--pm-info-tx); }

.pm-chip {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 11px; font-weight: 500; padding: 4px 10px;
  border-radius: 20px; cursor: pointer;
  border: 0.5px solid transparent;
  transition: transform .1s;
}
.pm-chip:hover { transform: scale(1.04); }

.pm-insight {
  border-radius: 8px; padding: .75rem 1rem;
  font-size: 12px; line-height: 1.65; margin-top: 10px;
}
```

---

## SHARED NAVIGATION (assets/nav.js)

```javascript
// Shared navigation component for all chart pages
// Usage: <script src="../assets/nav.js"></script>
// Add <div id="pm-nav"></div> at top of each chart page body

(function() {
  const CHARTS = [
    { n: '01', title: 'Gantt chart',          file: '01-gantt.html' },
    { n: '02', title: 'S-Curve',              file: '02-s-curve.html' },
    { n: '03', title: 'Priority roadmap',     file: '03-priority-roadmap.html' },
    { n: '04', title: 'Risk matrix',          file: '04-risk-matrix.html' },
    { n: '05', title: 'Critical path',        file: '05-critical-path.html' },
    { n: '06', title: 'Stakeholder grid',     file: '06-stakeholder-grid.html' },
    { n: '07', title: 'Burn-down chart',      file: '07-burn-down.html' },
    { n: '08', title: 'RACI matrix',          file: '08-raci-matrix.html' },
    { n: '09', title: 'Resource histogram',   file: '09-resource-histogram.html' },
    { n: '10', title: 'EVM curves',           file: '10-evm-curves.html' },
    { n: '11', title: 'Pareto chart',         file: '11-pareto-chart.html' },
    { n: '12', title: 'Tornado diagram',      file: '12-tornado-diagram.html' },
    { n: '13', title: 'Cumulative flow',      file: '13-cumulative-flow.html' },
    { n: '14', title: 'Control chart',        file: '14-control-chart.html' },
    { n: '15', title: 'Fishbone diagram',     file: '15-fishbone.html' },
  ];

  const currentFile = window.location.pathname.split('/').pop();
  const isIndex = currentFile === 'index.html' || currentFile === '';
  const currentIdx = CHARTS.findIndex(c => c.file === currentFile);
  const prev = currentIdx > 0 ? CHARTS[currentIdx - 1] : null;
  const next = currentIdx < CHARTS.length - 1 ? CHARTS[currentIdx + 1] : null;

  const navHTML = `
    <nav style="
      background: var(--pm-surface);
      border-bottom: 0.5px solid var(--pm-border-strong);
      padding: 10px 20px;
      display: flex;
      align-items: center;
      gap: 12px;
      position: sticky;
      top: 0;
      z-index: 100;
    ">
      <a href="${isIndex ? '#' : '../index.html'}" style="
        font-size: 13px; font-weight: 500;
        color: var(--pm-coral-400);
        text-decoration: none;
        white-space: nowrap;
      ">PM Chart Library</a>
      <span style="color: var(--pm-border-strong); font-size: 16px">|</span>
      ${!isIndex && currentIdx >= 0 ? `
        <span style="font-size: 12px; color: var(--pm-tx-secondary)">
          Chart ${currentIdx + 1} of ${CHARTS.length}
        </span>
        <div style="flex:1; height:3px; background:var(--pm-border); border-radius:2px; overflow:hidden">
          <div style="height:100%; width:${Math.round((currentIdx+1)/CHARTS.length*100)}%;
            background:var(--pm-coral-400); border-radius:2px; transition: width .3s"></div>
        </div>
        <div style="display:flex; gap:6px">
          ${prev ? `<a href="${prev.file}" style="font-size:11px; color:var(--pm-tx-secondary);
            text-decoration:none; padding:3px 8px; border:0.5px solid var(--pm-border-strong);
            border-radius:20px; white-space:nowrap">← ${prev.title}</a>` : ''}
          ${next ? `<a href="${next.file}" style="font-size:11px; color:var(--pm-tx-secondary);
            text-decoration:none; padding:3px 8px; border:0.5px solid var(--pm-border-strong);
            border-radius:20px; white-space:nowrap">${next.title} →</a>` : ''}
        </div>
      ` : `
        <span style="font-size:12px; color:var(--pm-tx-secondary)">
          15 interactive charts for project managers
        </span>
      `}
    </nav>
  `;

  document.addEventListener('DOMContentLoaded', function() {
    const el = document.getElementById('pm-nav');
    if (el) el.innerHTML = navHTML;
  });
})();
```

---

## INDEX PAGE SPEC (index.html)

Build a clean landing page with:

- Nav bar (from nav.js)
- Hero: "PM Chart Library" heading, subtitle "15 interactive charts every project manager needs"
- A 3-column card grid (5 rows of 3) — one card per chart
- Each card shows: chart number badge, chart name, one-line description, a coloured tag for category, and a "Open chart →" link
- Card categories and colours:
  - Schedule (coral): Gantt, S-Curve, Critical Path, Burn-down, CFD
  - Risk (red): Risk Matrix, Tornado Diagram, Control Chart
  - People (teal): Stakeholder Grid, RACI, Resource Histogram
  - Finance (amber): EVM Curves, Pareto Chart
  - Reference (purple): Priority Roadmap, Fishbone
- Footer: "Built as a learning resource. All charts are interactive."

Chart one-line descriptions:
1. Gantt — Timeline, dependencies and critical path in one view
2. S-Curve — Cumulative cost and schedule health at a glance
3. Priority roadmap — All 15 charts ranked by frequency and impact
4. Risk matrix — Probability vs impact with live response strategies
5. Critical path — Find what's truly unmovable in your schedule
6. Stakeholder grid — Power and interest mapped to engagement strategies
7. Burn-down — Sprint progress and bottleneck signals day by day
8. RACI matrix — Accountability without confusion across all tasks
9. Resource histogram — Spot over-allocation before it causes burnout
10. EVM curves — Schedule and cost performance in one financial view
11. Pareto chart — The 20% of causes driving 80% of your problems
12. Tornado diagram — Risk impact ranked for budget conversations
13. Cumulative flow — Where work is piling up in your workflow
14. Control chart — Separate real problems from normal variation
15. Fishbone — Structured root cause analysis for retrospectives

---

## CHART PAGE TEMPLATE

Every chart page follows this HTML shell:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[CHART NAME] — PM Chart Library</title>
  <link rel="stylesheet" href="../assets/styles.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.44.0/tabler-icons.min.css">
  <script src="../assets/chart.min.js"></script>
  <script src="../assets/nav.js"></script>
  <style>
    /* Chart-specific styles only — no colours, use token vars */
    .chart-wrap { max-width: 860px; margin: 0 auto; padding: 24px 20px; }
    .chart-header { margin-bottom: 20px; }
    .chart-title { font-size: 22px; font-weight: 500; color: var(--pm-tx-primary); margin: 0 0 6px; }
    .chart-subtitle { font-size: 14px; color: var(--pm-tx-secondary); margin: 0 0 20px; line-height: 1.5; }
    /* --- documentation sections --- */
    .doc-section { margin-top: 32px; border-top: 0.5px solid var(--pm-border); padding-top: 20px; }
    .doc-title { font-size: 14px; font-weight: 500; color: var(--pm-tx-primary); margin: 0 0 10px; }
    .doc-body { font-size: 13px; color: var(--pm-tx-secondary); line-height: 1.75; }
    .doc-body strong { color: var(--pm-tx-primary); font-weight: 500; }
    .expert-tip { background: var(--pm-people-bg); border: 0.5px solid var(--pm-people-bd);
      border-radius: 8px; padding: 14px 16px; margin-top: 12px;
      font-size: 12px; color: var(--pm-people-tx); line-height: 1.65; }
  </style>
</head>
<body>
  <div id="pm-nav"></div>
  <div class="chart-wrap">
    <div class="chart-header">
      <h1 class="chart-title">[CHART NAME]</h1>
      <p class="chart-subtitle">[ONE LINE INTRO]</p>
    </div>

    <!-- INTERACTIVE WIDGET GOES HERE -->
    [PASTE WIDGET HTML+CSS+JS]

    <!-- DOCUMENTATION -->
    <div class="doc-section">
      <h2 class="doc-title">What you're looking at</h2>
      <div class="doc-body">[ANATOMY TEXT]</div>
    </div>

    <div class="doc-section">
      <h2 class="doc-title">What most PMs miss</h2>
      <div class="doc-body">[MISTAKES TEXT]</div>
    </div>

    <div class="doc-section">
      <h2 class="doc-title">The expert tip</h2>
      <div class="expert-tip">[EXPERT TIP TEXT]</div>
    </div>
  </div>
</body>
</html>
```

---

## DOCUMENTATION TEXT PER CHART

### Chart 01 — Gantt
**Anatomy:** Each bar spans the task's start to end week. Bold tasks with ★ are on the critical path. Milestones are zero-duration diamonds. The red line is today. Dependencies are shown on hover. Use the filters to focus by phase, owner or status.

**Misses:** Most PMs build a Gantt but forget to baseline it. Without a frozen baseline you cannot measure variance — you are just editing history. Lock the baseline on kickoff day and treat every subsequent change as a formal change request with a date stamp.

**Expert tip:** When a sponsor asks you to compress the schedule, pull up the critical path filter first. Crashing a non-critical task wastes money and looks incompetent. Only crash tasks with zero float.

### Chart 02 — S-Curve
**Anatomy:** Three lines tell the complete story. PV (purple) is the baseline — cumulative value of work planned. EV (green) is the cumulative budgeted value of work actually completed. AC (red) is what you actually spent. The amber dashed line is the forecast. The KPI cards give SPI, CPI, actual spend and forecast final cost.

**Misses:** PMs show the S-curve but don't overlay all three lines — planned, actual and forecast together. Three lines are required, not one. Also: underspend in early phases looks good but usually signals slow mobilisation, not efficiency.

**Expert tip:** Show the S-curve in every status report without being asked. Execs who see it unprompted trust you more — it signals you are tracking proactively, not reactively.

### Chart 03 — Priority Roadmap
**Anatomy:** All 15 charts ranked by frequency of use and impact, with filters by tag. Click any card to see when to use it, what most PMs miss, and an expert tip. Use the Build this chart button to jump to any chart directly.

**Misses:** Most PMs know the Gantt and RACI but are unfamiliar with EVM, Tornado diagrams and Control charts. These three tools are the mark of senior programme management and are almost never taught in basic PM courses.

**Expert tip:** The most valuable charts are not the most frequently used. The Tornado diagram and Control chart are used rarely but have outsized impact in budget conversations and steering committee meetings.

### Chart 04 — Risk Matrix
**Anatomy:** A 5×5 grid where probability meets impact. Score = probability × impact. Green (1–3) monitor passively. Amber (4–8) assign an owner. Red (9–15) escalate. Deep red (16–25) immediate action. The register sorts by score. Click any dot for response strategy.

**Misses:** Risks are scored at kickoff and never updated. A risk matrix is a living document — stale risks are worse than no matrix. Add a trend column showing whether each risk is worsening or improving week over week.

**Expert tip:** For every red or critical risk, write a specific trigger — a measurable event that automatically activates the response plan. Not "if the developer leaves we will hire" but "if the developer gives notice before week 8 we engage the backup contractor within 24 hours."

### Chart 05 — Critical Path
**Anatomy:** Each node shows duration, Early Start, Early Finish and float. Purple nodes with float = 0 are the critical path. The delay simulator lets you slip any task and watch the end date and float recalculate live. Forward pass moves left to right calculating earliest times. Backward pass calculates latest times. Float is the gap.

**Misses:** The critical path changes during the project. A task that had float in week 1 may have none by week 6 because other delays consumed the buffer. Recalculate it weekly during execution, not just at kickoff.

**Expert tip:** When a sponsor demands schedule compression, pull up the critical path first. Only tasks with zero float can shorten the end date. Crashing non-critical tasks wastes money. This chart turns that conversation from opinion into fact.

### Chart 06 — Stakeholder Grid
**Anatomy:** Power on the vertical axis, interest on the horizontal. Four quadrants: Manage closely (top right, weekly), Keep satisfied (top left, monthly), Keep informed (bottom right, fortnightly), Monitor (bottom left, quarterly). Drag dots to reposition. Sentiment colours show champion/supporter/neutral/skeptic/blocker.

**Misses:** Mapping stakeholders once at kickoff and filing it away. Stakeholder positions drift — a reorganisation or missed milestone can shift someone from Monitor to Manage closely overnight. Re-plot before every major project event.

**Expert tip:** Before every steering committee meeting, re-plot the grid and ask for each stakeholder: has anything changed in their world? A new boss, budget pressure, or bad experience with a similar project. Five minutes of reflection prevents the most common project crisis — the stakeholder surprise.

### Chart 07 — Burn-down
**Anatomy:** Vertical axis is story points remaining. Horizontal is days across the sprint. The dashed gray line is ideal burn. The blue line is actual remaining work. The amber dashed line is the forecast. Red dots signal danger. Four scenarios show the four patterns every Agile PM must recognise.

**Misses:** A flat burn-down early in the sprint feels harmless. By day 3 it is a crisis. With 7 days left and all points untouched, the team needs to burn at double the planned pace. Intervene on day 1, not day 7.

**Expert tip:** On day 3 of every sprint, compare actual remaining to ideal. If the gap exceeds 20% of total points, raise it immediately. You have 7 days to recover on day 3. You have 1 day to recover on day 9.

### Chart 08 — RACI Matrix
**Anatomy:** Rows are tasks grouped by phase. Columns are roles. Click any cell to cycle R → A → C → I → blank. Red rows have accountability problems. Health check tab runs automatic audit. Templates tab loads four industry pre-sets. Every task needs exactly one A and at least one R.

**Misses:** Two As on a single row. It feels collaborative but destroys accountability — when two people are both accountable, each assumes the other is handling it. One A per row is a hard rule with no exceptions.

**Expert tip:** Run the health check before your kickoff meeting. The errors it surfaces are conversations you need to have while the project is still in setup. After kickoff those conversations become political.

### Chart 09 — Resource Histogram
**Anatomy:** Stacked bars show every person's weekly allocation as a percentage of capacity. 100% means fully booked. The per-person tab breaks the stack apart. Simulator tab lets you drag individual weekly allocations and watch over-allocation alerts recalculate live.

**Misses:** Planning tasks without visualising resource loading — the root cause of most burnout and deadline failures. Plan anyone at sustained 100% with zero buffer and the first surprise turns into a missed deadline.

**Expert tip:** When you find an over-allocated person, your first move should never be "ask them to work harder" — it should be looking at the under-utilised names on the same chart. The histogram is a rebalancing tool, not just a warning system.

### Chart 10 — EVM Curves
**Anatomy:** PV (purple) is planned value. EV (green) is earned value — the budgeted cost of work completed. AC (red) is actual cost. EAC forecast (amber dashed) is where you will finish. SPI measures schedule efficiency. CPI measures cost efficiency. Both below 0.95 means double variance.

**Misses:** EV is the most misunderstood number. It is not what you spent. It is the budgeted value of work that meets the definition of done. A task 90% complete has earned zero until it crosses the completion threshold.

**Expert tip:** Translate CPI into dollars before presenting. "Our CPI is 0.84" lands as a technical abstraction. "For every dollar of work we complete we are spending $1.19" lands as a business problem. Use that sentence verbatim in your next sponsor conversation.

### Chart 11 — Pareto Chart
**Anatomy:** Bars sorted descending by frequency — biggest cause on the left. Amber bars are the vital few that drive 80% of issues. Gray bars are the trivial many. Purple line is cumulative percentage. Red dashed line is the 80% threshold. Simulator lets you adjust cause counts and watch the 80/20 line recalculate.

**Misses:** Teams list all causes, debate all of them, and assign actions for all of them. Six weeks later nothing has changed because effort was spread across everything. Choose the top two or three and fix only those.

**Expert tip:** After identifying the vital few, run the 5 Whys down each one before assigning any action. The cause on the Pareto is always a symptom. "Unclear requirements" is not a root cause — it is the result of something deeper.

### Chart 12 — Tornado Diagram
**Anatomy:** Each bar is a risk sorted by total impact range — widest at top. Red bars show downside cost overrun. Green bars show upside saving. Purple centre line is the base estimate. Simulator lets you drag each risk's downside and watch contingency requirement recalculate live.

**Misses:** The tornado is built once for the business case and never revisited. The most valuable use is mid-project when you know more. Re-run at 25%, 50% and 75% completion to check if contingency reserve is still adequate.

**Expert tip:** In a budget conversation, point to the top three bars and say: "These three risks account for 70% of our contingency requirement — if we mitigate just these, our reserve drops from X to Y." Run that scenario live in the room using the simulator.

### Chart 13 — Cumulative Flow Diagram
**Anatomy:** Each coloured band is a workflow stage stacked over time. Stable band width means smooth flow. Widening band means work is accumulating — that is your bottleneck. Narrowing band means work is drying up — starvation. Simulator lets you drag stage throughput and watch patterns form live.

**Misses:** The CFD is only reviewed in retrospectives when damage is already done. A widening band on day 3 is a five-minute conversation. The same band on day 8 is a sprint failure. Check it in every standup.

**Expert tip:** Little's Law: Cycle Time = WIP ÷ Throughput. Reducing WIP directly reduces cycle time without speeding anyone up. Show a CFD where WIP is high and throughput is flat and you have a data-driven argument for WIP limits stronger than any process conversation.

### Chart 14 — Control Chart
**Anatomy:** Data points plotted over time with three reference lines: mean centre line (green), UCL and LCL at ±3σ (red dashed). Points inside limits are normal variation. Red points are signals. Rule 1: any point beyond limits. Rule 2: eight consecutive points on one side of mean. Rule 3: six consecutive increasing or decreasing points.

**Misses:** Reacting to every data point as if it is significant. A control chart tells you when to act and when not to. A point inside the limits with no pattern? Leave it alone. A point outside the limits? Stop and investigate.

**Expert tip:** The chart's most underrated use is defending against overreaction. When a sponsor sees one bad week and demands an explanation, show the control chart — the point is within limits, it is normal variation, and five similar dips in previous weeks did not prompt concern. That evidence-based calmness builds trust.

### Chart 15 — Fishbone
**Anatomy:** Six category lanes: People, Process, Tools, Environment, Materials, Measurement. Compact view shows one row per category. Expanded view shows all causes as cards. Click any cause to drill into the 5 Whys chain. Simulator weights lanes to show team focus. Build tab lets you create your own diagram.

**Misses:** The fishbone is built in a meeting with the loudest voice dominating. People and Process bones fill up while Tools, Environment and Measurement stay empty — not because the problem lives there but because those are easiest to populate without data.

**Expert tip:** Run the 5 Whys on every cause that appears in more than one category. Causes that cross category boundaries almost always point to a single systemic root cause generating multiple symptoms simultaneously. Fix that one root cause and several fishbone branches clear at once.

---

## CHART WIDGET CODE

The widget code for all 15 charts is too large to include in this brief.

### How to get each widget

Each chart was built and verified in a previous Claude.ai session.
To get the widget code for each chart, ask Claude:

"Rebuild chart [N] — [NAME] as a self-contained HTML widget using
the PM Chart Library token system (CSS variables --pm-* for all colours).
The widget should be ready to embed in a chart page HTML shell."

Or reference the verified versions from the original session which
are available at the session URL provided separately.

### Token compliance rules for widgets

When rebuilding or adapting widgets:
1. Replace ALL hardcoded hex values with CSS variable equivalents
2. Use --pm-good/warn/bad/info-bg/tx/bd for status colours
3. Use --pm-surface and --pm-surface-sub for backgrounds
4. Use --pm-tx-primary/secondary/tertiary for text
5. Use --pm-border and --pm-border-strong for borders
6. For Chart.js: read grid/axis/tooltip colours from CSS vars at runtime:
   const grid = getComputedStyle(document.documentElement)
     .getPropertyValue('--pm-chart-grid').trim();

### Charts requiring Chart.js
02, 07, 09, 10, 11, 13, 14

### Charts with draggable elements (need touch events)
05 Critical path — delay sliders (already keyboard/touch friendly)
06 Stakeholder grid — drag dots (add touchstart/touchmove/touchend)
04 Risk matrix — dot repositioning (add touch events)

Touch event pattern to add:
  element.addEventListener('touchstart', e => {
    const touch = e.touches[0];
    startDrag(touch.clientX, touch.clientY);
    e.preventDefault();
  }, { passive: false });
  element.addEventListener('touchmove', e => {
    const touch = e.touches[0];
    onMove(touch.clientX, touch.clientY);
    e.preventDefault();
  }, { passive: false });
  element.addEventListener('touchend', stopDrag);

---

## README.md CONTENT

```markdown
# PM Chart Library

15 interactive charts every project manager needs to know.
Built as a visual reference and learning tool.

## Charts included

| # | Chart | Category |
|---|-------|----------|
| 1 | Gantt chart | Schedule |
| 2 | S-Curve | Schedule |
| 3 | Priority roadmap | Reference |
| 4 | Risk matrix | Risk |
| 5 | Critical path diagram | Schedule |
| 6 | Stakeholder power/interest grid | People |
| 7 | Burn-down chart | Schedule |
| 8 | RACI matrix | People |
| 9 | Resource histogram | People |
| 10 | EVM curves | Finance |
| 11 | Pareto chart | Finance |
| 12 | Tornado diagram | Risk |
| 13 | Cumulative flow diagram | Schedule |
| 14 | Control chart | Risk |
| 15 | Fishbone / Ishikawa diagram | Reference |

## Features

- Fully interactive — all charts have live controls and simulation
- Light and dark mode — automatically adapts to system preference
- No dependencies — pure HTML, CSS and JavaScript
- Self-contained — each chart page works independently

## Hosting on GitHub Pages

1. Upload contents of this folder to a GitHub repository
2. Go to Settings → Pages
3. Set source to main branch, root folder
4. Your site will be live at https://username.github.io/repo-name

## Built with

Chart.js for data visualisations.
```

---

## LICENSE CONTENT

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software.

Chart.js is copyright (c) 2014-2023 Chart.js Contributors, MIT License.
```

---

## BUILD INSTRUCTIONS FOR CLAUDE

When you receive this brief, do the following in order:

1. Create the folder structure in /home/claude/pm-chart-library/
2. Write assets/styles.css from the token system above
3. Write assets/nav.js from the navigation component above
4. Download Chart.js to assets/chart.min.js:
   curl -o /home/claude/pm-chart-library/assets/chart.min.js \
   https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js
5. Write index.html from the index page spec above
6. Write each of the 15 chart HTML files using the page template
7. Write README.md and LICENSE from the content above
8. Zip everything:
   cd /home/claude && zip -r pm-chart-library.zip pm-chart-library/
9. Present the zip file for download

For each chart page, the widget code should be rebuilt fresh using
the token system. Prioritise correctness over speed — each chart
must work in both light and dark mode before moving to the next.

Start with charts 01, 02, 05, 10, 14 as they are the most
technically complex. Do the simpler ones (03, 06, 08) last.

---

END OF HANDOFF BRIEF
