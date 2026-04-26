## Design System: Fintech Crypto Desk

Generated from ui-ux-pro-max skill · Product: Fintech / Crypto

### Pattern
- **Name:** Hero + Features + CTA (Dashboard-first)
- **Sections:** 1. Landing Hero (trust + live ticker), 2. Market Dashboard, 3. Portfolio Tracker, 4. Onboarding Flow
- **CTA Placement:** Hero (sticky) + Post-chart
- **Conversion Focus:** Trust signals upfront. Live data creates urgency. Dark mode reduces eye strain for traders.

### Style
- **Primary:** Glassmorphism — `backdrop-blur-md bg-white/10 border border-white/15`
- **Secondary:** Dark Mode OLED — pure black `#0F0F1A` background for OLED screens
- **Key Effects:** Subtle glass cards, glowing primary accents, animated pulse on live indicators, 200ms transitions

### Colors
| Role | Hex |
|------|-----|
| Primary | #6366F1 |
| Secondary | #818CF8 |
| CTA | #00E5FF |
| Background | #0F0F1A |
| Text | #F1F5F9 |
| Border | #1E1E3A |
| Accent (profit) | #10B981 |
| Loss | #EF4444 |

### Typography
- **Heading:** Space Grotesk (400/500/600/700) — geometric, techy, confident
- **Body:** Inter (300/400/500/600) — readable at small sizes for data tables
- **Mono (prices):** JetBrains Mono or Roboto Mono for price values
- **Google Fonts:** `https://fonts.google.com/share?selection.family=Space+Grotesk:wght@400;500;600;700|Inter:wght@300;400;500;600`

### Anti-patterns
- Never use light mode as default
- Avoid excessive animation on price changes (epilepsy risk)
- Don't use red/green as the only differentiator (colorblindness)

### Pages
| Page | Purpose | Key Components |
|------|---------|----------------|
| Landing | Acquisition | Hero, live ticker, features, social proof |
| Dashboard | Retention | Market overview cards, portfolio chart, top holdings |
| Portfolio | Engagement | P&L summary, allocation donut, transaction history |
| Onboarding | Activation | Step indicator, form fields, KYC prompts |
