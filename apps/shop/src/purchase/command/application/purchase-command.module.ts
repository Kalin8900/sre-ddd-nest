import { DynamicModule, Module, Type } from '@nestjs/common';
import { OfferRepository } from '../domain/offer/offer.repository';
import { AddressValueObjectFactory } from '../domain/order/address.factory';
import { AddressService } from '../domain/order/address.service';
import { DiscountService } from '../domain/order/discount.service';
import { OrderFactory } from '../domain/order/order.factory';
import { OrderRepository } from '../domain/order/order.repository';
import { PurchaseSagaRepository } from '../domain/purchase/purchase-saga.repository';
import { OfferCommandFacade } from './offer/offer-command.facade';
import { OrderCommandFacade } from './order/order-command.facade';
import { PurchaseSagaFacade } from './purchase/purchase-saga.facade';

type PurchaseAdapters = {
  offerRepository: Type<OfferRepository>;
  orderRepository: Type<OrderRepository>;
  addressService: Type<AddressService>;
  discountService: Type<DiscountService>;
  purchaseSagaRepository: Type<PurchaseSagaRepository>;
};

@Module({
  providers: [
    OfferCommandFacade,
    OrderCommandFacade,
    AddressValueObjectFactory,
    OrderFactory,
    PurchaseSagaFacade,
  ],
  exports: [OfferCommandFacade, OrderCommandFacade, PurchaseSagaFacade],
})
export class PurchaseCommandModule {
  public static withAdapters(adapters: PurchaseAdapters): DynamicModule {
    return {
      module: PurchaseCommandModule,
      providers: [
        {
          provide: OfferRepository,
          useClass: adapters.offerRepository,
        },
        {
          provide: OrderRepository,
          useClass: adapters.orderRepository,
        },
        {
          provide: AddressService,
          useClass: adapters.addressService,
        },
        {
          provide: DiscountService,
          useClass: adapters.discountService,
        },
        {
          provide: PurchaseSagaRepository,
          useClass: adapters.purchaseSagaRepository,
        },
      ],
    };
  }
}
