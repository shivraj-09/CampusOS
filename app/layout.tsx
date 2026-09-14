import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CampusOS — Your college, one place',
  description: 'A premium student command center for opportunities, people, clubs and campus life.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
