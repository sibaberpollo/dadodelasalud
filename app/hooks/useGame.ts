import { useState } from 'react';
import { GameStep, Question, TriviaData } from '../types';
import triviaData from '../data/trivia.json';

const data = triviaData as TriviaData;

export const useGame = () => {
    const [step, setStep] = useState<GameStep>('DIE_SELECTION');
    const [selectedSide, setSelectedSide] = useState<number | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const selectSide = (side: number) => {
        setSelectedSide(side);
        setStep('COLOR_SELECTION');
    };

    const selectColor = (colorId: string) => {
        setSelectedColor(colorId);
        const question = data.questions.find(
            (q) => q.sideId === selectedSide && q.colorId === colorId
        );

        if (question) {
            setCurrentQuestion(question);
            setStep('QUESTION');
        } else {
            // Handle case where no question exists for this combination
            // For now, maybe reset or show an error? 
            // Let's just log it and maybe go back to start or show a "no question" state
            console.warn(`No question found for side ${selectedSide} and color ${colorId}`);
            alert(`No hay pregunta configurada para el Dado ${selectedSide} y color ${data.colors.find(c => c.id === colorId)?.name}`);
            // Ideally we should have questions for all combinations or handle this gracefully
            // For this MVP, let's assume data is complete or just stay on color selection
        }
    };

    const answerQuestion = (answer: string) => {
        if (!currentQuestion) return;

        const correct = answer === currentQuestion.correctAnswer;
        setIsCorrect(correct);
        setStep('RESULT');
    };

    const resetGame = () => {
        setStep('DIE_SELECTION');
        setSelectedSide(null);
        setSelectedColor(null);
        setCurrentQuestion(null);
        setIsCorrect(null);
    };

    return {
        step,
        selectedSide,
        selectedColor,
        currentQuestion,
        isCorrect,
        data,
        selectSide,
        selectColor,
        answerQuestion,
        resetGame,
    };
};
