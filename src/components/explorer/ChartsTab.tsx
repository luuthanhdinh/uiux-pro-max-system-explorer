import { useState, useMemo } from 'react';
import { useCsvData } from '../../hooks/useCsvData';
import { Spinner } from '../ui/Spinner';
import { Badge } from '../ui/Badge';
import type { ChartRow } from '../../data/types';
import { SearchBar } from './SearchBar';

const CHART_ICONS: Record<string, JSX.Element> = {
  'Line Chart': <polyline points="4,16 8,10 12,14 16,6 20,10" stroke="currentColor" strokeWidth="2" fill="none"/>,
  'Bar Chart': <><rect x="4" y="10" width="4" height="10" fill="currentColor" opacity="0.6"/><rect x="10" y="6" width="4" height="14" fill="currentColor"/><rect x="16" y="14" width="4" height="6" fill="currentColor" opacity="0.4"/></>,
  'Pie Chart': <><path d="M12 2a10 10 0 0110 10H12z" fill="currentColor"/><path d="M12 12 2 12a10 10 0 0010-10z" fill="currentColor" opacity="0.5"/><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/></>,
  'Scatter Plot': <><circle cx="6" cy="14" r="1.5" fill="currentColor"/><circle cx="10" cy="8" r="1.5" fill="currentColor"/><circle cx="14" cy="12" r="1.5" fill="currentColor"/><circle cx="18" cy="6" r="1.5" fill="currentColor"/></>,
};

export function ChartsTab() {
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
