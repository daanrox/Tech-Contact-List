import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({whitelist: true}),
    new ValidationPipe({transform: true, transformOptions: {groups: ['transform']}})
  )
  app.enableCors({
    origin: '*',
  });

  const config = new DocumentBuilder().setTitle('Contact List App').setDescription('The Contact List App API enables users to manage their contacts efficiently. Users can register and maintain a list of contacts associated with their account.').setVersion('1.0.0').addBearerAuth().addTag('contacts').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);



  await app.listen(process.env.PORT || 3000);
}
bootstrap();
