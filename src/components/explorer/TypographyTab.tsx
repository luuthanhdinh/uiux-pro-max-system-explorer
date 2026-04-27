import { useState, useMemo } from 'react';
import { useCsvData } from '../../hooks/useCsvData';
import { Spinner } from '../ui/Spinner';
import type { TypographyRow } from '../../data/types';
import { SearchBar } from './SearchBar';

export function TypographyTab() {
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
              <div className="mb-4">
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
