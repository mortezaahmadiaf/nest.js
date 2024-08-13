import { Body, Controller, Post } from '@nestjs/common';
import { ProducerService } from './producer.service';

@Controller('producer')
export class ProducerController {
  constructor(private readonly producerService: ProducerService) {}

  @Post()
  async placeOrder(@Body() body: any) {
    return this.producerService.producer(body);
  }
}
