'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logo from '../../../app/public/images/logo.png';

import React from 'react';

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push('/')}
      alt="Logo"
      className="hidden md:block cursor-pointer"
      height="50"
      width="150"
      src={logo}
    />
  );
};

export default Logo;
