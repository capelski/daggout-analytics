import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import { Auth } from './components/auth';
import { ChartComponent } from './components/chart';
import { clearAuthToken } from './storage';

import './style/main.scss';

const App: React.FC = () => {
    const [authToken, setAuthToken] = useState<string>();

    return (
        <React.Fragment>
            <h1>Daggout analytics</h1>
            {authToken ? (
                <BrowserRouter>
                    <nav>
                        <Link to="/market" className="navbar-link">
                            Market
                        </Link>
                        <Link to="/your-store" className="navbar-link">
                            Your store
                        </Link>
                        <button
                            onClick={() => {
                                clearAuthToken();
                                setAuthToken(undefined);
                            }}
                        >
                            Sign out
                        </button>
                    </nav>

                    <Switch>
                        <Route path="/market">
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
                        </Route>
                        <Route path="/your-store">
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
                        </Route>
                        <Redirect exact from="/" to="/market" />
                    </Switch>
                </BrowserRouter>
            ) : (
                <Auth setAuthToken={setAuthToken} />
            )}
        </React.Fragment>
    );
};

const appPlaceholder = document.getElementById('app-placeholder');
ReactDOM.render(<App />, appPlaceholder);
