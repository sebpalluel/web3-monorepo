import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.get('PRISMA_DATABASE_URL'),
        },
      },
    });
  }

  async cleanDb() {
    // make sure to add all models here and delete in the right order
    await this.$transaction([this.transaction.deleteMany(), this.wallet.deleteMany()]);
  }
}
