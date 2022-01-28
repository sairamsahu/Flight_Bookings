import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * App Controller(Root Controller)
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Basic Get method
   * @returns string
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
