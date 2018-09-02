import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Input from './Input';
import theme from '../theme';

describe('Input', () => {
    test('should render a <Input /> component', () => {
        const json = renderer.create(<Input id="renders" />).toJSON();
        expect(json).toMatchSnapshot();
    });

    test('should render with custom spacing', () => {
        const json = renderer.create(<Input p={4} m={4} id="space" />).toJSON();
        expect(json).toMatchSnapshot();
        expect(json).toHaveStyleRule(`padding ${theme.space[4]}px`);
        expect(json).toHaveStyleRule(`margin ${theme.space[4]}px`);
    });
});
