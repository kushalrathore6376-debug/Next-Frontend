import TechnologyPage from '@/components/TechnologyPage';
import { getPageMetadata } from '@/lib/seo';

export const metadata = getPageMetadata({
  title: 'Technology',
  description:
    'Three carbon removal pathways — CCU, BECCS, and Direct Air Capture — that decompose CO2 into solid graphitic carbon under ambient conditions, with no heat, pressure, or storage required.',
  path: '/technology',
});

export default function Page() {
  return (
    <main id="main-content">
      <TechnologyPage />
    </main>
  );
}
