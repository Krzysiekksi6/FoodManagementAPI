import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from "typeorm";

import { InventoryItem } from "./InventoryItem";
import { DietCategory } from "./DietCategory";
import { Ingredient } from "./Ingredient";
import { ShoppingListItem } from "./ShoppingListItem";
@Entity("product")
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  calories: number;

  @Column()
  protein: number;

  @Column()
  carbs: number;

  @Column()
  fat: number;

  @Column()
  shelfLifeDays: number;

  @ManyToOne(() => DietCategory, (dietCategory) => dietCategory.products)
  dietCategoryId: DietCategory;

  @OneToMany(() => InventoryItem, (inventoryItem) => inventoryItem.productId)
  inventoryItems: InventoryItem[];

  @OneToMany(() => Ingredient, (ingredient) => ingredient.productId)
  ingredients: Ingredient[];
  @OneToMany(
    () => ShoppingListItem,
    (shoppingListItem) => shoppingListItem.productId
  )
  shoppingListItems: ShoppingListItem[];
}
