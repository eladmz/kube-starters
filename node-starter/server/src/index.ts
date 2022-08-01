import type { Server } from 'http';

import { app } from './app';
import { PORT, SHUT_DOWN_TIMEOUT } from './utils/consts';
import { logger } from './utils/logger';

let server: Server;

const start = async () => {
    logger.info('Starting server');
    server = app.listen(PORT, () => {
        logger.info(`Server running on port ${PORT}`);
    });
};

const serverCleanup = () => {
    logger.info('Gracefully shutting down');
    if (!server) {
        process.exit();
    }

    server.close(() => {
        process.exit();
    });

    setTimeout(() => {
        logger.error('Could not shut down gracefully, forcing shut down');
        process.exit(1);
    }, SHUT_DOWN_TIMEOUT);
};

process.on('SIGINT', serverCleanup);
process.on('SIGTERM', serverCleanup);

start();
