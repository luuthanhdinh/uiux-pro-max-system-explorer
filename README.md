# UI/UX Pro Max System Explorer

An interactive React app for visualizing the [`uiux-pro-max-skill`](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) design library. Browse 67 UI styles, 96 color palettes, 57 font pairings, 25 chart types, and 99 UX guidelines — plus 8 fully designed multi-page system demos with live design token previews and navigable page flows.

![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)

---

## Features

### Explorer
Browse all design assets from the skill library across 6 tabs:

| Tab | Content |
|-----|---------|
| **Styles** | 67 UI styles with descriptions, tags, and use cases |
| **Colors** | 96 color palettes with expandable hex swatches |
| **Typography** | 57 font pairings with live Google Fonts preview |
| **Charts** | 25 chart types with library recommendations |
| **UX Guidelines** | 99 best practices organized by priority |
| **Products** | 96 product type recommendations |

### System Designs
8 fully designed multi-page system demos — each with a design token panel (colors, typography, style), a browser-frame preview, and multiple navigable pages:

| System | Style | Pages |
|--------|-------|-------|
| **Fintech Crypto Desk** | Glassmorphism + Dark OLED | Landing, Dashboard, Portfolio, Onboarding, Trade |
| **AI SaaS Platform** | AI-Native UI + Minimalism | Landing, Pricing, Dashboard, Docs |
| **Healthcare Portal** | Neumorphism + Accessible | Landing, Dashboard, Appointment, Records |
| **E-Learning (LMS)** | Claymorphism + Vibrant | Landing, Catalog, Course, My Progress |
| **Luxury E-Commerce** | Liquid Glass + Glassmorphism | Landing, Listing, Detail, Checkout, Wishlist |
| **Gaming Platform** | 3D Hyperrealism + Retro-Futurism | Landing, Leaderboard, Profile, Store |
| **Sustainability ESG** | Organic Biophilic + Minimalism | Landing, Dashboard, Report, Goals |
| **Developer API Docs** | Minimalism + Swiss Style | Landing, Docs, API Reference, Changelog, Playground |

---

## Tech Stack

- **[Vite 5](https://vitejs.dev/)** — build tool and dev server
- **[React 18](https://react.dev/)** — UI framework
- **[TypeScript 5](https://www.typescriptlang.org/)** — type safety
- **[Tailwind CSS v3](https://tailwindcss.com/)** — utility-first styling
- **[React Router v7](https://reactrouter.com/)** — client-side routing
- **[Papa Parse](https://www.papaparse.com/)** — runtime CSV parsing from `public/data/`
- **[clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge)** — conditional class utilities

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev        # http://localhost:5173

# Production build
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── data/
│   ├── types.ts              # TypeScript interfaces for all CSV row shapes
│   └── systemDesigns.ts      # 8 static curated system design configs
├── hooks/
│   └── useCsvData.ts         # Generic fetch + Papa Parse hook
├── lib/utils.ts              # cn(), hexToRgb(), getContrastColor()
├── components/
│   ├── shell/                # AppShell, Sidebar
│   ├── ui/                   # Badge, Spinner
│   ├── explorer/             # Tab-level search/filter components
│   └── system/
│       ├── PageTabBar.tsx
│       └── demo-pages/       # FintechPages, AISaaSPages, GenericPages
└── pages/
    ├── HomePage.tsx
    ├── ExplorerPage.tsx
    ├── SystemsPage.tsx
    └── SystemDetailPage.tsx

public/data/                  # CSV data files (sourced from uiux-pro-max-skill)
├── styles.csv
├── colors.csv
├── typography.csv
├── products.csv
├── ux-guidelines.csv
├── charts.csv
└── stacks/                   # 13 stack-specific CSV files

design-system/
├── MASTER.md                 # Global design principles
└── pages/                    # Per-system design token files (8 files)
```

---

## Routes

| Path | Description |
|------|-------------|
| `/` | Home — stats, quick-access, featured designs |
| `/explorer?tab=styles` | Browse 67 UI styles |
| `/explorer?tab=colors` | Browse 96 color palettes |
| `/explorer?tab=typography` | Browse 57 font pairings with live preview |
| `/explorer?tab=charts` | Browse 25 chart types |
| `/explorer?tab=ux` | Browse 99 UX guidelines |
| `/explorer?tab=products` | Browse 96 product recommendations |
| `/systems` | Gallery of 8 system designs |
| `/systems/:id` | Design tokens panel + navigable page demos |

---

## Data Source

All design data — styles, color palettes, font pairings, chart types, UX guidelines, product recommendations, and stack guidelines — is sourced from the **[uiux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)** library.

To refresh the CSV data after skill updates:

```bash
cp .claude/skills/ui-ux-pro-max/data/*.csv public/data/
cp .claude/skills/ui-ux-pro-max/data/stacks/*.csv public/data/stacks/
```

---

## License

MIT
