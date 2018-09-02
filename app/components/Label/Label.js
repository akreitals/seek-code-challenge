import { width } from 'styled-system';
import Text from '../Text/Text';
import theme from '../theme';

const Label = Text.withComponent('label').extend`
    display: block;
    font-size: ${theme.fontSizes[2]}px;
    line-height: ${theme.fontSizes[5]}px;
    transform: translateY(.41em);
    font-weight: ${theme.bold};
`;

Label.displayName = 'Label';

Label.propTypes = {
    ...width.PropTypes
};

Label.defaultProps = {
    theme,
    f: 2,
    w: 1
};

export default Label;
