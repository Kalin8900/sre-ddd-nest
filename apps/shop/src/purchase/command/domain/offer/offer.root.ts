import { OrderFactory } from '../order/order.factory';
import type { OrderAggregateRoot } from '../order/order.root';
import { ProductValueObject } from '../product/product.vo';

export class OfferAggregateRoot {
  private readonly products: ProductValueObject[];

  public accept(): OrderAggregateRoot {
    return OrderFactory.create(this.products);
  }
}
