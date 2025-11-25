import React from 'react';
import { DieFace } from './DieFace';

interface DieSelectorProps {
    sides: number[];
    onSelect: (side: number) => void;
}

export const DieSelector: React.FC<DieSelectorProps> = ({ sides, onSelect }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full gap-8 animate-fade-in">
            <div className="flex items-center gap-4 mb-4">
                <h1 className="text-7xl text-center tracking-wide" style={{ fontFamily: 'var(--font-gochi-hand)' }}>
                    Cuida tu corazón
                </h1>
                <svg className="w-20 h-20 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
            </div>
            <h2 className="text-4xl font-bold text-center mb-8 border-4 border-double border-black rounded-2xl px-8 py-4 animate-rainbow-border">
                Selecciona el dado
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {sides.map((side) => (
                    <button
                        key={side}
                        onClick={() => onSelect(side)}
                        className="btn btn-ghost btn-lg w-40 h-40 p-0 hover:scale-110 hover:rotate-6 transition-all duration-300 animate-scale-up"
                        style={{ animationDelay: `${(side - 1) * 0.15}s` }}
                    >
                        <DieFace value={side} size={140} />
                    </button>
                ))}
            </div>
        </div>
    );
};
