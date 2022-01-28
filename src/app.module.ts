import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingsModule } from './bookings/bookings.module';
import { TicketsDetailsModule } from './ticketsDetails/ticketsDetails.module';
import { UserModule } from './users/users.module';

/**
 * @Module AppModule
 */
@Module({
  imports: [TypeOrmModule.forRoot(),
    TicketsDetailsModule,
    BookingsModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
