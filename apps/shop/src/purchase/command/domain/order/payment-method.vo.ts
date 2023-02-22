export class PaymentMethodValueObject {
  private constructor(readonly value: string) {}

  static from(value: string) {
    return new PaymentMethodValueObject(value);
  }
}
