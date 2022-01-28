import { EntityRepository, Repository } from "typeorm";
import { Bookings } from "./bookings.entity";

/**
 * @author Rashmi Gupta
 * Bookings Repository
 */
@EntityRepository(Bookings)
export class BookingsRepository extends Repository<Bookings>{ }  