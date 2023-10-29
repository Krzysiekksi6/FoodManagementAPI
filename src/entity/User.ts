import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"



@Entity()

export class User {
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
     *           example: 1
     *         firstName:
     *           type: string
     *           description: The user's first name.
     *           example: John
     *         lastName:
     *           type: string
     *           description: The user's last name.
     *           example: Doe
     *         age:
     *           type: integer
     *           description: The user's age.
     *           example: 30
     */
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

}
