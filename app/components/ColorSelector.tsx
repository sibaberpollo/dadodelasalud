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
            <div className="flex flex-col items-center gap-4">
                <DieFace value={selectedSide} size={100} />
                <h2 className="text-4xl font-bold text-center">Dado: {selectedSide}</h2>
            </div>
            <h3 className="text-2xl text-center mb-8 border-4 border-double border-black rounded-2xl px-8 py-4">
                Selecciona el color
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {colors.map((color, index) => (
                    <button
                        key={color.id}
                        onClick={() => onSelect(color.id)}
                        className={`btn h-40 text-xl font-bold text-white shadow-lg hover:scale-105 transition-transform animate-scale-up`}
                        style={{
                            backgroundColor: color.hex,
                            animationDelay: `${index * 0.15}s`
                        }}
                    >
                        {color.name}
                    </button>
                ))}
            </div>
        </div>
    );
};
