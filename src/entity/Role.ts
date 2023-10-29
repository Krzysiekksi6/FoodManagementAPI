import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { UserRole } from "../types/UserRole";
import { User } from "./User";

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: UserRole,
  })
  name: UserRole;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
}
