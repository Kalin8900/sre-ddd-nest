import { PriceValueObject } from '../price/price.vo';
import { QuantityValueObject } from '../quantity/quantity.vo';

export class ProductValueObject {
  constructor(
    private readonly id: string,
    private readonly quantity: QuantityValueObject,
    private readonly price: PriceValueObject
  ) {}

  public getId(): string {
    return this.id;
  }

  public getQuantity(): QuantityValueObject {
    return this.quantity;
  }

  public getPrice(): PriceValueObject {
    return this.price;
  }
}
