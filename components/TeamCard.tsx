"use client"

import React, { useState } from 'react';
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { player } from '../src/types/players';
import PlayerSearch from './PlayerSearch';

interface TeamCardProps {
    teamName: string;
    onTeamUpdate: (team: { name: string, players: player[] }) => void;
}

const TeamCard: React.FC<TeamCardProps> = ({ teamName, onTeamUpdate }) => {
    const [players, setPlayers] = useState<player[]>([]);
    const [teamNameInput, setTeamNameInput] = useState(teamName);

    const handlePlayerSelect = (selectedPlayers: player[]) => {
        if (selectedPlayers.length <= 5) {
            setPlayers(selectedPlayers);
            onTeamUpdate({ name: teamNameInput, players: selectedPlayers });

        } else {
            alert("Solo se permiten hasta 5 jugadores por equipo.");
        }
    };

    const handleRemovePlayer = (playerId: number) => {
        const updatedPlayers = players.filter(player => player.id !== playerId);
        setPlayers(updatedPlayers);
        onTeamUpdate({ name: teamNameInput, players: updatedPlayers });
    };

    const handleTeamNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedName = event.target.value;
        setTeamNameInput(updatedName);
        onTeamUpdate({ name: updatedName, players });
    };

    return (
        <div className="flex space-x-8">
            <div className="bg-white shadow-md rounded-lg p-6 w-80">
                <h2 className="text-center text-lg font-semibold text-black ">{teamName} </h2>
                <div className="mt-4">
                    <input
                        type="text"
                        id="team_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Nombre del equipo"
                        value={teamNameInput}
                        onChange={handleTeamNameChange}
                        required
                    />
                </div>
                <div className="mt-4 flex">
                    <PlayerSearch onPlayerSelect={handlePlayerSelect} />
                </div>
                <ul className="mt-4">
                    {players.map(player => (
                        <li key={player.id} className="flex justify-between items-center py-2 border-b text-black">
                            {player.fullname}
                            <button
                                className="text-red-500 hover:text-red-700"
                                onClick={() => handleRemovePlayer(player.id)}
                            >
                                <IoMdClose className="w-6 h-6" />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TeamCard;
