import { useState, useMemo } from 'react';
import { useCsvData } from '../../hooks/useCsvData';
import { Spinner } from '../ui/Spinner';
import { Badge } from '../ui/Badge';
import type { UXGuidelineRow } from '../../data/types';
import { SearchBar } from './SearchBar';

export function UXTab() {
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
