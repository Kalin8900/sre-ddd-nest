export class QuantityValueObject {
  constructor(private readonly value: number) {
    // if more complex validation is needed, use a dedicated factory (this could be extracted too)
    if (value < 1) {
      throw new Error('Quantity must be greater than 0');
    }
  }

  public get(): number {
    return this.value;
  }
}
