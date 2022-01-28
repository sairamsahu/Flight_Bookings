import { IsNotEmpty } from "class-validator";
import { TicketsDetails } from "../ticketsDetails/ticketsDetails.entity";
import { User } from "../users/users.entity";

/**
 * @author Rashmi Gupta
 * Bookings DTO
 */
export class BookingsDTO {

    /**
     * @type number
     * Bookings id will be Primary Genereted
     */
    id: number;

    /**
     * Source should not be empty
     */
    @IsNotEmpty({ message: 'Source should not be empty' })
    Source: string;

    /**
     * Destination should not be empty
     */
    @IsNotEmpty({ message: 'destination should not be empty' })
    destination: string;

    /**
     * Date Of Journey should not be empty
     */
    @IsNotEmpty({ message: 'dateOfJourney should not be empty' })
    dateOfJourney: Date;

    /**
     * Departure Date should not be empty'
     */
    @IsNotEmpty({ message: 'Departure Date should not be empty' })
    departureDate: Date;

    /**
     * Arrival Date should not be empty
     */
    @IsNotEmpty({ message: 'Arrival Date should not be empty' })
    arrivalDate: Date;

    /**
     * Booking Date Time should not be empty
     */
    bookingDateTime: Date;

    /**
     * Booking Fare
     */
    bookingFare: number;

    /**
     * Tickets Details
     */
    ticketsDetails: TicketsDetails;

    /**
     * User
     */
    user: User;

}