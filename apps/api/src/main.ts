import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { registerPrismaShutdown as registerPrismaStoreShutdown } from '@cloudis/prisma-client-store';
import { registerPrismaShutdown as registerPrismaUsersShutdown } from '@cloudis/prisma-client-users';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await registerPrismaUsersShutdown(app);
  await registerPrismaStoreShutdown(app);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
