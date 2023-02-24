import { AddressValueObject } from './address.vo';
import { DeliveryMethodValueObject } from './delivery-method.vo';

export interface CreateOrderDto {
  readonly discountCode: string;
  readonly address: AddressValueObject;
  readonly deliveryMethod: DeliveryMethodValueObject;
}
