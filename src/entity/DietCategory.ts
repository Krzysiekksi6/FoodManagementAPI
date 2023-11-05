import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./Product";
import { Diet } from "./Diet";

@Entity("diet_category")
export class DietCategory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Product, (product) => product.dietCategoryId)
  products: Product[];

  @OneToMany(() => Diet, (diet) => diet.dietCategoryId)
  diets: Diet[];
}
