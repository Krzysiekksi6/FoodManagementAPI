import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Product } from "./product/Product";
import { Recipe } from "./recipe/Recipe";

@Entity("ingredient")
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.ingredients)
  productId: Product;

  @Column()
  quantity: number;

  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients)
  recipeId: Recipe;
}
