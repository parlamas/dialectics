// src/app/components/Navba
'use client';

import React, { useState, useEffect, useRef } from "react";
import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SubMenu from "./SubMenu";

const Navbar: React.FC = () => {
  const { userId } = useAuth();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null); // State to track the open submenu
  const [formOpen, setFormOpen] = useState(false); // State to track the form visibility
  const [formData, setFormData] = useState({ name: '', email: '', request: '' });
  const [message, setMessage] = useState<string | null>(null); // State to track success message
  const menuRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const philosophyItems = [
    { href: "/philosophy/dialectics", text: "Dialectics" },
    { href: "/philosophy/horistics", text: "Horistics" },
    { href: "/philosophy/etymology", text: "Etymology" },
    { href: "/philosophy/ethics", text: "Ethics" },
    { href: "/philosophy/politics", text: "Politics" },
    { href: "/philosophy/economics", text: "Economics" },
  ];

  const historyItems = [
    { href: "/history/classical-greek", text: "Classical Greek History" },
    { href: "/history/byzanium", text: "Byzanium" },
    { href: "/history/modern-greek", text: "Modern Greek History" },
    { href: "/history/cooking", text: "Cooking" },
  ];

  const musicItems = [
    { href: "/music/nature", text: "Nature" },
    { href: "/music/speech", text: "Speech" },
    { href: "/music/metron", text: "Metron" },
    { href: "/music/playing", text: "Playing" },
  ];

  const physicalEducationItems = [
    { href: "/physical-education/mind", text: "Mind" },
    { href: "/physical-education/body", text: "Body" },
    { href: "/physical-education/beauty", text: "Beauty" },
    { href: "/physical-education/discipline", text: "Discipline" },
    { href: "/physical-education/skill", text: "As a Skill" },
  ];

  const socialSkillsItems = [
    { href: "/social-skills/family", text: "Family" },
    { href: "/social-skills/friends", text: "Friends" },
    { href: "/social-skills/lovers", text: "Lovers" },
    { href: "/social-skills/work", text: "Work" },
    { href: "/social-skills/army", text: "The Army" },
  ];

  const languagesItems = [
    { href: "/languages/classical-greek", text: "Classical Greek" },
    { href: "/languages/modern-greek", text: "Modern Greek" },
    { href: "/languages/english", text: "English" },
    { href: "/languages/spanish", text: "Spanish" },
    { href: "/languages/danish", text: "Danish" },
    { href: "/languages/chinese", text: "Chinese" },
  ];

  const physicsItems = [
    { href: "/physics/classical", text: "Classical" },
    { href: "/physics/quantum", text: "Quantum" },
    { href: "/physics/chemistry", text: "Chemistry" },
  ];

  const mathItems = [
    { href: "/math/perfect-numbers", text: "Perfect Numbers" },
    { href: "/math/prime-numbers", text: "Prime Numbers" },
    { href: "/math/friendly-numbers", text: "Friendly Numbers" },
    { href: "/math/trigonometry", text: "Trigonometry" },
  ];

  const handleSubMenuClick = (label: string) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
    setFormOpen(false); // Close the form when opening a submenu
    setMessage(null); // Clear message when submenu is clicked
  };

  const handleFormClick = () => {
    setFormOpen(!formOpen);
    setOpenSubMenu(null); // Close the submenu when opening the form
    setMessage(null); // Clear message when form is opened
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('You emailed successfully.');
        setFormData({ name: '', email: '', request: '' }); // Clear form
      } else {
        setMessage('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setMessage('An error occurred while sending the email.');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target as Node) &&
        (!formRef.current || !formRef.current.contains(event.target as Node))
      ) {
        setOpenSubMenu(null);
        setFormOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="navbar bg-gray-800 text-white fixed w-full top-0 left-0 z-40">
      <div ref={menuRef} className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold menu-item">
          <span>Home</span>
        </Link>
        <nav className="flex-1 flex justify-between items-center">
          <div className="flex space-x-4">
            <button onClick={handleFormClick} className="block px-4 py-2 hover:text-gray-300 menu-item">
              <span>Content Request</span>
            </button>
            <SubMenu items={philosophyItems} label="Philosophy" isOpen={openSubMenu === 'Philosophy'} onClick={() => handleSubMenuClick('Philosophy')} />
            <SubMenu items={historyItems} label="History" isOpen={openSubMenu === 'History'} onClick={() => handleSubMenuClick('History')} />
            <SubMenu items={musicItems} label="Music" isOpen={openSubMenu === 'Music'} onClick={() => handleSubMenuClick('Music')} />
            <SubMenu items={physicalEducationItems} label="Physical Education" isOpen={openSubMenu === 'Physical Education'} onClick={() => handleSubMenuClick('Physical Education')} />
            <SubMenu items={socialSkillsItems} label="Social Skills" isOpen={openSubMenu === 'Social Skills'} onClick={() => handleSubMenuClick('Social Skills')} />
            <SubMenu items={languagesItems} label="Languages" isOpen={openSubMenu === 'Languages'} onClick={() => handleSubMenuClick('Languages')} />
            <SubMenu items={physicsItems} label="Physics" isOpen={openSubMenu === 'Physics'} onClick={() => handleSubMenuClick('Physics')} />
            <SubMenu items={mathItems} label="Math" isOpen={openSubMenu === 'Math'} onClick={() => handleSubMenuClick('Math')} />
          </div>
          {!userId ? (
            <div className="flex space-x-4">
              <Link href="/sign-in" className="block px-4 py-2 hover:text-gray-300 menu-item">
                <span>Sign in</span>
              </Link>
              <Link href="/sign-up" className="block px-4 py-2 hover:text-gray-300 menu-item">
                <span>Sign up</span>
              </Link>
            </div>
          ) : (
            <div className="flex space-x-4 items-center">
              <Link href="/profile" className="block px-4 py-2 hover:text-gray-300 menu-item">
                Profile
              </Link>
              <UserButton />
            </div>
          )}
        </nav>
      </div>
      {formOpen && (
        <div ref={formRef} className="absolute top-16 left-0 right-0 bg-white text-black p-4 shadow-lg rounded mx-4 md:mx-auto md:w-1/2">
          <h2>Content Request Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="request" className="block text-gray-700">Request</label>
              <textarea
                id="request"
                name="request"
                value={formData.request}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
            <button type="button" className="ml-4 text-red-500 px-4 py-2 rounded hover:text-red-700" onClick={() => setFormOpen(false)}>Close Form</button>
          </form>
          {message && <p className="mt-4 text-green-500">{message}</p>}
        </div>
      )}
    </header>
  );
};

export default Navbar;

