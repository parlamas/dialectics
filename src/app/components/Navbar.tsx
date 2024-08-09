// src/app/components/Navbar.tsx
'use client';

import React, { useState, useEffect, useRef } from "react";
import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import SubMenu from "./SubMenu";

const Navbar: React.FC = () => {
  const { userId } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleSubMenuClick = (label: string) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    setOpenSubMenu(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
        setOpenSubMenu(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="navbar">
      <div ref={menuRef} className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          Home
        </Link>
        <nav className="hidden md:flex space-x-4">
          <SubMenu items={[]} label="Philosophy" />
          <SubMenu items={[]} label="History" />
          <SubMenu items={[]} label="Music" />
          <SubMenu items={[]} label="Physical Education" />
          <SubMenu items={[]} label="Social Skills" />
          <SubMenu items={[]} label="Languages" />
          <SubMenu items={[]} label="Physics" />
          <SubMenu items={[]} label="Math" />
          {!userId ? (
            <div className="flex space-x-4">
              <Link href="/sign-in" className="hover:text-gray-300">
                Sign in
              </Link>
              <Link href="/sign-up" className="hover:text-gray-300">
                Sign up
              </Link>
            </div>
          ) : (
            <div className="flex space-x-4 items-center">
              <Link href="/profile" className="hover:text-gray-300">
                Profile
              </Link>
              <UserButton />
            </div>
          )}
        </nav>
        <button className="md:hidden text-white" onClick={handleMenuClick}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className={`navbar-menu ${menuOpen ? 'active' : ''} md:hidden`}>
        <div className="menu-container">
          <Link href="/" className="menu-item" onClick={handleMenuClick}>
            Home
          </Link>
          <Link href="/content-request" className="menu-item" onClick={handleMenuClick}>
            Content Request
          </Link>
          {!userId ? (
            <>
              <Link href="/sign-in" className="menu-item" onClick={handleMenuClick}>
                Sign in
              </Link>
              <Link href="/sign-up" className="menu-item" onClick={handleMenuClick}>
                Sign up
              </Link>
            </>
          ) : (
            <Link href="/profile" className="menu-item" onClick={handleMenuClick}>
              Profile
            </Link>
          )}
          <button className="menu-item" onClick={() => handleSubMenuClick('Philosophy')}>
            Philosophy
          </button>
          {openSubMenu === 'Philosophy' && (
            <div className="submenu-container show">
              <Link href="/philosophy/dialectics" className="menu-item" onClick={handleMenuClick}>
                Dialectics
              </Link>
              <Link href="/philosophy/horistics" className="menu-item" onClick={handleMenuClick}>
                Horistics
              </Link>
              {/* Add other submenu items */}
            </div>
          )}
          <button className="menu-item" onClick={() => handleSubMenuClick('History')}>
            History
          </button>
          {openSubMenu === 'History' && (
            <div className="submenu-container show">
              <Link href="/history/classical-greek" className="menu-item" onClick={handleMenuClick}>
                Classical Greek History
              </Link>
              <Link href="/history/byzanium" className="menu-item" onClick={handleMenuClick}>
                Byzanium
              </Link>
              {/* Add other submenu items */}
            </div>
          )}
          {/* Repeat for other submenus */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;



