import express, { Application, Request, Response, NextFunction } from 'express';
import cors from "cors";
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import config from './lib/config';

interface error {
    status: number;
    message: string;
}

const app: Application = express();
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: true, limit: '50mb' })); // middleware
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));

app.use(
    cors({
        origin: config.cors,
        credentials: true,
        methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
        allowedHeaders: ['Origin', 'X-Requested-With',
            'Content-Type', 'Accept'],
    })
);

app.use((err: error, req: Request, res: Response, next: NextFunction) => {
    // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
    next && next();
});

// Our routes
import routes from './routes/';
app.use('/api', routes);

export default app;
