import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="relative flex flex-col min-h-screen, [background-color:#22577a]">
            <header className="text-white p-4 relative" style={{ zIndex: 2 }}>
                <h1 className="text-xl ">Alquila tu Cancha</h1>
            </header>
            <main className="relative flex flex-col items-center justify-center flex-grow" style={{ zIndex: 2, height: '100vh' }}>
                <div className="flex flex-col items-center justify-center h-screen">
                    <h1 className="text-4xl font-bold text-white shadow-2xl   ">Bienvenido a Alquila tu Cancha</h1>
                    <div className="flex justify-center mt-4 ">
                        <Image
                            src="/soccer-icon.svg"
                            height={100}
                            width={100}
                            layout="fixed"
                            objectFit="contain"
                            alt="fulvo"
                        />
                    </div>
                    <p className="text-lg text-white mt-4 animate-fade-up shadow-2xl">¡Crea el partido de tus sueños!</p>
                    <Link href="/teams">
                        <div className="text-lg text-white mt-4 underline ">Comenzar a crear los equipos!</div>
                    </Link>
                </div>
            </main>
            <div className="absolute inset-0 w-full h-full z-0" >
                <Image
                    src="/soccerfield.webp"
                    layout="fill"
                    objectFit="cover"
                    alt="Soccer field"
                    style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 0, 100% 57%, 50% 100%, 50% 100%, 0 57%, 0 0)", opacity: 0.5 }}

                />
            </div>
        </div>
    );
}
