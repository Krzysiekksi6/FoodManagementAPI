import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Diet } from "./Diet";
import { DailyDiet } from "./DailyDiet";

@Entity()
export class WeeklyDiet {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Diet, (diet) => diet.weeklyDiets)
  dietId: Diet;

  @Column()
  weekName: string;

  @OneToMany(() => DailyDiet, (dailyDiet) => dailyDiet.weeklyDietId)
  dailyDiets: DailyDiet[];
}
