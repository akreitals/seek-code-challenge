import React from 'react';
import renderer from 'react-test-renderer';
import styled from 'styled-components';
import 'jest-styled-components';
import { colors } from '../theme';
import ThemeProvider from './ThemeProvider';

const Content = styled.p`
    color: ${colors.primary};
`;

describe('ThemeProvider', () => {
    test('should render content with theme', () => {
        const json = renderer
            .create(
                <ThemeProvider>
                    <Content>Hello!</Content>
                </ThemeProvider>
            )
            .toJSON();
        expect(json).toMatchSnapshot();
        expect(json).toHaveStyleRule('color', colors.primary);
    });
});
