import React from 'react';
import { ChartComponent } from './chart';

export const Market: React.FC = () => (
    <div className="screen-divider">
        <div>
            <ChartComponent
                data={{
                    labels: [
                        'Bershka',
                        'H&M',
                        "Levi's",
                        'Pull&Bear',
                        'Springfield',
                        'Mango',
                        'Zara'
                    ],
                    datasets: [
                        {
                            backgroundColor: [
                                'lightblue',
                                'lightgreen',
                                'lightcoral',
                                'lightgrey',
                                'yellow',
                                'orange',
                                'black'
                            ],
                            data: [0, 10, 5, 2, 20, 30, 45]
                        }
                    ]
                }}
                options={{
                    legend: {
                        position: 'bottom'
                    },
                    title: {
                        display: true,
                        text: 'Expenses by brand (in €)'
                    }
                }}
                type="pie"
            />
        </div>
        <div>
            <ChartComponent
                data={{
                    labels: [
                        'Bershka',
                        'H&M',
                        "Levi's",
                        'Pull&Bear',
                        'Springfield',
                        'Mango',
                        'Zara'
                    ],
                    datasets: [
                        {
                            label: '',
                            backgroundColor: [
                                'lightblue',
                                'lightgreen',
                                'lightcoral',
                                'lightgrey',
                                'yellow',
                                'orange',
                                'black'
                            ],
                            data: [0, 8, 14, 13, 15, 25, 38]
                        }
                    ]
                }}
                options={{
                    legend: {
                        position: 'bottom'
                    },
                    title: {
                        display: true,
                        text: 'Expenses by brand (in #purchases)'
                    }
                }}
                type="pie"
            />
        </div>
    </div>
);
