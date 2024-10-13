import Link from 'next/link';

import { twMerge } from 'tailwind-merge';

export default function PillButton(
    { href, className, children } : { href: string, className?: string, children: React.ReactNode }
) {
    return (
        <Link href={href} className={twMerge('bg-zinc-400 rounded-xl px-4 py-2', className)}>
            { children }
        </Link>
    )
}