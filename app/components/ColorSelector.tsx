import React from 'react';
import { Color } from '../types';
import { DieFace } from './DieFace';

interface ColorSelectorProps {
    colors: Color[];
    onSelect: (colorId: string) => void;
    selectedSide: number;
}

export const ColorSelector: React.FC<ColorSelectorProps> = ({ colors, onSelect, selectedSide }) => {
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
            <div className="flex flex-col items-center gap-4">
                <DieFace value={selectedSide} size={100} />
                <h2 className="text-4xl font-bold text-center">Dado: {selectedSide}</h2>
            </div>
            <h3 className="text-2xl text-center mb-8 border-4 border-double border-black rounded-2xl px-8 py-4">
                Selecciona el color
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {colors.map((color, index) => {
                    const getEmoji = (colorId: string) => {
                        switch (colorId) {
                            case 'purple': return '🍌';
                            case 'blue': return '🏃';
                            case 'green': return '🩺';
                            default: return '';
                        }
                    };

                    return (
                        <button
                            key={color.id}
                            onClick={() => onSelect(color.id)}
                            className={`btn h-40 text-xl font-bold text-white shadow-lg hover:scale-105 transition-transform animate-scale-up`}
                            style={{
                                backgroundColor: color.hex,
                                animationDelay: `${index * 0.15}s`
                            }}
                        >
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-5xl">{getEmoji(color.id)}</span>
                                <span>{color.name}</span>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
