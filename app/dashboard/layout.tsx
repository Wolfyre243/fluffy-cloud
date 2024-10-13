// Import components
import NavButton from "../ui/dashboard/navButton";
import Link from "next/link";
import NavLinks from "../ui/dashboard/navlinks";

// Import icons
import { HomeIcon, PlusIcon } from "../ui/svg_icons"

export default function Layout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <main className="h-screen w-screen flex flex-col">
            <div className="flex flex-row justify-between items-center px-6 py-3">
                <h1 className="text-2xl">Fluffy Cloud</h1>
                <div className="rounded-full w-1/3 px-4 py-2 italic bg-neutral-800">
                    Search
                </div>
                <div>
                    User Settings
                </div>
            </div>
            <section className="flex flex-row h-full">
                {/* Sidebar */}
                <div className="flex flex-col gap-2 w-1/6 px-4 py-2">
                    <div className="w-full flex flex-col gap-8">
                        <Link href="">
                            <div className="flex flex-row gap-2 items-center px-8 py-4 rounded-xl w-fit hover:shadow-[0_0_20px_2px] hover:shadow-stone-600 transition-all duration-200 ease-out bg-tertiary text-black">
                                <PlusIcon width={20} height={20} />
                                Upload Files
                            </div>
                        </Link>
                        <NavLinks />
                    </div>
                </div>
                <div className="flex w-full p-3">
                    { children }
                </div>
            </section>
        </main>
    );
};