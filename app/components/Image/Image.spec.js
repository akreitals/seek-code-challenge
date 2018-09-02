import React from 'react';
import renderer from 'react-test-renderer';
import Image from './Image';

const imageSrc = 'https://hackclub.com/lah_1.jpg';

describe('Image', () => {
    test('should render a <Image /> component', () => {
        const json = renderer
            .create(<Image src={imageSrc} alt="Alt Text" />)
            .toJSON();
        expect(json).toMatchSnapshot();
    });
});
