import { AppController } from './app.controller';
import { DataAccessInventoryModule } from '@cloudis/data-access-inventory';
import { DataAccessPostsModule } from '@cloudis/data-access-posts';
import { DataAccessStoresModule } from '@cloudis/data-access-stores';
import { DataAccessUsersModule } from '@cloudis/data-access-users';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    DataAccessUsersModule,
    DataAccessPostsModule,
    DataAccessStoresModule,
    DataAccessInventoryModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
