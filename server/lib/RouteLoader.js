/* eslint-disable */
export default class RouteLoader {
    constructor(container, server, logger) {
        this._container = container;
        this._server = server;
        this._logger = logger;
    }

    load(routes) {
        for (const module of routes.modules) {
            this._loadModules(module);
        }
    }

    _loadModules(module) {
        for (const moduleName in module) {
            const { routes } = module[moduleName];
            const middleware = module[moduleName].middlewareStack;
            this._loadRoutes(routes, middleware);
        }
    }

    _loadRoutes(routes, middleware) {
        for (const routeName in routes) {
            this._loadControllers(routeName, routes, middleware);
        }
    }

    _loadControllers(routeName, routes, middlewareCollection) {
        for (const method of routes[routeName].method) {
            this._logger.info(
                `Route: ${routes[routeName].route} ${method.toUpperCase()}`
            );
            let middlewareInstanceCollection = [];

            if (middlewareCollection) {
                for (const middleware in middlewareCollection) {
                    if (middlewareCollection[middleware].routes) {
                        middlewareInstanceCollection = this._setupMiddleware(
                            middlewareCollection,
                            middleware,
                            routeName
                        );
                    } else {
                        this._logger.info(
                            `Route Middleware: ${middleware} middleware registered`
                        );

                        const middlewareInstance = this._container.get(
                            middlewareCollection[middleware].service
                        );
                        middlewareInstanceCollection.push(
                            middlewareInstance.invoke.bind(middlewareInstance)
                        );
                    }
                }
            }

            this._server[method](
                routes[routeName].route,
                middlewareInstanceCollection,
                (req, res) => {
                    try {
                        const controller = this._container.get(
                            routes[routeName].controller
                        );
                        controller[routes[routeName].action](req, res);
                    } catch (error) {
                        this._logger.error(error);
                        res.status(500).json({});
                    }
                }
            );
        }
    }

    _setupMiddleware(middlewareCollection, middleware, routeName) {
        const middlewareInstanceCollection = [];
        const middlewareInstance = this._container.get(
            middlewareCollection[middleware].service
        );

        for (const middlewareRouteName of middlewareCollection[middleware]
            .routes) {
            if (routeName === middlewareRouteName) {
                this._logger.info(
                    `Route Middleware: ${middleware} middleware registered`
                );
                middlewareInstanceCollection.push(
                    middlewareInstance.invoke.bind(middlewareInstance)
                );
            }
        }

        return middlewareInstanceCollection;
    }
}
