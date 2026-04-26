import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCsvData } from '../hooks/useCsvData';
import { Spinner } from '../components/ui/Spinner';
import { Badge } from '../components/ui/Badge';
import { getContrastColor } from '../lib/utils';
import type { StyleRow, ColorRow, TypographyRow, ChartRow, UXGuidelineRow, ProductRow } from '../data/types';

const TABS = [
  { id: 'styles', label: 'Styles', count: '67' },
  { id: 'colors', label: 'Colors', count: '96' },
  { id: 'typography', label: 'Typography', count: '57' },
  { id: 'charts', label: 'Charts', count: '25' },
  { id: 'ux', label: 'UX Guidelines', count: '99' },
  { id: 'products', label: 'Products', count: '96' },
];

function SearchBar({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder: string }) {
  return (
    <div className="relative max-w-md">
      <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full glass rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:ring-2 focus:ring-indigo-400/50 transition-all duration-200"
        aria-label={placeholder}
      />
    </div>
  );
}

/* ─── STYLES TAB ─── */
function StylesTab() {
  const { data, loading } = useCsvData<StyleRow>('/data/styles.csv');
  const [search, setSearch] = useState('');
  const [complexity, setComplexity] = useState('');
  const [darkOnly, setDarkOnly] = useState(false);

  const complexities = useMemo(() => [...new Set(data.map((r) => r.Complexity).filter(Boolean))], [data]);

  const filtered = useMemo(() => {
    return data.filter((row) => {
      const q = search.toLowerCase();
      const matchSearch = !q || row['Style Category'].toLowerCase().includes(q) || row.Keywords.toLowerCase().includes(q) || row['Best For'].toLowerCase().includes(q);
      const matchComplexity = !complexity || row.Complexity === complexity;
      const matchDark = !darkOnly || row['Dark Mode ✓'] === 'Yes' || row['Dark Mode ✓'] === '✓' || row['Dark Mode ✓'] === 'TRUE';
      return matchSearch && matchComplexity && matchDark;
    });
  }, [data, search, complexity, darkOnly]);

  if (loading) return <Spinner className="py-20" />;

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-6">
        <SearchBar value={search} onChange={setSearch} placeholder="Search styles…" />
        <select
          value={complexity}
          onChange={(e) => setComplexity(e.target.value)}
          className="glass rounded-xl px-3 py-2.5 text-sm text-white/70 outline-none focus:ring-2 focus:ring-indigo-400/50 cursor-pointer"
          aria-label="Filter by complexity"
        >
          <option value="">All complexities</option>
          {complexities.map((c) => <option key={c} value={c} className="bg-slate-800">{c}</option>)}
        </select>
        <label className="flex items-center gap-2 glass rounded-xl px-3 py-2.5 text-sm text-white/70 cursor-pointer hover:text-white transition-colors duration-200">
          <input
            type="checkbox"
            checked={darkOnly}
            onChange={(e) => setDarkOnly(e.target.checked)}
            className="w-3.5 h-3.5 accent-indigo-500"
          />
          Dark mode only
        </label>
      </div>
      <p className="text-white/40 text-xs mb-4">{filtered.length} styles found</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((row) => {
          const colors = row['Primary Colors'].split(',')[0]?.trim().match(/#[0-9A-Fa-f]{6}/)?.[0] || '#6366F1';
          return (
            <article key={row.No} className="glass hover:bg-white/15 rounded-2xl p-5 transition-all duration-200 cursor-default group">
              {/* Color preview */}
              <div className="h-10 rounded-xl mb-4 flex items-center px-3 relative overflow-hidden" style={{ background: colors }}>
                <span className="text-xs font-bold relative z-10" style={{ color: getContrastColor(colors) }}>
                  {row['Style Category']}
                </span>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                  {row['Light Mode ✓'] && <span className="text-[10px] bg-white/20 rounded px-1">☀</span>}
                  {row['Dark Mode ✓'] === 'Yes' || row['Dark Mode ✓'] === '✓' ? <span className="text-[10px] bg-black/30 rounded px-1">☾</span> : null}
                </div>
              </div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-white font-semibold text-sm leading-tight">{row['Style Category']}</h3>
                {row.Complexity && (
                  <Badge variant={row.Complexity === 'Low' ? 'green' : row.Complexity === 'High' ? 'red' : 'yellow'}>
                    {row.Complexity}
                  </Badge>
                )}
              </div>
              {row.Type && <p className="text-indigo-300/70 text-xs mb-2">{row.Type}</p>}
              <p className="text-white/40 text-xs leading-relaxed line-clamp-2 mb-3">{row['Best For']}</p>
              <div className="flex flex-wrap gap-1">
                {row.Keywords.split(',').slice(0, 3).map((k) => (
                  <span key={k} className="text-[10px] bg-white/5 text-white/40 rounded px-1.5 py-0.5">{k.trim()}</span>
                ))}
              </div>
              {row.Performance && (
                <p className="text-white/25 text-[10px] mt-2">Performance: {row.Performance}</p>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}

/* ─── COLORS TAB ─── */
function ColorsTab() {
  const { data, loading } = useCsvData<ColorRow>('/data/colors.csv');
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return !q ? data : data.filter((row) => row['Product Type'].toLowerCase().includes(q) || row.Notes.toLowerCase().includes(q));
  }, [data, search]);

  if (loading) return <Spinner className="py-20" />;

  const swatchKeys: (keyof ColorRow)[] = ['Primary (Hex)', 'Secondary (Hex)', 'CTA (Hex)', 'Background (Hex)', 'Text (Hex)', 'Border (Hex)'];
  const swatchLabels = ['Primary', 'Secondary', 'CTA', 'Background', 'Text', 'Border'];

  return (
    <div>
      <div className="mb-6">
        <SearchBar value={search} onChange={setSearch} placeholder="Search product types…" />
      </div>
      <p className="text-white/40 text-xs mb-4">{filtered.length} palettes found</p>
      <div className="space-y-2">
        {filtered.map((row) => {
          const isOpen = expanded === row.No;
          return (
            <button
              key={row.No}
              onClick={() => setExpanded(isOpen ? null : row.No)}
              className="w-full glass hover:bg-white/15 rounded-2xl px-5 py-4 text-left transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-400/50"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-4">
                {/* Swatches row */}
                <div className="flex gap-1 flex-shrink-0">
                  {swatchKeys.map((key) => {
                    const hex = row[key] as string;
                    if (!hex || !hex.startsWith('#')) return null;
                    return (
                      <div
                        key={key}
                        className="w-6 h-6 rounded-md border border-white/10"
                        style={{ background: hex }}
                        title={hex}
                      />
                    );
                  })}
                </div>
                <span className="text-white/80 text-sm font-medium flex-1 text-left">{row['Product Type']}</span>
                <svg
                  className={`w-4 h-4 text-white/30 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </div>
              {isOpen && (
                <div className="mt-4 grid grid-cols-3 md:grid-cols-6 gap-3">
                  {swatchKeys.map((key, i) => {
                    const hex = row[key] as string;
                    if (!hex || !hex.startsWith('#')) return null;
                    return (
                      <div key={key} className="text-center">
                        <div
                          className="h-14 rounded-xl border border-white/10 mb-1.5"
                          style={{ background: hex }}
                        />
                        <p className="text-white/60 text-[10px] font-medium">{swatchLabels[i]}</p>
                        <p className="text-white/30 text-[10px] font-mono">{hex}</p>
                      </div>
                    );
                  })}
                  {row.Notes && (
                    <div className="col-span-3 md:col-span-6 text-white/40 text-xs mt-2 pt-2 border-t border-white/10">
                      {row.Notes}
                    </div>
                  )}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ─── TYPOGRAPHY TAB ─── */
function TypographyTab() {
  const { data, loading } = useCsvData<TypographyRow>('/data/typography.csv');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [loaded, setLoaded] = useState(new Set<string>());

  const categories = useMemo(() => [...new Set(data.map((r) => r.Category).filter(Boolean))], [data]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return data.filter((row) => {
      const matchSearch = !q || row['Font Pairing Name'].toLowerCase().includes(q) || row['Best For'].toLowerCase().includes(q) || row['Mood/Style Keywords'].toLowerCase().includes(q);
      const matchCat = !category || row.Category === category;
      return matchSearch && matchCat;
    });
  }, [data, search, category]);

  const loadFont = (cssImport: string, key: string) => {
    if (loaded.has(key)) return;
    const style = document.createElement('style');
    style.textContent = cssImport;
    document.head.appendChild(style);
    setLoaded((prev) => new Set(prev).add(key));
  };

  if (loading) return <Spinner className="py-20" />;

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-6">
        <SearchBar value={search} onChange={setSearch} placeholder="Search font pairings…" />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="glass rounded-xl px-3 py-2.5 text-sm text-white/70 outline-none focus:ring-2 focus:ring-indigo-400/50 cursor-pointer"
          aria-label="Filter by category"
        >
          <option value="">All categories</option>
          {categories.map((c) => <option key={c} value={c} className="bg-slate-800">{c}</option>)}
        </select>
      </div>
      <p className="text-white/40 text-xs mb-4">{filtered.length} font pairings found</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((row) => {
          const key = row.No;
          return (
            <article
              key={key}
              className="glass hover:bg-white/15 rounded-2xl p-6 transition-all duration-200 cursor-default"
              onMouseEnter={() => row['CSS Import'] && loadFont(row['CSS Import'], key)}
            >
              <div className="flex items-start justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-white font-semibold text-sm">{row['Font Pairing Name']}</h3>
                  {row.Category && <p className="text-indigo-300/60 text-xs mt-0.5">{row.Category}</p>}
                </div>
                {row['Google Fonts URL'] && (
                  <a
                    href={row['Google Fonts URL']}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/30 hover:text-indigo-300 transition-colors duration-200 cursor-pointer"
                    aria-label="Open in Google Fonts"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                )}
              </div>
              {/* Live preview */}
              <div
                className="mb-4"
                style={{ fontFamily: loaded.has(key) ? `'${row['Heading Font']}', sans-serif` : undefined }}
              >
                <p className="text-white/90 text-2xl font-bold mb-1" style={{ fontFamily: loaded.has(key) ? `'${row['Heading Font']}', sans-serif` : undefined }}>
                  The quick brown fox
                </p>
                <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: loaded.has(key) ? `'${row['Body Font']}', sans-serif` : undefined }}>
                  Jumps over the lazy dog — clean, legible body text at 16px.
                </p>
              </div>
              <div className="flex gap-3 mb-3">
                <div className="glass-strong rounded-lg px-2.5 py-1.5">
                  <p className="text-white/30 text-[10px] uppercase tracking-wider mb-0.5">Heading</p>
                  <p className="text-white/70 text-xs font-medium">{row['Heading Font']}</p>
                </div>
                <div className="glass-strong rounded-lg px-2.5 py-1.5">
                  <p className="text-white/30 text-[10px] uppercase tracking-wider mb-0.5">Body</p>
                  <p className="text-white/70 text-xs font-medium">{row['Body Font']}</p>
                </div>
              </div>
              {row['Mood/Style Keywords'] && (
                <div className="flex flex-wrap gap-1">
                  {row['Mood/Style Keywords'].split(',').slice(0, 4).map((k) => (
                    <span key={k} className="text-[10px] bg-white/5 text-white/40 rounded px-1.5 py-0.5">{k.trim()}</span>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}

/* ─── CHARTS TAB ─── */
const CHART_ICONS: Record<string, JSX.Element> = {
  'Line Chart': <polyline points="4,16 8,10 12,14 16,6 20,10" stroke="currentColor" strokeWidth="2" fill="none"/>,
  'Bar Chart': <><rect x="4" y="10" width="4" height="10" fill="currentColor" opacity="0.6"/><rect x="10" y="6" width="4" height="14" fill="currentColor"/><rect x="16" y="14" width="4" height="6" fill="currentColor" opacity="0.4"/></>,
  'Pie Chart': <><path d="M12 2a10 10 0 0110 10H12z" fill="currentColor"/><path d="M12 12 2 12a10 10 0 0010-10z" fill="currentColor" opacity="0.5"/><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/></>,
  'Scatter Plot': <><circle cx="6" cy="14" r="1.5" fill="currentColor"/><circle cx="10" cy="8" r="1.5" fill="currentColor"/><circle cx="14" cy="12" r="1.5" fill="currentColor"/><circle cx="18" cy="6" r="1.5" fill="currentColor"/></>,
};

function ChartsTab() {
  const { data, loading } = useCsvData<ChartRow>('/data/charts.csv');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return !q ? data : data.filter((row) => row['Best Chart Type'].toLowerCase().includes(q) || row['Data Type'].toLowerCase().includes(q) || row.Keywords.toLowerCase().includes(q));
  }, [data, search]);

  if (loading) return <Spinner className="py-20" />;

  return (
    <div>
      <div className="mb-6">
        <SearchBar value={search} onChange={setSearch} placeholder="Search chart types…" />
      </div>
      <p className="text-white/40 text-xs mb-4">{filtered.length} chart types found</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((row) => {
          const icon = CHART_ICONS[row['Best Chart Type']];
          return (
            <article key={row.No} className="glass hover:bg-white/15 rounded-2xl p-5 transition-all duration-200 cursor-default">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex-shrink-0 flex items-center justify-center">
                  <svg className="w-5 h-5 text-indigo-300" viewBox="0 0 24 24" aria-hidden="true">
                    {icon || <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>}
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm">{row['Best Chart Type']}</h3>
                  <p className="text-white/40 text-xs mt-0.5">{row['Data Type']}</p>
                </div>
                <Badge variant={row['Interactive Level'] === 'High' ? 'indigo' : row['Interactive Level'] === 'Medium' ? 'cyan' : 'default'}>
                  {row['Interactive Level']}
                </Badge>
              </div>
              {row['Secondary Options'] && (
                <p className="text-white/40 text-xs mb-3">Alt: {row['Secondary Options']}</p>
              )}
              {row['Library Recommendation'] && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {row['Library Recommendation'].split(',').slice(0, 3).map((lib) => (
                    <span key={lib} className="text-[10px] bg-cyan-500/10 text-cyan-300/70 border border-cyan-500/20 rounded px-1.5 py-0.5">{lib.trim()}</span>
                  ))}
                </div>
              )}
              {row['Accessibility Notes'] && (
                <p className="text-white/30 text-[10px] leading-relaxed">{row['Accessibility Notes']}</p>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}

/* ─── UX GUIDELINES TAB ─── */
function UXTab() {
  const { data, loading } = useCsvData<UXGuidelineRow>('/data/ux-guidelines.csv');
  const [search, setSearch] = useState('');
  const [severity, setSeverity] = useState('');
  const [category, setCategory] = useState('');

  const severities = useMemo(() => [...new Set(data.map((r) => r.Severity).filter(Boolean))], [data]);
  const categories = useMemo(() => [...new Set(data.map((r) => r.Category).filter(Boolean))], [data]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return data.filter((row) => {
      const matchSearch = !q || row.Issue.toLowerCase().includes(q) || row.Description.toLowerCase().includes(q) || row.Category.toLowerCase().includes(q);
      const matchSeverity = !severity || row.Severity === severity;
      const matchCategory = !category || row.Category === category;
      return matchSearch && matchSeverity && matchCategory;
    });
  }, [data, search, severity, category]);

  if (loading) return <Spinner className="py-20" />;

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-6">
        <SearchBar value={search} onChange={setSearch} placeholder="Search UX guidelines…" />
        <select value={severity} onChange={(e) => setSeverity(e.target.value)} className="glass rounded-xl px-3 py-2.5 text-sm text-white/70 outline-none focus:ring-2 focus:ring-indigo-400/50 cursor-pointer" aria-label="Filter by severity">
          <option value="">All severities</option>
          {severities.map((s) => <option key={s} value={s} className="bg-slate-800">{s}</option>)}
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="glass rounded-xl px-3 py-2.5 text-sm text-white/70 outline-none focus:ring-2 focus:ring-indigo-400/50 cursor-pointer" aria-label="Filter by category">
          <option value="">All categories</option>
          {categories.map((c) => <option key={c} value={c} className="bg-slate-800">{c}</option>)}
        </select>
      </div>
      <p className="text-white/40 text-xs mb-4">{filtered.length} guidelines found</p>
      <div className="space-y-3">
        {filtered.map((row) => (
          <article key={row.No} className="glass hover:bg-white/15 rounded-2xl p-5 transition-all duration-200 cursor-default">
            <div className="flex items-start gap-3 mb-3">
              <Badge variant={row.Severity === 'HIGH' || row.Severity === 'CRITICAL' ? 'red' : row.Severity === 'MEDIUM' ? 'yellow' : 'default'}>
                {row.Severity}
              </Badge>
              <Badge variant="default">{row.Category}</Badge>
              {row.Platform && <Badge variant="cyan">{row.Platform}</Badge>}
              <h3 className="text-white font-semibold text-sm flex-1">{row.Issue}</h3>
            </div>
            {row.Description && <p className="text-white/50 text-xs leading-relaxed mb-3">{row.Description}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {row.Do && (
                <div className="glass-strong rounded-xl p-3">
                  <p className="text-green-400 text-[10px] font-semibold uppercase tracking-wider mb-1">✓ Do</p>
                  <p className="text-white/60 text-xs leading-relaxed">{row.Do}</p>
                </div>
              )}
              {row["Don't"] && (
                <div className="glass-strong rounded-xl p-3">
                  <p className="text-red-400 text-[10px] font-semibold uppercase tracking-wider mb-1">✗ Don't</p>
                  <p className="text-white/60 text-xs leading-relaxed">{row["Don't"]}</p>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

/* ─── PRODUCTS TAB ─── */
function ProductsTab() {
  const { data, loading } = useCsvData<ProductRow>('/data/products.csv');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return !q ? data : data.filter((row) => row['Product Type'].toLowerCase().includes(q) || row.Keywords.toLowerCase().includes(q));
  }, [data, search]);

  if (loading) return <Spinner className="py-20" />;

  return (
    <div>
      <div className="mb-6">
        <SearchBar value={search} onChange={setSearch} placeholder="Search product types…" />
      </div>
      <p className="text-white/40 text-xs mb-4">{filtered.length} product types found</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((row) => (
          <article key={row.No} className="glass hover:bg-white/15 rounded-2xl p-5 transition-all duration-200 cursor-default">
            <h3 className="text-white font-semibold text-sm mb-1">{row['Product Type']}</h3>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {row['Primary Style Recommendation'] && (
                <Badge variant="indigo">{row['Primary Style Recommendation']}</Badge>
              )}
              {row['Secondary Styles'] && row['Secondary Styles'].split(',').slice(0, 2).map((s) => (
                <Badge key={s} variant="default">{s.trim()}</Badge>
              ))}
            </div>
            {row['Landing Page Pattern'] && (
              <p className="text-white/40 text-xs mb-2">Pattern: {row['Landing Page Pattern']}</p>
            )}
            {row['Key Considerations'] && (
              <p className="text-white/30 text-xs leading-relaxed">{row['Key Considerations']}</p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

/* ─── MAIN EXPLORER PAGE ─── */
export function ExplorerPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get('tab') || 'styles';

  const setTab = (t: string) => setSearchParams({ tab: t });

  return (
    <div className="p-4 md:p-8">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Design Explorer</h1>
        <p className="text-white/50 text-sm">Browse all design system data from the ui-ux-pro-max skill library</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 glass rounded-2xl p-1.5 mb-6 md:mb-8 flex-wrap" role="tablist" aria-label="Explorer tabs">
        {TABS.map(({ id, label, count }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            role="tab"
            aria-selected={tab === id}
            className={`flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
              tab === id
                ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30'
                : 'text-white/50 hover:text-white hover:bg-white/5'
            }`}
          >
            {label}
            <span className={`text-[10px] rounded-full px-1.5 py-0.5 ${tab === id ? 'bg-white/20 text-white' : 'bg-white/10 text-white/40'}`}>
              {count}
            </span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div role="tabpanel">
        {tab === 'styles' && <StylesTab />}
        {tab === 'colors' && <ColorsTab />}
        {tab === 'typography' && <TypographyTab />}
        {tab === 'charts' && <ChartsTab />}
        {tab === 'ux' && <UXTab />}
        {tab === 'products' && <ProductsTab />}
      </div>
    </div>
  );
}
