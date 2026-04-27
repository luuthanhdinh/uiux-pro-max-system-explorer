import { useState, useMemo } from 'react';
import { useCsvData } from '../../hooks/useCsvData';
import { Spinner } from '../ui/Spinner';
import { Badge } from '../ui/Badge';
import { getContrastColor } from '../../lib/utils';
import type { StyleRow } from '../../data/types';
import { SearchBar } from './SearchBar';

export function StylesTab() {
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
