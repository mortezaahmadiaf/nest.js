import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async handleOrderPlaced(payload) {
    console.log('concume data from rabbitmq-queue queue is  ', payload);
    return 'Hello World!';
  }
}
