import { body, param } from "express-validator";
import { UserController } from "../../controller/UserController";

const users = [
    {
        /**
         * @openapi
         * components:
         *   schemas:
         *     User:
         *       type: object
         *       required:
         *         - id
         *         - firstName
         *         - lastName
         *         - age
         *       properties:
         *         id:
         *           type: integer
         *           description: The user's unique ID.
         *         firstName:
         *           type: string
         *           description: The user's first name.
         *         lastName:
         *           type: string
         *           description: The user's last name.
         *         age:
         *           type: integer
         *           description: The user's age.
         * /users:
         *  get:
         *     tags:
         *     - Users
         *     summary: Get all users
         *     description: Fetch all users from the database.
         *     responses:
         *       200:
         *         description: List of all users
         *         content:
         *           application/json:
         *             schema:
         *               type: array
         *               items:
         *                 $ref: '#/components/schemas/User'
         */
        method: "get",
        route: "/users",
        controller: UserController,
        action: "all",
        validation: [],
    },
    {
        /**
         * @openapi
         * /users/{id}:
         *  get:
         *     tags:
         *     - Users
         *     summary: Get a user by ID
         *     description: Fetch a specific user by their ID.
         *     parameters:
         *     - name: id
         *       in: path
         *       required: true
         *       description: ID of the user to fetch.
         *       schema:
         *         type: integer
         *     responses:
         *       200:
         *         description: Details of a specific user
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/schemas/User'
         *       404:
         *         description: User not found
         */
        method: "get",
        route: "/users/:id",
        controller: UserController,
        action: "one",
        validation: [param("id").isInt()],
    },
    {
        /**
         * @openapi
         * /users:
         *  post:
         *     tags:
         *     - Users
         *     summary: Create a new user
         *     description: Add a new user to the database.
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             $ref: '#/components/schemas/User'
         *     responses:
         *       201:
         *         description: User created successfully
         *       400:
         *         description: Invalid input
         */
        method: "post",
        route: "/users",
        controller: UserController,
        action: "save",
        validation: [body("firstname").isString(), body("lastname").isString()],
    },
    {
        /**
         * @openapi
         * /users/{id}:
         *  delete:
         *     tags:
         *     - Users
         *     summary: Delete a user by ID
         *     description: Remove a specific user from the database using their ID.
         *     parameters:
         *     - name: id
         *       in: path
         *       required: true
         *       description: ID of the user to delete.
         *       schema:
         *         type: integer
         *     responses:
         *       200:
         *         description: User deleted successfully
         *       404:
         *         description: User not found
         */
        method: "delete",
        route: "/users/:id",
        controller: UserController,
        action: "remove",
        validation: [param("id").isInt()],
    },
];

export default users;
