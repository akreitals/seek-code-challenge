import React from 'react';
import renderer from 'react-test-renderer';
import Currency from './Currency';

describe('Currency', () => {
    test('should render a <Currency /> component', () => {
        const json = renderer.create(<Currency value={909.91} />).toJSON();
        expect(json).toMatchSnapshot();
    });

    test('should default to the AU locale', () => {
        const json = renderer.create(<Currency value={909.91} />).toJSON();
        expect(json).toMatchSnapshot();
        expect(json.children[0]).toBe('A$909.91');
    });

    test('should allow a different current to be set', () => {
        const json = renderer
            .create(<Currency currency="EUR" value={909.91} />)
            .toJSON();
        expect(json).toMatchSnapshot();
        expect(json.children[0]).toBe('€909.91');
    });

    test('should allow a different locale to be set', () => {
        const json = renderer
            .create(<Currency locale="de-DE" currency="EUR" value={909.91} />)
            .toJSON();
        expect(json).toMatchSnapshot();
        expect(json.children[0]).toBe('€909.91');
    });
});
