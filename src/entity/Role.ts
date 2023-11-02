import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { UserRole } from "../types/UserRole";
import { User } from "./User";

/**
 * @openapi
 * components:
 *  schemas:
 *     Role:
 *       type: object
 *       required:
 *         - id
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: The role's unique ID.
 *           example: 1
 *         name:
 *           $ref: '#/components/schemas/UserRole'
 *           description: The name of the role.
 *         users:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/User'
 *           description: The users associated with this role.
 *     UserRole:
 *       type: string
 *       enum:
 *         - User
 *         - Moderator
 *         - Admin
 *       description: Available user roles.
 */
@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: UserRole,
  })
  name: UserRole;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
}
