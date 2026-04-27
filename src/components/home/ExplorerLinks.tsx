import { Link } from 'react-router-dom';

const explorerSections = [
  { tab: 'styles', label: 'Styles', desc: '67 UI styles from Glassmorphism to Brutalism', color: '#6366F1' },
  { tab: 'colors', label: 'Colors', desc: '96 industry-specific color palettes', color: '#EC4899' },
  { tab: 'typography', label: 'Typography', desc: '57 curated font pairings with live previews', color: '#F59E0B' },
  { tab: 'charts', label: 'Charts', desc: '25 chart types matched to data visualization needs', color: '#10B981' },
  { tab: 'ux', label: 'UX Guidelines', desc: '99 best practices and anti-patterns', color: '#0EA5E9' },
  { tab: 'products', label: 'Products', desc: '96 product-type design recommendations', color: '#8B5CF6' },
];

export function ExplorerLinks() {
  return (
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
  );
}
