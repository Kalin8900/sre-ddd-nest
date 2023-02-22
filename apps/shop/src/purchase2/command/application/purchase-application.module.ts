import { DynamicModule, Module, Type } from '@nestjs/common';
import { ModuleMetadata } from '@nestjs/common/interfaces';
import { OfferRepository } from '../domain/offer/offer.repository';
import { OrderRepository } from '../domain/order/order.repository';
import { OfferCommandFacade } from './offer/offer-command.facade';
import { OrderCommandFacade } from './order/order-command.facade';

type PurchaseAdapters = {
  offerRepository: Type<OfferRepository>;
  orderRepository: Type<OrderRepository>;
};

type Adapters<T> = {
  primary: ModuleMetadata['controllers'];
  secondary: T;
};

@Module({
  providers: [OfferCommandFacade, OrderCommandFacade],
  exports: [OfferCommandFacade, OrderCommandFacade],
})
export class PurchaseApplicationModule {
  public static withPrimaryAdapters(
    adapters: ModuleMetadata['controllers']
  ): DynamicModule {
    return {
      module: PurchaseApplicationModule,
      controllers: adapters,
    };
  }

  public static withSecondaryAdapters(
    adapters: PurchaseAdapters
  ): DynamicModule {
    return {
      module: PurchaseApplicationModule,
      providers: [
        { provide: OfferRepository, useValue: adapters.offerRepository },
        { provide: OrderRepository, useValue: adapters.orderRepository },
      ],
    };
  }

  public static withAdapters(
    adapters: Adapters<PurchaseAdapters>
  ): DynamicModule {
    return {
      module: PurchaseApplicationModule,
      controllers: adapters.primary,
      providers: [
        {
          provide: OfferRepository,
          useValue: adapters.secondary.offerRepository,
        },
        {
          provide: OrderRepository,
          useValue: adapters.secondary.orderRepository,
        },
      ],
    };
  }
}
