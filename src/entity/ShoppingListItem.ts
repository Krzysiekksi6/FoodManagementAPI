import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ShoppingList } from './ShoppingList';
import { Product } from './Product';

@Entity()
export class ShoppingListItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ShoppingList, shoppingList => shoppingList.items)
  shoppingListId: ShoppingList;

  @ManyToOne(() => Product, product => product.shoppingListItems)
  productId: Product;

  @Column()
  quantity: number;

  @Column()
  added_at: Date;
}
