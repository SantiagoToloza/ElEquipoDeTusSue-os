"use client"
import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { player } from '../src/types/players';

interface PlayerSearchProps {
    onPlayerSelect: (players: player[]) => void;
}

const PlayerSearch: React.FC<PlayerSearchProps> = ({ onPlayerSelect }) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState<player[]>([]);
    const [selectedPlayers, setSelectedPlayers] = useState<player[]>([]);

    const options = suggestions.map(player => ({
        value: player.id,
        label: player.fullname,
    }));

    const fetchPlayers = async (searchQuery: string) => {
        if (searchQuery.length < 3) {
            setSuggestions([]);
            return;
        }
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        try {
            const response = await axios.get(`https://apiv3.apifootball.com/?action=get_players&player_name=${searchQuery}&APIkey=${apiUrl}`);
            const players = response.data.map((player: any) => ({
                id: player.player_id,
                fullname: player.player_name,
            }));
            setSuggestions(players);
        } catch (error) {
            console.error("Error fetching players:", error);
        }
    };

    const handleInputChange = (newValue: any) => {
        const value = newValue ? newValue : '';
        setQuery(value);
        fetchPlayers(value);
    };

    const handleSelectChange = (selectedOption: any) => {
        if (selectedOption && selectedPlayers.length < 5) {
            const selectedPlayer = suggestions.find(player => player.id === selectedOption.value);
            if (selectedPlayer && !selectedPlayers.some(player => player.id === selectedPlayer.id)) {
                const newSelectedPlayers = [...selectedPlayers, selectedPlayer];
                setSelectedPlayers(newSelectedPlayers);
                onPlayerSelect(newSelectedPlayers);
            }
        }
    };



    return (
        <div className="flex flex-col w-full">
            <Select
                inputValue={query}
                onInputChange={handleInputChange}
                onChange={handleSelectChange}
                options={options}
                placeholder="Busca a tu jugador"
                noOptionsMessage={() => 'No se encontraron jugadores'}
                isDisabled={selectedPlayers.length >= 5}
                className="w-full text-black"
            />

        </div>
    );
};

export default PlayerSearch;
