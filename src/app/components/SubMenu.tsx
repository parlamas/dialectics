// src/app/components/SubMenu.tsx

import React from 'react';
import Link from 'next/link';

interface SubMenuProps {
  items: { href: string; text: string }[];
  label: string;
  isOpen: boolean;
  onClick: () => void;
}

const SubMenu: React.FC<SubMenuProps> = ({ items, label, isOpen, onClick }) => {
  return (
    <div className="relative">
      <button onClick={onClick} className="menu-item">
        {label}
      </button>
      {isOpen && (
        <ul className="submenu-container">
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




