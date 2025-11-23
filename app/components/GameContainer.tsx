import React from 'react';
import { useGame } from '../hooks/useGame';
import { DieSelector } from './DieSelector';
import { ColorSelector } from './ColorSelector';
import { QuestionCard } from './QuestionCard';
import { ResultView } from './ResultView';

export const GameContainer: React.FC = () => {
    const {
        step,
        data,
        selectedSide,
        selectedColor,
        currentQuestion,
        isCorrect,
        selectSide,
        selectColor,
        answerQuestion,
        resetGame,
    } = useGame();

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center p-4" data-theme="light">
            <div
                className="w-full max-w-5xl h-[80vh] bg-base-100 rounded-3xl shadow-2xl overflow-hidden p-8 relative"
            >
                {/* Header / Navigation could go here */}

                {step === 'DIE_SELECTION' && (
                    <DieSelector sides={data.sides} onSelect={selectSide} />
                )}

                {step === 'COLOR_SELECTION' && selectedSide && (
                    <ColorSelector
                        colors={data.colors}
                        onSelect={selectColor}
                        selectedSide={selectedSide}
                    />
                )}

                {step === 'QUESTION' && currentQuestion && selectedSide && selectedColor && (
                    <QuestionCard
                        question={currentQuestion}
                        onAnswer={answerQuestion}
                        selectedSide={selectedSide}
                        selectedColor={data.colors.find(c => c.id === selectedColor)!}
                    />
                )}

                {step === 'RESULT' && isCorrect !== null && currentQuestion && (
                    <ResultView
                        isCorrect={isCorrect}
                        correctAnswer={currentQuestion.correctAnswer}
                        onReset={resetGame}
                    />
                )}

                {step !== 'DIE_SELECTION' && (
                    <div className="absolute top-4 left-4">
                        <button onClick={resetGame} className="btn btn-ghost text-base-content hover:bg-base-200">
                            ← Volver a lanzar
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
