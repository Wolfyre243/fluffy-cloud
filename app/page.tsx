// Import components
import PillButton from "./ui/pillButton";
import NavBar from './ui/navBar';

export default function LandingPage() {
	return (
        <main>
            <NavBar />
            <section className="h-screen flex flex-col justify-center items-center">
                <div className="flex flex-col gap-3 items-center justify-center w-fit">
                    <h1 className="text-6xl tracking-tight">One place to store it all</h1>
                    <p>Forget disk space. Focus on what matters most.</p>
                    <div className='flex flex-row gap-4 items-center'>
                        <PillButton href='' className='bg-stone-800'>Github</PillButton>
                        <PillButton href='' className='bg-blue-600'>Get Started</PillButton>
                    </div>
                </div>
            </section>
        </main>
    );
}