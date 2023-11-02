import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";

import { Role } from "./Role";

/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - id
 *         - username
 *         - password
 *         - refreshToken
 *       properties:
 *         id:
 *           type: integer
 *           description: The user's unique ID.
 *           example: 1
 *         username:
 *           type: string
 *           description: The user's username.
 *           example: john_doe
 *         password:
 *           type: string
 *           description: The user's password (hashed).
 *         refreshToken:
 *           type: string
 *           description: The token used for refreshing authentication.
 *           example: some_refresh_token
 *         roles:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Role'
 *           description: The roles assigned to the user.
 */
@Entity()
export class User extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  refresh_token: string;

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable()
  roles: Role[];
}
