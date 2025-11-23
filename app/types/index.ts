export type Color = {
    id: string;
    name: string;
    hex: string;
};

export type Question = {
    id: string;
    sideId: number;
    colorId: string;
    text: string;
    options: string[];
    correctAnswer: string;
};

export type TriviaData = {
    sides: number[];
    colors: Color[];
    questions: Question[];
};

export type GameStep = 'DIE_SELECTION' | 'COLOR_SELECTION' | 'QUESTION' | 'RESULT';
