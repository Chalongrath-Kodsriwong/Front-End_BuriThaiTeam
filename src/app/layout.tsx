import '@mantine/core/styles.css';
import { Providers } from './providers';

export const metadata = {
  title: 'No-Hydration-Mismatch',
  description: 'ใช้ Mantine UI แบบไม่มี theme',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
