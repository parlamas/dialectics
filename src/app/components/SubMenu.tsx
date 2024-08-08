// src/app/components/SubMenu.tsx
import React, { useState } from 'react';
import Link from 'next/link';

const SubMenu = ({ items, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group" 
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
    >
      <button onClick={() => setIsOpen(!isOpen)} className="block px-4 py-2 hover:text-gray-300">
        <span style={{ fontSize: "8pt" }}>{label}</span>
      </button>
      <div className={`absolute left-0 top-full py-2 rounded-md shadow-lg ${isOpen ? 'block' : 'hidden'} submenu-container`}>
        {items.map((item, index) => (
          <Link key={index} href={item.href} className="block px-4 py-2">
            <span style={{ fontSize: "8pt" }}>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubMenu;

