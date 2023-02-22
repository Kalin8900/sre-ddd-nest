import { Module } from '@nestjs/common';
import { PurchaseModule } from '../purchase3/purchase.module';

@Module({
  imports: [PurchaseModule],
})
export class AppModule {}
