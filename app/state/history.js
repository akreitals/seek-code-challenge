// @flow
import createBrowserHistory from 'history/createBrowserHistory';

let history; // eslint-disable-line import/no-mutable-exports

// We should only create the history object when we are in the browser context
if (typeof document !== 'undefined') {
    history = createBrowserHistory();
}

export default history;
