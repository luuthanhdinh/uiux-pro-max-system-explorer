import { useState, useMemo } from 'react';
import { useCsvData } from '../../hooks/useCsvData';
import { Spinner } from '../ui/Spinner';
import type { ColorRow } from '../../data/types';
import { SearchBar } from './SearchBar';

const swatchKeys: (keyof ColorRow)[] = ['Primary (Hex)', 'Secondary (Hex)', 'CTA (Hex)', 'Background (Hex)', 'Text (Hex)', 'Border (Hex)'];
const swatchLabels = ['Primary', 'Secondary', 'CTA', 'Background', 'Text', 'Border'];

export function ColorsTab() {
  const { data, loading } = useCsvData<ColorRow>('/data/colors.csv');
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return !q ? data : data.filter((row) => row['Product Type'].toLowerCase().includes(q) || row.Notes.toLowerCase().includes(q));
  }, [data, search]);

  if (loading) return <Spinner className="py-20" />;

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
                <div className="flex gap-1 flex-shrink-0">
                  {swatchKeys.map((key) => {
                    const hex = row[key] as string;
                    if (!hex || !hex.startsWith('#')) return null;
                    return (
                      <div key={key} className="w-6 h-6 rounded-md border border-white/10" style={{ background: hex }} title={hex} />
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
                        <div className="h-14 rounded-xl border border-white/10 mb-1.5" style={{ background: hex }} />
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
