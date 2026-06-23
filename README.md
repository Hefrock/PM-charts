# PM Chart Library

15 interactive charts every project manager needs to know.
Built as a visual reference and learning tool — fully interactive with simulation features.

## Charts

| # | Chart | Category | Simulation |
|---|-------|----------|-----------|
| 1 | Gantt chart | Schedule | Scenarios |
| 2 | S-Curve | Schedule | Full |
| 3 | Priority roadmap | Reference | — |
| 4 | Risk matrix | Risk | Live register |
| 5 | Critical path diagram | Schedule | Full |
| 6 | Stakeholder grid | People | — |
| 7 | Burn-down chart | Schedule | Scenarios |
| 8 | RACI matrix | People | Health check |
| 9 | Resource histogram | People | Full |
| 10 | EVM curves | Finance | Full |
| 11 | Pareto chart | Finance | Full |
| 12 | Tornado diagram | Risk | Full |
| 13 | Cumulative flow diagram | Schedule | Full |
| 14 | Control chart | Risk | Full |
| 15 | Fishbone diagram | Reference | Full |

## Features

- Fully interactive — all charts have live controls and simulation modes
- Light and dark mode — automatically adapts to system preference
- No build step — pure HTML, CSS and JavaScript
- Self-contained pages — each chart works independently
- Consistent design — shared token system across all charts

## Hosting on GitHub Pages

This repository is configured to publish from the `main` branch (root folder) via Settings then Pages.
The site is live at https://hefrock.github.io/PM-charts/

(Note: the repository name is case-sensitive in the Pages URL path — it must match `PM-charts` exactly, or the page 404s.)

## Development

All 15 charts have fully built, interactive widgets. To modify one:

1. Open the relevant file in `charts/`
2. Edit the markup inside `.widget-wrap` and its inline `<script>` block
3. All colours must use `--pm-*` CSS variables from `assets/styles.css`
4. Chart.js is loaded locally from `assets/chart.min.js` — read grid and axis colours from CSS vars at runtime so charts re-theme on light/dark changes

## Assets

- `assets/styles.css` — shared design token system, light and dark mode
- `assets/nav.js` — shared navigation component with progress bar
- `assets/chart.min.js` — Chart.js v4.4.1 (minified UMD build), used by charts 02, 07, 09, 10, 11, 13 and 14

## Credits

Chart.js — copyright 2014-2023 Chart.js Contributors, MIT License.
Tabler Icons — MIT License.
