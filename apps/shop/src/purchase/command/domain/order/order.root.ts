import { PriceValueObject } from '../price/price.vo';
import type { ProductValueObject } from '../product/product.vo';
import { AddressValueObject } from './address.vo';
import { DeliveryMethodValueObject } from './delivery-method.vo';
import type { OrderNumberValueObject } from './order-number.vo';
import { OrderStateValueObject } from './order-state.vo';
import { PaymentMethodValueObject } from './payment-method.vo';

interface OrderAggregateRootArgs {
  products: ProductValueObject[];
  address: AddressValueObject;
  deliveryMethod: DeliveryMethodValueObject;
  discountCode: string;
  price: PriceValueObject;
  orderNumber: OrderNumberValueObject;
  state: OrderStateValueObject;
}

export class OrderAggregateRoot {
  // TODO: map to entity?
  private readonly products: ProductValueObject[];
  private readonly address: AddressValueObject;
  private readonly deliveryMethod: DeliveryMethodValueObject;
  private readonly discountCode: string;
  private readonly price: PriceValueObject;
  private readonly orderNumber: OrderNumberValueObject;
  private state: OrderStateValueObject;

  constructor(args: OrderAggregateRootArgs) {
    this.products = args.products;
    this.address = args.address;
    this.deliveryMethod = args.deliveryMethod;
    this.discountCode = args.discountCode;
    this.price = args.price;
    this.orderNumber = args.orderNumber;
    this.state = args.state;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public place(paymentMethod: PaymentMethodValueObject): void {
    this.state = OrderStateValueObject.PLACED;
  }
}
