import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Container from './Container';

describe('Container', () => {
    test('should render a <Container /> component with default theme max-width', () => {
        const json = renderer.create(<Container />).toJSON();
        expect(json).toMatchSnapshot();
    });

    test('maxWidth prop successfully set maxWidth on container', () => {
        const json = renderer.create(<Container maxWidth={1024} />).toJSON();
        expect(json).toMatchSnapshot();
    });
});
