import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class AppController {
  // return 200 OK
  @Get()
  getHello(): string {
    return 'Web3 monorepo nestjs server';
  }
}
