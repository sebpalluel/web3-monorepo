import { PrismaService } from '@server/prisma';
import { ApiService } from '@server/api';
import { ConfigService } from '@nestjs/config';

export const GlobalServices = [PrismaService, ConfigService, ApiService];
