import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class AppController {
  // return 200 OK
  @Get()
  get(): string {
    return `Web3 monorepo nestjs server running in ${process.env.NODE_ENV} mode`;
  }
}
