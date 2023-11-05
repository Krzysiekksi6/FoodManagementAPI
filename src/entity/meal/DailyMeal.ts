import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Meal } from "./Meal";
import { Recipe } from "../recipe/Recipe";
import { Ingredient } from "../recipe/Ingredient";
import { DailyDiet } from "../diet/DailyDiet";

@Entity()
export class DailyMeal {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Meal, (meal) => meal.dailyMeals)
  mealId: Meal;

  @ManyToOne(() => DailyDiet, (dailyDiet) => dailyDiet.dailyMeals)
  dailyDietId: DailyDiet;

  @ManyToMany(() => Recipe)
  @JoinTable()
  recipes: Recipe[]; // Relacja do wielu przepisów

  @ManyToMany(() => Ingredient)
  @JoinTable()
  ingredients: Ingredient[]; // Relacja do wielu składników
}
