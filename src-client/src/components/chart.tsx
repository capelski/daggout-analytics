import Chart from 'chart.js';
import React, { useEffect, useRef, useState } from 'react';

type ChartComponentProps = Chart.ChartConfiguration;

export const ChartComponent: React.FC<ChartComponentProps> = (props) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [chart, setChart] = useState<Chart>();

    useEffect(() => {
        if (chart) {
            chart.destroy();
        }

        const context = canvasRef.current?.getContext('2d');
        if (context) {
            setChart(
                new Chart(context, {
                    data: props.data,
                    options: props.options,
                    type: props.type
                })
            );
        }
    }, [props.data]);

    return <canvas ref={canvasRef} />;
};
