import type { OrderAggregateRoot } from './order.root';

export abstract class OrderRepository {
  abstract findBy(id: string): Promise<OrderAggregateRoot>;
  abstract save(order: OrderAggregateRoot): Promise<void>;
}
