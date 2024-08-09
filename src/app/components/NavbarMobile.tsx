//src/app/components/NavbarMobile
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { UserButton, useAuth } from '@clerk/nextjs';

const NavbarMobile: React.FC = () => {
  const { userId } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleMobileMenuToggle = () => {
    setMenuOpen(!menuOpen);
    setOpenSubMenu(null);
  };

  const handleSubMenuToggle = (label: string) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };

  return (
    <header className="navbar bg-darkgreen text-white fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          Home
        </Link>
        <button className="menu-toggle md:hidden" onClick={handleMobileMenuToggle}>
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <button onClick={handleMobileMenuToggle} className="block mb-4 text-white">
            Close
          </button>
          <ul>
            <li>
              <Link href="/" onClick={handleMobileMenuToggle}>Home</Link>
            </li>
            <li>
              <button className="menu-item" onClick={() => handleSubMenuToggle('Philosophy')}>Philosophy</button>
              {openSubMenu === 'Philosophy' && (
                <div className="submenu-container">
                  <Link href="/philosophy/dialectics" onClick={handleMobileMenuToggle}>Dialectics</Link>
                  {/* Add more submenu items as needed */}
                </div>
              )}
            </li>
            {/* Add more menu items as needed */}
            {!userId ? (
              <>
                <li><Link href="/sign-in" onClick={handleMobileMenuToggle}>Sign in</Link></li>
                <li><Link href="/sign-up" onClick={handleMobileMenuToggle}>Sign up</Link></li>
              </>
            ) : (
              <li><UserButton /></li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavbarMobile;
