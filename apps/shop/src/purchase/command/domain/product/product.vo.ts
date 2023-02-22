import { PriceValueObject } from './price.vo';
import { QuantityValueObject } from './quantity.vo';

export class ProductValueObject {
  constructor(
    private readonly id: string,
    private readonly quantity: QuantityValueObject,
    private readonly price: PriceValueObject
  ) {}
}
