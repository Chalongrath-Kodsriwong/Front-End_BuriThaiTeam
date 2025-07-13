import { ColorSchemeScript } from '@mantine/core';
import '@mantine/core/styles.css';

import { Providers } from './provider';

export const metadata = {
  title: 'My Mantine App',
  description: 'Using Mantine with Next.js App Router',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
