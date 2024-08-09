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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const request = formData.get('request') as string;

    fetch('/api/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, request }),
    })
    .then(response => {
        if (response.ok) {
            alert('Email sent successfully!');
            setFormOpen(false);
        } else {
            alert('Failed to send email. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error sending email:', error);
        alert('An error occurred. Please try again later.');
    });
};


  return (
    <header className="navbar bg-cyan-950 text-white fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          Home
        </Link>
        <nav className="hidden md:flex space-x-4">
          <div className="relative">
            <button className="menu-item" onClick={() => handleSubMenuToggle('Philosophy')}>
              Philosophy
            </button>
            {openSubMenu === 'Philosophy' && (
              <div className="submenu-container">
                <Link href="/philosophy/dialectics" className="block px-4 py-2" onClick={closeMenus}>
                  Dialectics
                </Link>
                <Link href="/philosophy/horistics" className="block px-4 py-2" onClick={closeMenus}>
                  Horistics
                </Link>
                <Link href="/philosophy/etymology" className="block px-4 py-2" onClick={closeMenus}>
                  Etymology
                </Link>
                <Link href="/philosophy/ethics" className="block px-4 py-2" onClick={closeMenus}>
                  Ethics
                </Link>
                <Link href="/philosophy/politics" className="block px-4 py-2" onClick={closeMenus}>
                  Politics
                </Link>
                <Link href="/philosophy/economics" className="block px-4 py-2" onClick={closeMenus}>
                  Economics
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button className="menu-item" onClick={() => handleSubMenuToggle('History')}>
              History
            </button>
            {openSubMenu === 'History' && (
              <div className="submenu-container">
                <Link href="/history/classical-greek" className="block px-4 py-2" onClick={closeMenus}>
                  Classical Greek History
                </Link>
                <Link href="/history/byzanium" className="block px-4 py-2" onClick={closeMenus}>
                  Byzanium
                </Link>
                <Link href="/history/modern-greek" className="block px-4 py-2" onClick={closeMenus}>
                  Modern Greek History
                </Link>
                <Link href="/history/cooking" className="block px-4 py-2" onClick={closeMenus}>
                  Cooking
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button className="menu-item" onClick={() => handleSubMenuToggle('Music')}>
              Music
            </button>
            {openSubMenu === 'Music' && (
              <div className="submenu-container">
                <Link href="/music/nature" className="block px-4 py-2" onClick={closeMenus}>
                  Nature
                </Link>
                <Link href="/music/speech" className="block px-4 py-2" onClick={closeMenus}>
                  Speech
                </Link>
                <Link href="/music/metron" className="block px-4 py-2" onClick={closeMenus}>
                  Metron
                </Link>
                <Link href="/music/playing" className="block px-4 py-2" onClick={closeMenus}>
                  Playing
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button className="menu-item" onClick={() => handleSubMenuToggle('Physical Education')}>
              Physical Education
            </button>
            {openSubMenu === 'Physical Education' && (
              <div className="submenu-container">
                <Link href="/physical-education/mind" className="block px-4 py-2" onClick={closeMenus}>
                  Mind
                </Link>
                <Link href="/physical-education/body" className="block px-4 py-2" onClick={closeMenus}>
                  Body
                </Link>
                <Link href="/physical-education/beauty" className="block px-4 py-2" onClick={closeMenus}>
                  Beauty
                </Link>
                <Link href="/physical-education/discipline" className="block px-4 py-2" onClick={closeMenus}>
                  Discipline
                </Link>
                <Link href="/physical-education/skill" className="block px-4 py-2" onClick={closeMenus}>
                  As a Skill
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button className="menu-item" onClick={() => handleSubMenuToggle('Social Skills')}>
              Social Skills
            </button>
            {openSubMenu === 'Social Skills' && (
              <div className="submenu-container">
                <Link href="/social-skills/family" className="block px-4 py-2" onClick={closeMenus}>
                  Family
                </Link>
                <Link href="/social-skills/friends" className="block px-4 py-2" onClick={closeMenus}>
                  Friends
                </Link>
                <Link href="/social-skills/lovers" className="block px-4 py-2" onClick={closeMenus}>
                  Lovers
                </Link>
                <Link href="/social-skills/work" className="block px-4 py-2" onClick={closeMenus}>
                  Work
                </Link>
                <Link href="/social-skills/army" className="block px-4 py-2" onClick={closeMenus}>
                  The Army
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button className="menu-item" onClick={() => handleSubMenuToggle('Languages')}>
              Languages
            </button>
            {openSubMenu === 'Languages' && (
              <div className="submenu-container">
                <Link href="/languages/classical-greek" className="block px-4 py-2" onClick={closeMenus}>
                  Classical Greek
                </Link>
                <Link href="/languages/modern-greek" className="block px-4 py-2" onClick={closeMenus}>
                  Modern Greek
                </Link>
                <Link href="/languages/english" className="block px-4 py-2" onClick={closeMenus}>
                  English
                </Link>
                <Link href="/languages/spanish" className="block px-4 py-2" onClick={closeMenus}>
                  Spanish
                </Link>
                <Link href="/languages/danish" className="block px-4 py-2" onClick={closeMenus}>
                  Danish
                </Link>
                <Link href="/languages/chinese" className="block px-4 py-2" onClick={closeMenus}>
                  Chinese
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button className="menu-item" onClick={() => handleSubMenuToggle('Physics')}>
              Physics
            </button>
            {openSubMenu === 'Physics' && (
              <div className="submenu-container">
                <Link href="/physics/classical" className="block px-4 py-2" onClick={closeMenus}>
                  Classical
                </Link>
                <Link href="/physics/quantum" className="block px-4 py-2" onClick={closeMenus}>
                  Quantum
                </Link>
                <Link href="/physics/chemistry" className="block px-4 py-2" onClick={closeMenus}>
                  Chemistry
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button className="menu-item" onClick={() => handleSubMenuToggle('Math')}>
              Math
            </button>
            {openSubMenu === 'Math' && (
              <div className="submenu-container">
                <Link href="/math/perfect-numbers" className="block px-4 py-2" onClick={closeMenus}>
                  Perfect Numbers
                </Link>
                <Link href="/math/prime-numbers" className="block px-4 py-2" onClick={closeMenus}>
                  Prime Numbers
                </Link>
                <Link href="/math/friendly-numbers" className="block px-4 py-2" onClick={closeMenus}>
                  Friendly Numbers
                </Link>
                <Link href="/math/trigonometry" className="block px-4 py-2" onClick={closeMenus}>
                  Trigonometry
                </Link>
              </div>
            )}
          </div>

          <Link href="#" className="block px-4 py-2 hover:text-gray-300 menu-item" onClick={handleFormToggle}>
            Content Request
          </Link>

          {!userId ? (
            <>
              <Link href="/sign-in" className="block px-4 py-2 hover:text-gray-300">Sign in</Link>
              <Link href="/sign-up" className="block px-4 py-2 hover:text-gray-300">Sign up</Link>
            </>
          ) : (
            <div className="flex space-x-4 items-center">
              <Link href="/profile" className="block px-4 py-2 hover:text-gray-300">Profile</Link>
              <UserButton />
            </div>
          )}
        </nav>

        <button className="md:hidden text-white" onClick={handleMobileMenuToggle}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-3/12 h-full bg-darkgreen text-white p-4">
          <button onClick={handleMobileMenuToggle} className="block mb-4">Close</button>
          <Link href="/" className="block mb-4" onClick={handleMobileMenuToggle}>Home</Link>
          {/* Add Mobile Submenu Items Here */}
        </div>
      )}

      {formOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg">
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

export default Navbar;


