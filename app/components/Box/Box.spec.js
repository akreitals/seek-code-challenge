import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import theme, { colors } from '../theme';
import Box from './Box';

describe('Box', () => {
    test('should render a <Box /> component', () => {
        const json = renderer.create(<Box />).toJSON();
        expect(json).toMatchSnapshot();
    });

    test('width prop successfully sets width', () => {
        const json = renderer.create(<Box width={1 / 2} />).toJSON();
        expect(json).toMatchSnapshot();
        expect(json).toHaveStyleRule('width', '50%');
    });

    test('m prop successfully sets margin', () => {
        const json = renderer.create(<Box m={1} />).toJSON();
        expect(json).toMatchSnapshot();
        expect(json).toHaveStyleRule('margin', `${theme.space[1]}px`);
    });

    test('p prop successfully sets padding', () => {
        const json = renderer.create(<Box p={1} />).toJSON();
        expect(json).toMatchSnapshot();
        expect(json).toHaveStyleRule('padding', `${theme.space[1]}px`);
    });

    test('color prop successfully sets color', () => {
        const json = renderer.create(<Box color="warning" />).toJSON();
        expect(json).toMatchSnapshot();
        expect(json).toHaveStyleRule('color', colors.warning);
    });

    test('bg prop successfully sets background color', () => {
        const json = renderer.create(<Box bg="accent" />).toJSON();
        expect(json).toMatchSnapshot();
        expect(json).toHaveStyleRule('background-color', colors.accent);
    });

    test('bg prop successfully sets custom background color', () => {
        const json = renderer.create(<Box bg="#ff6d00" />).toJSON();
        expect(json).toMatchSnapshot();
        expect(json).toHaveStyleRule('background-color', '#ff6d00');
    });
});
