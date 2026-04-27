import { useSearchParams } from 'react-router-dom';
import { StylesTab } from '../components/explorer/StylesTab';
import { ColorsTab } from '../components/explorer/ColorsTab';
import { TypographyTab } from '../components/explorer/TypographyTab';
import { ChartsTab } from '../components/explorer/ChartsTab';
import { UXTab } from '../components/explorer/UXTab';
import { ProductsTab } from '../components/explorer/ProductsTab';

const TABS = [
  { id: 'styles', label: 'Styles', count: '67' },
  { id: 'colors', label: 'Colors', count: '96' },
  { id: 'typography', label: 'Typography', count: '57' },
  { id: 'charts', label: 'Charts', count: '25' },
  { id: 'ux', label: 'UX Guidelines', count: '99' },
  { id: 'products', label: 'Products', count: '96' },
];

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
