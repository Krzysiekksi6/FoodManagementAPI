import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
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
@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  refresh_token: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable()
  roles: Role[];
}
