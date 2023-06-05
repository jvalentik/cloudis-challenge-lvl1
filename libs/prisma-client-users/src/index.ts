import { INestApplication } from '@nestjs/common';
import { PrismaService } from './lib/prisma.service';

export * from './lib/prisma.service';
export * from './lib/prisma-client-users.module';
export { Post, Prisma, User } from '@prisma/client/users';

export async function registerPrismaShutdown(app: INestApplication) {
  // recommended by NestJS
  // https://docs.nestjs.com/recipes/prisma#issues-with-enableshutdownhooks
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
}
