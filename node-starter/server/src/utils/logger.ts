import type { Request, Response } from 'express';
import morgan from 'morgan';
import { createLogger, addColors, format, transports } from 'winston';

addColors({
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    verbose: 'white',
    debug: 'blue'
});

const logFormat = format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    format.colorize(),
    format.printf(({ timestamp, level, message, stack }) => {
        return `${timestamp} [${level}] ${message} ${stack || ''}`;
    })
);

export const logger = createLogger({
    level: 'debug',
    format: logFormat,
    transports: [new transports.Console()]
});

export const loggerMiddleware = (skipFunction?: (req: Request, res: Response) => boolean) => {
    return morgan('short', { skip: skipFunction, stream: new LoggerStream() });
};

class LoggerStream {
    write(message: string) {
        logger.http(message.trim());
    }
}
