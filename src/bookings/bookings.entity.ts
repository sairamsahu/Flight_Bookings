import { TicketsDetails } from "../ticketsDetails/ticketsDetails.entity";
import { User } from "../users/users.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

/**
 * @author Rashmi Gupta
 * Bookings Entity
 */
@Entity()
export class Bookings {

    /**
     * Booking id will be Primary Generated
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * Source
     */
    @Column()
    Source: string;

    /**
     * Destination
     */
    @Column()
    destination: string;

    /**
     * Date Of Journey
     */
    @Column()
    dateOfJourney: Date;

    /**
     * Departure Date
     */
    @Column()
    departureDate: Date;

    /**
     * Arrival Date
     */
    @Column()
    arrivalDate: Date;

    /**
     * Booking Date Time
     */
    @CreateDateColumn()
    bookingDateTime: Date;

    /**
     * Booking Fare
     */
    @Column()
    bookingFare: number;

    /**
     *OneToMany Relation between Booking and ticket
     */
    @OneToMany(() => TicketsDetails, (ticketsDetails: TicketsDetails) => ticketsDetails.bookings, { cascade: ["insert", "remove", "soft-remove", "update"] })
    ticketsDetails: TicketsDetails;

    /**
     * ManyToOne Relation between Booking and User
     */
    @ManyToOne(() => User, (user: User) => user.bookings)
    user: User;

}