export class QuantityValueObject {
  constructor(private readonly value: number) {
    if (value < 1) {
      throw new Error('Quantity must be greater than 0');
    }
  }

  public getValue(): number {
    return this.value;
  }
}
