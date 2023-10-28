import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm";
import {Product} from "./Product";

@Entity()
export class Recipe {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToMany(() => Product, product => product.recipes)
    products: Product[];
}
