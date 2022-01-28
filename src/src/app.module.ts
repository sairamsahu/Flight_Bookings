import { Module } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "somu427",
    "database": "demo",
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "synchronize": true
  }),SwaggerModule,UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
