import {
    Entity, PrimaryGeneratedColumn, Column,
    ManyToOne, JoinColumn
} from "typeorm";
import { User } from "./User";
import { Product } from "./Product";

@Entity()
export class InventoryItem {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Product, product => product.id)
    @JoinColumn({ name: "product_id" })  // opcjonalnie, jeśli chcesz określić nazwę kolumny klucza obcego
    product: Product;

    @ManyToOne(() => User, user => user.id)
    @JoinColumn({ name: "user_id" })  // podobnie jak powyżej
    user: User;

    @Column()
    quantity: number;

    @Column({ type: 'date' })
    purchaseDate: Date;

    @Column({ type: 'date' })
    expiryDate: Date;
}
