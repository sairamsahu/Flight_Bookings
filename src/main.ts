import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './common/interceptor/response.interceptor';

/**
 * Entry file here Instance of app will be Created
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * Swagger Configuration
   */
  const config = new DocumentBuilder()
    .setTitle('BooK My Flight')
    .setDescription('Flight Booking API ')
    .setVersion('1.0')
    .addTag('Flight-Booking')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  
  /**
   * Globel Interceptor
  */
   app.useGlobalInterceptors(new ResponseInterceptor());

   /**
   * Globel Validation
   */ 
  app.useGlobalPipes(new ValidationPipe());


  /**
   * port number 
   */
  await app.listen(3000);
}
bootstrap();
