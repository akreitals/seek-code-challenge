import PropTypes from 'prop-types';
import Box from '../Box/Box';

const Image = Box.withComponent('img').extend`
    display: block;
    max-width: 100%;
    height: auto;
`;

Image.displayName = 'Image';

Image.propTypes = {
    alt: PropTypes.string.isRequired
};

export default Image;
