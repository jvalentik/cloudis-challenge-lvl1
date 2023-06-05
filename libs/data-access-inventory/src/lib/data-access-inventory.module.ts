import { InventoryService } from './inventory.service';
import { Module } from '@nestjs/common';
import { PrismaClientStoreModule } from '@cloudis/prisma-client-store';

@Module({
  imports: [PrismaClientStoreModule],
  controllers: [],
  providers: [InventoryService],
  exports: [InventoryService],
})
export class DataAccessInventoryModule {}
