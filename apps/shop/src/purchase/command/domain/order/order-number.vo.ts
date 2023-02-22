import { randomUUID } from 'crypto';

export class OrderNumberValueObject {
  private constructor(private readonly value: string) {}

  static generate(): OrderNumberValueObject {
    return new OrderNumberValueObject(randomUUID());
  }
}
