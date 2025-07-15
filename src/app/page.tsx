'use client';

import { Button, TextInput, Paper, Title } from '@mantine/core';

export default function HomePage() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <Paper shadow="md" radius="md" p="xl" withBorder>
        <Title order={2} mb="md">สมัครสมาชิก</Title>
        <TextInput label="อีเมล" placeholder="you@example.com" mb="sm" />
        <TextInput label="รหัสผ่าน" type="password" placeholder="••••••••" mb="sm" />
        <Button fullWidth>สมัครเลย</Button>
      </Paper>
    </div>
  );
}
