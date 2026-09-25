import type { Metadata } from 'next';
import navigation from '../content/navigation.html?raw';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dr Zoe Hoare | Cardiac metabolism scientist',
  description: 'Cardiac metabolism scientist interested in fixing mitochondrial dysfunction',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <header>
          <nav aria-label="Main navigation" dangerouslySetInnerHTML={{ __html: navigation }} />
        </header>
        {children}
      </body>
    </html>
  );
}
