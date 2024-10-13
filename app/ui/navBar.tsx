import Link from "next/link";

export default function NavBar() {
    return (
        <div className="w-full flex flex-row justify-between px-4 py-2 bg-secondary">
            <h1>Company Brand Here</h1>
            <nav className="flex flex-row w-1/3 justify-evenly">
                <Link href='/'>Home</Link>
                <Link href='/'>Home</Link>
                <Link href='/'>Home</Link>
            </nav>
            <div>User Settings Stuff</div>
        </div>
    );
}