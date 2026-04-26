export interface StyleRow {
  No: string;
  'Style Category': string;
  Type: string;
  Keywords: string;
  'Primary Colors': string;
  'Secondary Colors': string;
  'Effects & Animation': string;
  'Best For': string;
  'Do Not Use For': string;
  'Light Mode ✓': string;
  'Dark Mode ✓': string;
  Performance: string;
  Accessibility: string;
  'Mobile-Friendly': string;
  'Conversion-Focused': string;
  Complexity: string;
  'AI Prompt Keywords': string;
  'CSS/Technical Keywords': string;
  'Implementation Checklist': string;
}

export interface ColorRow {
  No: string;
  'Product Type': string;
  'Primary (Hex)': string;
  'Secondary (Hex)': string;
  'CTA (Hex)': string;
  'Background (Hex)': string;
  'Text (Hex)': string;
  'Border (Hex)': string;
  Notes: string;
}

export interface TypographyRow {
  No: string;
  'Font Pairing Name': string;
  Category: string;
  'Heading Font': string;
  'Body Font': string;
  'Mood/Style Keywords': string;
  'Best For': string;
  'Google Fonts URL': string;
  'CSS Import': string;
  'Tailwind Config': string;
  Notes: string;
}

export interface ProductRow {
  No: string;
  'Product Type': string;
  Keywords: string;
  'Primary Style Recommendation': string;
  'Secondary Styles': string;
  'Landing Page Pattern': string;
  'Dashboard Style (if applicable)': string;
  'Color Palette Focus': string;
  'Key Considerations': string;
}

export interface UXGuidelineRow {
  No: string;
  Category: string;
  Issue: string;
  Platform: string;
  Description: string;
  Do: string;
  "Don't": string;
  'Code Example Good': string;
  'Code Example Bad': string;
  Severity: string;
}

export interface ChartRow {
  No: string;
  'Data Type': string;
  Keywords: string;
  'Best Chart Type': string;
  'Secondary Options': string;
  'Color Guidance': string;
  'Performance Impact': string;
  'Accessibility Notes': string;
  'Library Recommendation': string;
  'Interactive Level': string;
}

export interface LandingRow {
  No: string;
  'Pattern Name': string;
  Keywords: string;
  'Section Order': string;
  'Primary CTA Placement': string;
  'Color Strategy': string;
  'Recommended Effects': string;
  'Conversion Optimization': string;
}
