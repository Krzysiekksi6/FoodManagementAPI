import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm";
import {Product} from "./Product";

@Entity()
export class ShoppingList {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'date'})
    date: Date;

    @ManyToMany(() => Product, product => product.shoppingLists)
    products: Product[];
}
