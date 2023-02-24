import { QuantityValueObject } from '../quantity/quantity.vo';

// should use some library e.g. decimal.js or big.js
export class PriceValueObject {
  constructor(private readonly value: number) {
    // if more complex validation is needed, use a dedicated factory (this could be extracted too)
    if (value < 0) {
      throw new Error('Price must be greater than 0');
    }
  }

  public add(price: PriceValueObject): PriceValueObject {
    return new PriceValueObject(this.value + price.value);
  }

  public multiply(quantity: QuantityValueObject): PriceValueObject {
    return new PriceValueObject(this.value * quantity.get());
  }
}
