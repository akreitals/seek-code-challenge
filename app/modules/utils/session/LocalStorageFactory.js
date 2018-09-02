// @flow
import LocalStorage from './LocalStorage';
import type { SessionInterface } from './SessionInterface';

const localStorage: SessionInterface = new LocalStorage();

export { localStorage };
