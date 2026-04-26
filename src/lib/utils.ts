import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { SystemDesign } from '../data/systemDesigns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
    : null;
}

export function getContrastColor(hex: string): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return '#ffffff';
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  return luminance > 0.5 ? '#0f172a' : '#ffffff';
}

const styleEffects: Record<string, string> = {
  'Glassmorphism': 'backdrop-blur-md, bg-white/10, border border-white/15, subtle glass cards, glowing accents',
  'Neumorphism': 'soft inset/outset shadows, same-color bg/shadow, no hard borders',
  'Claymorphism': 'large border-radius, pastel fills, thick colored shadows, inflated 3D look',
  'Minimalism': 'generous whitespace, single accent color, hairline borders, no decorative elements',
  'Brutalism': 'thick black borders, flat colors, bold type, raw grid, no gradients',
  'AI-Native UI': 'subtle gradients, animated shimmer on loading, monospace accents, clean card layouts',
  'Editorial': 'large serif headings, wide gutters, horizontal rules, editorial image placement',
  'Gradient Glass': 'vibrant linear-gradient backgrounds, frosted glass cards, bold color blending',
  'Warm Organic': 'warm earth tones, rounded clay shapes, soft drop shadows, natural textures',
  'Data-Dense': 'compact spacing, monospace type, color-coded rows, high information density',
  'Liquid Glass': 'iridescent highlights, fluid blob shapes, high-opacity glass, premium shimmer',
  'Organic Biophilic': 'leaf/plant motifs, soft greens, organic curves, nature-inspired spacing',
  '3D & Hyperrealism': 'depth shadows, gradient overlays, perspective transforms, neon glow effects',
};

const styleAntipatterns: Record<string, string[]> = {
  'dark': ['Never use pure white backgrounds — maintain dark mode throughout', 'Avoid low-contrast text on dark surfaces (min 4.5:1 ratio)', 'Don\'t use light-mode component libraries without theming'],
  'light': ['Avoid dark backgrounds that break the light design language', 'Don\'t use excessive drop shadows — prefer borders on light mode', 'Avoid pure black (#000) text — use near-black like #0F172A'],
  'vibrant': ['Avoid muted or desaturated colors that kill the energy', 'Don\'t use too many competing accent colors — stick to 2-3', 'Avoid dense text-heavy layouts — vibrant styles need visual breathing room'],
};

export function generateDesignSystemMd(design: SystemDesign): string {
  const effects = Object.entries(styleEffects).find(([k]) => design.style.includes(k))?.[1]
    ?? 'smooth 200ms transitions, consistent border-radius, accessible focus states';

  const antipatterns = styleAntipatterns[design.mood] ?? styleAntipatterns['light'];

  const sections = design.pages
    .map((p, i) => `${i + 1}. ${p.label} — ${p.description}`)
    .join(', ');

  const pagesTable = [
    '| Page | Purpose | Key Components |',
    '|------|---------|----------------|',
    ...design.pages.map((p) => `| ${p.label} | ${p.description} | (see demo at /${design.id}/${p.id}) |`),
  ].join('\n');

  const colorsTable = [
    '| Role | Hex |',
    '|------|-----|',
    `| Primary | ${design.colors.primary} |`,
    `| Secondary | ${design.colors.secondary} |`,
    `| CTA | ${design.colors.cta} |`,
    `| Background | ${design.colors.background} |`,
    `| Text | ${design.colors.text} |`,
    `| Border | ${design.colors.border} |`,
    design.colors.accent ? `| Accent | ${design.colors.accent} |` : '',
  ].filter(Boolean).join('\n');

  return `## Design System: ${design.name}

Generated from ui-ux-pro-max skill · Product: ${design.productType}

### Pattern
- **Name:** ${design.style} + ${design.styleSecondary}
- **Sections:** ${sections}
- **CTA Placement:** Hero (primary) + Key action pages
- **Conversion Focus:** ${design.tagline}

### Style
- **Primary:** ${design.style} — ${effects}
- **Secondary:** ${design.styleSecondary} — ${design.colors.background} background
- **Mood:** ${design.mood}
- **Tags:** ${design.tags.join(', ')}

### Colors
${colorsTable}

### Typography
- **Heading:** ${design.typography.headingFont} — display and brand headings
- **Body:** ${design.typography.bodyFont} — readable at small sizes for content
- **Google Fonts:** \`${design.typography.googleFontsUrl}\`
- **CSS Import:** \`${design.typography.cssImport}\`

### Anti-patterns
${antipatterns.map((a) => `- ${a}`).join('\n')}

### Pages
${pagesTable}
`.trimEnd() + '\n';
}
