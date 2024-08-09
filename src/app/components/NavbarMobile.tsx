/* src/app/components/NavbarMobile.tsx */

'use client';

import React, { useState } from 'react';
import { UserButton, useAuth } from '@clerk/nextjs';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavbarMobile: React.FC = () => {
  const { userId } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [formOpen, setFormOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    setOpenSubMenu(null); // Close submenus when opening or closing main menu
  };

  const handleSubMenuToggle = (label: string) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };

  const closeMenus = () => {
    setOpenSubMenu(null);
    setMenuOpen(false);
  };

  const handleFormToggle = () => {
    setFormOpen(!formOpen);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const request = formData.get('request') as string;

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, request }),
      });

      if (response.ok) {
        alert('Email sent successfully!');
        setFormOpen(false);
      } else {
        alert('Failed to send email. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <header className="navbar bg-cyan-950 text-white fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          Home
        </Link>
        <button className="text-xl" onClick={handleMenuToggle}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        
    <nav className="bg-green-600 text-white fixed top-0 left-0 h-full w-2/5 z-40 p-4 overflow-y-auto">
    {/* Home Link */}
    <Link href="/" className="block py-2 text-left" onClick={closeMenus}>
      Home
    </Link>

          {/* Philosophy Menu */}
          <div className="relative w-full">
          <button
    className={`menu-item w-full text-left ${openSubMenu === 'Philosophy' ? 'bg-yellow-600' : ''}`}
    onClick={() => handleSubMenuToggle('Philosophy')}
  >
    Philosophy
  </button>
            {openSubMenu === 'Philosophy' && (
              <div className="submenu-container pl-4" style={{ backgroundColor:"gold",color:"black" }}>
                <Link href="/philosophy/dialectics" className="block py-2" onClick={closeMenus}>
                  Dialectics
                </Link>
                <Link href="/philosophy/horistics" className="block py-2" onClick={closeMenus}>
                  Horistics
                </Link>
                <Link href="/philosophy/etymology" className="block py-2" onClick={closeMenus}>
                  Etymology
                </Link>
                <Link href="/philosophy/ethics" className="block py-2" onClick={closeMenus}>
                  Ethics
                </Link>
                <Link href="/philosophy/politics" className="block py-2" onClick={closeMenus}>
                  Politics
                </Link>
                <Link href="/philosophy/economics" className="block py-2" onClick={closeMenus}>
                  Economics
                </Link>
              </div>
            )}
          </div>

          {/* History Menu */}
          <div className="relative w-full">
          <button
    className={`menu-item w-full text-left ${openSubMenu === 'History' ? 'bg-yellow-600' : ''}`}
    onClick={() => handleSubMenuToggle('History')}
  >
    History
  </button>
            {openSubMenu === 'History' && (
              <div className="submenu-container pl-4" style={{ backgroundColor:"gold",color:"black" }}>
                <Link href="/history/classical-greek" className="block py-2" onClick={closeMenus}>
                  Classical Greek History
                </Link>
                <Link href="/history/byzanium" className="block py-2" onClick={closeMenus}>
                  Byzanium
                </Link>
                <Link href="/history/modern-greek" className="block py-2" onClick={closeMenus}>
                  Modern Greek History
                </Link>
                <Link href="/history/cooking" className="block py-2" onClick={closeMenus}>
                  Cooking
                </Link>
              </div>
            )}
          </div>

          {/* Music Menu */}
          <div className="relative w-full">
          <button
    className={`menu-item w-full text-left ${openSubMenu === 'Music' ? 'bg-yellow-600' : ''}`}
    onClick={() => handleSubMenuToggle('Music')}
  >
    Music
  </button>
            {openSubMenu === 'Music' && (
              <div className="submenu-container pl-4" style={{ backgroundColor:"gold",color:"black" }}>
                <Link href="/music/nature" className="block py-2" onClick={closeMenus}>
                  Nature
                </Link>
                <Link href="/music/speech" className="block py-2" onClick={closeMenus}>
                  Speech
                </Link>
                <Link href="/music/metron" className="block py-2" onClick={closeMenus}>
                  Metron
                </Link>
                <Link href="/music/playing" className="block py-2" onClick={closeMenus}>
                  Playing
                </Link>
              </div>
            )}
          </div>

          {/* Physical Education Menu */}
          <div className="relative w-full">
          <button
    className={`menu-item w-full text-left ${openSubMenu === 'Physical Education' ? 'bg-yellow-600' : ''}`}
    onClick={() => handleSubMenuToggle('Physical Education')}
  >
    Physical Education
  </button>
            {openSubMenu === 'Physical Education' && (
              <div className="submenu-container pl-4" style={{ backgroundColor:"gold",color:"black" }}>
                <Link href="/physical-education/mind" className="block py-2" onClick={closeMenus}>
                  Mind
                </Link>
                <Link href="/physical-education/body" className="block py-2" onClick={closeMenus}>
                  Body
                </Link>
                <Link href="/physical-education/beauty" className="block py-2" onClick={closeMenus}>
                  Beauty
                </Link>
                <Link href="/physical-education/discipline" className="block py-2" onClick={closeMenus}>
                  Discipline
                </Link>
                <Link href="/physical-education/skill" className="block py-2" onClick={closeMenus}>
                  As a Skill
                </Link>
              </div>
            )}
          </div>

          {/* Social Skills Menu */}
          <div className="relative w-full">
          <button
    className={`menu-item w-full text-left ${openSubMenu === 'Social Skills' ? 'bg-yellow-600' : ''}`}
    onClick={() => handleSubMenuToggle('Social Skills')}
  >
    Social Skills
  </button>
            {openSubMenu === 'Social Skills' && (
              <div className="submenu-container pl-4" style={{ backgroundColor:"gold",color:"black" }}>
                <Link href="/social-skills/family" className="block py-2" onClick={closeMenus}>
                  Family
                </Link>
                <Link href="/social-skills/friends" className="block py-2" onClick={closeMenus}>
                  Friends
                </Link>
                <Link href="/social-skills/lovers" className="block py-2" onClick={closeMenus}>
                  Lovers
                </Link>
                <Link href="/social-skills/work" className="block py-2" onClick={closeMenus}>
                  Work
                </Link>
                <Link href="/social-skills/army" className="block py-2" onClick={closeMenus}>
                  The Army
                </Link>
              </div>
            )}
          </div>

          {/* Languages Menu */}
          <div className="relative w-full">
          <button
    className={`menu-item w-full text-left ${openSubMenu === 'Languages' ? 'bg-yellow-600' : ''}`}
    onClick={() => handleSubMenuToggle('Languages')}
  >
    Langauges
  </button>
            {openSubMenu === 'Languages' && (
              <div className="submenu-container pl-4" style={{ backgroundColor:"gold",color:"black" }}>
                <Link href="/languages/classical-greek" className="block py-2" onClick={closeMenus}>
                  Classical Greek
                </Link>
                <Link href="/languages/modern-greek" className="block py-2" onClick={closeMenus}>
                  Modern Greek
                </Link>
                <Link href="/languages/english" className="block py-2" onClick={closeMenus}>
                  English
                </Link>
                <Link href="/languages/spanish" className="block py-2" onClick={closeMenus}>
                  Spanish
                </Link>
                <Link href="/languages/danish" className="block py-2" onClick={closeMenus}>
                  Danish
                </Link>
                <Link href="/languages/chinese" className="block py-2" onClick={closeMenus}>
                  Chinese
                </Link>
              </div>
            )}
          </div>

          {/* Physics Menu */}
          <div className="relative w-full">
          <button
    className={`menu-item w-full text-left ${openSubMenu === 'Physics' ? 'bg-yellow-600' : ''}`}
    onClick={() => handleSubMenuToggle('Physics')}
  >
    Physics
  </button>
            {openSubMenu === 'Physics' && (
              <div className="submenu-container pl-4" style={{ backgroundColor:"gold",color:"black" }}>
                <Link href="/physics/classical" className="block py-2" onClick={closeMenus}>
                  Classical
                </Link>
                <Link href="/physics/quantum" className="block py-2" onClick={closeMenus}>
                  Quantum
                </Link>
                <Link href="/physics/chemistry" className="block py-2" onClick={closeMenus}>
                  Chemistry
                </Link>
              </div>
            )}
          </div>

          {/* Math Menu */}
          <div className="relative w-full">
          <button
    className={`menu-item w-full text-left ${openSubMenu === 'Math' ? 'bg-yellow-600' : ''}`}
    onClick={() => handleSubMenuToggle('Math')}
  >
    Math
  </button>
            {openSubMenu === 'Math' && (
              <div className="submenu-container pl-4" style={{ backgroundColor:"gold",color:"black" }}>
                <Link href="/math/perfect-numbers" className="block py-2" onClick={closeMenus}>
                  Perfect Numbers
                </Link>
                <Link href="/math/prime-numbers" className="block py-2" onClick={closeMenus}>
                  Prime Numbers
                </Link>
                <Link href="/math/friendly-numbers" className="block py-2" onClick={closeMenus}>
                  Friendly Numbers
                </Link>
                <Link href="/math/trigonometry" className="block py-2" onClick={closeMenus}>
                  Trigonometry
                </Link>
              </div>
            )}
          </div>

          {/* Content Request Link */}
          <button
            className="block w-full text-left px-4 py-2 hover:text-gray-300 menu-item"
            onClick={() => {
              closeMenus();
              handleFormToggle();
            }}
          >
            Content Request
          </button>

          {/* Profile and User Actions */}
          {!userId ? (
            <>
              <Link href="/sign-in" className="block w-full text-left px-4 py-2 hover:text-gray-300" onClick={closeMenus}>
                Sign in
              </Link>
              <Link href="/sign-up" className="block w-full text-left px-4 py-2 hover:text-gray-300" onClick={closeMenus}>
                Sign up
              </Link>
            </>
          ) : (
            <>
              <Link href="/profile" className="block w-full text-left px-4 py-2 hover:text-gray-300" onClick={closeMenus}>
                Profile
              </Link>
              <div className="px-4 py-2">
                <UserButton />
              </div>
            </>
          )}
        </nav>
      )}

      {/* Content Request Form */}
      {formOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-11/12 max-w-md">
            <h2 className="text-lg font-semibold mb-4">Content Request Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  name="name"
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
                  name="email"
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
                  name="request"
                  placeholder="Your request"
                  maxLength={100}
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
                <button
                  className="text-gray-500 hover:text-gray-700 font-bold py-2 px-4"
                  type="button"
                  onClick={handleFormToggle}
                >
                  Cancel
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