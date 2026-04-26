import { useEffect, useState } from 'react';
import Papa from 'papaparse';

export function useCsvData<T>(path: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(path)
      .then((r) => {
        if (!r.ok) throw new Error(`Failed to fetch ${path}: ${r.status}`);
        return r.text();
      })
      .then((text) => {
        const result = Papa.parse<T>(text, { header: true, skipEmptyLines: true });
        setData(result.data);
      })
      .catch((e) => setError(e instanceof Error ? e : new Error(String(e))))
      .finally(() => setLoading(false));
  }, [path]);

  return { data, loading, error };
}
