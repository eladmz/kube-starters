import type { NextFunction, Request, Response } from 'express';

import { CustomError } from '../errors/custom-error';
import { ServerError } from '../errors/server-error';
import { logger } from '../utils/logger';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({ errors: err.serializeErrors() });
    }

    logger.error(err);
    const error = new ServerError();
    return res.status(error.statusCode).send({ errors: error.serializeErrors() });
};
