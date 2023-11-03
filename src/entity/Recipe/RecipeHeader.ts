import { Entity, PrimaryGeneratedColumn, Column,OneToMany } from "typeorm";
import { RecipeRow } from "./RecipeRow";

@Entity('recipe_header')
export class RecipeHeader {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    instructions: string

    @OneToMany(() => RecipeRow, recipeRow => recipeRow.recipeHeader)
    recipeRows: RecipeRow


}
