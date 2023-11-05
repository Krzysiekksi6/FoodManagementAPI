import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './User';
import { Diet } from './Diet';

@Entity()
export class UserDiet {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.userDiets)
  userId: User;

  @ManyToOne(() => Diet, diet => diet.userDiets)
  dietId: Diet;
}
