'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface LogoProps {
  size?: number;
}
export function Logo({ size = 24 }: LogoProps) {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mount, we can access the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const shouldInvert = mounted && (
    theme === 'dark' || (theme === 'system' && systemTheme === 'dark')
  );

  return (
    <Image
        src="/logo.svg"
        alt="Logo"
        width={size}
        height={size}
        className={`${shouldInvert ? 'invert' : ''} flex-shrink-0`}
      />
  );
}
