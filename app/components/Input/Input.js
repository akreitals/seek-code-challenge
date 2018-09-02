import styled from 'styled-components';
import { space, width, borders } from 'styled-system';
import PropTypes from 'prop-types';
import theme, { radius, colors } from '../theme';

const Input = styled('input')`
    appearance: none;
    display: block;
    vertical-align: middle;
    max-width: 32rem;
    color: ${colors.charcoal};
    min-height: 36px;
    font-family: inherit;
    line-height: ${3 * theme.space[3]}px};
    font-size: ${theme.fontSizes[3]}px;
    background-color: transparent;
    border-radius: ${radius};
    border: 1px solid ${colors.midGrayLight};
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 12px;
    padding-right: 12px;
    margin: 0;
    width: 100%;
    ::placeholder {
        color: ${colors.midGrayLight};
    }
    ::-ms-clear {
        display: none;
    }
    &:focus {
        outline: none;
        z-index: 1;
        box-shadow: 0 0 0 2px rgba(30, 144, 255, 0.75);

        &::-moz-focus-inner {
            border: 0;
        }
    }
    ${width} ${space} ${borders};
`;

Input.displayName = 'Input';

Input.propTypes = {
    id: PropTypes.string.isRequired,
    color: PropTypes.string,
    ...width.PropTypes,
    ...space.PropTypes,
    ...borders.PropTypes
};

Input.defaultProps = {
    theme,
    w: 1,
    m: 0,
    py: 0,
    px: '15px'
};

export default Input;
