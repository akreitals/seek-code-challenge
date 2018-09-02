import React from 'react';
import renderer from 'react-test-renderer';
import Card from './Card';
import 'jest-styled-components';
import { colors, boxShadows } from '../theme';

describe('Card', () => {
    test('should render a card with  small box shadow', () => {
        const json = renderer.create(<Card boxShadowSize="sm" />).toJSON();
        expect(json).toMatchSnapshot();
        expect(json).toHaveStyleRule('box-shadow', boxShadows[0]);
        expect(json).toHaveStyleRule('border-radius', '0px');
    });

    test('should render a card with a large shadow', () => {
        const json = renderer.create(<Card boxShadowSize="lg" />).toJSON();
        expect(json).toMatchSnapshot();
        expect(json).toHaveStyleRule('box-shadow', boxShadows[2]);
    });

    test('should render a card with a 1px border', () => {
        const json = renderer.create(<Card borderWidth={1} />).toJSON();
        expect(json).toMatchSnapshot();
        expect(json).toHaveStyleRule('border', `1px solid ${colors.smoke}`);
    });
});
