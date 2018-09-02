import React from 'react';
import renderer from 'react-test-renderer';
import Currency from './Currency';

describe('Currency', () => {
    test('should render a <Currency /> component', () => {
        const json = renderer.create(<Currency value={909.91} />).toJSON();
        expect(json).toMatchSnapshot();
    });
});
