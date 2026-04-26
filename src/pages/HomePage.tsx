import { Link } from 'react-router-dom';
import { systemDesigns } from '../data/systemDesigns';
// removed unused: import { getContrastColor } from '../lib/utils';

const stats = [
  { value: '67', label: 'UI Styles', icon: '✦' },
  { value: '96', label: 'Color Palettes', icon: '◉' },
  { value: '57', label: 'Font Pairings', icon: 'Aa' },
  { value: '25', label: 'Chart Types', icon: '▦' },
  { value: '99', label: 'UX Guidelines', icon: '◎' },
  { value: '13', label: 'Tech Stacks', icon: '⬡' },
];

const explorerSections = [
  { tab: 'styles', label: 'Styles', desc: '67 UI styles from Glassmorphism to Brutalism', color: '#6366F1' },
  { tab: 'colors', label: 'Colors', desc: '96 industry-specific color palettes', color: '#EC4899' },
  { tab: 'typography', label: 'Typography', desc: '57 curated font pairings with live previews', color: '#F59E0B' },
  { tab: 'charts', label: 'Charts', desc: '25 chart types matched to data visualization needs', color: '#10B981' },
  { tab: 'ux', label: 'UX Guidelines', desc: '99 best practices and anti-patterns', color: '#0EA5E9' },
  { tab: 'products', label: 'Products', desc: '96 product-type design recommendations', color: '#8B5CF6' },
];

export function HomePage() {
  const featured = systemDesigns.slice(0, 3);

  return (
    <div className="p-4 md:p-8 max-w-6xl">
      {/* Hero */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-white/60 text-xs font-medium">Design Intelligence System v2.0</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
          UI/UX Pro Max<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Design Explorer</span>
        </h1>
        <p className="text-white/60 text-base md:text-xl leading-relaxed max-w-2xl mb-8">
          Browse 67 UI styles, 96 color palettes, 57 font pairings, and 8 fully designed system demos — all powered by the ui-ux-pro-max skill library.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link
            to="/explorer?tab=styles"
            className="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            Browse Explorer
          </Link>
          <Link
            to="/systems"
            className="glass hover:bg-white/15 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            View System Designs →
          </Link>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-10 md:mb-16">
        {stats.map(({ value, label, icon }) => (
          <div key={label} className="glass rounded-2xl p-4 text-center hover:bg-white/15 transition-colors duration-200">
            <div className="text-2xl font-mono text-white/30 mb-1">{icon}</div>
            <div className="text-2xl font-bold text-white">{value}</div>
            <div className="text-white/50 text-xs mt-1">{label}</div>
          </div>
        ))}
      </div>

      {/* Explorer quick links */}
      <div className="mb-16">
        <h2 className="text-white text-xl font-semibold mb-6 flex items-center gap-3">
          <span className="w-1 h-5 bg-indigo-400 rounded-full inline-block"></span>
          Design Explorer
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {explorerSections.map(({ tab, label, desc, color }) => (
            <Link
              key={tab}
              to={`/explorer?tab=${tab}`}
              className="glass hover:bg-white/15 rounded-2xl p-5 group transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 font-bold text-sm transition-transform duration-200 group-hover:scale-110"
                style={{ background: `${color}30`, color }}
              >
                {label[0]}
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">{label}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured system designs */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-xl font-semibold flex items-center gap-3">
            <span className="w-1 h-5 bg-purple-400 rounded-full inline-block"></span>
            Featured System Designs
          </h2>
          <Link to="/systems" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors duration-200 cursor-pointer">
            View all 8 →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {featured.map((design) => (
            <Link
              key={design.id}
              to={`/systems/${design.id}`}
              className="glass hover:bg-white/15 rounded-2xl overflow-hidden group transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              {/* Color preview strip */}
              <div className="h-24 relative overflow-hidden" style={{ background: design.colors.background }}>
                <div className="absolute inset-0 flex gap-0">
                  {[design.colors.primary, design.colors.secondary, design.colors.cta, design.colors.accent || design.colors.border].map((c, i) => (
                    <div key={i} className="flex-1" style={{ background: c, opacity: 0.8 }} />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="px-4 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm"
                    style={{ background: `${design.colors.primary}40`, color: design.mood === 'dark' ? '#fff' : design.colors.text, border: `1px solid ${design.colors.primary}60` }}
                  >
                    {design.style}
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    design.mood === 'dark' ? 'bg-slate-900/70 text-white' :
                    design.mood === 'vibrant' ? 'bg-white/80 text-slate-900' :
                    'bg-white/80 text-slate-900'
                  }`}>{design.mood}</span>
                </div>
              </div>
              {/* Info */}
              <div className="p-5">
                <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-indigo-300 transition-colors duration-200">{design.name}</h3>
                <p className="text-white/40 text-xs leading-relaxed mb-3">{design.tagline}</p>
                <div className="flex items-center gap-2">
                  {/* Font preview */}
                  <div className="text-white/30 text-xs">{design.typography.headingFont}</div>
                  <span className="text-white/20">·</span>
                  <div className="text-white/30 text-xs">{design.pages.length} pages</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
