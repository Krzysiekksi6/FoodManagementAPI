import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { DailyDiet } from "../diet/DailyDiet";
import { DailyMeal } from "./DailyMeal";

@Entity()
export class Meal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  totalCalories: number;

  @Column()
  totalProtein: number;

  @Column()
  totalCarbs: number;

  @Column()
  totalFat: number;

  @ManyToOne(() => DailyDiet, (dailyDiet) => dailyDiet.dailyMeals)
  dailyDiet: DailyDiet;

  @OneToMany(() => DailyMeal, (dailyMeal) => dailyMeal.mealId)
  dailyMeals: DailyMeal[];
}
