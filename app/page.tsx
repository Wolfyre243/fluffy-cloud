// Import icons
import { GithubIcon } from "./ui/svg_icons";

// Import components
import PillButton from "./ui/pillButton";
import NavBar from './ui/navBar';

export default function LandingPage() {
	return (
        <main>
            <section className="h-screen flex flex-col justify-center items-center">
                <NavBar />
                <div className="flex flex-col h-full w-full gap-3 items-center justify-center">
                    <h1 className="text-6xl tracking-tight">One place to store it all</h1>
                    <p>Forget disk space. Focus on what matters most.</p>
                    <div className='flex flex-row gap-4 items-center'>
                        <PillButton href='https://github.com/Wolfyre243/fluffy-cloud' className='bg-stone-800 h-full'>
                            <GithubIcon width={30} height={30}/>
                            Github
                        </PillButton>
                        <PillButton href='/dashboard' className='bg-blue-600 h-full'>Get Started</PillButton>
                    </div>
                </div>
            </section>
        </main>
    );
}