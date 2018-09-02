import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import RoutesContainer from './containers/Routes/RoutesContainer';
import { ThemeProvider } from './components';
import { configureStore } from './state/configureStore';

const store = configureStore(window.__INITIAL_STATE__);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider>
                    <BrowserRouter>
                        <RoutesContainer />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        );
    }
}
