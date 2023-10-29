import * as express from "express";
import * as cors from "cors";
import * as cookieParser from "cookie-parser";
import * as morgan from "morgan";

import {NextFunction, Request, Response} from "express";
import {validationResult} from "express-validator";

import { Routes } from "./routes";
import { User } from "./entity/User";
import handleError from "./middleware/handleErrors";
import swaggerDocs from './utils/swagger';
import config from "./config";

    // create express app
    const app = express()
    app.use(morgan('tiny'));
    app.use(express.json());
    app.use(cookieParser());
    app.use(express.urlencoded({ extended: false }));

    Routes.forEach(route => {
        (app as any)[route.method](route.route,
            ...route.validation,
            async (req: Request, res: Response, next: Function) => {
                try {
                    const errors = validationResult(req);
                    if (!errors.isEmpty()) {
                        return res.status(400).json({ errors: errors.array() });
                    }
                    const result = await (new (route.controller as any))[route.action](req, res, next);
                    res.json(result);
                } catch(err) {
                    next(err);
                }
            });
    });
    swaggerDocs(app, config.port)
    app.use(handleError)



export default app;