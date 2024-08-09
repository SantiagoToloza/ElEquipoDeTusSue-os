"use client"
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import type { player } from '../../types/players';
import { useEffect, useState } from 'react';

const Final = () => {
    const searchParams = useSearchParams();
    const [team1, setTeam1] = useState<{ name: string, players: player[] } | null>(null);
    const [team2, setTeam2] = useState<{ name: string, players: player[] } | null>(null);

    useEffect(() => {
        const team1Param = searchParams.get('team1');
        const team2Param = searchParams.get('team2');

        if (team1Param && team2Param) {
            setTeam1(JSON.parse(team1Param));
            setTeam2(JSON.parse(team2Param));
        }
    }, [searchParams]);

    return (
        <div className="relative h-screen w-full text-orange-800 container">
            <Image
                src="/soccer.jpg"
                layout="fill"
                objectFit="cover"
                alt="Cancha de Fútbol"
            />
            <div className="container flex">

                {team1 && (
                    <div className="absolute left-10 top-1/4">
                        <h2 className="text-white text-xl mb-4">{team1.name}</h2>
                        <ul>
                            {team1.players.map((player, index) => (
                                <li key={index} className="text-white">
                                    {player.fullname}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {team2 && (
                    <div className="absolute right-10 top-1/4">
                        <h2 className="text-white text-xl mb-4">{team2.name}</h2>
                        <ul>
                            {team2.players.map((player, index) => (
                                <li key={index} className="text-white">
                                    {player.fullname}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Final;
