import * as express from "express";
import * as cors from "cors";
import * as cookieParser from "cookie-parser";
import * as morgan from "morgan";

import {NextFunction, Request, Response} from "express";
import {validationResult} from "express-validator";

import { AppDataSource } from "./data-source";
import { Routes } from "./routes";
import { User } from "./entity/User";
import config from './config/index';
import handleError from "./middleware/handleErrors";

AppDataSource.initialize().then(async () => {

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

    app.use(handleError)
    // start express server
    app.listen(config.port)



    console.log(`
    Express server has started on port ${config.port}. 
    Postgres connect on port ${config.pg_port}
    Open http://localhost:${config.port}/users to see results
    Open http://localhost:${config.port}/docs to see documentation API
    `)

}).catch(error => console.log(error))
