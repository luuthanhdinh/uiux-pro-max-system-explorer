## Design System: Healthcare Portal

Generated from ui-ux-pro-max skill · Product: Healthcare

### Pattern
- **Name:** Trust-First Landing + Patient Dashboard
- **Sections:** 1. Landing (safety + specialists), 2. Patient health overview, 3. Appointment booking calendar
- **CTA Placement:** Hero CTA + Specialty cards + Booking confirmation
- **Conversion Focus:** HIPAA badge visible above fold. Doctor credentials shown early.

### Style
- **Primary:** Neumorphism — soft extruded shadows on cards `shadow-[4px_4px_10px_#c8d8e8,-4px_-4px_10px_#ffffff]`
- **Secondary:** Accessible Design — WCAG AA minimum, large touch targets (44×44px), high contrast text
- **Key Effects:** Subtle soft shadows, no harsh borders, calm color transitions, no animations on critical health info

### Colors
| Role | Hex |
|------|-----|
| Primary | #0077B6 |
| Secondary | #00B4D8 |
| CTA | #2ECC71 |
| Background | #F0F8FF |
| Text | #1A3A4A |
| Border | #CAE0F0 |
| Alert | #FF6B6B |

### Typography
- **Heading:** Lato (300/400/700) — clean, medical-grade readability
- **Body:** Source Sans 3 (300/400/600) — optimized for long-form reading
- **Min body size:** 16px (critical — patients may have visual impairments)
- **Google Fonts:** `https://fonts.google.com/share?selection.family=Lato:wght@300;400;700|Source+Sans+3:wght@300;400;600`

### Anti-patterns
- Never use red for non-critical UI elements (confuses with medical alerts)
- Avoid Glassmorphism — reduced contrast is an accessibility failure in healthcare
- Don't use animations on health metric changes — can cause anxiety

### Pages
| Page | Purpose | Key Components |
|------|---------|----------------|
| Landing | Acquisition | Hero, specialty cards, trust signals, doctor search |
| Dashboard | Retention | Health summary, upcoming appointments, prescriptions |
| Appointment | Activation | Specialty filter, calendar picker, time slot grid |
