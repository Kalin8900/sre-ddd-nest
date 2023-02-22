import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../../domain/order/order.repository';
import { PaymentMethodValueObject } from '../../domain/order/payment-method.vo';

@Injectable()
export class OrderCommandFacade {
  constructor(private readonly orderRepository: OrderRepository) {}

  public async place(orderId: string, paymentMethod: string): Promise<void> {
    const order = await this.orderRepository.findBy(orderId);
    const paymentMethodVO = PaymentMethodValueObject.from(paymentMethod);

    order.place(paymentMethodVO);

    this.orderRepository.save(order);
  }
}
