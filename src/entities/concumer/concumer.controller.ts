import { Controller } from '@nestjs/common';
import { ConcumerService } from './concumer.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class ConcumerController {
  constructor(private readonly concumerService: ConcumerService) {}

  @EventPattern('rabbitmq-queue')
  async handleOrderPlaced(@Payload() payload) {
    this.concumerService.handleOrderPlaced(payload);
  }
}
