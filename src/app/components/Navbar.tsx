// src/app/components/Navbar.tsx
'use client';

import React, { useState } from "react";
import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SubMenu from "./SubMenu";

const Navbar: React.FC = () => {
  const { userId } = useAuth();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <header className="navbar bg-gray-800 text-white fixed w-full top-0 left-0 z-40">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold menu-item">
          <span>Home</span>
        </Link>
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <nav className={`md:flex ${menuOpen ? 'block' : 'hidden'} md:space-x-4 absolute md:relative top-full left-0 w-full md:w-auto bg-gray-800 md:bg-transparent`}>
          <Link href="/content-request" className="block px-4 py-2 hover:text-gray-300 menu-item">
            <span>Content Request</span>
          </Link>
          <SubMenu items={philosophyItems} label="Philosophy" />
          <SubMenu items={historyItems} label="History" />
          <SubMenu items={musicItems} label="Music" />
          <SubMenu items={physicalEducationItems} label="Physical Education" />
          <SubMenu items={socialSkillsItems} label="Social Skills" />
          <SubMenu items={languagesItems} label="Languages" />
          <SubMenu items={physicsItems} label="Physics" />
          <SubMenu items={mathItems} label="Math" />
          {!userId ? (
            <>
              <Link href="/sign-in" className="block px-4 py-2 hover:text-gray-300 menu-item">
                <span>Sign in</span>
              </Link>
              <Link href="/sign-up" className="block px-4 py-2 hover:text-gray-300 menu-item">
                <span>Sign up</span>
              </Link>
            </>
          ) : (
            <>
              <Link href="/profile" className="block px-4 py-2 hover:text-gray-300 menu-item">
                Profile
              </Link>
              <UserButton />
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
