import { Injectable } from '@nestjs/common';

/**
 * Root Service
 */
@Injectable()
export class AppService {

  /**
   * Basic Get Api
   * @returns string
   */
  getHello(): string {
    return 'Hello World!';
  }
}
