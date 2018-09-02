import styled from 'styled-components';
import {
    space,
    width,
    color,
    fontSize,
    textAlign,
    borders,
    minWidth
} from 'styled-system';
import theme from '../theme';

const Box = styled('div')(space, width, color, fontSize, textAlign, minWidth);

Box.displayName = 'Box';

Box.header = Box.withComponent('header');
Box.main = Box.withComponent('main');
Box.article = Box.withComponent('article');
Box.section = Box.withComponent('section');
Box.footer = Box.withComponent('footer');

Box.propTypes = {
    ...space.propTypes,
    ...width.propTypes,
    ...color.propTypes,
    ...fontSize.propTypes,
    ...textAlign.propTypes,
    ...borders.propTypes,
    ...minWidth.propTypes
};

Box.defaultProps = {
    theme
};

export default Box;
