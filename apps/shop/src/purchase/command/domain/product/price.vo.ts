export class PriceValueObject {
  constructor(private readonly value: number) {
    if (value < 0) {
      throw new Error('Price must be greater than 0');
    }
  }

  public getValue(): number {
    return this.value;
  }
}
