import Container from './Container';
import ServiceContainer from './ServiceContainer';

export default class ServiceContainerFactory {
    createInstance(config, services, logger, path = __dirname) {
        const container = new Container(logger);
        container.register('config', [], config);
        const serviceContainer = new ServiceContainer(
            container,
            services,
            logger
        );
        serviceContainer.setRootPath(path);
        serviceContainer.registerServices();
        return container;
    }
}
