import { PriceValueObject } from '../price/price.vo';

export abstract class DiscountService {
  abstract withDiscount(
    price: PriceValueObject,
    discountCode: string
  ): PriceValueObject;
}
