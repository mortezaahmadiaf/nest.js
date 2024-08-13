import { Module } from '@nestjs/common';
import { ConcumerService } from './concumer.service';
import { ConcumerController } from './concumer.controller';

@Module({
  controllers: [ConcumerController],
  providers: [ConcumerService],
})
export class ConcumerModule {}
