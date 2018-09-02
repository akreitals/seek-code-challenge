import React from 'react';
import renderer from 'react-test-renderer';
import Loader from './Loader';

describe('Loader', () => {
    test('should render a <Loader /> component', () => {
        const json = renderer.create(<Loader />).toJSON();
        expect(json).toMatchSnapshot();
    });
});
