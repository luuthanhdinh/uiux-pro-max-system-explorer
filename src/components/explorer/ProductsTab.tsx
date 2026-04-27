import { useState, useMemo } from 'react';
import { useCsvData } from '../../hooks/useCsvData';
import { Spinner } from '../ui/Spinner';
import { Badge } from '../ui/Badge';
import type { ProductRow } from '../../data/types';
import { SearchBar } from './SearchBar';

export function ProductsTab() {
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
