import { Module } from '@nestjs/common';
import { OfferCommandFacade } from './command/application/offer/offer-command.facade';
import { OrderCommandFacade } from './command/application/order/order-command.facade';
import { OfferRepository } from './command/domain/offer/offer.repository';
import { OrderRepository } from './command/domain/order/order.repository';
import { OfferController } from './infrastructure/adapters/primary/offer/offer.controller';
import { OrderController } from './infrastructure/adapters/primary/order/order.controller';
import { OfferRepositoryAdapter } from './infrastructure/adapters/secondary/offer/offer-repository.adapter';
import { OrderRepositoryAdapter } from './infrastructure/adapters/secondary/order/order-repository.adapter';

@Module({
  controllers: [OrderController, OfferController],
  providers: [
    OrderCommandFacade,
    OfferCommandFacade,
    {
      provide: OrderRepository,
      useClass: OrderRepositoryAdapter,
    },
    {
      provide: OfferRepository,
      useClass: OfferRepositoryAdapter,
    },
  ],
})
export class PurchaseModule {}
