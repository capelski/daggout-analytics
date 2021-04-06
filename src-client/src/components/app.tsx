import React, { useState } from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import { clearAuthToken } from '../storage';
import { Auth } from './auth';
import { Market } from './market';
import { YourStore } from './your-store';

export const App: React.FC = () => {
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
                            <Market />
                        </Route>
                        <Route path="/your-store">
                            <YourStore />
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
