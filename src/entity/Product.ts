import {Entity, PrimaryGeneratedColumn, Column,OneToMany, ManyToMany, JoinTable} from "typeorm";
import { RecipeRow } from "./Recipe/RecipeRow";
import {ShoppingList} from "./ShoppingList";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => RecipeRow, recipeRow => recipeRow.products)
    recipeRows: RecipeRow[];

    @ManyToMany(() => ShoppingList, shoppingList => shoppingList.products)
    @JoinTable()
    shoppingLists: ShoppingList[];
}
