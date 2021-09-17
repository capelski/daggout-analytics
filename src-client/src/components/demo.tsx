import React from 'react';
import { ChartComponent } from './chart';
import { CustomTable } from './custom-table';

interface DemoProps {
    authToken: string;
}

interface MockMarketRow {
    brand: string;
    purchases: number;
    total: number;
}

const mockMarketData: MockMarketRow[] = [
    {
        brand: 'H&M',
        purchases: 23,
        total: 1045.72
    },
    {
        brand: 'Mango',
        purchases: 16,
        total: 854.13
    },
    {
        brand: 'Zara',
        purchases: 45,
        total: 2316.9
    }
];

export const Demo: React.FC<DemoProps> = (props) => {
    // const [errorMessage, setErrorMessage] = useState<string>();
    // const [marketStats, setMarketStats] = useState<any[]>([]);

    // useEffect(() => {
    //     fetch('/api/market-share', {
    //         headers: {
    //             Authorization: props.authToken
    //         },
    //         method: 'GET'
    //     })
    //         .then((response) => {
    //             if (response.ok) {
    //                 response.json().then(setMarketStats);
    //             } else {
    //                 response.json().then((error) => setErrorMessage(error.message));
    //             }
    //         })
    //         .catch((error) => {
    //             setErrorMessage(error.message);
    //         });
    // }, []);

    const marketData = mockMarketData.reduce<{
        colors: string[];
        labels: string[];
        purchases: number[];
        totals: number[];
    }>(
        (reduced, next, index) => ({
            colors: reduced.colors.concat([
                `rgba(193, 159, 130, ${
                    Math.round(mockMarketData.length - index) / mockMarketData.length
                })`
            ]),
            labels: reduced.labels.concat([next.brand]),
            purchases: reduced.purchases.concat([next.purchases]),
            totals: reduced.totals.concat([next.total])
        }),
        { colors: [], labels: [], purchases: [], totals: [] }
    );

    return (
        <div style={{ fontFamily: 'Raleway', textAlign: 'center', textTransform: 'uppercase' }}>
            <h1
                style={{ borderBottom: '1px solid lightgrey', color: '#C19F82', paddingBottom: 16 }}
            >
                Spain, April 21
            </h1>
            <div style={{ display: 'flex' }}>
                <div style={{ paddingLeft: 32, paddingRight: 32, width: '50%' }}>
                    <h3 style={{ borderBottom: '1px solid lightgrey', paddingBottom: 16 }}>
                        Total market - Current month
                    </h3>
                    <div style={{ display: 'flex' }}>
                        <h2 style={{ flexGrow: 1 }}>210.234€</h2>
                        <h2 style={{ color: '#95cd84', flexGrow: 1 }}>+30%</h2>
                        <h2 style={{ flexGrow: 1 }}>10.324U</h2>
                        <h2 style={{ color: '#95cd84', flexGrow: 1 }}>+26%</h2>
                    </div>
                </div>
                <div style={{ display: 'flex', paddingLeft: 32, paddingRight: 32, width: '50%' }}>
                    <div style={{ flexGrow: 1 }}>
                        <h3 style={{ borderBottom: '1px solid lightgrey', paddingBottom: 16 }}>
                            Average purchases/month
                        </h3>
                        <div style={{ display: 'flex' }}>
                            <h2 style={{ flexGrow: 1 }}>0.6</h2>
                            <h2 style={{ color: '#95cd84', flexGrow: 1 }}>+3.06%</h2>
                        </div>
                    </div>
                    <div style={{ flexGrow: 1 }}>
                        <h3 style={{ borderBottom: '1px solid lightgrey', paddingBottom: 16 }}>
                            Average price
                        </h3>
                        <div style={{ display: 'flex' }}>
                            <h2 style={{ flexGrow: 1 }}>92.12€</h2>
                            <h2 style={{ color: '#e5554a', flexGrow: 1 }}>-1.02%</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '50%' }}>
                    <h4>Main competitors market sales</h4>
                    <ChartComponent
                        data={{
                            labels: ['W14', 'W15', 'W16', 'W17'],
                            datasets: [
                                {
                                    label: 'Shoes',
                                    backgroundColor: '#C19F82',
                                    data: [30000, 20000, 9000, 13000]
                                },
                                {
                                    label: 'Jackets',
                                    backgroundColor: '#CFB59E',
                                    data: [20000, 24000, 7000, 14000]
                                },
                                {
                                    label: 'Pants',
                                    backgroundColor: '#E0CFC0',
                                    data: [18000, 13000, 17000, 8000]
                                },
                                {
                                    label: 'Shirts',
                                    backgroundColor: '#3E2D23',
                                    data: [15000, 28000, 15000, 21000]
                                }
                            ]
                        }}
                        options={{
                            legend: {
                                display: false
                            }
                        }}
                        type="bar"
                    />
                </div>
                <div style={{ display: 'flex', flexGrow: 1 }}>
                    <div style={{ width: '50%' }}>
                        <h4>Buyers share</h4>
                        {/* {errorMessage ? (
                            <p style={{ color: 'red' }}>{errorMessage}</p>
                        ) : ( */}
                        <ChartComponent
                            data={{
                                labels: marketData.labels,
                                datasets: [
                                    {
                                        backgroundColor: marketData.colors,
                                        data: marketData.purchases
                                    }
                                ]
                            }}
                            options={{
                                legend: {
                                    position: 'bottom'
                                }
                            }}
                            type="pie"
                        />
                        {/* )} */}
                    </div>
                    <div style={{ flexGrow: 1 }}>
                        <h4>Online/offline share</h4>
                        <ChartComponent
                            data={{
                                labels: ['Offline', 'Online'],
                                datasets: [
                                    {
                                        backgroundColor: ['#C19F82', '#E0CFC0'],
                                        data: [70, 30]
                                    }
                                ]
                            }}
                            options={{
                                legend: {
                                    position: 'bottom'
                                }
                            }}
                            type="pie"
                        />
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '50%' }}>
                    <h4>Market trend forecast</h4>
                    <ChartComponent
                        data={{
                            labels: [
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
                                    borderColor: '#E8B85D',
                                    data: [32000, 37000, 45000, 39000, 36000, 30000, 40000, 35000]
                                }
                            ]
                        }}
                        options={{
                            legend: {
                                display: false
                            }
                        }}
                        type="line"
                    />
                </div>
                <div style={{ color: '#3E2D23', width: '50%' }}>
                    <h4>Most sold SKUs</h4>
                    <CustomTable
                        columns={[
                            {
                                accessor: 'reference'
                            },
                            {
                                accessor: 'category'
                            },
                            {
                                accessor: 'color'
                            },
                            {
                                accessor: 'brand'
                            },
                            {
                                Cell: () => (
                                    <button
                                        onClick={() => {}}
                                        style={{
                                            backgroundColor: '#3E2D23',
                                            border: 'none',
                                            color: 'white',
                                            padding: 8,
                                            outline: 'none'
                                        }}
                                        type="button"
                                    >
                                        Details
                                    </button>
                                ),
                                id: 'options'
                            }
                        ]}
                        data={[
                            {
                                brand: 'ZARA',
                                category: 'Jacket',
                                color: 'Brown',
                                reference: '#789HB'
                            },
                            {
                                brand: 'MANGO',
                                category: 'Jacket',
                                color: 'Black',
                                reference: '#LLKI8D'
                            },
                            {
                                brand: 'H&M',
                                category: 'Jacket',
                                color: 'Black',
                                reference: '#5554JDD'
                            }
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};
