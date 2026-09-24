import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Dr Zoe Hoare | Cardiac metabolism scientist',
  description: 'Cardiac metabolism scientist interested in fixing mitochondrial dysfunction',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <a className="skip-link" href="#main">Skip to content</a>
    <header><nav aria-label="Main navigation">
      <a href="/">Home</a><a href="/research">Research</a><a href="/writing">Writing</a><a href="/interests">Interests</a><a href="/funding">Grant funding</a>
    </nav></header>
    {children}
  </body></html>;
}
