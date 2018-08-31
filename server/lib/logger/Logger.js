// @flow
import { createLogger, format, transports } from 'winston';

import { LoggerInterface } from './LoggerInterface';

const {
    combine,
    timestamp: timestampFormat,
    prettyPrint,
    printf,
    colorize
} = format;

const logLevel = process.env.NODE_LOG_LEVEL || 'info';
const logFormat = printf(info => {
    const { timestamp, level, message, ...args } = info;
    const ts = timestamp.slice(0, 19).replace('T', ' ');
    return `${ts} [${level}]: ${message} ${
        Object.keys(args).length ? JSON.stringify(args, null, 2) : ''
    }`;
});

export default class Logger implements LoggerInterface {
    _logger: Object;

    constructor() {
        this._logger = createLogger({
            format: combine(
                colorize(),
                timestampFormat(),
                prettyPrint(),
                logFormat
            ),
            transports: new transports.Console({
                handleExceptions: true,
                level: logLevel
            }),
            exitOnError: false
        });
    }

    info(...msg: any[]): LoggerInterface {
        this._logger.info(...msg);
        return this;
    }

    debug(...msg: any[]): LoggerInterface {
        this._logger.debug(...msg);
        return this;
    }

    warn(...msg: any[]): LoggerInterface {
        this._logger.warn(...msg);
        return this;
    }

    error(...msg: any[]): LoggerInterface {
        this._logger.error(...msg);
        return this;
    }
}
