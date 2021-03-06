/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import morgan from 'morgan';
import compression from 'compression';
import cookiesMiddleware from 'universal-cookie-express';
import Logger from './lib/logger/Logger';
import webpackConfig from '../webpack.config';
import renderer from './renderer';
import Container from './lib/Container';
import ServiceContainer from './lib/ServiceContainer';
import RouteLoader from './lib/RouteLoader';
import services from './config/services';
import routes from './config/routes';
/* eslint-enable import/no-extraneous-dependencies */

const isDevelopment = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8080;

const logger = new Logger();
const app = express();

// Set up service container
const container = new Container(logger);
const serviceContainer = new ServiceContainer(container, services, logger);
serviceContainer.setRootPath(__dirname);
serviceContainer.registerServices();

// Set up routes
const router = express.Router();
const routeLoader = new RouteLoader(container, router, logger);
routeLoader.load(routes);

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

app.use(compression());
app.use(morgan('combined'));
app.use(cookiesMiddleware());

app.use(express.static(path.resolve(__dirname, '..', 'dist')));

// routes
app.use(`/api`, router);
app.get('*', renderer);

app.listen(port, error => {
    if (!error) {
        logger.info('***********************************************');
        logger.info(`* Server is running http://localhost:${port}`);
        logger.info(`* Environment ${process.env.NODE_ENV}`);
        logger.info('***********************************************');
    }
});
