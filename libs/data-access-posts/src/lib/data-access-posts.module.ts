import { Module } from '@nestjs/common';
import { PostService } from './posts.service';
import { PrismaClientUsersModule } from '@cloudis/prisma-client-users';

@Module({
  controllers: [],
  providers: [PostService],
  exports: [PostService],
  imports: [PrismaClientUsersModule],
})
export class DataAccessPostsModule {}
