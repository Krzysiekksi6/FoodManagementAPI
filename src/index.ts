import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as cookieParser from "cookie-parser";

import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { Routes } from "./routes";
import { User } from "./entity/User";

import config from './config/index';

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(express.json());
    //middleware for cookies
    app.use(cookieParser());
    app.use(express.urlencoded({ extended: false }));





    // start express server
    app.listen(config.port)



    console.log(`Express server has started on port ${config.port}. Open http://localhost:${config.port}/users to see results`)

}).catch(error => console.log(error))
