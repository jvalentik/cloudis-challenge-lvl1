import { INestApplication } from '@nestjs/common';
import { PrismaService } from './lib/prisma.service';

export * from './lib/prisma.service';
export * from './lib/prisma-client-store.module';

export { Item, Prisma } from '@prisma/client/store';

export async function registerPrismaShutdown(app: INestApplication) {
  // recommended by NestJS
  // https://docs.nestjs.com/recipes/prisma#issues-with-enableshutdownhooks
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
}
