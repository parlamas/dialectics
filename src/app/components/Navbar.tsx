'use client';

import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

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

  return (
    <header className="bg-gray-800 text-white fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
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
          <Link href="/content-request" className="block px-4 py-2 hover:text-gray-300">
            Content Request
          </Link>
          <Link href="/protected/cv" className="block px-4 py-2 hover:text-gray-300">
            Point
          </Link>
          {!userId ? (
            <>
              <Link href="/sign-in" className="block px-4 py-2 hover:text-gray-300">
                Login
              </Link>
              <Link href="/sign-up" className="block px-4 py-2 hover:text-gray-300">
                Sign Up
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





