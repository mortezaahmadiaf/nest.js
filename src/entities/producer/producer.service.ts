import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ProducerService {
  constructor(
    @Inject('MESSAGE_BROKER_SERVICE') private rabbitClient: ClientProxy,
  ) {}

  producer(data: any) {
    this.rabbitClient.emit('rabbitmq-queue', data);
    return 'message send to rabbitmq';
  }
}
