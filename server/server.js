/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import morgan from 'morgan';
import webpackConfig from '../webpack.config';
/* eslint-enable import/no-extraneous-dependencies */

const isDevelopment = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8080;

const app = express();

if (isDevelopment) {
    const compiler = webpack(webpackConfig);

    const devMiddleware = webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });
    const hotMiddleware = webpackHotMiddleware(compiler);

    app.use(devMiddleware);
    app.use(hotMiddleware);
}

app.use(morgan('combined'));
app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, '..', 'dist/index.html'));
});

app.listen(port, error => {
    if (!error) {
        console.log('***********************************************');
        console.log(`* Server is running http://localhost:${port}`);
        console.log(`* Environment ${process.env.NODE_ENV}`);
        console.log('***********************************************');
    }
});
