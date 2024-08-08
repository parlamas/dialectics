// src/app/components/SubMenu.tsx
// src/app/components/SubMenu.tsx
import React, { useState } from 'react';
import Link from 'next/link';

interface SubMenuProps {
  items: { href: string; text: string }[];
  label: string;
}

const SubMenu: React.FC<SubMenuProps> = ({ items, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="menu-item">
        {label}
      </button>
      {isOpen && (
        <ul className="absolute bg-gray-800 text-white shadow-lg rounded">
          {items.map((item, index) => (
            <li key={index} className="menu-item">
              <Link href={item.href}>
                <span className="block px-4 py-2 hover:text-gray-300">{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SubMenu;

