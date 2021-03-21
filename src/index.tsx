import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ChartComponent } from './components/chart';

const App: React.FC = () => (
    <React.Fragment>
        <h1>Daggout analytics</h1>
        <ChartComponent
            data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'My First dataset',
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: [0, 10, 5, 2, 20, 30, 45]
                    }
                ]
            }}
            type="line"
        />
        <ChartComponent
            data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'My First dataset',
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
            type="pie"
        />
    </React.Fragment>
);

const appPlaceholder = document.getElementById('app-placeholder');
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    appPlaceholder
);
