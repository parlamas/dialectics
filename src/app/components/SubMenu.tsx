'use client';

import React, { useState } from "react";
import Link from "next/link";

interface SubMenuProps {
  items: { href: string, label: string }[];
  label: string;
}

const SubMenu: React.FC<SubMenuProps> = ({ items, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button onClick={() => setIsOpen(!isOpen)} className="block px-4 py-2 hover:text-gray-300">
        <span style={{ fontSize: "8pt" }}>{label}</span>
      </button>
      <div className={`absolute left-0 top-full bg-gray-700 text-white py-2 rounded-md shadow-lg z-10 ${isOpen ? 'block' : 'hidden'} group-hover:block`}>
        {items.map((item, index) => (
          <Link key={index} href={item.href} className="block px-4 py-2 hover:text-gray-300">
            <span style={{ fontSize: "8pt" }}>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubMenu;




