import { PrismaClient } from '@prisma/client/users';
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    /* eslint:disable-next-line */
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
