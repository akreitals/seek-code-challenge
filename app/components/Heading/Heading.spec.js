import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import theme, { colors } from '../theme';
import Heading from './Heading';

describe('Heading', () => {
    test('should render a <Heading /> component', () => {
        const json = renderer.create(<Heading />).toJSON();
        expect(json).toMatchSnapshot();
    });

    test('should render with h1-h6 dot-notation', () => {
        const headingH1json = renderer.create(<Heading.h1 />).toJSON();
        const headingH2json = renderer.create(<Heading.h2 />).toJSON();
        const headingH3json = renderer.create(<Heading.h3 />).toJSON();
        const headingH4json = renderer.create(<Heading.h4 />).toJSON();
        const headingH5json = renderer.create(<Heading.h5 />).toJSON();
        const headingH6json = renderer.create(<Heading.h6 />).toJSON();
        expect(headingH1json).toMatchSnapshot();
        expect(headingH2json).toMatchSnapshot();
        expect(headingH3json).toMatchSnapshot();
        expect(headingH4json).toMatchSnapshot();
        expect(headingH5json).toMatchSnapshot();
        expect(headingH6json).toMatchSnapshot();
    });

    test('should render with default theme font size, when fontSize prop not used', () => {
        const json = renderer.create(<Heading />).toJSON();
        expect(json).toMatchSnapshot();
        expect(json).toHaveStyleRule('font-size', `${theme.fontSizes[4]}px`);
    });

    test('should render with <Text> component properties', () => {
        const json = renderer
            .create(<Heading textAlign="center" color="primary" />)
            .toJSON();
        expect(json).toMatchSnapshot();
        expect(json).toHaveStyleRule('text-align', 'center');
        expect(json).toHaveStyleRule('color', colors.primary);
    });
});
