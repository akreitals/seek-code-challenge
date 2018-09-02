import styled from 'styled-components';
import {
    alignItems,
    justifyContent,
    flexDirection,
    flexWrap
} from 'styled-system';
import Box from '../Box/Box';
import theme from '../theme';

const wrap = props => (props.wrap ? { flexWrap: 'wrap' } : null);

const Flex = styled(Box)`
    display: flex;
    
    ${alignItems} ${justifyContent} ${flexDirection} ${wrap};
`;

Flex.displayName = 'Flex';

Flex.propTypes = {
    ...alignItems.propTypes,
    ...justifyContent.propTypes,
    ...flexDirection.propTypes,
    ...flexWrap.propTypes
};

Flex.defaultProps = {
    theme
};

export default Flex;
