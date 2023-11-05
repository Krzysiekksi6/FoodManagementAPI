import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  BaseEntity,
} from "typeorm";
import { UserRole } from "./UserRole";
import { InventoryItem } from "../product/InventoryItem";
import { UserDiet } from "./UserDiet";
import { ShoppingList } from "../shooping/ShoppingList";
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
@Entity("user")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  refresh_token: string;

  @Column()
  first_name: string; // Dodane pole imienia

  @Column()
  last_name: string; // Dodane pole nazwiska

  @Column()
  email: string; // Dodane pole adresu e-mail

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @ManyToOne(() => UserRole, (role) => role.users)
  roleId: UserRole;

  @OneToMany(() => InventoryItem, (inventoryItem) => inventoryItem.userId)
  inventoryItems: InventoryItem[];

  @OneToMany(() => UserDiet, (userDiet) => userDiet.userId)
  userDiets: UserDiet[];

  @OneToMany(() => ShoppingList, (shoppingList) => shoppingList.userId)
  shoppingLists: ShoppingList[];
}
