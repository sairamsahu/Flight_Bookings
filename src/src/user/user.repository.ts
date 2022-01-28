import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
/**
 * To connect to database to to write complex business logics
 */
@EntityRepository(User)
export class UserRepository extends Repository<User> {
 
}
