import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { User } from "../user/User";
import { ShoppingListItem } from "./ShoppingListItem";

@Entity()
export class ShoppingList {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.shoppingLists)
  userId: User;

  @Column()
  created_at: Date;

  @OneToMany(
    () => ShoppingListItem,
    (shoppingListItem) => shoppingListItem.shoppingListId
  )
  items: ShoppingListItem[];
}
