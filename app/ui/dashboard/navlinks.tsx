'use client';

import NavButton from "./navButton";
import { HomeIcon, FolderIcon, TrashIcon } from "../svg_icons";

import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    {
      name: 'Files',
      href: '/dashboard/files',
      icon: FolderIcon,
    },
    { name: 'Trash', href: '/dashboard/trash', icon: TrashIcon },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <div className="flex flex-col gap-2">
            {links.map((link, index) => {
                const LinkIcon = link.icon;
                return (
                    // For each link, create a corresponding nav button.
                    <NavButton key={index}
                    href={link.href}
                    className={clsx('hover:bg-neutral-900',
                    {
                        // If the pathname matches this link's href prop, colour it differently.
                        'bg-neutral-800 hover:bg-neutral-800' : pathname === link.href,
                    })}>
                        <LinkIcon width={14} height={14} fill="currentColor" />
                        <p className="hidden md:block">{link.name}</p>
                    </NavButton>
                );
            })}
        </div>
    );
}