import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Dr Zoe Hoare | Cardiac metabolism scientist',
  description: 'I study how metabolism and mitochondrial function shape heart disease, and how a clearer understanding of both might open new therapeutic paths.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
