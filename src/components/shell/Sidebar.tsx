import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';

const nav = [
  {
    label: 'Home',
    to: '/',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    ),
  },
  {
    label: 'Explorer',
    to: '/explorer',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
  },
  {
    label: 'System Designs',
    to: '/systems',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
];

const explorerTabs = [
  { label: 'Styles', tab: 'styles' },
  { label: 'Colors', tab: 'colors' },
  { label: 'Typography', tab: 'typography' },
  { label: 'Charts', tab: 'charts' },
  { label: 'UX Guidelines', tab: 'ux' },
  { label: 'Products', tab: 'products' },
];

export function Sidebar() {
  const location = useLocation();
  const isExplorer = location.pathname.startsWith('/explorer');

  return (
    <aside className="w-60 h-screen fixed left-0 top-0 flex flex-col z-40" style={{ background: 'rgba(15,15,26,0.95)', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
      {/* Logo */}
      <div className="px-5 py-5 flex items-center gap-3 border-b border-white/10">
        <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <div>
          <p className="font-semibold text-white text-sm leading-none">UI/UX Pro Max</p>
          <p className="text-white/40 text-xs mt-0.5">Design Explorer</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto scrollbar-none p-3 space-y-1">
        {nav.map(({ label, to, icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer',
                isActive
                  ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              )
            }
          >
            {icon}
            {label}
          </NavLink>
        ))}

        {/* Explorer sub-tabs */}
        {isExplorer && (
          <div className="mt-2 ml-4 space-y-0.5 border-l border-white/10 pl-3">
            {explorerTabs.map(({ label, tab }) => {
              const params = new URLSearchParams(location.search);
              const currentTab = params.get('tab') || 'styles';
              const isActive = currentTab === tab;
              return (
                <NavLink
                  key={tab}
                  to={`/explorer?tab=${tab}`}
                  className={cn(
                    'block px-2 py-1.5 rounded-lg text-xs font-medium transition-colors duration-150 cursor-pointer',
                    isActive ? 'text-indigo-300 bg-indigo-500/10' : 'text-white/40 hover:text-white/70'
                  )}
                >
                  {label}
                </NavLink>
              );
            })}
          </div>
        )}
      </nav>

      {/* Footer stats */}
      <div className="p-4 border-t border-white/10">
        <div className="grid grid-cols-2 gap-2 text-center">
          {[['67', 'Styles'], ['96', 'Palettes'], ['57', 'Fonts'], ['8', 'Systems']].map(([num, lbl]) => (
            <div key={lbl} className="glass rounded-lg py-2">
              <p className="text-indigo-300 font-bold text-sm">{num}</p>
              <p className="text-white/40 text-[10px]">{lbl}</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
