'use client';

import { MantineProvider, createTheme } from '@mantine/core';

export function Providers({ children }: { children: React.ReactNode }) {
  const theme = createTheme({
    primaryColor: 'blue',
    fontFamily: 'Prompt, sans-serif',
    // ✅ ไม่กำหนด colorScheme
  });

  return (
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  );
}
