import { ApplicationError, CustomError } from './custom-error';

export class ServerError extends CustomError {
    statusCode = 500;

    constructor() {
        super('Something went wrong');
    }

    serializeErrors(): ApplicationError[] {
        return [{ message: 'Something went wrong' }];
    }
}
