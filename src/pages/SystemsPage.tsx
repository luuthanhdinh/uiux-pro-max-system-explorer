import { systemDesigns } from '../data/systemDesigns';
import { SystemCard } from '../components/system/SystemCard';

export function SystemsPage() {
  return (
    <div className="p-4 md:p-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">System Designs</h1>
        <p className="text-white/50 text-sm max-w-2xl">
          16 fully designed, multi-page product systems — each with a unique style, color palette, typography, and 3-4 polished demo pages.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {systemDesigns.map((design) => (
          <SystemCard key={design.id} design={design} />
        ))}
      </div>
    </div>
  );
}
