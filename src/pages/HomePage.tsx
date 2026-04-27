import { systemDesigns } from '../data/systemDesigns';
import { HeroSection } from '../components/home/HeroSection';
import { StatsGrid } from '../components/home/StatsGrid';
import { ExplorerLinks } from '../components/home/ExplorerLinks';
import { FeaturedDesigns } from '../components/home/FeaturedDesigns';

export function HomePage() {
  const featured = systemDesigns.slice(0, 3);

  return (
    <div className="p-4 md:p-8 max-w-6xl">
      <HeroSection />
      <StatsGrid />
      <ExplorerLinks />
      <FeaturedDesigns designs={featured} />
    </div>
  );
}
