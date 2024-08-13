import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConcumerModule } from './entities/concumer/concumer.module';
import {
  MicroserviceOptions,
  Transport,
  RmqOptions,
} from '@nestjs/microservices';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // new ValidationPipe to add validation
  //{whitelist:true} to remove field that is not exist in dto
  // forbidNonWhitelisted:true to return value for field that is not exist in dto
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );
  app.connectMicroservice<RmqOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'rabbitmq-queue',
    },
  });
  app.startAllMicroservices();
  await app.listen(3000);

  // const rabbitMicroservice =
  //   await NestFactory.createMicroservice<MicroserviceOptions>(ConcumerModule, {
  //     transport: Transport.RMQ,
  //     options: {
  //       urls: ['amqp://localhost:5672'],
  //       queue: 'rabbitmq-queue',
  //     },
  //   });
  // await rabbitMicroservice.listen();
}
bootstrap();
