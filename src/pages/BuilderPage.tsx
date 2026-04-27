import { useState, useEffect, useRef } from 'react';
import { useCsvData } from '../hooks/useCsvData';
import type { StyleRow, ColorRow, TypographyRow, ProductRow } from '../data/types';
import type { SystemDesign } from '../data/systemDesigns';
import { GenericPages } from '../components/system/demo-pages/GenericPages';
import { PageTabBar } from '../components/system/PageTabBar';
import { generateDesignSystemMd } from '../lib/utils';
import { hexToRgb } from '../lib/utils';

// ── helpers ────────────────────────────────────────────────────────────────

function deriveMood(colorRow: ColorRow | null): 'dark' | 'light' | 'vibrant' {
  if (!colorRow) return 'dark';
  const bg = colorRow['Background (Hex)'];
  const rgb = hexToRgb(bg);
  if (!rgb) return 'dark';
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  if (luminance > 0.6) return 'light';
  const primary = hexToRgb(colorRow['Primary (Hex)']);
  if (primary) {
    const sat = Math.max(primary.r, primary.g, primary.b) - Math.min(primary.r, primary.g, primary.b);
    if (sat > 150) return 'vibrant';
  }
  return 'dark';
}

function buildSystemDesign(state: BuilderState): SystemDesign {
  return {
    id: 'custom-' + Date.now(),
    name: state.name || 'My Design',
    tagline: state.tagline || 'A custom design system',
    productType: state.productType,
    style: state.styleRow?.['Style Category'] ?? 'Custom',
    styleSecondary: state.styleRow?.['Type'] ?? 'Clean',
    colors: {
      primary: state.colorRow?.['Primary (Hex)'] ?? '#6366F1',
      secondary: state.colorRow?.['Secondary (Hex)'] ?? '#8B5CF6',
      cta: state.colorRow?.['CTA (Hex)'] ?? '#10B981',
      background: state.colorRow?.['Background (Hex)'] ?? '#0F172A',
      text: state.colorRow?.['Text (Hex)'] ?? '#F8FAFC',
      border: state.colorRow?.['Border (Hex)'] ?? '#1E293B',
    },
    typography: {
      headingFont: state.typographyRow?.['Heading Font'] ?? 'Inter',
      bodyFont: state.typographyRow?.['Body Font'] ?? 'Inter',
      cssImport: state.typographyRow?.['CSS Import'] ?? '',
      googleFontsUrl: state.typographyRow?.['Google Fonts URL'] ?? '',
    },
    pages: state.pages.length > 0 ? state.pages : [{ id: 'landing', label: 'Landing', description: 'Main landing page' }],
    mood: deriveMood(state.colorRow),
    tags: [state.productType, state.styleRow?.['Style Category'] ?? 'Custom'].filter(Boolean),
  };
}

const PAGE_OPTIONS = [
  { id: 'landing', label: 'Landing', description: 'Hero + features + CTA' },
  { id: 'dashboard', label: 'Dashboard', description: 'Overview with key metrics' },
  { id: 'profile', label: 'Profile', description: 'User account & settings' },
  { id: 'detail', label: 'Detail', description: 'Item or content detail view' },
  { id: 'settings', label: 'Settings', description: 'Configuration & preferences' },
  { id: 'pricing', label: 'Pricing', description: 'Plans & subscription tiers' },
];

const STEPS = ['Product', 'Style', 'Colors', 'Typography', 'Pages', 'Preview'];

// ── state ──────────────────────────────────────────────────────────────────

interface PageDef { id: string; label: string; description: string }

interface BuilderState {
  productType: string;
  styleRow: StyleRow | null;
  colorRow: ColorRow | null;
  typographyRow: TypographyRow | null;
  pages: PageDef[];
  name: string;
  tagline: string;
}

// ── sub-components ─────────────────────────────────────────────────────────

function StepIndicator({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex items-center gap-0">
      {STEPS.map((label, i) => (
        <div key={label} className="flex items-center">
          <div className="flex flex-col items-center gap-1">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 ${
                i < step ? 'bg-indigo-500 text-white' :
                i === step ? 'bg-indigo-400 text-white ring-2 ring-indigo-400/40' :
                'bg-white/10 text-white/30'
              }`}
            >
              {i < step ? (
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
              ) : i + 1}
            </div>
            <span className={`text-[9px] font-medium hidden sm:block ${i === step ? 'text-indigo-300' : i < step ? 'text-white/50' : 'text-white/20'}`}>{label}</span>
          </div>
          {i < total - 1 && (
            <div className={`w-8 sm:w-12 h-px mx-1 mb-3 sm:mb-4 transition-colors duration-200 ${i < step ? 'bg-indigo-500/60' : 'bg-white/10'}`} />
          )}
        </div>
      ))}
    </div>
  );
}

function MiniPreview({ state }: { state: BuilderState }) {
  const bg = state.colorRow?.['Background (Hex)'] ?? '#0F172A';
  const primary = state.colorRow?.['Primary (Hex)'] ?? '#6366F1';
  const cta = state.colorRow?.['CTA (Hex)'] ?? '#10B981';
  const text = state.colorRow?.['Text (Hex)'] ?? '#F8FAFC';
  const heading = state.typographyRow?.['Heading Font'] ?? 'Inter';
  const body = state.typographyRow?.['Body Font'] ?? 'Inter';
  const style = state.styleRow?.['Style Category'] ?? '—';

  return (
    <div className="rounded-xl overflow-hidden border border-white/10 text-xs" style={{ background: bg, fontFamily: `'${body}', sans-serif` }}>
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10" style={{ background: `${primary}15` }}>
        <div className="w-2 h-2 rounded-full bg-red-400/60" />
        <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
        <div className="w-2 h-2 rounded-full bg-green-400/60" />
        <div className="flex-1 h-3.5 rounded bg-white/5 ml-1" />
      </div>
      <div className="p-3 space-y-2">
        <div className="h-3 w-3/4 rounded" style={{ background: `${text}20` }} />
        <div className="h-2 w-full rounded" style={{ background: `${text}10` }} />
        <div className="h-2 w-5/6 rounded" style={{ background: `${text}10` }} />
        <div className="flex gap-1.5 mt-2">
          <div className="h-5 w-16 rounded-md" style={{ background: cta }} />
          <div className="h-5 w-16 rounded-md border" style={{ borderColor: `${primary}40` }} />
        </div>
      </div>
      <div className="px-3 pb-2 flex gap-1 flex-wrap">
        {state.productType && <span className="text-[9px] px-1.5 py-0.5 rounded" style={{ background: `${primary}25`, color: primary }}>{state.productType}</span>}
        {style !== '—' && <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5" style={{ color: `${text}60` }}>{style}</span>}
        {heading !== 'Inter' && <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5" style={{ color: `${text}60` }}>{heading}</span>}
      </div>
    </div>
  );
}

// ── steps ─────────────────────────────────────────────────────────────────

function Step1Product({ state, setState, products }: { state: BuilderState; setState: (s: BuilderState) => void; products: ProductRow[] }) {
  const unique = Array.from(new Set(products.map(r => r['Product Type']).filter(Boolean))).sort();
  return (
    <div>
      <h2 className="text-white font-bold text-lg mb-1">What are you building?</h2>
      <p className="text-white/40 text-sm mb-5">Pick the product type that best matches your project.</p>
      <div className="flex flex-wrap gap-2">
        {unique.map(pt => (
          <button
            key={pt}
            onClick={() => setState({ ...state, productType: pt })}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 cursor-pointer border ${
              state.productType === pt
                ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40'
                : 'bg-white/5 text-white/50 border-white/10 hover:bg-white/10 hover:text-white/80'
            }`}
          >
            {pt}
          </button>
        ))}
      </div>
    </div>
  );
}

function Step2Style({ state, setState, styles }: { state: BuilderState; setState: (s: BuilderState) => void; styles: StyleRow[] }) {
  const [search, setSearch] = useState('');
  const pt = state.productType.toLowerCase();

  const ranked = styles
    .map(row => {
      const bestFor = row['Best For'].toLowerCase();
      const keywords = row['Keywords'].toLowerCase();
      const score = (bestFor.includes(pt) ? 2 : 0) + (keywords.includes(pt) ? 1 : 0);
      return { row, score };
    })
    .sort((a, b) => b.score - a.score);

  const filtered = ranked
    .filter(({ row }) => !search || row['Style Category'].toLowerCase().includes(search.toLowerCase()) || row['Keywords'].toLowerCase().includes(search.toLowerCase()))
    .slice(0, 24);

  return (
    <div>
      <h2 className="text-white font-bold text-lg mb-1">Choose a visual style</h2>
      <p className="text-white/40 text-sm mb-4">Recommended for <span className="text-indigo-300">{state.productType}</span> shown first.</p>
      <input
        type="text"
        placeholder="Search styles…"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full mb-4 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-indigo-500/50"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filtered.map(({ row, score }) => (
          <button
            key={row['Style Category']}
            onClick={() => setState({ ...state, styleRow: row })}
            className={`text-left p-3 rounded-xl border transition-all duration-150 cursor-pointer ${
              state.styleRow?.['Style Category'] === row['Style Category']
                ? 'bg-indigo-500/15 border-indigo-500/40'
                : 'bg-white/3 border-white/8 hover:bg-white/8 hover:border-white/15'
            }`}
          >
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <p className="text-white text-sm font-semibold leading-tight">{row['Style Category']}</p>
              {score > 0 && <span className="text-[9px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 flex-shrink-0">Match</span>}
            </div>
            <p className="text-white/40 text-[11px] leading-relaxed line-clamp-2">{row['Keywords']}</p>
            <div className="flex gap-1.5 mt-2 flex-wrap">
              {row['Dark Mode ✓'] === 'Yes' && <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-white/40">Dark</span>}
              {row['Light Mode ✓'] === 'Yes' && <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-white/40">Light</span>}
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-white/40">{row['Complexity']}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function Step3Colors({ state, setState, colors }: { state: BuilderState; setState: (s: BuilderState) => void; colors: ColorRow[] }) {
  const [search, setSearch] = useState('');
  const pt = state.productType.toLowerCase();

  const ranked = colors
    .map(row => {
      const type = row['Product Type'].toLowerCase();
      const score = type === pt ? 3 : type.split(/[,/]/).some(t => pt.includes(t.trim()) || t.trim().includes(pt)) ? 1 : 0;
      return { row, score };
    })
    .sort((a, b) => b.score - a.score);

  const filtered = ranked
    .filter(({ row }) => !search || row['Product Type'].toLowerCase().includes(search.toLowerCase()) || row['Notes'].toLowerCase().includes(search.toLowerCase()))
    .slice(0, 30);

  return (
    <div>
      <h2 className="text-white font-bold text-lg mb-1">Choose a color palette</h2>
      <p className="text-white/40 text-sm mb-4">Palettes matched to <span className="text-indigo-300">{state.productType}</span> shown first.</p>
      <input
        type="text"
        placeholder="Search palettes…"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full mb-4 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-indigo-500/50"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filtered.map(({ row, score }) => {
          const swatches = [row['Primary (Hex)'], row['Secondary (Hex)'], row['CTA (Hex)'], row['Background (Hex)'], row['Text (Hex)'], row['Border (Hex)']];
          const selected = state.colorRow?.['No'] === row['No'];
          return (
            <button
              key={row['No']}
              onClick={() => setState({ ...state, colorRow: row })}
              className={`text-left p-3 rounded-xl border transition-all duration-150 cursor-pointer ${
                selected ? 'border-indigo-500/40 bg-indigo-500/10' : 'border-white/8 bg-white/3 hover:bg-white/8 hover:border-white/15'
              }`}
            >
              <div className="flex gap-1 mb-2">
                {swatches.filter(h => h && h.startsWith('#')).map(hex => (
                  <div key={hex} className="flex-1 h-6 rounded" style={{ background: hex }} title={hex} />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <p className="text-white/70 text-xs font-medium truncate">{row['Product Type']}</p>
                {score > 0 && <span className="text-[9px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 flex-shrink-0 ml-1">Match</span>}
              </div>
              {row['Notes'] && <p className="text-white/30 text-[10px] mt-0.5 line-clamp-1">{row['Notes']}</p>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Step4Typography({ state, setState, typography }: { state: BuilderState; setState: (s: BuilderState) => void; typography: TypographyRow[] }) {
  const [search, setSearch] = useState('');
  const styleKeywords = (state.styleRow?.['Keywords'] ?? '').toLowerCase();

  const ranked = typography
    .map(row => {
      const mood = row['Mood/Style Keywords'].toLowerCase();
      const matchWords = styleKeywords.split(/[\s,]+/).filter(Boolean);
      const score = matchWords.reduce((acc, w) => acc + (mood.includes(w) ? 1 : 0), 0);
      return { row, score };
    })
    .sort((a, b) => b.score - a.score);

  const filtered = ranked
    .filter(({ row }) => !search ||
      row['Font Pairing Name'].toLowerCase().includes(search.toLowerCase()) ||
      row['Heading Font'].toLowerCase().includes(search.toLowerCase()) ||
      row['Body Font'].toLowerCase().includes(search.toLowerCase()))
    .slice(0, 24);

  return (
    <div>
      <h2 className="text-white font-bold text-lg mb-1">Choose typography</h2>
      <p className="text-white/40 text-sm mb-4">Font pairings matched to your chosen style.</p>
      <input
        type="text"
        placeholder="Search fonts…"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full mb-4 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-indigo-500/50"
      />
      <div className="grid sm:grid-cols-2 gap-3">
        {filtered.map(({ row, score }) => {
          const selected = state.typographyRow?.['No'] === row['No'];
          return (
            <button
              key={row['No']}
              onClick={() => setState({ ...state, typographyRow: row })}
              className={`text-left p-3 rounded-xl border transition-all duration-150 cursor-pointer ${
                selected ? 'border-indigo-500/40 bg-indigo-500/10' : 'border-white/8 bg-white/3 hover:bg-white/8 hover:border-white/15'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-white/70 text-[11px] uppercase tracking-wider mb-0.5">Heading</p>
                  <p className="text-white font-bold text-base leading-none" style={{ fontFamily: `'${row['Heading Font']}', serif` }}>{row['Heading Font']}</p>
                </div>
                {score > 0 && <span className="text-[9px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300">Match</span>}
              </div>
              <div className="mb-2">
                <p className="text-white/70 text-[11px] uppercase tracking-wider mb-0.5">Body</p>
                <p className="text-white/60 text-sm" style={{ fontFamily: `'${row['Body Font']}', sans-serif` }}>{row['Body Font']}</p>
              </div>
              <p className="text-white/30 text-[10px] line-clamp-1">{row['Mood/Style Keywords']}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Step5Pages({ state, setState }: { state: BuilderState; setState: (s: BuilderState) => void }) {
  const togglePage = (pg: PageDef) => {
    const has = state.pages.some(p => p.id === pg.id);
    if (has) {
      setState({ ...state, pages: state.pages.filter(p => p.id !== pg.id) });
    } else {
      setState({ ...state, pages: [...state.pages, pg] });
    }
  };

  return (
    <div>
      <h2 className="text-white font-bold text-lg mb-1">Name your design & pick pages</h2>
      <p className="text-white/40 text-sm mb-5">Select 2–5 pages to include in your demo. Pick at least 2.</p>

      <div className="grid sm:grid-cols-2 gap-3 mb-6">
        <div>
          <label className="text-white/40 text-xs uppercase tracking-wider mb-1.5 block">Project name</label>
          <input
            type="text"
            placeholder="My Awesome App"
            value={state.name}
            onChange={e => setState({ ...state, name: e.target.value })}
            className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-indigo-500/50"
          />
        </div>
        <div>
          <label className="text-white/40 text-xs uppercase tracking-wider mb-1.5 block">Tagline</label>
          <input
            type="text"
            placeholder="The future of your workflow"
            value={state.tagline}
            onChange={e => setState({ ...state, tagline: e.target.value })}
            className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-indigo-500/50"
          />
        </div>
      </div>

      <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Pages ({state.pages.length} selected)</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {PAGE_OPTIONS.map(pg => {
          const selected = state.pages.some(p => p.id === pg.id);
          return (
            <button
              key={pg.id}
              onClick={() => togglePage(pg)}
              className={`text-left p-3 rounded-xl border transition-all duration-150 cursor-pointer ${
                selected ? 'bg-indigo-500/15 border-indigo-500/40' : 'bg-white/3 border-white/8 hover:bg-white/8 hover:border-white/15'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                  selected ? 'border-indigo-400 bg-indigo-400' : 'border-white/20'
                }`}>
                  {selected && <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>}
                </div>
                <p className="text-white text-sm font-semibold">{pg.label}</p>
              </div>
              <p className="text-white/40 text-xs ml-6">{pg.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Step6Preview({ state }: { state: BuilderState }) {
  const design = buildSystemDesign(state);
  const [activePage, setActivePage] = useState(design.pages[0]?.id ?? 'landing');
  const fontRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    if (design.typography.cssImport && !fontRef.current) {
      const style = document.createElement('style');
      style.textContent = design.typography.cssImport;
      document.head.appendChild(style);
      fontRef.current = style;
    }
  }, [design.typography.cssImport]);

  function handleExport() {
    const md = generateDesignSystemMd(design);
    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${design.name.toLowerCase().replace(/\s+/g, '-')}-design-system.md`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-white font-bold text-lg mb-1">Your design system</h2>
        <p className="text-white/40 text-sm">Preview your custom system below. Export as Markdown to use with Claude.</p>
      </div>

      {/* Token summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="glass rounded-xl p-3">
          <p className="text-white/30 text-[10px] uppercase tracking-wider mb-1">Style</p>
          <p className="text-white text-xs font-semibold">{design.style}</p>
        </div>
        <div className="glass rounded-xl p-3">
          <p className="text-white/30 text-[10px] uppercase tracking-wider mb-1">Product</p>
          <p className="text-white text-xs font-semibold truncate">{design.productType}</p>
        </div>
        <div className="glass rounded-xl p-3">
          <p className="text-white/30 text-[10px] uppercase tracking-wider mb-1">Heading</p>
          <p className="text-white text-xs font-semibold">{design.typography.headingFont}</p>
        </div>
        <div className="glass rounded-xl p-3">
          <p className="text-white/30 text-[10px] uppercase tracking-wider mb-1">Colors</p>
          <div className="flex gap-1">
            {[design.colors.primary, design.colors.secondary, design.colors.cta, design.colors.background].map(c => (
              <div key={c} className="w-4 h-4 rounded-full border border-white/10" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>

      {/* Browser preview */}
      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl" style={{ background: '#fff' }}>
        <div className="flex items-center gap-3 px-4 py-2.5" style={{ background: '#f3f4f6', borderBottom: '1px solid #e5e7eb' }}>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white rounded-lg px-3 py-1 text-xs text-gray-400 border border-gray-200 flex items-center gap-2">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
            <span>{design.name.toLowerCase().replace(/\s+/g, '-')}.app/{activePage === 'landing' ? '' : activePage}</span>
          </div>
          <button
            onClick={handleExport}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-200 transition-colors duration-150 cursor-pointer flex-shrink-0"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Export .md
          </button>
        </div>
        <PageTabBar pages={design.pages} active={activePage} onChange={setActivePage} primaryColor={design.colors.primary} />
        <div className="overflow-y-auto" style={{ maxHeight: '60vh' }}>
          <GenericPages design={design} page={activePage} />
        </div>
      </div>
    </div>
  );
}

// ── main page ──────────────────────────────────────────────────────────────

const EMPTY_STATE: BuilderState = {
  productType: '',
  styleRow: null,
  colorRow: null,
  typographyRow: null,
  pages: [PAGE_OPTIONS[0], PAGE_OPTIONS[1]],
  name: '',
  tagline: '',
};

export function BuilderPage() {
  const [step, setStep] = useState(0);
  const [state, setState] = useState<BuilderState>(EMPTY_STATE);

  const { data: products } = useCsvData<ProductRow>('/data/products.csv');
  const { data: styles } = useCsvData<StyleRow>('/data/styles.csv');
  const { data: colors } = useCsvData<ColorRow>('/data/colors.csv');
  const { data: typography } = useCsvData<TypographyRow>('/data/typography.csv');

  const canAdvance = () => {
    if (step === 0) return !!state.productType;
    if (step === 1) return !!state.styleRow;
    if (step === 2) return !!state.colorRow;
    if (step === 3) return !!state.typographyRow;
    if (step === 4) return state.pages.length >= 2 && !!state.name.trim();
    return true;
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <div className="flex-shrink-0 px-5 py-4 border-b border-white/10 flex items-center justify-between gap-4" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="min-w-0">
          <p className="text-white font-bold text-sm leading-none">Design Builder</p>
          <p className="text-white/30 text-xs mt-0.5 hidden sm:block">Create a custom system design step by step</p>
        </div>
        <StepIndicator step={step} total={STEPS.length} />
      </div>

      {/* Body — left: step content, right: mini preview */}
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 overflow-y-auto scrollbar-none p-5 md:p-8">
          {step === 0 && <Step1Product state={state} setState={setState} products={products} />}
          {step === 1 && <Step2Style state={state} setState={setState} styles={styles} />}
          {step === 2 && <Step3Colors state={state} setState={setState} colors={colors} />}
          {step === 3 && <Step4Typography state={state} setState={setState} typography={typography} />}
          {step === 4 && <Step5Pages state={state} setState={setState} />}
          {step === 5 && <Step6Preview state={state} />}
        </div>

        {/* Right sidebar: mini preview — hidden on mobile, hidden on preview step */}
        {step < 5 && (
          <aside className="hidden lg:flex w-56 flex-shrink-0 flex-col gap-4 p-4 border-l border-white/10 overflow-y-auto" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <p className="text-white/25 text-[10px] uppercase tracking-widest">Live preview</p>
            <MiniPreview state={state} />
            {state.productType && (
              <div className="space-y-2">
                {state.productType && <div className="flex items-center gap-2 text-xs text-white/40"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />{state.productType}</div>}
                {state.styleRow && <div className="flex items-center gap-2 text-xs text-white/40"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />{state.styleRow['Style Category']}</div>}
                {state.colorRow && <div className="flex items-center gap-2 text-xs text-white/40"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />{state.colorRow['Product Type']}</div>}
                {state.typographyRow && <div className="flex items-center gap-2 text-xs text-white/40"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />{state.typographyRow['Heading Font']} + {state.typographyRow['Body Font']}</div>}
              </div>
            )}
          </aside>
        )}
      </div>

      {/* Footer nav */}
      <div className="flex-shrink-0 px-5 py-4 border-t border-white/10 flex items-center justify-between" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <button
          onClick={() => setStep(s => Math.max(0, s - 1))}
          disabled={step === 0}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white/50 hover:text-white/80 hover:bg-white/5 transition-colors duration-150 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
          Back
        </button>

        <p className="text-white/25 text-xs">Step {step + 1} of {STEPS.length}</p>

        {step < STEPS.length - 1 ? (
          <button
            onClick={() => setStep(s => Math.min(STEPS.length - 1, s + 1))}
            disabled={!canAdvance()}
            className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-500 hover:bg-indigo-400 text-white transition-colors duration-150 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {step === 4 ? 'Preview' : 'Next'}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        ) : (
          <button
            onClick={() => { setStep(0); setState(EMPTY_STATE); }}
            className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/15 text-white/80 transition-colors duration-150 cursor-pointer"
          >
            Start over
          </button>
        )}
      </div>
    </div>
  );
}
