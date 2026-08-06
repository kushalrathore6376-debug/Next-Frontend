import AboutPage from '@/components/AboutPage';
import { getPageMetadata } from '@/lib/seo';

export const metadata = getPageMetadata({
  title: 'About',
  description:
    'TraceXero is an emerging climate technology company working with Indian industries to pilot carbon capture solutions at the source of emissions.',
  path: '/about',
});

export default function Page() {
  return (
    <main id="main-content">
      <AboutPage />
    </main>
  );
}
