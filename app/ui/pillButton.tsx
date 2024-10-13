import Link from 'next/link';

import { twMerge } from 'tailwind-merge';

export default function PillButton(
    { href, className, children } : { href: string, className?: string, children: React.ReactNode }
) {
    return (
        <Link href={href} 
        className={twMerge('bg-zinc-400 rounded-xl px-4 py-2 flex flex-row gap-2 items-center hover:scale-110 transition-all duration-200 ease-in ', className)}>
            { children }
        </Link>
    )
}