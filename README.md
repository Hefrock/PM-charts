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

1. Upload the contents of this folder to a GitHub repository
2. Go to Settings then Pages
3. Set source to main branch, root folder
4. Your site will be live at https://username.github.io/repo-name

## Development

To add widget code to a chart page:

1. Open the relevant file in `charts/`
2. Replace the placeholder div inside `.widget-wrap` with the widget HTML
3. All colours must use `--pm-*` CSS variables from `assets/styles.css`
4. Chart.js is loaded from CDN — read grid and axis colours from CSS vars at runtime

## Assets

- `assets/styles.css` — shared design token system, light and dark mode
- `assets/nav.js` — shared navigation component with progress bar
- `assets/chart.min.js` — Chart.js placeholder (replace with actual file or use CDN)

## Credits

Chart.js — copyright 2014-2023 Chart.js Contributors, MIT License.
Tabler Icons — MIT License.
