import React from 'react';
import { Question, Color } from '../types';
import { DieFace } from './DieFace';

interface QuestionCardProps {
    question: Question;
    onAnswer: (answer: string) => void;
    selectedSide: number;
    selectedColor: Color;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer, selectedSide, selectedColor }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto p-6 animate-fade-in">
            <div className="mb-8" style={{ color: selectedColor.hex }}>
                <DieFace value={selectedSide} size={100} />
            </div>
            <div className="card bg-white/90 w-full backdrop-blur-sm">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl mb-8 text-black">{question.text}</h2>
                    <div className="grid grid-cols-1 gap-4 w-full">
                        {question.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => onAnswer(option)}
                                className="btn btn-outline btn-lg text-xl h-auto py-4 text-black border-2 border-black rounded-2xl hover:bg-black hover:text-white hover:border-black transition-colors"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
