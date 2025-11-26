import React from 'react';

interface ResultViewProps {
    isCorrect: boolean;
    correctAnswer: string;
    onReset: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({ isCorrect, correctAnswer, onReset }) => {
    return (
        <div className="flex flex-col items-center gap-8 animate-fade-in">
            <div className={`card w-96 shadow-xl ${isCorrect ? 'bg-success text-success-content' : 'bg-error text-error-content'}`}>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-4xl mb-4">{isCorrect ? '¡Correcto!' : '¡Incorrecto!'}</h2>
                    {!isCorrect && (
                        <p className="text-xl">La respuesta correcta era: <strong>{correctAnswer}</strong></p>
                    )}
                    <div className="card-actions justify-end mt-8">
                        <button onClick={onReset} className="btn btn-lg btn-outline bg-white text-black border-none hover:bg-gray-200">
                            Jugar de nuevo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
