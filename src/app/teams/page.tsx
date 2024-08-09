"use client"
import type { player } from '../../types/players';
import TeamCard from '../../../components/TeamCard';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const [team1, setTeam1] = useState<{ name: string, players: player[] }>({ name: 'equipo 1', players: [] });
    const [team2, setTeam2] = useState<{ name: string, players: player[] }>({ name: 'equipo 2', players: [] });
    const router = useRouter();

    const handleTeam1Update = (team: { name: string, players: player[] }) => {
        setTeam1(team);
    };

    const handleTeam2Update = (team: { name: string, players: player[] }) => {
        setTeam2(team);
    };

    const isButtonEnabled = team1.players.length === 5 && team2.players.length === 5;



    const handleFinalize = () => {
        const url = `/final?team1=${encodeURIComponent(JSON.stringify(team1))}&team2=${encodeURIComponent(JSON.stringify(team2))}`;
        router.push(url);
    };


    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-green-700 justify-center items-center gap-5">
            <div className="w-full lg:w-1/2 relative h-screen">
                <Image
                    src="/JugadorBanner.png"
                    layout="fill"
                    objectFit="cover"
                    alt="2"
                    className="h-full w-full"
                />
            </div>
            <div className="text-center flex flex-col justify-center w-full lg:w-1/2 items-center p-5 h-screen">
                <div className="text-xl mb-6">Busque y forme su equipo</div>
                <div className="flex flex-col md:flex-row gap-10 justify-center w-full">
                    {/* player1 */}
                    <TeamCard teamName="equipo 1" onTeamUpdate={handleTeam1Update} />
                    {/* player2 */}
                    <TeamCard teamName="equipo 2" onTeamUpdate={handleTeam2Update} />
                </div>
                <button
                    className="mt-8 bg-amber-300 text-black font-bold uppercase p-2 rounded-md w-40"
                    onClick={handleFinalize}
                    disabled={!isButtonEnabled}
                >
                    Finalizar
                </button>
            </div>
        </div>
    );
}
