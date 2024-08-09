//src/app/components/Navbar.tsx
'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const NavbarDesktop = dynamic(() => import('./NavbarDesktop'));
const NavbarMobile = dynamic(() => import('./NavbarMobile'));

const Navbar: React.FC = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return isMobile ? <NavbarMobile /> : <NavbarDesktop />;
};

export default Navbar;
