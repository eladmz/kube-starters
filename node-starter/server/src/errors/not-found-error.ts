import { ApplicationError, CustomError } from './custom-error';

export class NotFoundError extends CustomError {
    statusCode = 404;

    constructor() {
        super('Route not found');
    }

    serializeErrors(): ApplicationError[] {
        return [{ message: 'Not found' }];
    }
}
