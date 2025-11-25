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
    // Extract emoji from question text - improved regex to capture all emojis
    const emojiRegex = /^([\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F000}-\u{1F02F}\u{1F0A0}-\u{1F0FF}\u{1F100}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2300}-\u{23FF}\u{2B50}\u{2934}-\u{2935}\u{3030}\u{303D}\u{3297}\u{3299}])\s*/u;
    const emojiMatch = question.text.match(emojiRegex);
    const emoji = emojiMatch ? emojiMatch[1] : '';
    const questionText = question.text.replace(emojiRegex, '');

    const optionLabels = ['a)', 'b)', 'c)'];

    return (
        <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto p-6 animate-fade-in">
            <div className="flex items-center gap-6 mb-8">
                <div style={{ color: selectedColor.hex }}>
                    <DieFace value={selectedSide} size={100} />
                </div>
                {emoji && (
                    <div className="text-8xl" style={{ fontSize: '100px', lineHeight: '100px' }}>
                        {emoji}
                    </div>
                )}
            </div>
            <div className="card bg-white/90 w-full backdrop-blur-sm">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl mb-8 text-black">{questionText}</h2>
                    <div className="grid grid-cols-1 gap-4 w-full">
                        {question.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => onAnswer(option)}
                                className="btn btn-outline btn-lg text-xl h-auto py-4 text-black border-2 border-black rounded-2xl hover:bg-black hover:text-white hover:border-black transition-colors text-left"
                            >
                                <span className="font-bold mr-2">{optionLabels[index]}</span> {option}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
