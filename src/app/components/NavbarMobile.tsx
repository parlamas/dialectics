//src/app/components/NavbarMobile
'use client';

import React, { useState } from 'react';
import { UserButton, useAuth } from '@clerk/nextjs';
import Link from 'next/link';

const NavbarMobile: React.FC = () => {
  const { userId } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [formOpen, setFormOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    setOpenSubMenu(null);
  };

  const handleSubMenuToggle = (label: string) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };

  const handleFormToggle = () => {
    setFormOpen(!formOpen);
  };

  const closeMenus = () => {
    setOpenSubMenu(null);
    setMenuOpen(false);
  };

  return (
    <header className="navbar bg-darkgreen text-white fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          Home
        </Link>
        <button className="text-white" onClick={handleMenuToggle}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-[30%] h-full bg-darkgreen text-white p-4" style={{ marginLeft: '20px' }}>
          <button onClick={handleMenuToggle} className="block mb-4">Close</button>
          <ul className="space-y-2">
            <li>
              <button className="block w-full text-left" onClick={() => handleSubMenuToggle('Philosophy')}>
                Philosophy
              </button>
              {openSubMenu === 'Philosophy' && (
                <ul className="bg-gold mt-2 ml-5 space-y-2">
                  <li><Link href="/philosophy/dialectics" onClick={closeMenus}>Dialectics</Link></li>
                  <li><Link href="/philosophy/horistics" onClick={closeMenus}>Horistics</Link></li>
                  <li><Link href="/philosophy/etymology" onClick={closeMenus}>Etymology</Link></li>
                  <li><Link href="/philosophy/ethics" onClick={closeMenus}>Ethics</Link></li>
                  <li><Link href="/philosophy/politics" onClick={closeMenus}>Politics</Link></li>
                  <li><Link href="/philosophy/economics" onClick={closeMenus}>Economics</Link></li>
                </ul>
              )}
            </li>
            <li>
              <button className="block w-full text-left" onClick={() => handleSubMenuToggle('History')}>
                History
              </button>
              {openSubMenu === 'History' && (
                <ul className="bg-gold mt-2 ml-5 space-y-2">
                  <li><Link href="/history/classical-greek" onClick={closeMenus}>Classical Greek History</Link></li>
                  <li><Link href="/history/byzanium" onClick={closeMenus}>Byzanium</Link></li>
                  <li><Link href="/history/modern-greek" onClick={closeMenus}>Modern Greek History</Link></li>
                  <li><Link href="/history/cooking" onClick={closeMenus}>Cooking</Link></li>
                </ul>
              )}
            </li>
            <li>
              <button className="block w-full text-left" onClick={() => handleSubMenuToggle('Music')}>
                Music
              </button>
              {openSubMenu === 'Music' && (
                <ul className="bg-gold mt-2 ml-5 space-y-2">
                  <li><Link href="/music/nature" onClick={closeMenus}>Nature</Link></li>
                  <li><Link href="/music/speech" onClick={closeMenus}>Speech</Link></li>
                  <li><Link href="/music/metron" onClick={closeMenus}>Metron</Link></li>
                  <li><Link href="/music/playing" onClick={closeMenus}>Playing</Link></li>
                </ul>
              )}
            </li>
            <li>
              <button className="block w-full text-left" onClick={() => handleSubMenuToggle('Physical Education')}>
                Physical Education
              </button>
              {openSubMenu === 'Physical Education' && (
                <ul className="bg-gold mt-2 ml-5 space-y-2">
                  <li><Link href="/physical-education/mind" onClick={closeMenus}>Mind</Link></li>
                  <li><Link href="/physical-education/body" onClick={closeMenus}>Body</Link></li>
                  <li><Link href="/physical-education/beauty" onClick={closeMenus}>Beauty</Link></li>
                  <li><Link href="/physical-education/discipline" onClick={closeMenus}>Discipline</Link></li>
                  <li><Link href="/physical-education/skill" onClick={closeMenus}>As a Skill</Link></li>
                </ul>
              )}
            </li>
            <li>
              <button className="block w-full text-left" onClick={() => handleSubMenuToggle('Social Skills')}>
                Social Skills
              </button>
              {openSubMenu === 'Social Skills' && (
                <ul className="bg-gold mt-2 ml-5 space-y-2">
                  <li><Link href="/social-skills/family" onClick={closeMenus}>Family</Link></li>
                  <li><Link href="/social-skills/friends" onClick={closeMenus}>Friends</Link></li>
                  <li><Link href="/social-skills/lovers" onClick={closeMenus}>Lovers</Link></li>
                  <li><Link href="/social-skills/work" onClick={closeMenus}>Work</Link></li>
                  <li><Link href="/social-skills/army" onClick={closeMenus}>The Army</Link></li>
                </ul>
              )}
            </li>
            <li>
              <button className="block w-full text-left" onClick={() => handleSubMenuToggle('Languages')}>
                Languages
              </button>
              {openSubMenu === 'Languages' && (
                <ul className="bg-gold mt-2 ml-5 space-y-2">
                  <li><Link href="/languages/classical-greek" onClick={closeMenus}>Classical Greek</Link></li>
                  <li><Link href="/languages/modern-greek" onClick={closeMenus}>Modern Greek</Link></li>
                  <li><Link href="/languages/english" onClick={closeMenus}>English</Link></li>
                  <li><Link href="/languages/spanish" onClick={closeMenus}>Spanish</Link></li>
                  <li><Link href="/languages/danish" onClick={closeMenus}>Danish</Link></li>
                  <li><Link href="/languages/chinese" onClick={closeMenus}>Chinese</Link></li>
                </ul>
              )}
            </li>
            <li>
              <button className="block w-full text-left" onClick={() => handleSubMenuToggle('Physics')}>
                Physics
              </button>
              {openSubMenu === 'Physics' && (
                <ul className="bg-gold mt-2 ml-5 space-y-2">
                  <li><Link href="/physics/classical" onClick={closeMenus}>Classical</Link></li>
                  <li><Link href="/physics/quantum" onClick={closeMenus}>Quantum</Link></li>
                  <li><Link href="/physics/chemistry" onClick={closeMenus}>Chemistry</Link></li>
                </ul>
              )}
            </li>
            <li>
              <button className="block w-full text-left" onClick={() => handleSubMenuToggle('Math')}>
                Math
              </button>
              {openSubMenu === 'Math' && (
                <ul className="bg-gold mt-2 ml-5 space-y-2">
                  <li><Link href="/math/perfect-numbers" onClick={closeMenus}>Perfect Numbers</Link></li>
                  <li><Link href="/math/prime-numbers" onClick={closeMenus}>Prime Numbers</Link></li>
                  <li><Link href="/math/friendly-numbers" onClick={closeMenus}>Friendly Numbers</Link></li>
                  <li><Link href="/math/trigonometry" onClick={closeMenus}>Trigonometry</Link></li>
                </ul>
              )}
            </li>
            <li>
              <Link href="#" className="block w-full text-left" onClick={handleFormToggle}>
                Content Request
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Content Request Form */}
      {formOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Content Request Form</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="request">
                  Request
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="request"
                  placeholder="Your request"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavbarMobile;


