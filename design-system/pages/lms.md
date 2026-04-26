## Design System: E-Learning LMS

Generated from ui-ux-pro-max skill · Product: E-Learning / LMS

### Pattern
- **Name:** Vibrant Hero + Catalog + Course Detail
- **Sections:** 1. Landing (category showcase), 2. Course catalog with filters, 3. Course detail with curriculum
- **CTA Placement:** Hero (Explore Courses) + Course cards (Enroll/Continue) + Detail page sticky
- **Conversion Focus:** Progress bars on enrolled courses drive re-engagement. Category icons create visual hierarchy.

### Style
- **Primary:** Claymorphism — rounded corners, soft shadows with color, bubbly feel
  - Cards: `rounded-2xl shadow-[0_8px_24px_rgba(245,158,11,0.2)] border-2 border-yellow-200`
- **Secondary:** Vibrant & Block — bold color blocks, high saturation
- **Key Effects:** Hover card lift, progress bar animation, 250ms transitions

### Colors
| Role | Hex |
|------|-----|
| Primary | #F59E0B |
| Secondary | #FCD34D |
| CTA | #7C3AED |
| Background | #FFFBF0 |
| Text | #1C1917 |
| Border | #FDE68A |
| Accent | #EF4444 |
| Success | #10B981 |

### Typography
- **Heading:** Nunito (400/600/700/800) — friendly, rounded, approachable for learners
- **Body:** Open Sans (300/400/500/600) — neutral and highly legible
- **Google Fonts:** `https://fonts.google.com/share?selection.family=Nunito:wght@400;600;700;800|Open+Sans:wght@300;400;500;600`

### Anti-patterns
- Don't use Minimalism — too cold for a learning environment
- Avoid dark mode as default — students study in bright environments
- Don't hide progress metrics — they are core motivation drivers

### Pages
| Page | Purpose | Key Components |
|------|---------|----------------|
| Landing | Acquisition | Hero, category grid, testimonials, instructor credibility |
| Course Catalog | Discovery | Search/filter bar, course cards with progress, sorting |
| Course Detail | Conversion | Video hero, curriculum accordion, reviews, enroll CTA |
