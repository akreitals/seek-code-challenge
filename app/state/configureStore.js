// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';

export function configureStore(initialState = {}) {
    let middlewareConfig;

    if (process.env.NODE_ENV === 'production') {
        middlewareConfig = applyMiddleware(thunk);
    } else {
        middlewareConfig = composeWithDevTools(
            applyMiddleware(thunk, createLogger())
        );
    }

    const store = createStore(rootReducer, initialState, middlewareConfig);

    // Enable Webpack hot module replacement for reducers
    if (module.hot) {
        module.hot.accept('./rootReducer', () => {
            const nextReducer = require('./rootReducer').default; // eslint-disable-line global-require
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
