import { Link } from 'react-router-dom';
import { systemDesigns } from '../data/systemDesigns';
// removed unused: import { getContrastColor } from '../lib/utils';

export function SystemsPage() {
  return (
    <div className="p-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">System Designs</h1>
        <p className="text-white/50 text-sm max-w-2xl">
          8 fully designed, multi-page product systems — each with a unique style, color palette, typography, and 3-4 polished demo pages.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {systemDesigns.map((design) => {
          const swatchColors = [design.colors.primary, design.colors.secondary, design.colors.cta, design.colors.accent || design.colors.border];
          return (
            <Link
              key={design.id}
              to={`/systems/${design.id}`}
              className="glass hover:bg-white/15 rounded-2xl overflow-hidden group transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent flex flex-col"
            >
              {/* Visual header */}
              <div className="relative h-36 overflow-hidden" style={{ background: design.colors.background }}>
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${design.colors.primary}90 0%, ${design.colors.secondary}60 50%, ${design.colors.cta}40 100%)`,
                  }}
                />
                {/* Color swatches strip at bottom */}
                <div className="absolute bottom-0 left-0 right-0 flex h-8">
                  {swatchColors.map((c, i) => (
                    <div key={i} className="flex-1" style={{ background: c }} />
                  ))}
                </div>
                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  {/* Typography preview */}
                  <p
                    className="text-lg font-bold px-3 text-center leading-tight"
                    style={{
                      fontFamily: `'${design.typography.headingFont}', sans-serif`,
                      color: design.mood === 'dark' ? '#ffffff' : design.colors.text,
                      textShadow: design.mood === 'dark' ? '0 2px 8px rgba(0,0,0,0.5)' : '0 1px 4px rgba(255,255,255,0.5)',
                    }}
                  >
                    {design.name}
                  </p>
                  <div
                    className="text-xs px-3 py-1 rounded-full backdrop-blur-sm font-medium"
                    style={{
                      background: `${design.colors.primary}40`,
                      color: design.mood === 'dark' ? '#ffffffcc' : design.colors.text,
                      border: `1px solid ${design.colors.primary}50`,
                    }}
                  >
                    {design.style}
                  </div>
                </div>
                {/* Mood badge */}
                <div className="absolute top-3 right-3">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    design.mood === 'dark' ? 'bg-slate-900/80 text-white/80' :
                    design.mood === 'vibrant' ? 'bg-white/85 text-slate-900' :
                    'bg-white/85 text-slate-900'
                  }`}>
                    {design.mood}
                  </span>
                </div>
                {/* Page count badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-black/40 text-white/80 backdrop-blur-sm">
                    {design.pages.length} pages
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h2 className="text-white font-semibold text-base group-hover:text-indigo-300 transition-colors duration-200">{design.name}</h2>
                </div>
                <p className="text-white/40 text-xs leading-relaxed mb-4 flex-1">{design.tagline}</p>

                {/* Pages list */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {design.pages.map((p) => (
                    <span key={p.id} className="text-[10px] bg-white/8 text-white/50 border border-white/10 rounded-lg px-2 py-0.5">
                      {p.label}
                    </span>
                  ))}
                </div>

                {/* Typography + color info */}
                <div className="flex items-center justify-between text-xs pt-4 border-t border-white/10">
                  <div className="text-white/30">
                    <span className="font-medium text-white/50">{design.typography.headingFont}</span>
                    {' / '}
                    {design.typography.bodyFont}
                  </div>
                  {/* Mini swatches */}
                  <div className="flex gap-1">
                    {[design.colors.primary, design.colors.cta, design.colors.background].map((c) => (
                      <div key={c} className="w-4 h-4 rounded-full border border-white/20" style={{ background: c }} title={c} />
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
