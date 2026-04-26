export interface DesignColors {
  primary: string;
  secondary: string;
  cta: string;
  background: string;
  text: string;
  border: string;
  accent?: string;
}

export interface DesignTypography {
  headingFont: string;
  bodyFont: string;
  cssImport: string;
  googleFontsUrl: string;
}

export interface PageDef {
  id: string;
  label: string;
  description: string;
}

export interface SystemDesign {
  id: string;
  name: string;
  tagline: string;
  productType: string;
  style: string;
  styleSecondary: string;
  colors: DesignColors;
  typography: DesignTypography;
  pages: PageDef[];
  mood: 'dark' | 'light' | 'vibrant';
  tags: string[];
}

export const systemDesigns: SystemDesign[] = [
  {
    id: 'fintech-crypto',
    name: 'Fintech Crypto Desk',
    tagline: 'Dark-mode crypto trading platform with live portfolio tracking',
    productType: 'Fintech / Crypto',
    style: 'Glassmorphism',
    styleSecondary: 'Dark Mode OLED',
    colors: {
      primary: '#6366F1',
      secondary: '#818CF8',
      cta: '#00E5FF',
      background: '#0F0F1A',
      text: '#F1F5F9',
      border: '#1E1E3A',
      accent: '#10B981',
    },
    typography: {
      headingFont: 'Space Grotesk',
      bodyFont: 'Inter',
      cssImport: "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');",
      googleFontsUrl: 'https://fonts.google.com/share?selection.family=Space+Grotesk:wght@400;500;600;700|Inter:wght@300;400;500;600',
    },
    pages: [
      { id: 'landing', label: 'Landing', description: 'Public marketing page with hero and features' },
      { id: 'dashboard', label: 'Dashboard', description: 'Live crypto market overview with charts' },
      { id: 'portfolio', label: 'Portfolio', description: 'Personal holdings and P&L tracker' },
      { id: 'onboarding', label: 'Onboarding', description: 'Account setup and KYC flow' },
      { id: 'trade', label: 'Trade', description: 'Order entry panel with buy/sell and order book' },
    ],
    mood: 'dark',
    tags: ['Crypto', 'Trading', 'Finance', 'Dark Mode', 'Glassmorphism'],
  },
  {
    id: 'ai-saas',
    name: 'AI SaaS Platform',
    tagline: 'Clean AI-native SaaS with minimal design and smart CTAs',
    productType: 'AI / SaaS',
    style: 'AI-Native UI',
    styleSecondary: 'Minimalism',
    colors: {
      primary: '#7C3AED',
      secondary: '#A78BFA',
      cta: '#10B981',
      background: '#FAFAFA',
      text: '#0F172A',
      border: '#E2E8F0',
      accent: '#F59E0B',
    },
    typography: {
      headingFont: 'Poppins',
      bodyFont: 'Open Sans',
      cssImport: "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Open+Sans:wght@300;400;500;600&display=swap');",
      googleFontsUrl: 'https://fonts.google.com/share?selection.family=Poppins:wght@400;500;600;700|Open+Sans:wght@300;400;500;600',
    },
    pages: [
      { id: 'landing', label: 'Landing', description: 'Hero with AI demo and social proof' },
      { id: 'pricing', label: 'Pricing', description: 'Tiered pricing with feature comparison' },
      { id: 'dashboard', label: 'Dashboard', description: 'AI workspace with prompt history' },
      { id: 'docs', label: 'Docs', description: 'API documentation and SDK quickstart' },
    ],
    mood: 'light',
    tags: ['AI', 'SaaS', 'Minimal', 'B2B', 'Clean'],
  },
  {
    id: 'healthcare',
    name: 'Healthcare Portal',
    tagline: 'Accessible patient portal with appointment booking and health records',
    productType: 'Healthcare',
    style: 'Neumorphism',
    styleSecondary: 'Accessible Design',
    colors: {
      primary: '#0077B6',
      secondary: '#00B4D8',
      cta: '#2ECC71',
      background: '#F0F8FF',
      text: '#1A3A4A',
      border: '#CAE0F0',
      accent: '#FF6B6B',
    },
    typography: {
      headingFont: 'Lato',
      bodyFont: 'Source Sans 3',
      cssImport: "@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Source+Sans+3:wght@300;400;600&display=swap');",
      googleFontsUrl: 'https://fonts.google.com/share?selection.family=Lato:wght@300;400;700|Source+Sans+3:wght@300;400;600',
    },
    pages: [
      { id: 'landing', label: 'Landing', description: 'Patient-first homepage with trust signals' },
      { id: 'dashboard', label: 'Dashboard', description: 'Health overview with vitals and history' },
      { id: 'appointment', label: 'Appointment', description: 'Calendar-based booking flow' },
      { id: 'records', label: 'Records', description: 'Patient health history and lab results' },
    ],
    mood: 'light',
    tags: ['Healthcare', 'Medical', 'Accessible', 'Patient', 'WCAG'],
  },
  {
    id: 'lms',
    name: 'E-Learning (LMS)',
    tagline: 'Vibrant learning platform with course catalog and progress tracking',
    productType: 'E-Learning / LMS',
    style: 'Claymorphism',
    styleSecondary: 'Vibrant & Block',
    colors: {
      primary: '#F59E0B',
      secondary: '#FCD34D',
      cta: '#7C3AED',
      background: '#FFFBF0',
      text: '#1C1917',
      border: '#FDE68A',
      accent: '#EF4444',
    },
    typography: {
      headingFont: 'Nunito',
      bodyFont: 'Open Sans',
      cssImport: "@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Open+Sans:wght@300;400;500;600&display=swap');",
      googleFontsUrl: 'https://fonts.google.com/share?selection.family=Nunito:wght@400;600;700;800|Open+Sans:wght@300;400;500;600',
    },
    pages: [
      { id: 'landing', label: 'Landing', description: 'Vibrant hero targeting learners' },
      { id: 'catalog', label: 'Course Catalog', description: 'Browse and filter all courses' },
      { id: 'course', label: 'Course Detail', description: 'Curriculum, reviews, and enroll CTA' },
      { id: 'progress', label: 'My Progress', description: 'Learning path, XP, and completed courses' },
    ],
    mood: 'vibrant',
    tags: ['Education', 'E-Learning', 'LMS', 'Claymorphism', 'Friendly'],
  },
  {
    id: 'luxury-ecommerce',
    name: 'Luxury E-Commerce',
    tagline: 'High-end fashion store with editorial feel and seamless checkout',
    productType: 'E-Commerce Luxury',
    style: 'Liquid Glass',
    styleSecondary: 'Glassmorphism',
    colors: {
      primary: '#1A1A2E',
      secondary: '#16213E',
      cta: '#D4AF37',
      background: '#FAF8F5',
      text: '#1A1A2E',
      border: '#E8E0D0',
      accent: '#C41E3A',
    },
    typography: {
      headingFont: 'Playfair Display',
      bodyFont: 'Inter',
      cssImport: "@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');",
      googleFontsUrl: 'https://fonts.google.com/share?selection.family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400|Inter:wght@300;400;500;600',
    },
    pages: [
      { id: 'landing', label: 'Landing', description: 'Editorial hero with new collection launch' },
      { id: 'listing', label: 'Product Listing', description: 'Curated grid with filters and wishlist' },
      { id: 'detail', label: 'Product Detail', description: 'Full product with zoom, reviews, and size guide' },
      { id: 'checkout', label: 'Checkout', description: 'Streamlined 3-step checkout with address and payment' },
      { id: 'wishlist', label: 'Wishlist', description: 'Saved items with share and move-to-cart' },
    ],
    mood: 'light',
    tags: ['Fashion', 'Luxury', 'E-Commerce', 'Editorial', 'Elegant'],
  },
  {
    id: 'gaming',
    name: 'Gaming Platform',
    tagline: 'Retro-futuristic gaming hub with leaderboards and player profiles',
    productType: 'Gaming',
    style: '3D & Hyperrealism',
    styleSecondary: 'Retro-Futurism',
    colors: {
      primary: '#FF0080',
      secondary: '#FF6EC7',
      cta: '#FFEA00',
      background: '#0D0D1A',
      text: '#F0F0FF',
      border: '#1A1A33',
      accent: '#00FF88',
    },
    typography: {
      headingFont: 'Rajdhani',
      bodyFont: 'Roboto Mono',
      cssImport: "@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Roboto+Mono:wght@300;400;500&display=swap');",
      googleFontsUrl: 'https://fonts.google.com/share?selection.family=Rajdhani:wght@400;500;600;700|Roboto+Mono:wght@300;400;500',
    },
    pages: [
      { id: 'landing', label: 'Landing', description: 'High-energy hero with animated game showcase' },
      { id: 'leaderboard', label: 'Leaderboard', description: 'Global rankings with stats and filters' },
      { id: 'profile', label: 'Player Profile', description: 'Achievements, stats, and game history' },
      { id: 'store', label: 'Store', description: 'In-game store with featured items and bundles' },
    ],
    mood: 'dark',
    tags: ['Gaming', 'Esports', 'Dark', 'Neon', 'Retro-Futurism'],
  },
  {
    id: 'sustainability',
    name: 'Sustainability ESG',
    tagline: 'Earth-first ESG reporting platform with impact dashboards',
    productType: 'Sustainability / ESG',
    style: 'Organic Biophilic',
    styleSecondary: 'Minimalism',
    colors: {
      primary: '#2D6A4F',
      secondary: '#52B788',
      cta: '#40916C',
      background: '#F0FFF4',
      text: '#1B4332',
      border: '#B7E4C7',
      accent: '#F4A261',
    },
    typography: {
      headingFont: 'Merriweather',
      bodyFont: 'Inter',
      cssImport: "@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&family=Inter:wght@300;400;500;600&display=swap');",
      googleFontsUrl: 'https://fonts.google.com/share?selection.family=Merriweather:ital,wght@0,300;0,400;0,700;1,300|Inter:wght@300;400;500;600',
    },
    pages: [
      { id: 'landing', label: 'Landing', description: 'Mission-first hero with impact numbers' },
      { id: 'dashboard', label: 'ESG Dashboard', description: 'Carbon, water, and social metrics overview' },
      { id: 'report', label: 'Report Detail', description: 'Annual ESG report with data export' },
      { id: 'goals', label: 'Goals', description: 'Net-zero targets and progress tracker' },
    ],
    mood: 'light',
    tags: ['Sustainability', 'ESG', 'Green', 'Biophilic', 'Report'],
  },
  {
    id: 'developer-docs',
    name: 'Developer API Docs',
    tagline: 'Clean developer documentation with interactive API explorer',
    productType: 'Developer Tools / API',
    style: 'Minimalism',
    styleSecondary: 'Swiss Style',
    colors: {
      primary: '#1E293B',
      secondary: '#334155',
      cta: '#F97316',
      background: '#FFFFFF',
      text: '#0F172A',
      border: '#E2E8F0',
      accent: '#0EA5E9',
    },
    typography: {
      headingFont: 'JetBrains Mono',
      bodyFont: 'Inter',
      cssImport: "@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@300;400;500;600&display=swap');",
      googleFontsUrl: 'https://fonts.google.com/share?selection.family=JetBrains+Mono:wght@400;500;700|Inter:wght@300;400;500;600',
    },
    pages: [
      { id: 'landing', label: 'Landing', description: 'Developer-first hero with quick-start code' },
      { id: 'docs', label: 'Docs', description: 'Structured documentation with sidebar nav' },
      { id: 'api', label: 'API Reference', description: 'Endpoint explorer with request/response examples' },
      { id: 'changelog', label: 'Changelog', description: 'Version history with semantic labels' },
      { id: 'playground', label: 'Playground', description: 'Interactive API request builder and tester' },
    ],
    mood: 'light',
    tags: ['Developer', 'API', 'Docs', 'Minimal', 'Code'],
  },
  {
    id: 'social-media',
    name: 'Social Media App',
    tagline: 'Bold consumer social platform with gradient glass and vibrant interactions',
    productType: 'Social Media / Consumer',
    style: 'Gradient Glass',
    styleSecondary: 'Bold Color',
    colors: {
      primary: '#E1306C',
      secondary: '#F77737',
      cta: '#833AB4',
      background: '#0A0A0A',
      text: '#FAFAFA',
      border: '#1A1A1A',
      accent: '#FCAF45',
    },
    typography: {
      headingFont: 'DM Sans',
      bodyFont: 'Inter',
      cssImport: "@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');",
      googleFontsUrl: 'https://fonts.google.com/share?selection.family=DM+Sans:wght@400;500;600;700|Inter:wght@300;400;500;600',
    },
    pages: [
      { id: 'feed', label: 'Feed', description: 'Scrollable post feed with stories and reactions' },
      { id: 'profile', label: 'Profile', description: 'User profile with stats and photo grid' },
      { id: 'explore', label: 'Explore', description: 'Trending topics and content discovery' },
      { id: 'messages', label: 'Messages', description: 'Direct message threads and conversations' },
    ],
    mood: 'dark',
    tags: ['Social', 'Mobile-First', 'Dark', 'Gradient', 'Consumer'],
  },
  {
    id: 'real-estate',
    name: 'Real Estate Platform',
    tagline: 'Editorial property marketplace with trust-first design and smart search',
    productType: 'Real Estate / Property',
    style: 'Editorial',
    styleSecondary: 'Clean Grid',
    colors: {
      primary: '#1B4332',
      secondary: '#40916C',
      cta: '#D4AF37',
      background: '#FAFAF8',
      text: '#1A1A2E',
      border: '#E8E4DC',
      accent: '#E76F51',
    },
    typography: {
      headingFont: 'Cormorant Garamond',
      bodyFont: 'Inter',
      cssImport: "@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');",
      googleFontsUrl: 'https://fonts.google.com/share?selection.family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400|Inter:wght@300;400;500;600',
    },
    pages: [
      { id: 'landing', label: 'Landing', description: 'Hero with smart property search and featured listings' },
      { id: 'listing', label: 'Listings', description: 'Filter-based property grid with map toggle' },
      { id: 'detail', label: 'Property Detail', description: 'Photos, key stats, and agent contact card' },
      { id: 'mortgage', label: 'Mortgage', description: 'Loan calculator with monthly payment breakdown' },
    ],
    mood: 'light',
    tags: ['Real Estate', 'Property', 'Elegant', 'Editorial', 'Trust'],
  },
  {
    id: 'restaurant',
    name: 'Restaurant & Food',
    tagline: 'Warm, appetizing restaurant platform with online ordering and reservations',
    productType: 'Restaurant / Hospitality',
    style: 'Warm Organic',
    styleSecondary: 'Claymorphism',
    colors: {
      primary: '#C1440E',
      secondary: '#E07A5F',
      cta: '#F2CC8F',
      background: '#FFF8F0',
      text: '#2D1B0E',
      border: '#F0D9C0',
      accent: '#3D405B',
    },
    typography: {
      headingFont: 'Playfair Display',
      bodyFont: 'Lato',
      cssImport: "@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Lato:wght@300;400;700&display=swap');",
      googleFontsUrl: 'https://fonts.google.com/share?selection.family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400|Lato:wght@300;400;700',
    },
    pages: [
      { id: 'landing', label: 'Landing', description: 'Hero with Reserve a Table CTA and featured dishes' },
      { id: 'menu', label: 'Menu', description: 'Category tabs with dish cards and prices' },
      { id: 'reservation', label: 'Reservation', description: 'Date, time slot, and party size booking flow' },
      { id: 'order', label: 'Order Online', description: 'Cart with item customization and delivery toggle' },
    ],
    mood: 'vibrant',
    tags: ['Restaurant', 'Food', 'Warm', 'Appetizing', 'Hospitality'],
  },
  {
    id: 'analytics-dashboard',
    name: 'Analytics Dashboard',
    tagline: 'Data-dense BI platform with real-time metrics and segment analysis',
    productType: 'Analytics / Business Intelligence',
    style: 'Data-Dense',
    styleSecondary: 'Brutalism',
    colors: {
      primary: '#00D4FF',
      secondary: '#0099CC',
      cta: '#FF6B35',
      background: '#0D1117',
      text: '#E6EDF3',
      border: '#21262D',
      accent: '#7C3AED',
    },
    typography: {
      headingFont: 'IBM Plex Sans',
      bodyFont: 'IBM Plex Mono',
      cssImport: "@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@300;400;500&display=swap');",
      googleFontsUrl: 'https://fonts.google.com/share?selection.family=IBM+Plex+Sans:wght@300;400;500;600;700|IBM+Plex+Mono:wght@300;400;500',
    },
    pages: [
      { id: 'overview', label: 'Overview', description: 'KPI cards, trend line, and top traffic sources' },
      { id: 'reports', label: 'Reports', description: 'Date-range chart grid with export controls' },
      { id: 'segments', label: 'Segments', description: 'Audience breakdown with funnel visualization' },
      { id: 'settings', label: 'Settings', description: 'Data sources, integrations, and API key management' },
    ],
    mood: 'dark',
    tags: ['Analytics', 'Dashboard', 'Data', 'Dark', 'B2B'],
  },
];
