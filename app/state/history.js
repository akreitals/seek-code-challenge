// @flow
import createBrowserHistory from 'history/createBrowserHistory';

let history;

if (typeof document !== 'undefined') {
    history = createBrowserHistory();
}

export default history;
