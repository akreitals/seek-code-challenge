import React from 'react';
import renderer from 'react-test-renderer';
import Label from './Label';

describe('Label', () => {
    test('should render a <Label /> component', () => {
        const json = renderer.create(<Label />).toJSON();
        expect(json).toMatchSnapshot();
    });
});
