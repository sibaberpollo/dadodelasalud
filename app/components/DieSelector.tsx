import React from 'react';
import { DieFace } from './DieFace';

interface DieSelectorProps {
    sides: number[];
    onSelect: (side: number) => void;
}

export const DieSelector: React.FC<DieSelectorProps> = ({ sides, onSelect }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full gap-8 animate-fade-in">
            <h2 className="text-4xl font-bold text-center mb-8 border-4 border-double border-black rounded-2xl px-8 py-4">
                Selecciona el dado
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {sides.map((side) => (
                    <button
                        key={side}
                        onClick={() => onSelect(side)}
                        className="btn btn-ghost btn-lg w-40 h-40 p-0 hover:scale-110 transition-transform"
                    >
                        <DieFace value={side} size={140} />
                    </button>
                ))}
            </div>
        </div>
    );
};
