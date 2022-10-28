import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { CryptocurrenciesService } from '@server/cryptocurrencies';

@Module({
  controllers: [],
  providers: [TaskService, CryptocurrenciesService],
  exports: [TaskService],
})
export class TaskModule {}
