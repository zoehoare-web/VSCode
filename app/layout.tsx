import type { Metadata } from 'next';
import navigation from '../content/navigation.html?raw';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://zoehoare.xyz'),
  title: 'Dr Zoe Hoare | Cardiac metabolism scientist',
  description: 'Cardiac metabolism scientist interested in fixing mitochondrial dysfunction',
  icons: {
    icon: '/cartoon-headshot.jpg',
    apple: '/cartoon-headshot.jpg',
  },
  openGraph: {
    title: 'Dr Zoe Hoare | Cardiac metabolism scientist',
    description: 'Cardiac metabolism scientist interested in fixing mitochondrial dysfunction',
    url: 'https://zoehoare.xyz',
    siteName: 'Dr Zoe Hoare',
    images: [
      {
        url: '/cartoon-headshot.jpg',
        width: 400,
        height: 400,
        alt: 'Cartoon portrait of Zoe Hoare',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Dr Zoe Hoare | Cardiac metabolism scientist',
    description: 'Cardiac metabolism scientist interested in fixing mitochondrial dysfunction',
    images: ['/cartoon-headshot.jpg'],
  },
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
