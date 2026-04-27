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
    id: 'custom-builder',
    name: state.name || 'My Design',
    tagline: state.tagline || 'A custom design system',
    productType: state.productType,
    style: state.styleRow?.['Style Category'] ?? 'Minimalism',
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

interface PageDef { id: string; label: string; description: string }

interface BuilderState {
  productType: string;
  productRow: ProductRow | null;
  styleRow: StyleRow | null;
  colorRow: ColorRow | null;
  typographyRow: TypographyRow | null;
  pages: PageDef[];
  name: string;
  tagline: string;
}

// ── step indicator (clickable) ─────────────────────────────────────────────

function StepIndicator({ step, maxVisited, onJump }: { step: number; maxVisited: number; onJump: (i: number) => void }) {
  return (
    <div className="flex items-center gap-0">
      {STEPS.map((label, i) => {
        const done = i < step;
        const active = i === step;
        const reachable = i <= maxVisited;
        return (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center gap-1">
              <button
                onClick={() => reachable && onJump(i)}
                disabled={!reachable}
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 ${
                  done ? 'bg-indigo-500 text-white cursor-pointer hover:bg-indigo-400' :
                  active ? 'bg-indigo-400 text-white ring-2 ring-indigo-400/40' :
                  reachable ? 'bg-white/15 text-white/50 cursor-pointer hover:bg-white/20' :
                  'bg-white/10 text-white/20 cursor-not-allowed'
                }`}
              >
                {done ? (
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                ) : i + 1}
              </button>
              <span className={`text-[9px] font-medium hidden sm:block ${active ? 'text-indigo-300' : done ? 'text-white/50' : reachable ? 'text-white/30' : 'text-white/15'}`}>{label}</span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`w-8 sm:w-12 h-px mx-1 mb-3 sm:mb-4 transition-colors duration-200 ${done ? 'bg-indigo-500/60' : 'bg-white/10'}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── mini preview sidebar ────────────────────────────────────────────────────

function MiniPreview({ state }: { state: BuilderState }) {
  const bg = state.colorRow?.['Background (Hex)'] ?? '#0F172A';
  const primary = state.colorRow?.['Primary (Hex)'] ?? '#6366F1';
  const cta = state.colorRow?.['CTA (Hex)'] ?? '#10B981';
  const text = state.colorRow?.['Text (Hex)'] ?? '#F8FAFC';
  const body = state.typographyRow?.['Body Font'] ?? 'Inter';
  const styleName = state.styleRow?.['Style Category'] ?? '—';

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
        {styleName !== '—' && <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5" style={{ color: `${text}60` }}>{styleName}</span>}
      </div>
    </div>
  );
}

function SuggestionBanner({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-2.5 px-3 py-2.5 rounded-xl mb-5 border" style={{ background: 'rgba(99,102,241,0.08)', borderColor: 'rgba(99,102,241,0.2)' }}>
      <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
      <p className="text-xs text-indigo-300/80"><span className="font-semibold text-indigo-300">{label}:</span> {value}</p>
    </div>
  );
}

// ── steps ──────────────────────────────────────────────────────────────────

function Step1Product({ state, setState, products }: { state: BuilderState; setState: (s: BuilderState) => void; products: ProductRow[] }) {
  const unique = Array.from(new Set(products.map(r => r['Product Type']).filter(Boolean))).sort();
  return (
    <div>
      <h2 className="text-white font-bold text-lg mb-1">What are you building?</h2>
      <p className="text-white/40 text-sm mb-5">Pick the product type — this drives suggestions in all following steps.</p>
      <div className="flex flex-wrap gap-2">
        {unique.map(pt => (
          <button
            key={pt}
            onClick={() => {
              const row = products.find(r => r['Product Type'] === pt) ?? null;
              setState({ ...state, productType: pt, productRow: row });
            }}
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
  const [showAll, setShowAll] = useState(false);
  const pt = state.productType.toLowerCase();
  const recommended = state.productRow?.['Primary Style Recommendation'] ?? '';
  const secondaryRec = state.productRow?.['Secondary Styles'] ?? '';

  const ranked = styles
    .map(row => {
      const cat = row['Style Category'].toLowerCase();
      const bestFor = row['Best For'].toLowerCase();
      const keywords = row['Keywords'].toLowerCase();
      const isTopRec = recommended.toLowerCase().split(/[,/]/).some(r => cat.includes(r.trim()) || r.trim().includes(cat));
      const isSecRec = secondaryRec.toLowerCase().split(/[,/]/).some(r => cat.includes(r.trim()) || r.trim().includes(cat));
      const matchesPt = bestFor.includes(pt) || keywords.includes(pt);
      const score = (isTopRec ? 5 : 0) + (isSecRec ? 3 : 0) + (matchesPt ? 1 : 0);
      return { row, score };
    })
    .sort((a, b) => b.score - a.score);

  const filtered = ranked.filter(({ row }) =>
    !search || row['Style Category'].toLowerCase().includes(search.toLowerCase()) || row['Keywords'].toLowerCase().includes(search.toLowerCase())
  );

  const visible = showAll ? filtered : filtered.slice(0, 12);

  return (
    <div>
      <h2 className="text-white font-bold text-lg mb-1">Choose a visual style</h2>
      <p className="text-white/40 text-sm mb-4">Best matches for <span className="text-indigo-300">{state.productType}</span> shown first.</p>
      {recommended && <SuggestionBanner label="Recommended for your product" value={recommended + (secondaryRec ? ` · Also consider: ${secondaryRec}` : '')} />}
      <input
        type="text"
        placeholder="Search styles…"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full mb-4 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-indigo-500/50"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {visible.map(({ row, score }) => {
          const isTopRec = score >= 5;
          return (
            <button
              key={row['Style Category']}
              onClick={() => setState({ ...state, styleRow: row })}
              className={`text-left p-3 rounded-xl border transition-all duration-150 cursor-pointer relative ${
                state.styleRow?.['Style Category'] === row['Style Category']
                  ? 'bg-indigo-500/15 border-indigo-500/40'
                  : 'bg-white/3 border-white/8 hover:bg-white/8 hover:border-white/15'
              }`}
            >
              {isTopRec && (
                <div className="absolute top-2 right-2 text-[9px] px-1.5 py-0.5 rounded-full" style={{ background: 'rgba(99,102,241,0.2)', color: '#a5b4fc' }}>
                  ★ Top pick
                </div>
              )}
              <div className="flex items-start justify-between gap-2 mb-1.5 pr-12">
                <p className="text-white text-sm font-semibold leading-tight">{row['Style Category']}</p>
              </div>
              <p className="text-white/40 text-[11px] leading-relaxed line-clamp-2 mb-2">{row['Keywords']}</p>
              <p className="text-white/30 text-[10px] line-clamp-1 mb-2">{row['Best For']}</p>
              <div className="flex gap-1.5 flex-wrap">
                {row['Dark Mode ✓'] === 'Yes' && <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-white/40">Dark</span>}
                {row['Light Mode ✓'] === 'Yes' && <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-white/40">Light</span>}
                {row['Complexity'] && <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-white/40">{row['Complexity']}</span>}
                {row['Mobile-Friendly'] === 'Yes' && <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400/70">Mobile ✓</span>}
              </div>
            </button>
          );
        })}
      </div>
      {!showAll && filtered.length > 12 && (
        <button onClick={() => setShowAll(true)} className="mt-4 w-full py-2 rounded-xl border border-white/10 text-white/40 text-xs hover:bg-white/5 hover:text-white/60 transition-colors cursor-pointer">
          Show all {filtered.length} styles
        </button>
      )}
    </div>
  );
}

function Step3Colors({ state, setState, colors }: { state: BuilderState; setState: (s: BuilderState) => void; colors: ColorRow[] }) {
  const [search, setSearch] = useState('');
  const [showAll, setShowAll] = useState(false);
  const pt = state.productType.toLowerCase();
  const paletteFocus = state.productRow?.['Color Palette Focus'] ?? '';
  const styleKeywords = (state.styleRow?.['Keywords'] ?? '').toLowerCase();

  const ranked = colors
    .map(row => {
      const type = row['Product Type'].toLowerCase();
      const notes = row['Notes'].toLowerCase();
      const exactMatch = type === pt ? 4 : 0;
      const partialMatch = type.split(/[,/]/).some(t => pt.includes(t.trim()) || t.trim().includes(pt)) ? 2 : 0;
      const styleMatch = styleKeywords.split(/[\s,]+/).some(w => w.length > 3 && notes.includes(w)) ? 1 : 0;
      const score = exactMatch + partialMatch + styleMatch;
      return { row, score };
    })
    .sort((a, b) => b.score - a.score);

  const filtered = ranked.filter(({ row }) =>
    !search || row['Product Type'].toLowerCase().includes(search.toLowerCase()) || row['Notes'].toLowerCase().includes(search.toLowerCase())
  );

  const visible = showAll ? filtered : filtered.slice(0, 18);

  return (
    <div>
      <h2 className="text-white font-bold text-lg mb-1">Choose a color palette</h2>
      <p className="text-white/40 text-sm mb-4">Best matches for your product type and style shown first.</p>
      {paletteFocus && <SuggestionBanner label="Color guidance for your product" value={paletteFocus} />}
      <input
        type="text"
        placeholder="Search palettes…"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full mb-4 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-indigo-500/50"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {visible.map(({ row, score }) => {
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
              <div className="flex gap-1 mb-2 h-8 rounded-lg overflow-hidden">
                {swatches.filter(h => h && h.startsWith('#')).map(hex => (
                  <div key={hex} className="flex-1" style={{ background: hex }} title={hex} />
                ))}
              </div>
              <div className="flex items-start justify-between gap-1">
                <p className="text-white/70 text-xs font-medium leading-snug">{row['Product Type']}</p>
                {score >= 4 && <span className="text-[9px] px-1.5 py-0.5 rounded flex-shrink-0" style={{ background: 'rgba(99,102,241,0.2)', color: '#a5b4fc' }}>★ Match</span>}
              </div>
              {row['Notes'] && <p className="text-white/30 text-[10px] mt-0.5 line-clamp-2">{row['Notes']}</p>}
            </button>
          );
        })}
      </div>
      {!showAll && filtered.length > 18 && (
        <button onClick={() => setShowAll(true)} className="mt-4 w-full py-2 rounded-xl border border-white/10 text-white/40 text-xs hover:bg-white/5 hover:text-white/60 transition-colors cursor-pointer">
          Show all {filtered.length} palettes
        </button>
      )}
    </div>
  );
}

function Step4Typography({ state, setState, typography }: { state: BuilderState; setState: (s: BuilderState) => void; typography: TypographyRow[] }) {
  const [search, setSearch] = useState('');
  const [showAll, setShowAll] = useState(false);
  const styleKeywords = (state.styleRow?.['Keywords'] ?? '').toLowerCase();
  const styleCategory = (state.styleRow?.['Style Category'] ?? '').toLowerCase();
  const ptKeywords = state.productType.toLowerCase();

  const ranked = typography
    .map(row => {
      const mood = row['Mood/Style Keywords'].toLowerCase();
      const bestFor = row['Best For'].toLowerCase();
      const cat = row['Category'].toLowerCase();
      const styleWords = styleKeywords.split(/[\s,]+/).filter(w => w.length > 3);
      const styleScore = styleWords.reduce((acc, w) => acc + (mood.includes(w) ? 1 : 0), 0);
      const ptScore = bestFor.includes(ptKeywords) ? 2 : 0;
      const catScore = (styleCategory.includes('minimal') && cat.includes('sans')) ? 1 :
                       (styleCategory.includes('editorial') && cat.includes('serif')) ? 1 :
                       (styleCategory.includes('brutali') && cat.includes('display')) ? 1 : 0;
      return { row, score: styleScore + ptScore + catScore };
    })
    .sort((a, b) => b.score - a.score);

  const filtered = ranked.filter(({ row }) =>
    !search ||
    row['Font Pairing Name'].toLowerCase().includes(search.toLowerCase()) ||
    row['Heading Font'].toLowerCase().includes(search.toLowerCase()) ||
    row['Body Font'].toLowerCase().includes(search.toLowerCase())
  );

  const visible = showAll ? filtered : filtered.slice(0, 12);

  const styleHint = state.styleRow
    ? `Based on your ${state.styleRow['Style Category']} style`
    : null;

  return (
    <div>
      <h2 className="text-white font-bold text-lg mb-1">Choose typography</h2>
      <p className="text-white/40 text-sm mb-4">Font pairings matched to your style and product.</p>
      {styleHint && state.styleRow && (
        <SuggestionBanner
          label={styleHint}
          value={state.styleRow['Best For'] ? `Works best for: ${state.styleRow['Best For'].split(',').slice(0, 3).join(', ')}` : ''}
        />
      )}
      <input
        type="text"
        placeholder="Search fonts…"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full mb-4 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-indigo-500/50"
      />
      <div className="grid sm:grid-cols-2 gap-3">
        {visible.map(({ row, score }) => {
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
                <div className="flex-1 min-w-0">
                  <p className="text-white/70 text-[11px] uppercase tracking-wider mb-0.5">Heading</p>
                  <p className="text-white font-bold text-base leading-none truncate" style={{ fontFamily: `'${row['Heading Font']}', serif` }}>{row['Heading Font']}</p>
                </div>
                {score >= 2 && <span className="text-[9px] px-1.5 py-0.5 rounded flex-shrink-0 ml-2" style={{ background: 'rgba(99,102,241,0.2)', color: '#a5b4fc' }}>Match</span>}
              </div>
              <div className="mb-2">
                <p className="text-white/70 text-[11px] uppercase tracking-wider mb-0.5">Body</p>
                <p className="text-white/60 text-sm" style={{ fontFamily: `'${row['Body Font']}', sans-serif` }}>{row['Body Font']}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-white/25 text-[10px] line-clamp-1">{row['Mood/Style Keywords']}</p>
                {row['Category'] && <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-white/35 ml-2 flex-shrink-0">{row['Category']}</span>}
              </div>
            </button>
          );
        })}
      </div>
      {!showAll && filtered.length > 12 && (
        <button onClick={() => setShowAll(true)} className="mt-4 w-full py-2 rounded-xl border border-white/10 text-white/40 text-xs hover:bg-white/5 hover:text-white/60 transition-colors cursor-pointer">
          Show all {filtered.length} font pairings
        </button>
      )}
    </div>
  );
}

function Step5Pages({ state, setState }: { state: BuilderState; setState: (s: BuilderState) => void }) {
  const togglePage = (pg: PageDef) => {
    const has = state.pages.some(p => p.id === pg.id);
    setState({ ...state, pages: has ? state.pages.filter(p => p.id !== pg.id) : [...state.pages, pg] });
  };

  const landingPattern = state.productRow?.['Landing Page Pattern'] ?? '';
  const dashboardStyle = state.productRow?.['Dashboard Style (if applicable)'] ?? '';

  return (
    <div>
      <h2 className="text-white font-bold text-lg mb-1">Name your design & pick pages</h2>
      <p className="text-white/40 text-sm mb-5">Select 2–5 pages to preview. Pick at least 2.</p>

      {(landingPattern || dashboardStyle) && (
        <SuggestionBanner
          label="Page guidance for your product"
          value={[landingPattern && `Landing: ${landingPattern}`, dashboardStyle && `Dashboard: ${dashboardStyle}`].filter(Boolean).join(' · ')}
        />
      )}

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
                <div className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${selected ? 'border-indigo-400 bg-indigo-400' : 'border-white/20'}`}>
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

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Style', value: design.style },
          { label: 'Product', value: design.productType },
          { label: 'Heading', value: design.typography.headingFont },
          { label: 'Mood', value: design.mood },
        ].map(({ label, value }) => (
          <div key={label} className="glass rounded-xl p-3">
            <p className="text-white/30 text-[10px] uppercase tracking-wider mb-1">{label}</p>
            <p className="text-white text-xs font-semibold truncate">{value}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-2 flex-wrap">
        {(Object.entries(design.colors) as [string, string][]).filter(([, v]) => v?.startsWith('#')).map(([k, v]) => (
          <div key={k} className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full border border-white/10" style={{ background: v }} />
            <span className="text-[10px] text-white/30">{k}</span>
          </div>
        ))}
      </div>

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

// ── main ───────────────────────────────────────────────────────────────────

const EMPTY_STATE: BuilderState = {
  productType: '',
  productRow: null,
  styleRow: null,
  colorRow: null,
  typographyRow: null,
  pages: [PAGE_OPTIONS[0], PAGE_OPTIONS[1]],
  name: '',
  tagline: '',
};

export function BuilderPage() {
  const [step, setStep] = useState(0);
  const [maxVisited, setMaxVisited] = useState(0);
  const [state, setState] = useState<BuilderState>(EMPTY_STATE);

  const { data: products } = useCsvData<ProductRow>('/data/products.csv');
  const { data: styles } = useCsvData<StyleRow>('/data/styles.csv');
  const { data: colors } = useCsvData<ColorRow>('/data/colors.csv');
  const { data: typography } = useCsvData<TypographyRow>('/data/typography.csv');

  const goTo = (i: number) => {
    setStep(i);
    setMaxVisited(v => Math.max(v, i));
  };

  const canAdvance = () => {
    if (step === 0) return !!state.productType;
    if (step === 4) return state.pages.length >= 2;
    return true;
  };

  const handleNext = () => {
    const next = Math.min(STEPS.length - 1, step + 1);
    goTo(next);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="flex-shrink-0 px-5 py-4 border-b border-white/10 flex items-center justify-between gap-4" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="min-w-0 hidden sm:block">
          <p className="text-white font-bold text-sm leading-none">Design Builder</p>
          <p className="text-white/30 text-xs mt-0.5">Click any completed step to revisit</p>
        </div>
        <StepIndicator step={step} maxVisited={maxVisited} onJump={goTo} />
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 overflow-y-auto scrollbar-none p-5 md:p-8">
          {step === 0 && <Step1Product state={state} setState={setState} products={products} />}
          {step === 1 && <Step2Style state={state} setState={setState} styles={styles} />}
          {step === 2 && <Step3Colors state={state} setState={setState} colors={colors} />}
          {step === 3 && <Step4Typography state={state} setState={setState} typography={typography} />}
          {step === 4 && <Step5Pages state={state} setState={setState} />}
          {step === 5 && <Step6Preview state={state} />}
        </div>

        {step < 5 && (
          <aside className="hidden lg:flex w-56 flex-shrink-0 flex-col gap-4 p-4 border-l border-white/10 overflow-y-auto scrollbar-none" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <p className="text-white/25 text-[10px] uppercase tracking-widest">Live preview</p>
            <MiniPreview state={state} />
            <div className="space-y-2">
              {([
                { dot: 'bg-indigo-400', label: state.productType || '—', title: 'Product' },
                { dot: 'bg-purple-400', label: state.styleRow?.['Style Category'] || '—', title: 'Style' },
                { dot: 'bg-cyan-400', label: state.colorRow?.['Product Type'] || '—', title: 'Colors' },
                { dot: 'bg-emerald-400', label: state.typographyRow ? `${state.typographyRow['Heading Font']} / ${state.typographyRow['Body Font']}` : '—', title: 'Fonts' },
              ] as { dot: string; label: string; title: string }[]).map(({ dot, label, title }) => (
                <div key={title} className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dot}`} />
                  <div className="min-w-0">
                    <p className="text-[9px] text-white/25 uppercase tracking-wider">{title}</p>
                    <p className="text-[10px] text-white/50 truncate">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        )}
      </div>

      <div className="flex-shrink-0 px-5 py-4 border-t border-white/10 flex items-center justify-between" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <button
          onClick={() => goTo(Math.max(0, step - 1))}
          disabled={step === 0}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white/50 hover:text-white/80 hover:bg-white/5 transition-colors duration-150 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
          Back
        </button>

        <div className="flex items-center gap-3">
          {step > 0 && step < STEPS.length - 1 && (
            <button
              onClick={handleNext}
              className="text-white/30 text-xs hover:text-white/50 transition-colors cursor-pointer"
            >
              Skip
            </button>
          )}
          {step < STEPS.length - 1 ? (
            <button
              onClick={handleNext}
              disabled={!canAdvance()}
              className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-500 hover:bg-indigo-400 text-white transition-colors duration-150 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {step === 4 ? 'Preview' : 'Next'}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          ) : (
            <button
              onClick={() => { setStep(0); setMaxVisited(0); setState(EMPTY_STATE); }}
              className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/15 text-white/80 transition-colors duration-150 cursor-pointer"
            >
              Start over
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
