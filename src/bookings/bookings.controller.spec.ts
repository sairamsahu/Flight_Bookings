import { Test } from "@nestjs/testing";
import { BookingsController } from "./bookings.controller";
import { BookingsService } from "./bookings.service";

/**
 * Defining Mock Response
 */
export const bookingSuccess = "Your Flights Have been Booked Successfully with Id : 5";

export const d = new Date(2018, 11, 24);
export const bookings =
{
    id: 1,
    Source: "Delhi",
    destination: "Varanasi",
    dateOfJourney: d,
    departureDate: d,
    arrivalDate: d,
    bookingDateTime: d,
    bookingFare: 1000,
    ticketsDetails: null,
    user: null
}

export const bookingById =
{
    id: 1,
    userName: "radha",
    emailId: "radha@abc.com",
    password: "$2a$10$5n2j7E3Jw96K5BkwZNVvU.BtN3HcS3fvCkKrnLDstCgTIkgbe9OG6",
    phoneNumber: 123456,
    address: "Noida",
    bookings: null
}
/**
 * Bookings Controller
 */
describe('Given BookingsController', () => {
    let bookingsController: BookingsController;
    let bookingsService: BookingsService;

    beforeEach(async () => {
        let module = await Test.createTestingModule({
            controllers: [BookingsController],
            providers: [BookingsService, {
                provide: BookingsService,
                useFactory: () => ({
                    bookFlightTickets: jest.fn(),
                    bookingDetailsById: jest.fn(),
                })
            }]
        }).compile()
        bookingsController = module.get<BookingsController>(BookingsController);
        bookingsService = module.get<BookingsService>(BookingsService);
    })
    it('should be defind', () => {
        expect(bookingsController).toBeDefined();
    })

    /**
     * book Flight Ticket
     */
    describe('When bookFlightTickets()', () => {
        it('should return response', async () => {
            let bookFlightTicketsSpy = jest.spyOn(bookingsService, 'bookFlightTickets').mockResolvedValue(bookingSuccess);
            let response = await bookingsController.bookFlightTickets(bookings)
            expect(response).toEqual(bookingSuccess);
            expect(bookFlightTicketsSpy).toHaveBeenCalledTimes(1);
        })
    })

    /**
     * Get Booking Details By Id
     */
    describe('When bookingDetailsById()', () => {
        it('should return response', async () => {
            let bookingDetailsByIdSpy = jest.spyOn(bookingsService, 'bookingDetailsById').mockResolvedValue(bookingById);
            let response = await bookingsController.bookingDetailsById(1);
            expect(response).toEqual(bookingById);
            expect(bookingDetailsByIdSpy).toHaveBeenCalledTimes(1);
        })
    })



})