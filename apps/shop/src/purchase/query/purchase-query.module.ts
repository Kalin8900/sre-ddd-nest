import { Module } from '@nestjs/common';
import { OrderQueryFacade } from './order/order-query.facade';

@Module({
  providers: [OrderQueryFacade],
  exports: [OrderQueryFacade],
})
export class PurchaseQueryModule {}
