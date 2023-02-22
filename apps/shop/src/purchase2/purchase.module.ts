import { Module } from '@nestjs/common';
import { PurchaseApplicationModule } from './command/application/purchase-application.module';
import { OfferController } from './infrastructure/adapters/primary/offer/offer.controller';
import { OrderController } from './infrastructure/adapters/primary/order/order.controller';
import { OfferRepositoryAdapter } from './infrastructure/adapters/secondary/offer/offer-repository.adapter';
import { OrderRepositoryAdapter } from './infrastructure/adapters/secondary/order/order-repository.adapter';

@Module({
  imports: [
    PurchaseApplicationModule.withAdapters({
      primary: [OfferController, OrderController],
      secondary: {
        offerRepository: OfferRepositoryAdapter,
        orderRepository: OrderRepositoryAdapter,
      },
    }),
  ],
})
export class PurchaseModule {}
