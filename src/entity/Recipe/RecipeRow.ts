import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../Product";
import { RecipeHeader } from "./RecipeHeader";
import { UnitOfMeasure } from "../../types/Units";

@Entity("recipe_row")
export class RecipeRow {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  // Relation
  @Column({
    type: "enum",
    enum: [
      "g",
      "kg",
      "ml",
      "l",
      "szt",
      "łyżka stołowa",
      "łyżeczka",
      "szklanla",
    ],
  })
  unitOfMeasure: UnitOfMeasure;

  @ManyToOne(() => RecipeHeader, (recipeHeader) => recipeHeader.recipeRows)
  recipeHeader: RecipeHeader;
  @ManyToOne(() => Product, (product) => product.recipeRows)
  products: Product;
}
