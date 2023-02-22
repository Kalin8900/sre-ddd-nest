import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../../../../command/domain/order/order.repository';
import { OrderAggregateRoot } from '../../../../command/domain/order/order.root';

@Injectable()
export class OrderRepositoryAdapter extends OrderRepository {
  findBy(id: string): Promise<OrderAggregateRoot> {
    throw new Error('Method not implemented.');
  }
  save(order: OrderAggregateRoot): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
