import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('Currency', () => {
    test('should render a <Header /> component', () => {
        const json = renderer.create(<Header />).toJSON();
        expect(json).toMatchSnapshot();
    });
});
