import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Post } from "@nestjs/common";
import { ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { BookingsDTO } from "./bookings.dto";
import { BookingsService } from "./bookings.service";

/**
 * @author Rashmi Gupta
 * Bookings Controller
 */
@ApiTags('Bookings')
@Controller()
export class BookingsController {

    /**
     * Dependency-
     * @param bookingsService Bookingsservice
     */
    constructor(private readonly bookingsService: BookingsService) { }

    /**
     * Book Flight Tickets
     * @param bookings BookingsDTO
     * @returns Success or Failure
     */
    @ApiCreatedResponse({ description: 'Your Flight have been booked Successfully', status: HttpStatus.CREATED })
    @ApiInternalServerErrorResponse({ description: 'Unable to book your flight', status: HttpStatus.INTERNAL_SERVER_ERROR })
    @Post('/bookings')
    bookFlightTickets(@Body() bookings: BookingsDTO) {
        return this.bookingsService.bookFlightTickets(bookings);
    }

    /**
     * Dependency -
     * @param id number
     * @returns Success or Failure
     */
    @ApiOkResponse({ description: 'Here is the list of your Bookings', status: HttpStatus.OK })
    @ApiNotFoundResponse({ description: 'Bookings with this Id Does not exist', status: HttpStatus.NOT_FOUND })
    @Get('users/:id/bookings')
    bookingDetailsById(@Param('id', ParseIntPipe) id: number) {
        return this.bookingsService.bookingDetailsById(id);
    }
}