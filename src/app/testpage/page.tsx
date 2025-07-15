'use client';
import Link from 'next/link';

import { Button } from '@mantine/core';

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">ยินดีต้อนรับ!</h1>

      <Button color="indigo" radius="md" className="mb-4">
        ปุ่มจาก Mantine
      </Button>

      <div className="bg-gray-100 p-6 rounded-xl shadow">
        <Link href="/">
        <Button
          variant="gradient"
          gradient={{ from: 'teal', to: 'blue', deg: 60 }}
          >
            ปุ่ม Gradient จาก Mantine
        </Button>
          </Link>
      </div>
    </div>
  );
}
