'use client';

import react from 'react';

interface MenuItemProps {
  label: string;
  onClick: () => void;
}
const MenuItem: react.FC<MenuItemProps> = ({ label, onClick }) => {
  return (
    <div onClick={onClick} className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
      {label}
    </div>
  );
};

export default MenuItem;
