import express from 'express';
import 'express-async-errors';

import { NotFoundError } from './errors/not-found-error';
import { errorHandler } from './middleware/error-handler';

const app = express();
app.set('trust proxy', true);
app.use(express.json());

app.all('*', () => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app };
