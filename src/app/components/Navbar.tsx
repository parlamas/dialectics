// src/app/components/Navbar.tsx

'use client';

import React, { useState } from 'react';
import { UserButton, useAuth } from '@clerk/nextjs';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const { userId } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [formOpen, setFormOpen] = useState(false);

  const handleSubMenuToggle = (label: string) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };

  const handleMobileMenuToggle = () => {
    setMenuOpen(!menuOpen);
    setOpenSubMenu(null);
  };

  const closeMenus = () => {
    setOpenSubMenu(null);
    setMenuOpen(false);
  };

  const handleFormToggle = () => {
    setFormOpen(!formOpen);
  };

  return (
    <header className="navbar fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-white">
          Home
        </Link>
        <button className="menu-toggle md:hidden" onClick={handleMobileMenuToggle}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
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
                  <Link href="/philosophy/dialectics" onClick={closeMenus}>Dialectics</Link>
                  <Link href="/philosophy/horistics" onClick={closeMenus}>Horistics</Link>
                </div>
              )}
            </li>
            {/* Add more menu items and submenus here */}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
