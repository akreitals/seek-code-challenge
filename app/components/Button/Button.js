import styled from 'styled-components';
import PropTypes from 'prop-types';
import { space, width } from 'styled-system';
import theme, { colors } from '../theme';

const fullWidth = props => (props.fullWidth ? { width: '100%' } : null);

const Button = styled('button')`
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
    font-family: inherit;
    font-weight: ${theme.regular};
    line-height: ${theme.fontSizes[6]}px;
    cursor: pointer;
    border-radius: ${props => props.theme.radius};
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    border-color: ${props => props.theme.colors.primary};
    border-width: 1px;
    border-style: solid;
    font-size: ${theme.fontSizes[3]}px;
    padding: 0 20px;

    ${props => props.disabled && { opacity: 0.25, cursor: 'not-allowed' }};

    &:focus {
        outline: none;
        z-index: 1;
        box-shadow: 0 0 0 2px rgba(30, 144, 255, 0.75);

        &::-moz-focus-inner {
            border: 0;
        }
    }

    ${fullWidth} ${space} ${width};
`;

Button.displayName = 'Button';

Button.propTypes = {
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    ...width.PropTypes
};

Button.defaultProps = {
    theme
};

Button.secondary = styled(Button)`
    background-color: transparent;
    border-color: ${colors.charcoal};
    color: ${colors.charcoal};
`;

Button.inverse = styled(Button)`
    background-color: transparent;
    border-color: ${colors.white};
    color: ${colors.white};
`;

Button.input = Button.withComponent('input');

export default Button;
