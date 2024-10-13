import Link from "next/link";

import { twMerge } from 'tailwind-merge';

export default function NavButton({ children, href, className } 
    : { children: React.ReactNode, href: string, className?: string }) {
    return (
        <Link href={href}>
            <div className={twMerge('flex flex-row gap-2.5 items-center rounded-full text-sm px-6 py-1.5', className)}>
                { children }
            </div>
        </Link>
    );
}