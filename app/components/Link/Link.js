import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../Text/Text';
import theme from '../theme';

const Link = styled(Text.withComponent('a'))`
    text-decoration: ${props => (props.underline ? 'underline' : 'none')};
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

Link.propTypes = {
    href: PropTypes.string,
    underline: PropTypes.bool
};

Link.defaultProps = {
    theme,
    color: 'info'
};

export default Link;
