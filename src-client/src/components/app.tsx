import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { clearAuthToken } from '../storage';
import { Auth } from './auth';
import { Demo } from './demo';

export const App: React.FC = () => {
    const [authToken, setAuthToken] = useState<string>();

    return authToken ? (
        <BrowserRouter>
            <nav>
                <Link to="/" className="navbar-link">
                    Home
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
                <Route path="/">
                    <Demo authToken={authToken} />
                </Route>
            </Switch>
        </BrowserRouter>
    ) : (
        <Auth setAuthToken={setAuthToken} />
    );
};
