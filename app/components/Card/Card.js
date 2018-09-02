import styled from 'styled-components';
import PropTypes from 'prop-types';
import { borderRadius } from 'styled-system';
import Box from '../Box/Box';
import theme, { colors, boxShadows } from '../theme';

const boxShadow = props => {
    const boxShadowSizes = {
        sm: boxShadows[0],
        md: boxShadows[1],
        lg: boxShadows[2],
        xl: boxShadows[3]
    };

    return {
        boxShadow: boxShadowSizes[props.boxShadowSize]
    };
};

const boxBorder = props => ({
    border:
        props.borderWidth > 0
            ? `${props.borderWidth}px solid ${
                  props.theme.colors[props.borderColor]
              }`
            : null
});

const Card = styled(Box)`
    background-color: ${colors.white};
    ${boxShadow}
    ${boxBorder}
    ${borderRadius}
`;

Card.displayName = 'Card';

Card.propTypes = {
    boxShadowSize: PropTypes.oneOf([null, 'sm', 'md', 'lg', 'xl']),
    borderColor: PropTypes.string,
    ...borderRadius.PropTypes,
    borderWidth: PropTypes.oneOf([0, 1, 2])
};

Card.defaultProps = {
    theme,
    borderColor: null,
    borderRadius: 0,
    borderWidth: 1
};

export default Card;
