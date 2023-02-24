import { Module } from '@nestjs/common';
import { PurchaseCommandModule } from './command/application/purchase-command.module';
import { OfferController } from './infrastructure/adapters/primary/offer/offer.controller';
import { OrderController } from './infrastructure/adapters/primary/order/order.controller';
import { PurchaseSagaListener } from './infrastructure/adapters/primary/purchase/purchase-saga.listener';
import { AddressServiceAdapter } from './infrastructure/adapters/secondary/address/address.service';
import { DiscountServiceAdapter } from './infrastructure/adapters/secondary/discount/discount.service';
import { OfferRepositoryAdapter } from './infrastructure/adapters/secondary/offer/offer-repository.adapter';
import { OrderRepositoryAdapter } from './infrastructure/adapters/secondary/order/order-repository.adapter';
import { PurchaseSagaRepositoryAdapter } from './infrastructure/adapters/secondary/purchase/purchase-saga.repository';
import { PurchaseQueryModule } from './query/purchase-query.module';

@Module({
  imports: [
    PurchaseCommandModule.withAdapters({
      offerRepository: OfferRepositoryAdapter,
      orderRepository: OrderRepositoryAdapter,
      discountService: DiscountServiceAdapter,
      addressService: AddressServiceAdapter,
      purchaseSagaRepository: PurchaseSagaRepositoryAdapter,
    }),
    PurchaseQueryModule,
  ],
  controllers: [OrderController, OfferController],
  providers: [PurchaseSagaListener],
})
export class PurchaseModule {}
