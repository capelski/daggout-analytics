import Chart from 'chart.js';
import React, { useEffect, useRef } from 'react';

type ChartComponentProps = Chart.ChartConfiguration;

export const ChartComponent: React.FC<ChartComponentProps> = (props) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const context = canvasRef.current?.getContext('2d');
        if (context) {
            new Chart(context, {
                type: props.type,
                data: props.data
            });
        }
    }, []);

    return <canvas ref={canvasRef}></canvas>;
};
