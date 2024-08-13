import { Injectable } from '@nestjs/common';

@Injectable()
export class ConcumerService {
  async handleOrderPlaced(payload) {
    console.log('concume data from rabbitmq-queue queue is  ', payload);
  }
}
