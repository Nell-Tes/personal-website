import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { profile } from '@/lib/data';

export const metadata = {
  title: `${profile.name} · Software Engineer`,
  description: profile.tagline,
  openGraph: {
    title: `${profile.name} · Software Engineer`,
    description: profile.tagline,
    images: [profile.photo],
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#060C20',
  colorScheme: 'dark',
};

// Lets the scroll-reveal styles apply only when JavaScript is running.
const revealScript = `document.documentElement.classList.add('js-reveal');`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
