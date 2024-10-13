import Link from "next/link";
import PillButton from "./pillButton";

export default function NavBar() {
    return (
        <div className="w-full flex flex-row justify-between px-6 py-3">
            <h1 className="flex items-center">Company Brand Here</h1>
            <nav className="flex flex-row items-center w-1/3 justify-evenly">
                <Link href='/home'>Home</Link>
                <Link href='/'>Features</Link>
                <Link href='/'>Pricing</Link>
            </nav>
            <div>
                <PillButton href="" 
                className="py-1 bg-transparent outline outline-2 hover:scale-100 hover:bg-white hover:text-black">
                    Sign Up
                </PillButton>
            </div>
        </div>
    );
}