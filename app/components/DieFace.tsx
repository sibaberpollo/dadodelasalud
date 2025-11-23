import React from 'react';

interface DieFaceProps {
    value: number;
    size?: number;
}

export const DieFace: React.FC<DieFaceProps> = ({ value, size = 128 }) => {
    const dotSize = size / 5;

    const renderDots = () => {
        const dots = [];
        const positions: { [key: number]: number[][] } = {
            1: [[50, 50]],
            2: [[20, 20], [80, 80]],
            3: [[20, 20], [50, 50], [80, 80]],
            4: [[20, 20], [20, 80], [80, 20], [80, 80]],
            5: [[20, 20], [20, 80], [50, 50], [80, 20], [80, 80]],
            6: [[20, 20], [20, 50], [20, 80], [80, 20], [80, 50], [80, 80]]
        };

        const currentPositions = positions[value] || [];

        return currentPositions.map((pos, index) => (
            <circle
                key={index}
                cx={pos[0]}
                cy={pos[1]}
                r={10}
                fill="currentColor"
            />
        ));
    };

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            className="text-current"
        >
            <rect x="0" y="0" width="100" height="100" rx="15" ry="15" fill="none" stroke="currentColor" strokeWidth="5" />
            {renderDots()}
        </svg>
    );
};
