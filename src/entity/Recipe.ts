import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Ingredient } from './Ingredient';

@Entity("recipe")
export class Recipe {
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

  @ManyToMany(() => Ingredient)
  @JoinTable()
  ingredients: Ingredient[];
}
