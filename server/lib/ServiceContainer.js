export default class ServiceLoader {
    constructor(container, services, logger) {
        this._services = services;
        this._container = container;
        this._logger = logger;
        this._startPath = null;
    }

    setRootPath(startPath) {
        this._startPath = startPath;
    }

    registerServices() {
        if (this._services) {
            this._logger.info(JSON.stringify(this._services));
            const services = this._services;
            Object.entries(services).forEach(([key, module]) => {
                if (key) {
                    if (module.class) {
                        this._registerClassService(key, module);
                    } else if (module.factory) {
                        this._registerFactory(key, module);
                    } else {
                        this._registerProvider(key, module);
                    }
                }
            });
        } else {
            this._logger.debug('No services registered');
        }
    }

    _registerProvider(name, module) {
        let modulePath = null;
        let deps = null;

        if (module.provider) {
            modulePath = require(module.provider); // eslint-disable-line global-require, import/no-dynamic-require
        } else {
            modulePath = module.parameter;
        }

        if (module.arguments) {
            deps = module.arguments;
        }

        if (deps === null || deps.length === 0) {
            this._logger.debug(`Registering provider: [${name}]`);
            this._container.register(name, [], modulePath);
        } else {
            this._container.register(name, deps, args => modulePath(...args));
        }
    }

    _registerFactory(name, module) {
        const modulePath = this._loadFilePath(module.factory);
        this._logger.debug(`Registering factory : [${name}]`);

        this._container.register(
            name,
            [],
            new function Factory() {
            this.createInstance = (...args) => new modulePath.default(...args); // eslint-disable-line
            }()
        );
    }

    _registerClassService(name, module) {
        const modulePath = this._loadFilePath(module.class);
        let deps = [];

        if (module.arguments) {
            deps = module.arguments;
        }

        if (deps.length === 0) {
            this._logger.debug(`Registering service: [${name}]`);
            this._container.register(name, [], () => {
                this._logger.debug(
                    `Creating instance: ${modulePath.default.name}`
                );
                return new modulePath.default(); // eslint-disable-line
            });
        } else {
            this._logger.debug(
                `Registering service with dependencies: [${name}]`
            );
            this._container.register(name, deps, args => {
                this._logger.debug(
                    `Creating instance: ${modulePath.default.name}`
                );
                return new modulePath.default(...args); // eslint-disable-line
            });
        }
    }

    _loadFilePath(moduleFileName = null) {
        if (moduleFileName) {
            if (this._startPath !== null) {
                return require(// eslint-disable-line import/no-dynamic-require, global-require
                `${this._startPath}/${moduleFileName}`);
            }

            return require(moduleFileName); // eslint-disable-line global-require, import/no-dynamic-require
        }

        throw new Error(`File not found ${moduleFileName}`);
    }
}
