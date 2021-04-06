import React from 'react';
import { ChartComponent } from './chart';

export const YourStore: React.FC = () => (
    <div className="screen-divider">
        <div>
            <ChartComponent
                data={{
                    labels: [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December'
                    ],
                    datasets: [
                        {
                            backgroundColor: 'transparent',
                            borderColor: 'lightcoral',
                            data: [
                                50000,
                                44000,
                                16000,
                                27000,
                                32000,
                                37000,
                                45000,
                                39000,
                                36000,
                                30000,
                                40000,
                                35000
                            ]
                        }
                    ]
                }}
                options={{
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Sales in last 12 months (in €)'
                    }
                }}
                type="line"
            />
        </div>
        <div>
            <ChartComponent
                data={{
                    labels: [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December'
                    ],
                    datasets: [
                        {
                            backgroundColor: 'transparent',
                            borderColor: 'lightblue',
                            data: [
                                2016,
                                1980,
                                754,
                                1289,
                                1652,
                                1801,
                                1997,
                                1703,
                                1321,
                                1206,
                                1896,
                                1314
                            ]
                        }
                    ]
                }}
                options={{
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Sales in last 12 months (in #purchases)'
                    }
                }}
                type="line"
            />
        </div>
        <div>
            <ChartComponent
                data={{
                    labels: [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December'
                    ],
                    datasets: [
                        {
                            label: 'Shoes',
                            backgroundColor: 'lightblue',
                            data: [
                                30000,
                                20000,
                                9000,
                                13000,
                                17000,
                                18000,
                                21000,
                                20000,
                                16000,
                                16000,
                                21500,
                                17500
                            ]
                        },
                        {
                            label: 'Jackets',
                            backgroundColor: 'orange',
                            data: [
                                20000,
                                24000,
                                7000,
                                14000,
                                15000,
                                19000,
                                24000,
                                19000,
                                20000,
                                14000,
                                18500,
                                17500
                            ]
                        }
                    ]
                }}
                options={{
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Spending by categories (in €)'
                    }
                }}
                type="bar"
            />
        </div>
    </div>
);
