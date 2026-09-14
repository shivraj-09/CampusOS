import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://campusos.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'CampusOS — Your college, one place',
    template: '%s — CampusOS',
  },
  description: 'A premium student command center for opportunities, people, clubs and campus life.',
  applicationName: 'CampusOS',
  keywords: ['students', 'campus', 'college', 'opportunities', 'clubs', 'student community'],
  openGraph: {
    title: 'CampusOS — Your college, one place',
    description: 'Opportunities, people, clubs and campus life — distilled into one student command center.',
    type: 'website',
    siteName: 'CampusOS',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CampusOS — Your college, one place',
    description: 'A premium student command center for campus life.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
