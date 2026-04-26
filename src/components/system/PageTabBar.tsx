import { cn } from '../../lib/utils';
import type { PageDef } from '../../data/systemDesigns';

interface PageTabBarProps {
  pages: PageDef[];
  active: string;
  onChange: (id: string) => void;
  primaryColor: string;
}

export function PageTabBar({ pages, active, onChange, primaryColor }: PageTabBarProps) {
  const activeIdx = pages.findIndex((p) => p.id === active);

  return (
    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
      <button
        onClick={() => activeIdx > 0 && onChange(pages[activeIdx - 1].id)}
        disabled={activeIdx === 0}
        className="p-1.5 rounded-lg text-white/30 hover:text-white/70 disabled:opacity-20 disabled:cursor-not-allowed transition-colors duration-150 cursor-pointer"
        aria-label="Previous page"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>

      <div className="flex items-center gap-1 flex-1 overflow-x-auto scrollbar-none" role="tablist" aria-label="Demo pages">
        {pages.map((page) => {
          const isActive = page.id === active;
          return (
            <button
              key={page.id}
              onClick={() => onChange(page.id)}
              role="tab"
              aria-selected={isActive}
              title={page.description}
              className={cn(
                'px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer whitespace-nowrap flex-shrink-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
                isActive ? 'text-white' : 'text-white/40 hover:text-white/70 hover:bg-white/5'
              )}
              style={isActive ? { background: `${primaryColor}30`, color: 'white', border: `1px solid ${primaryColor}50` } : {}}
            >
              {page.label}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => activeIdx < pages.length - 1 && onChange(pages[activeIdx + 1].id)}
        disabled={activeIdx === pages.length - 1}
        className="p-1.5 rounded-lg text-white/30 hover:text-white/70 disabled:opacity-20 disabled:cursor-not-allowed transition-colors duration-150 cursor-pointer"
        aria-label="Next page"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>
    </div>
  );
}
