import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { systemDesigns } from '../data/systemDesigns';
import { PageTabBar } from '../components/system/PageTabBar';
import { FintechPages } from '../components/system/demo-pages/FintechPages';
import { AISaaSPages } from '../components/system/demo-pages/AISaaSPages';
import { GenericPages } from '../components/system/demo-pages/GenericPages';
import { generateDesignSystemMd } from '../lib/utils';

function DemoRenderer({ designId, page }: { designId: string; page: string }) {
  const design = systemDesigns.find((d) => d.id === designId);
  if (!design) return null;

  if (designId === 'fintech-crypto') return <FintechPages design={design} page={page} />;
  if (designId === 'ai-saas') return <AISaaSPages design={design} page={page} />;
  return <GenericPages design={design} page={page} />;
}

export function SystemDetailPage() {
  const { id } = useParams<{ id: string }>();
  const design = systemDesigns.find((d) => d.id === id);
  const [activePage, setActivePage] = useState(design?.pages[0]?.id || '');
  const fontRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    if (!design) return;
    setActivePage(design.pages[0].id);

    // Load fonts for this design
    if (!fontRef.current) {
      const style = document.createElement('style');
      style.textContent = design.typography.cssImport;
      document.head.appendChild(style);
      fontRef.current = style;
    }
  }, [design?.id]);

  if (!design) {
    return (
      <div className="p-8 text-center">
        <p className="text-white/50 text-sm mb-4">System design not found.</p>
        <Link to="/systems" className="text-indigo-400 hover:text-indigo-300 text-sm cursor-pointer">← Back to Systems</Link>
      </div>
    );
  }

  const activePgDef = design.pages.find((p) => p.id === activePage);

  function handleExport() {
    // design is guaranteed non-null here (early return above handles undefined)
    const d = design!;
    const md = generateDesignSystemMd(d);
    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${d.id}-design-system.md`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="flex flex-col md:flex-row gap-0 h-screen overflow-hidden">
      {/* Left panel — design tokens (full width strip on mobile, sidebar on md+) */}
      <aside className="md:w-56 flex-shrink-0 border-b md:border-b-0 md:border-r border-white/10 flex flex-row md:flex-col overflow-x-auto md:overflow-y-auto scrollbar-none" style={{ background: 'rgba(255,255,255,0.03)' }}>

        {/* Mobile: compact horizontal strip */}
        <div className="flex md:hidden items-center gap-3 px-4 py-2.5 min-w-0">
          <Link to="/systems" className="flex items-center gap-1 text-white/40 hover:text-white/70 text-xs transition-colors cursor-pointer flex-shrink-0">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
          </Link>
          <div className="min-w-0 flex-shrink-0">
            <p className="text-white font-semibold text-xs leading-none truncate max-w-[120px]">{design.name}</p>
          </div>
          <span className="flex-shrink-0 glass rounded-lg px-2 py-0.5 text-[10px] text-indigo-300 font-medium whitespace-nowrap">{design.style}</span>
          {/* Color dots */}
          <div className="flex gap-1 flex-shrink-0">
            {[design.colors.primary, design.colors.secondary, design.colors.cta, design.colors.accent || design.colors.border].map((c) => (
              <div key={c} className="w-4 h-4 rounded-full border border-white/10 flex-shrink-0" style={{ background: c }} />
            ))}
          </div>
        </div>

        {/* Desktop: full vertical panel */}
        <div className="hidden md:flex flex-col gap-5 p-4 w-56">
          <div>
            <Link to="/systems" className="flex items-center gap-1.5 text-white/30 hover:text-white/60 text-xs transition-colors duration-200 cursor-pointer mb-4">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
              All Systems
            </Link>
            <h2 className="text-white font-semibold text-sm leading-tight mb-1">{design.name}</h2>
            <p className="text-white/40 text-xs leading-relaxed">{design.tagline}</p>
          </div>
          <div>
            <p className="text-white/25 text-[10px] uppercase tracking-widest mb-2">Style</p>
            <div className="space-y-1">
              <span className="inline-block glass rounded-lg px-2.5 py-1 text-xs text-indigo-300 font-medium">{design.style}</span>
              <br />
              <span className="inline-block glass rounded-lg px-2.5 py-1 text-xs text-white/40">{design.styleSecondary}</span>
            </div>
          </div>
          <div>
            <p className="text-white/25 text-[10px] uppercase tracking-widest mb-2">Color Palette</p>
            <div className="space-y-2">
              {(Object.entries(design.colors) as [string, string][]).map(([key, hex]) => {
                if (!hex || !hex.startsWith('#')) return null;
                return (
                  <div key={key} className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg border border-white/10 flex-shrink-0" style={{ background: hex }} title={hex} />
                    <div className="min-w-0">
                      <p className="text-white/50 text-[10px] capitalize leading-none">{key}</p>
                      <p className="text-white/25 text-[9px] font-mono">{hex}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <p className="text-white/25 text-[10px] uppercase tracking-widest mb-2">Typography</p>
            <div className="space-y-2">
              <div className="glass rounded-xl p-2.5">
                <p className="text-white/30 text-[9px] uppercase tracking-wider mb-1">Heading</p>
                <p className="text-white/70 text-xs font-medium">{design.typography.headingFont}</p>
              </div>
              <div className="glass rounded-xl p-2.5">
                <p className="text-white/30 text-[9px] uppercase tracking-wider mb-1">Body</p>
                <p className="text-white/70 text-xs">{design.typography.bodyFont}</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-white/25 text-[10px] uppercase tracking-widest mb-2">Product Type</p>
            <p className="text-white/60 text-xs mb-3">{design.productType}</p>
            <div className="flex flex-wrap gap-1">
              {design.tags.map((tag) => (
                <span key={tag} className="text-[10px] glass rounded-md px-1.5 py-0.5 text-white/40">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Main — browser frame */}
      <div className="flex-1 flex flex-col overflow-hidden p-4">
        {/* Browser chrome */}
        <div className="flex-1 flex flex-col rounded-2xl overflow-hidden border border-white/10 shadow-2xl" style={{ background: '#fff' }}>
          {/* Browser top bar */}
          <div className="flex-shrink-0 flex items-center gap-3 px-4 py-2.5" style={{ background: '#f3f4f6', borderBottom: '1px solid #e5e7eb' }}>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 bg-white rounded-lg px-3 py-1 text-xs text-gray-400 border border-gray-200 flex items-center gap-2">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
              <span>{design.id}.app/{activePage === 'landing' ? '' : activePage}</span>
            </div>
            <button
              onClick={handleExport}
              title="Export design system as Markdown"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-200 transition-colors duration-150 cursor-pointer flex-shrink-0"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              <span className="hidden sm:inline">Export .md</span>
            </button>
          </div>

          {/* Page tabs */}
          <PageTabBar
            pages={design.pages}
            active={activePage}
            onChange={setActivePage}
            primaryColor={design.colors.primary}
          />

          {/* Page content — scrollable */}
          <div className="flex-1 overflow-y-auto scrollbar-none">
            {id && <DemoRenderer designId={id} page={activePage} />}
          </div>
        </div>

        {/* Active page description */}
        {activePgDef && (
          <p className="text-white/30 text-xs text-center mt-3">{activePgDef.label} — {activePgDef.description}</p>
        )}
      </div>
    </div>
  );
}
