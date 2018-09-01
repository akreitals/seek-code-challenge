import React, { Fragment } from 'react';
import { ThemeProvider as Root, injectGlobal } from 'styled-components';
import PropTypes from 'prop-types';
import themeConfig, { colors } from '../theme';

injectGlobal([
    `
    html {
        box-sizing: border-box;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -webkit-appearance: none;
        -moz-appearance: none;
    }
    
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
    
    html,
    body {
        min-height: 100%;
        min-width: 100%;
    }
    
    body {
        padding: 0;
        margin: 0;
        color: ${colors.black};
        font-size: ${themeConfig.fontSizes[2]}px;
        font-family: ${themeConfig.font};
        line-height: 1.5;
        position: relative;
        height: 100%;
        max-height: 100%;
        width: 100%;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
    }
    
    a {
        color: ${colors.blueLighter};
        text-decoration: none;
    }
    
    textarea {
        resize: none;
    }
`
]);

/* eslint-disable react/no-children-prop */
const ThemeProvider = ({ theme, ...props }) => (
    <Root
        theme={themeConfig}
        {...props}
        children={<Fragment>{props.children}</Fragment>}
    />
);
/* eslint-enable */

ThemeProvider.propTypes = {
    theme: PropTypes.object
};

ThemeProvider.defaultProps = {
    themeConfig
};

export default ThemeProvider;
