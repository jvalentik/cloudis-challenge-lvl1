import { Module } from '@nestjs/common';
import { PrismaClientStoreModule } from '@cloudis/prisma-client-store';
import { StoreService } from './store.service';

@Module({
  controllers: [],
  providers: [StoreService],
  exports: [StoreService],
  imports: [PrismaClientStoreModule],
})
export class DataAccessStoresModule {}
