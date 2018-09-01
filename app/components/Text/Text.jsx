import styled from 'styled-components';
import PropTypes from 'prop-types';
import { fontSize, fontWeight, space, color, textAlign } from 'styled-system';
import theme from '../theme';

export const bold = props => (props.bold ? { fontWeight: theme.bold } : null);
export const regular = props =>
    props.regular ? { fontWeight: theme.regular } : null;
export const uppercase = props =>
    props.uppercase ? { textTransform: 'uppercase' } : null;

const Text = styled('p')(
    fontSize,
    fontWeight,
    space,
    color,
    textAlign,
    bold,
    regular,
    uppercase
);

Text.displayName = 'Text';

Text.propTypes = {
    bold: PropTypes.bool,
    uppercase: PropTypes.bool,
    ...fontSize.propTypes,
    ...fontWeight.propTypes,
    ...textAlign.propTypes,
    ...space.propTypes,
    ...color.propTypes
};

Text.defaultProps = {
    theme,
    m: 0
};

Text.span = Text.withComponent('span');
Text.p = Text.withComponent('p');

export default Text;
