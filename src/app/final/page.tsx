"use client";
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import type { player } from '../../types/players';
import { useEffect, useState, Suspense } from 'react';

const FinalContent = () => {
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
        <div className="relative h-screen w-full">
            <Image
                src="/soccer.jpg"
                layout="fill"
                objectFit="cover"
                alt="Cancha de Fútbol"
            />
            <div className="flex justify-between items-center h-full px-10">
                {team1 && (
                    <div className="text-center">
                        <h2 className="text-white text-2xl mb-4">{team1.name}</h2>
                        <ul>
                            {team1.players.map((player, index) => (
                                <li key={index} className="text-white text-lg">
                                    {player.fullname}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {team2 && (
                    <div className="text-center">
                        <h2 className="text-white text-2xl mb-4">{team2.name}</h2>
                        <ul>
                            {team2.players.map((player, index) => (
                                <li key={index} className="text-white text-lg">
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

const Final = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <FinalContent />
        </Suspense>
    );
};

export default Final;