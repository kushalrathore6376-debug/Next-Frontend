import ContactPage from '@/components/ContactPage';
import { getPageMetadata } from '@/lib/seo';

export const metadata = getPageMetadata({
  title: 'Contact',
  description:
    'Get in touch with TraceXero to explore carbon capture for your facility or learn more about our graphitic carbon conversion technology.',
  path: '/contact',
});

export default function Page() {
  return (
    <main id="main-content">
      <ContactPage />
    </main>
  );
}
