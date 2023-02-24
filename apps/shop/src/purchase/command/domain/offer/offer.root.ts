import { AcceptOfferDto } from '../../application/offer/accept-offer.dto';
import { CreateOrderDto } from '../order/create-order.dto';
import { OrderFactory } from '../order/order.factory';
import type { OrderAggregateRoot } from '../order/order.root';
import { ProductValueObject } from '../product/product.vo';

export class OfferAggregateRoot {
  private readonly products: ProductValueObject[];

  public accept(
    orderFactory: OrderFactory,
    dto: CreateOrderDto
  ): OrderAggregateRoot {
    return orderFactory.create(this.products, dto);
  }
}
