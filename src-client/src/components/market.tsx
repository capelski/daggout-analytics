import React, { useEffect, useState } from 'react';
import { ChartComponent } from './chart';

interface MarketProps {
    authToken: string;
}

export const Market: React.FC<MarketProps> = (props) => {
    const [errorMessage, setErrorMessage] = useState<string>();
    const [marketStats, setMarketStats] = useState<any[]>([]);

    useEffect(() => {
        fetch('/api/market-share', {
            headers: {
                Authorization: props.authToken
            },
            method: 'GET'
        })
            .then((response) => {
                if (response.ok) {
                    response.json().then(setMarketStats);
                } else {
                    response.json().then((error) => setErrorMessage(error.message));
                }
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }, []);

    const data = marketStats.reduce(
        (reduced, next, index) => ({
            colors: reduced.colors.concat([`hsl(${(360 * index) / marketStats.length}, 80%, 50%)`]),
            labels: reduced.labels.concat([next.brand]),
            purchases: reduced.purchases.concat([next.purchases]),
            totals: reduced.totals.concat([next.total])
        }),
        { colors: [], labels: [], purchases: [], totals: [] }
    );

    return (
        <div className="screen-divider">
            <p style={{ color: 'red' }}>{errorMessage}</p>
            <div>
                <ChartComponent
                    data={{
                        labels: data.labels,
                        datasets: [
                            {
                                backgroundColor: data.colors,
                                data: data.totals
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
                        labels: data.labels,
                        datasets: [
                            {
                                backgroundColor: data.colors,
                                data: data.purchases
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
};
