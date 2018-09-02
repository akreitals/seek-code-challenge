// @flow
export interface SessionInterface {
    getItem(key: string): any;

    setItem(key: string, value: any): SessionInterface;

    remove(key: string): any;
}
