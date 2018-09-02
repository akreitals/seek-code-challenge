import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import RoutesContainer from './containers/Routes/RoutesContainer';
import { ThemeProvider } from './components';
import { configureStore } from './state/configureStore';
import history from './state/history';
import { cookies } from './modules/utils/session/SessionCookiesFactory';

/* eslint-disable no-underscore-dangle */
const store = configureStore(window.__INITIAL_STATE__);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider>
                    <CookiesProvider cookies={cookies}>
                        <Router history={history}>
                            <RoutesContainer />
                        </Router>
                    </CookiesProvider>
                </ThemeProvider>
            </Provider>
        );
    }
}
