import { SiteShell } from '@/components/site/SiteShell';
import { Audience } from '@/components/home/Audience';
import { ClosingCTA } from '@/components/home/ClosingCTA';
import { Communities } from '@/components/home/Communities';
import { Discover } from '@/components/home/Discover';
import { Hero } from '@/components/home/Hero';
import { HowItWorks } from '@/components/home/HowItWorks';
import { ProductShowcase } from '@/components/showcase/ProductShowcase';

/** Section order is fixed by the design (DESIGN_SYSTEM.md §3). */
export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <Audience />
      <ProductShowcase />
      <HowItWorks />
      <Discover />
      <Communities />
      <ClosingCTA />
    </SiteShell>
  );
}
