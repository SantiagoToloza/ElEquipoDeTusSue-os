import Image from "next/image";

export default function About() {
    return (
        <div className="container mx-auto grid md:grid-cols-2 grid-rows-1 w-full flex-grow pt-10 gap-4">
            <div className="flex justify-center items-center animate-pulse">
                <Image src="/soccerAbout2.png" layout="intrinsic" objectFit="cover" width={600} height={600} alt="2" />
            </div>
            <div className="flex flex-col justify-center items-center h-full text-center md:col-span-1 p-10 gap-20 animate-fade-left animate-once animate-ease-in">
                <div className="flex items-center text-3xl mb-4">
                    Sé parte del juego
                    <div className="animate-bounce ml-2">
                        <Image src="/soccer-icon.svg" className="fill-white" width={63} height={63} alt="soccer" />
                    </div>
                </div>


                <p className="px-4 animate-fade-left animate-once animate-ease-in">
                    <strong>Alquila tu Cancha</strong> es una aplicación diseñada para facilitar la organización de partidos de fútbol entre amigos y equipos. Nuestra misión es simplificar el proceso de reserva de canchas y la gestión de equipos, permitiendo a los usuarios enfocarse en lo que más les gusta: jugar al fútbol. Con nuestra plataforma, puedes dar la bienvenida a nuevos usuarios, listar equipos creados, crear y editar equipos, y gestionar jugadores vinculados a cada equipo. Además, aseguramos que cada equipo esté completo antes de los partidos, comunicándolo gráficamente para una mejor experiencia de usuario. Nuestra meta es proporcionar una herramienta completa y fácil de usar que haga de la organización de partidos de fútbol una tarea rápida y agradable. ¡Únete a nosotros y empieza a disfrutar de tu deporte favorito sin complicaciones!
                </p>
            </div>
        </div>
    );
}
