import { Module } from '@nestjs/common';
import { PrismaClientUsersModule } from '@cloudis/prisma-client-users';
import { UserService } from './user.service';

@Module({
  controllers: [],
  providers: [UserService],
  exports: [UserService],
  imports: [PrismaClientUsersModule],
})
export class DataAccessUsersModule {}
