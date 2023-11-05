import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { WeeklyDiet } from './WeeklyDiet';
import { DailyMeal } from './DailyMeal';

@Entity()
export class DailyDiet {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => WeeklyDiet, weeklyDiet => weeklyDiet.dailyDiets)
  weeklyDietId: WeeklyDiet;

  @Column()
  dayOfWeek: string;

  @Column()
  date: Date;

  @Column()
  totalCalories: number;

  @Column()
  totalProtein: number;

  @Column()
  totalCarbs: number;

  @Column()
  totalFat: number;

  @OneToMany(() => DailyMeal, dailyMeal => dailyMeal.dailyDietId)
  dailyMeals: DailyMeal[];
}
