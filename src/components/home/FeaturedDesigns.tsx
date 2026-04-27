import { Link } from 'react-router-dom';
import type { SystemDesign } from '../../data/systemDesigns';

export function FeaturedDesigns({ designs }: { designs: SystemDesign[] }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white text-xl font-semibold flex items-center gap-3">
          <span className="w-1 h-5 bg-purple-400 rounded-full inline-block"></span>
          Featured System Designs
        </h2>
        <Link to="/systems" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors duration-200 cursor-pointer">
          View all 16 →
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {designs.map((design) => (
          <Link
            key={design.id}
            to={`/systems/${design.id}`}
            className="glass hover:bg-white/15 rounded-2xl overflow-hidden group transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
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
                  design.mood === 'dark' ? 'bg-slate-900/70 text-white' : 'bg-white/80 text-slate-900'
                }`}>{design.mood}</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-indigo-300 transition-colors duration-200">{design.name}</h3>
              <p className="text-white/40 text-xs leading-relaxed mb-3">{design.tagline}</p>
              <div className="flex items-center gap-2">
                <div className="text-white/30 text-xs">{design.typography.headingFont}</div>
                <span className="text-white/20">·</span>
                <div className="text-white/30 text-xs">{design.pages.length} pages</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
