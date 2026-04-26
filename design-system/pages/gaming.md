## Design System: Gaming Platform

Generated from ui-ux-pro-max skill · Product: Gaming

### Pattern
- **Name:** High-Energy Landing + Competitive Features
- **Sections:** 1. Action hero (game showcase), 2. Live leaderboard, 3. Player profile/achievements
- **CTA Placement:** Hero (Play Now) + Leaderboard header + Profile action buttons
- **Conversion Focus:** FOMO from leaderboard rankings. Achievement badges drive return visits.

### Style
- **Primary:** 3D & Hyperrealism — depth, ambient occlusion, dynamic lighting on hero
- **Secondary:** Retro-Futurism — neon grid lines, synthwave colors, CRT scanline texture
- **Key Effects:** Neon glow `box-shadow: 0 0 20px #FF0080`, scanline CSS overlay, particle effects on CTAs

### Colors
| Role | Hex |
|------|-----|
| Primary | #FF0080 |
| Secondary | #FF6EC7 |
| CTA | #FFEA00 |
| Background | #0D0D1A |
| Text | #F0F0FF |
| Border | #1A1A33 |
| Accent (win) | #00FF88 |
| Accent (loss) | #FF4444 |

### Typography
- **Heading:** Rajdhani (400/500/600/700) — condensed, bold, esports energy
- **Body:** Roboto Mono (300/400/500) — techy monospace feel for stats/scores
- **Google Fonts:** `https://fonts.google.com/share?selection.family=Rajdhani:wght@400;500;600;700|Roboto+Mono:wght@300;400;500`

### Anti-patterns
- Don't use light backgrounds — kills the neon effect completely
- Avoid serif fonts — wrong genre signal
- Don't use pastel colors — must be high saturation/contrast

### Pages
| Page | Purpose | Key Components |
|------|---------|----------------|
| Landing | Acquisition | Game showcase hero, active player count, featured games |
| Leaderboard | Engagement | Podium display, ranked table, season timer, stats |
| Player Profile | Retention | Stats grid, achievement badges, match history |
