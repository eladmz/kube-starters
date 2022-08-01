export type ApplicationError = { message: string; field?: string };

export abstract class CustomError extends Error {
    abstract statusCode: number;

    constructor(message: string) {
        super(message);
    }

    abstract serializeErrors(): ApplicationError[];
}
