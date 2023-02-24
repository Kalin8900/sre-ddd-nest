import { Injectable } from '@nestjs/common';
import { OfferRepository } from '../../domain/offer/offer.repository';
import { AddressValueObjectFactory } from '../../domain/order/address.factory';
import { CreateOrderDto } from '../../domain/order/create-order.dto';
import { DeliveryMethodValueObject } from '../../domain/order/delivery-method.vo';
import { OrderFactory } from '../../domain/order/order.factory';
import { OrderRepository } from '../../domain/order/order.repository';
import type { AcceptOfferDto } from './accept-offer.dto';

@Injectable()
export class OfferCommandFacade {
  constructor(
    private readonly offerRepository: OfferRepository,
    private readonly orderRepository: OrderRepository,
    private readonly addressFactory: AddressValueObjectFactory,
    private readonly orderFactory: OrderFactory
  ) {}

  public async accept(dto: AcceptOfferDto): Promise<void> {
    const offer = await this.offerRepository.findBy(dto.offerId);
    const createDto: CreateOrderDto = {
      address: this.addressFactory.create(dto.street, dto.city),
      deliveryMethod: DeliveryMethodValueObject.from(dto.deliveryMethod),
      discountCode: dto.discountCode,
    };

    const order = offer.accept(this.orderFactory, createDto);

    this.orderRepository.save(order);
  }
}
