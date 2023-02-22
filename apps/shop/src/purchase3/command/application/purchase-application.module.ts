import { DynamicModule, Module, Type } from '@nestjs/common';
import { OfferRepository } from '../domain/offer/offer.repository';
import { OrderRepository } from '../domain/order/order.repository';
import { OfferCommandFacade } from './offer/offer-command.facade';
import { OrderCommandFacade } from './order/order-command.facade';

type PurchaseAdapters = {
  offerRepository: Type<OfferRepository>;
  orderRepository: Type<OrderRepository>;
};

@Module({
  providers: [OfferCommandFacade, OrderCommandFacade],
  exports: [OfferCommandFacade, OrderCommandFacade],
})
export class PurchaseApplicationModule {
  public static withAdapters(adapters: PurchaseAdapters): DynamicModule {
    return {
      module: PurchaseApplicationModule,
      providers: [
        {
          provide: OfferRepository,
          useValue: adapters.offerRepository,
        },
        {
          provide: OrderRepository,
          useValue: adapters.orderRepository,
        },
      ],
    };
  }
}
