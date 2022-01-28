import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TicketsDetails } from "../ticketsDetails/ticketsDetails.entity";
import { TicketsDetailsRepository } from "../ticketsDetails/ticketsDetails.repository";
import { User } from "../users/users.entity";
import { UserRepository } from "../users/users.repository";
import { BookingsController } from "./bookings.controller";
import { Bookings } from "./bookings.entity";
import { BookingsRepository } from "./bookings.repository";
import { BookingsService } from "./bookings.service";

/**
 * @author Rashmi Gupta
 * @Module BookingsModule
 */
@Module({
    imports: [
        TypeOrmModule.forFeature([BookingsRepository, Bookings, TicketsDetails, TicketsDetailsRepository, UserRepository, User])],
    controllers: [BookingsController],
    providers: [BookingsService],
})
export class BookingsModule { } 