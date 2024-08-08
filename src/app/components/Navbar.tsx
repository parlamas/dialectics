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
    { href: "/philosophy/dialectics", label: "Dialectics" },
    { href: "/philosophy/horistics", label: "Horistics" },
    { href: "/philosophy/etymology", label: "Etymology" },
    { href: "/philosophy/ethics", label: "Ethics" },
    { href: "/philosophy/politics", label: "Politics" },
    { href: "/philosophy/economics", label: "Economics" },
  ];

  const historyItems = [
    { href: "/history/classical-greek", label: "Classical Greek History" },
    { href: "/history/byzanium", label: "Byzanium" },
    { href: "/history/modern-greek", label: "Modern Greek History" },
    { href: "/history/cooking", label: "Cooking" },
  ];

  const musicItems = [
    { href: "/music/nature", label: "Nature" },
    { href: "/music/speech", label: "Speech" },
    { href: "/music/metron", label: "Metron" },
    { href: "/music/playing", label: "Playing" },
  ];

  const physicalEducationItems = [
    { href: "/physical-education/mind", label: "Mind" },
    { href: "/physical-education/body", label: "Body" },
    { href: "/physical-education/beauty", label: "Beauty" },
    { href: "/physical-education/discipline", label: "Discipline" },
    { href: "/physical-education/skill", label: "As a Skill" },
  ];

  const socialSkillsItems = [
    { href: "/social-skills/family", label: "Family" },
    { href: "/social-skills/friends", label: "Friends" },
    { href: "/social-skills/lovers", label: "Lovers" },
    { href: "/social-skills/work", label: "Work" },
    { href: "/social-skills/army", label: "The Army" },
  ];

  const languagesItems = [
    { href: "/languages/classical-greek", label: "Classical Greek" },
    { href: "/languages/modern-greek", label: "Modern Greek" },
    { href: "/languages/english", label: "English" },
    { href: "/languages/spanish", label: "Spanish" },
    { href: "/languages/danish", label: "Danish" },
    { href: "/languages/chinese", label: "Chinese" },
  ];

  const physicsItems = [
    { href: "/physics/classical", label: "Classical" },
    { href: "/physics/quantum", label: "Quantum" },
    { href: "/physics/chemistry", label: "Chemistry" },
  ];

  const mathItems = [
    { href: "/math/perfect-numbers", label: "Perfect Numbers" },
    { href: "/math/prime-numbers", label: "Prime Numbers" },
    { href: "/math/friendly-numbers", label: "Friendly Numbers" },
    { href: "/math/trigonometry", label: "Trigonometry" },
  ];

  return (
    <header className="navbar bg-gray-800 text-white fixed w-full top-0 left-0 z-40"> {/* Set a lower z-index */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          <span style={{ fontSize: "8pt" }}>Home</span>
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
          <Link href="/content-request" className="block px-4 py-2 hover:text-gray-300">
            <span style={{ fontSize: "8pt" }}>Content Request</span>
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
              <Link href="/sign-in" className="block px-4 py-2 hover:text-gray-300">
                <span style={{ fontSize: "8pt" }}>Sign in</span>
              </Link>
              <Link href="/sign-up" className="block px-4 py-2 hover:text-gray-300">
                <span style={{ fontSize: "8pt" }}>Sign up</span>
              </Link>
            </>
          ) : (
            <>
              <Link href="/profile" className="block px-4 py-2 hover:text-gray-300">
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


