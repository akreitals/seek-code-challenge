import React from 'react';
import ReactDomServer from 'react-dom/server';
import ThemeProvider from '../app/components/ThemeProvider/ThemeProvider';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

import App from '../app/App';

const isProduction = process.env.NODE_ENV === 'production' || false;

const render = (html, styles) => {
    const assetsManifest =
        process.env.webpackAssets && JSON.parse(process.env.webpackAssets);

    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <title>Seek Coding Challenge</title>
            ${styles}
        </head>
        <body>
            <div id="root">${html}</div>
            <script src='${
                isProduction ? assetsManifest['/vendor.js'] : 'js/vendor.js'
            }'></script>
            <script src='${
                isProduction ? assetsManifest['/app.js'] : 'js/app.js'
            }'></script>
        </body>
    </html>
    `;
};

const serverSideRender = (req, res) => {
    const context = {};
    const sheet = new ServerStyleSheet();

    const appWithRouter = <ThemeProvider><App /></ThemeProvider>;

    if (context.url) {
        return res.redirect(context.url);
    }

    const html = ReactDomServer.renderToString(
        sheet.collectStyles(appWithRouter)
    );

    const styles = sheet.getStyleTags();

    return res.status(200).send(render(html, styles));
};

export default serverSideRender;
