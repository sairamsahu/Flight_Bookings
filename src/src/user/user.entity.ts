import { Column,Entity,PrimaryGeneratedColumn, Unique} from 'typeorm';
/**
 * To create user table in database
 */
@Entity()
@Unique(['emailId'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  emailId: string;
  @Column()
  password: string;
  @Column()
  phoneNumber: string;
  @Column()
  age:number;

 
}
