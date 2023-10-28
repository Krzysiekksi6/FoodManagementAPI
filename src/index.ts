import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as cookieParser from "cookie-parser";
import * as morgan from "morgan";

import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { Routes } from "./routes";
import { User } from "./entity/User";

import config from './config/index';

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(morgan('dev'));
    app.use(express.json());
    //middleware for cookies
    app.use(cookieParser());
    app.use(express.urlencoded({ extended: false }));

    Routes.forEach(route => {
        (app as any)[route.method](route.route,
            async (req: Request, res: Response, next: Function) => {
                try {
                    const result = await (new (route.controller as any))[route.action](req, res, next);
                    res.json(result);
                } catch(err) {
                    next(err);
                }
            });
    });

    // start express server
    app.listen(config.port)



    console.log(`
    Express server has started on port ${config.port}. 
    Postgres connect on port ${config.pg_port}
    Open http://localhost:${config.port}/users to see results
    Open http://localhost:${config.port}/docs to see documentation API
    `)

}).catch(error => console.log(error))
