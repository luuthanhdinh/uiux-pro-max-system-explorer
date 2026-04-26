# UI/UX Pro Max Explorer

A React app for visualizing the `ui-ux-pro-max` design skill library — 67 styles, 96 color palettes, 57 font pairings, 25 chart types, 99 UX guidelines, and 8 fully designed multi-page system demos.

## Tech Stack

- **Vite 5 + React 18 + TypeScript**
- **Tailwind CSS v3**
- **React Router v6** — client-side routing
- **Papa Parse** — runtime CSV parsing from `public/data/`
- **clsx + tailwind-merge** — conditional classes

## Dev Commands

```bash
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build (tsc + vite)
npm run preview  # preview production build
```

## Project Structure

```
src/
├── data/
│   ├── types.ts           # TypeScript interfaces for all CSV row shapes
│   └── systemDesigns.ts   # 8 static curated system design configs
├── hooks/
│   └── useCsvData.ts      # generic fetch + Papa Parse hook
├── lib/utils.ts           # cn(), hexToRgb(), getContrastColor()
├── components/
│   ├── shell/             # AppShell, Sidebar
│   ├── ui/                # Badge, Spinner
│   ├── explorer/          # tab-level search/filter components
│   └── system/
│       ├── PageTabBar.tsx
│       └── demo-pages/    # FintechPages, AISaaSPages, GenericPages
└── pages/
    ├── HomePage.tsx
    ├── ExplorerPage.tsx   # ?tab=styles|colors|typography|charts|ux|products
    ├── SystemsPage.tsx
    └── SystemDetailPage.tsx

public/data/               # CSV data files (source: ui-ux-pro-max skill)
  ├── styles.csv
  ├── colors.csv
  ├── typography.csv
  ├── products.csv
  ├── ux-guidelines.csv
  ├── charts.csv
  ├── landing.csv
  ├── ui-reasoning.csv
  └── stacks/             # react.csv, nextjs.csv, vue.csv … (13 files)

design-system/
  ├── MASTER.md            # global design principles index
  └── pages/               # one .md per system design (8 files)
```

## Routes

| Path | Page |
|------|------|
| `/` | Home — stats, quick-access, featured designs |
| `/explorer?tab=styles` | 67 UI styles with search + filters |
| `/explorer?tab=colors` | 96 color palettes with expandable swatches |
| `/explorer?tab=typography` | 57 font pairings with live Google Fonts preview |
| `/explorer?tab=charts` | 25 chart types |
| `/explorer?tab=ux` | 99 UX guidelines |
| `/explorer?tab=products` | 96 product type recommendations |
| `/systems` | Gallery of 8 system designs |
| `/systems/:id` | Design tokens panel + browser frame + page tabs |

## Design System Files

Each of the 8 system designs has a corresponding markdown in `design-system/pages/`:
`fintech-crypto.md`, `ai-saas.md`, `healthcare.md`, `lms.md`, `luxury-ecommerce.md`, `gaming.md`, `sustainability.md`, `developer-docs.md`

## Skill Integration

The `ui-ux-pro-max` skill must be installed at `.claude/skills/ui-ux-pro-max/` for design system generation. Use it via:

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system -p "Project Name"
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain style
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --stack react
```

To refresh the CSV data in `public/data/` after skill updates:
```bash
cp .claude/skills/ui-ux-pro-max/data/*.csv public/data/
cp .claude/skills/ui-ux-pro-max/data/stacks/*.csv public/data/stacks/
```
