import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-500">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-xl">Alquila tu Cancha</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-white">Bienvenido a Alquila tu Cancha ⚽</h1>
        <p className="text-lg text-white mt-4">¡Crea el partido de tus sueños!</p>
        <Link className="mt-6 bg-green-700 text-white px-4 py-2 rounded-full" href="/teams">
          Comenzar a crear los equipos!
        </Link>
      </main>
      <footer className="bg-blue-500 text-white p-4 mt-auto">
        <p>© 2024 Alquila tu Cancha</p>
      </footer>
    </div>
  );
}
