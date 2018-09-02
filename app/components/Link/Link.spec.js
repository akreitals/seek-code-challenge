import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Link from './Link';

describe('Link', () => {
    test('should render a <Link /> component', () => {
        const json = renderer.create(<Link>Hello</Link>).toJSON();
        expect(json).toMatchSnapshot();
    });

    test('should render a <Link /> component with an underline prop', () => {
        const json = renderer.create(<Link underline>Underline</Link>).toJSON();
        expect(json).toMatchSnapshot();
        expect(json).toHaveStyleRule('text-decoration', 'underline');
    });
});
