import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Button from './Button';

describe('Button', () => {
    test('should render a <Button /> component', () => {
        const json = renderer.create(<Button />).toJSON();
        expect(json).toMatchSnapshot();
    });

    test('should render a disabled button when disabled prop is set', () => {
        const json = renderer.create(<Button disabled />).toJSON();
        expect(json).toMatchSnapshot();
        expect(json).toHaveStyleRule('opacity', '0.25');
        expect(json).toHaveStyleRule('cursor', 'not-allowed');
    });
});
