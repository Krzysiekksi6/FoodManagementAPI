import { body, param } from "express-validator";
import { UserController } from "../../controller/UserController";

const users = [
    {
        /**
         * @openapi
         * /users:
         *  get:
         *     tags:
         *     - Users
         *     description: Responds if the app is up and running
         *     responses:
         *       200:
         *         description: App is up and running
         */
        method: "get",
        route: "/users",
        controller: UserController,
        action: "all",
        validation: [],
    },
    {
        method: "get",
        route: "/users/:id",
        controller: UserController,
        action: "one",
        validation: [param("id").isInt()],
    },
    {
        method: "post",
        route: "/users",
        controller: UserController,
        action: "save",
        validation: [body("firstname").isString(), body("lastname").isString()],
    },
    {
        method: "delete",
        route: "/users/:id",
        controller: UserController,
        action: "remove",
        validation: [param("id").isInt()],
    },
];

export default users;
