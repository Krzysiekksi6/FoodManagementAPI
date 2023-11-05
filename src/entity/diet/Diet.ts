import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { DietCategory } from "./DietCategory";
import { UserDiet } from "../user/UserDiet";
import { WeeklyDiet } from "./WeeklyDiet";

@Entity()
export class Diet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  durationWeeks: number;

  @Column()
  caloriesPerDay: number;

  @ManyToOne(() => DietCategory, (dietCategory) => dietCategory.diets)
  dietCategoryId: DietCategory;

  @OneToMany(() => UserDiet, (userDiet) => userDiet.dietId)
  userDiets: UserDiet[];

  @OneToMany(() => WeeklyDiet, (weeklyDiet) => weeklyDiet.dietId)
  weeklyDiets: WeeklyDiet[];
}
