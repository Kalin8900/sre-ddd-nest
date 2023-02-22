import type { ProductValueObject } from '../product/product.vo';
import type { OrderNumberValueObject } from './order-number.vo';
import { OrderStateValueObject } from './order-state.vo';
import { PaymentMethodValueObject } from './payment-method.vo';

export class OrderAggregateRoot {
  constructor(
    private readonly number: OrderNumberValueObject,
    private state: OrderStateValueObject,
    private readonly products: ProductValueObject[]
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public place(paymentMethod: PaymentMethodValueObject): void {
    this.state = OrderStateValueObject.PLACED;
  }
}
