import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";
import { Product } from "./Product";

@Entity("inventory_item")
export class InventoryItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.inventoryItems)
  userId: User;

  @ManyToOne(() => Product, product => product.inventoryItems)
  productId: Product;

  @Column()
  purchaseDate: Date;

  @Column()
  expiryDate: Date;

  @Column()
  quantity: number;

}
