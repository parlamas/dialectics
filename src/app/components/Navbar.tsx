'use client';

import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SubMenu = ({ items, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button onClick={() => setIsOpen(!isOpen)} className="block px-4 py-2 hover:text-gray-300 text-8pt">
        {label}
      </button>
      <div className={`absolute left-0 top-full bg-gray-700 text-white py-2 rounded-md shadow-lg z-10 ${isOpen ? 'block' : 'hidden'} group-hover:block`}>
        {items.map((item, index) => (
          <Link key={index} href={item.href} className="block px-4 py-2 hover:text-gray-300 text-8pt">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const { userId } = useAuth();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (!userId) {
      e.preventDefault();
      router.push('/sign-in');
    }
  };

  const subMenuItemsPhilosophy = [
    { href: "/philosophy/dialectics", label: "Dialectics" },
    { href: "/philosophy/horistics", label: "Horistics" },
    { href: "/philosophy/ethics", label: "Ethics" },
    { href: "/philosophy/politics", label: "Politics" },
    { href: "/philosophy/economics", label: "Economics" },
    { href: "/philosophy/religion", label: "Religion" },
  ];

  const subMenuItemsHistory = [
    { href: "/history/classical-greek-history", label: "Classical Greek History" },
    { href: "/history/byzanium", label: "Byzanium" },
    { href: "/history/modern-greek-history", label: "Modern Greek History" },
    { href: "/history/cooking", label: "Cooking" },
  ];

  const subMenuItemsMusic = [
    { href: "/music/nature", label: "Nature" },
    { href: "/music/speech", label: "Speech" },
    { href: "/music/metron", label: "Metron" },
    { href: "/music/playing", label: "Playing" },
  ];

  const subMenuItemsPhysicalEducation = [
    { href: "/physical-education/mind", label: "Mind" },
    { href: "/physical-education/body", label: "Body" },
    { href: "/physical-education/beauty", label: "Beauty" },
    { href: "/physical-education/discipline", label: "Discipline" },
    { href: "/physical-education/as-a-skill", label: "As a Skill" },
  ];

  const subMenuItemsSocialSkills = [
    { href: "/social-skills/family", label: "Family" },
    { href: "/social-skills/friends", label: "Friends" },
    { href: "/social-skills/lovers", label: "Lovers" },
    { href: "/social-skills/work", label: "Work" },
    { href: "/social-skills/army", label: "The Army" },
  ];

  const subMenuItemsLanguages = [
    { href: "/languages/classical-greek", label: "Classical Greek" },
    { href: "/languages/modern-greek", label: "Modern Greek" },
    { href: "/languages/english", label: "English" },
    { href: "/languages/spanish", label: "Spanish" },
    { href: "/languages/danish", label: "Danish" },
    { href: "/languages/chinese", label: "Chinese" },
  ];

  const subMenuItemsPhysics = [
    { href: "/physics/classical", label: "Classical" },
    { href: "/physics/quantum", label: "Quantum" },
    { href: "/physics/chemistry", label: "Chemistry" },
  ];

  const subMenuItemsMath = [
    { href: "/math/perfect-numbers", label: "Perfect Numbers" },
    { href: "/math/prime-numbers", label: "Prime Numbers" },
    { href: "/math/friendly-numbers", label: "Friendly Numbers" },
    { href: "/math/trigonometry", label: "Trigonometry" },
  ];

  return (
    <header className="bg-gray-800 text-white fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-8pt">
          Home
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
          <Link href="/content-request" className="block px-4 py-2 hover:text-gray-300 text-8pt">
            Content Request
          </Link>

          <SubMenu items={subMenuItemsPhilosophy} label="Philosophy" />
          <SubMenu items={subMenuItemsHistory} label="History" />
          <SubMenu items={subMenuItemsMusic} label="Music" />
          <SubMenu items={subMenuItemsPhysicalEducation} label="Physical Education" />
          <SubMenu items={subMenuItemsSocialSkills} label="Social Skills" />
          <SubMenu items={subMenuItemsLanguages} label="Languages" />
          <SubMenu items={subMenuItemsPhysics} label="Physics" />
          <SubMenu items={subMenuItemsMath} label="Math" />

          {!userId ? (
            <>
              <Link href="/sign-in" className="block px-4 py-2 hover:text-gray-300 text-8pt">
                Sign in
              </Link>
              <Link href="/sign-up" className="block px-4 py-2 hover:text-gray-300 text-8pt">
                Sign up
              </Link>
            </>
          ) : (
            <>
              <Link href="/profile" className="block px-4 py-2 hover:text-gray-300 text-8pt">
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
