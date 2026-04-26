## Design System: Luxury E-Commerce

Generated from ui-ux-pro-max skill · Product: E-Commerce Luxury

### Pattern
- **Name:** Editorial Landing + Product Journey + Checkout
- **Sections:** 1. Editorial hero (seasonal campaign), 2. Featured product grid, 3. Product detail with zoom, 4. Streamlined checkout
- **CTA Placement:** Hero (Shop Now) + Product cards (Add to Bag) + Detail sticky bottom
- **Conversion Focus:** Scarcity signals (Limited). Editorial photography > product specs. Frictionless checkout.

### Style
- **Primary:** Liquid Glass — Apple-inspired clarity, ultra-thin glass surfaces over luxury imagery
- **Secondary:** Glassmorphism with light mode — `bg-white/80 backdrop-blur-sm border border-white/60`
- **Key Effects:** Image zoom on hover, smooth reveal animations, no flashy transitions (luxury = restraint)

### Colors
| Role | Hex |
|------|-----|
| Primary | #1A1A2E |
| Secondary | #16213E |
| CTA | #D4AF37 |
| Background | #FAF8F5 |
| Text | #1A1A2E |
| Border | #E8E0D0 |
| Accent | #C41E3A |

### Typography
- **Heading:** Playfair Display (400/600/700 + italic) — editorial serif, luxury signaling
- **Body:** Inter (300/400/500/600) — neutral contrast to decorative heading
- **Letter-spacing:** headings `tracking-wide`, CTAs `tracking-[0.2em]` uppercase
- **Google Fonts:** `https://fonts.google.com/share?selection.family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400|Inter:wght@300;400;500;600`

### Anti-patterns
- Never use bright/saturated colors as primary — they read cheap
- Don't overload with product specs — luxury sells on emotion, not features
- Avoid social-media-style reviews UI — it undermines premium positioning

### Pages
| Page | Purpose | Key Components |
|------|---------|----------------|
| Landing | Brand impression | Editorial hero, new collection, featured grid |
| Product Listing | Discovery | Minimal filter sidebar, product grid, wishlist |
| Product Detail | Conversion | Image gallery, size selector, material info, add to bag |
| Checkout | Revenue | 3-step flow, address, payment, order summary |
