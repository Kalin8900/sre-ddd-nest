import type { ProductValueObject } from '../product/product.vo';
import { OrderNumberValueObject } from './order-number.vo';
import { OrderStateValueObject } from './order-state.vo';
import { OrderAggregateRoot } from './order.root';

export class OrderFactory {
  public static create(products: ProductValueObject[]): OrderAggregateRoot {
    const orderNumber = OrderNumberValueObject.generate();
    const orderState = OrderStateValueObject.CREATED;

    const order = new OrderAggregateRoot(orderNumber, orderState, products);
    return order;
  }
}
