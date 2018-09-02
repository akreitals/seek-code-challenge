import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Flex from './Flex';

describe('Flex', () => {
    test('renders', () => {
        const flex = renderer.create(<Flex />).toJSON();
        expect(flex).toMatchSnapshot();
    });

    test('align prop', () => {
        const flex = renderer.create(<Flex alignItems="center" />).toJSON();
        expect(flex).toMatchSnapshot();
        expect(flex).toHaveStyleRule('align-items', 'center');
    });

    test('justify prop', () => {
        const flex = renderer
            .create(<Flex justifyContent="space-between" />)
            .toJSON();
        expect(flex).toMatchSnapshot();
        expect(flex).toHaveStyleRule('justify-content', 'space-between');
    });

    test('wrap prop', () => {
        const flex = renderer.create(<Flex flexWrap="flex-wrap" />).toJSON();
        expect(flex).toMatchSnapshot();
        expect(flex).toHaveStyleRule('flex-wrap', 'flex-wrap');
    });

    test('direction prop', () => {
        const flex = renderer.create(<Flex flexDirection="column" />).toJSON();
        expect(flex).toMatchSnapshot();
        expect(flex).toHaveStyleRule('flex-direction', 'column');
    });
});
