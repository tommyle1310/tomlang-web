import React from 'react';

interface NavItemProps {
    title: string;
    icon: React.ReactNode; // or React.ElementType if you pass a component
    click?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ title, icon, click }) => {
    return (
        <div onClick={click} className="flex items-center cursor-pointer p-2 hover:bg-gray-200 rounded">
            <span className="mr-2">{icon}</span>
            <span>{title}</span>
        </div>
    );
};

export default NavItem;
