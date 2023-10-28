import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import {Recipe} from "./Recipe";
import {ShoppingList} from "./ShoppingList";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => Recipe, recipe => recipe.products)
    recipes: Recipe[];

    @ManyToMany(() => ShoppingList, shoppingList => shoppingList.products)
    @JoinTable()
    shoppingLists: ShoppingList[];
}
