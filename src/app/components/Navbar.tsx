"use client";

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
    <nav className="bg-cyan-950 text-white shadow-md">
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
        <div className={`md:flex flex-col md:flex-row md:space-x-4 ${menuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <Link href="/client" onClick={(e) => handleLinkClick(e, '/client')}>
              <a className="hover:text-gray-300">Client</a>
            </Link>
            <Link href="/content-request">
              <a className="hover:text-gray-300">Request Content</a>
            </Link>
            <Link href="/protected/cv" onClick={(e) => handleLinkClick(e, '/protected/cv')}>
              <a className="hover:text-gray-300">Point</a>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {!userId ? (
              <>
                <Link href="/sign-in">
                  <a className="hover:text-gray-300">Login</a>
                </Link>
                <Link href="/sign-up">
                  <a className="hover:text-gray-300">Sign Up</a>
                </Link>
              </>
            ) : (
              <>
                <Link href="/profile">
                  <a className="hover:text-gray-300">Profile</a>
                </Link>
                <UserButton />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

