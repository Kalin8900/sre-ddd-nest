import { Injectable } from '@nestjs/common';
import { OfferRepository } from '../../domain/offer/offer.repository';
import { OrderRepository } from '../../domain/order/order.repository';
import type { AcceptOfferDto } from './accept-offer.dto';

// is it legal here?
@Injectable()
export class OfferCommandFacade {
  constructor(
    private readonly offerRepository: OfferRepository,
    private readonly orderRepository: OrderRepository
  ) {}

  public async accept(dto: AcceptOfferDto): Promise<void> {
    const offer = await this.offerRepository.findBy(dto.offerId);

    const order = offer.accept();

    this.orderRepository.save(order);
  }
}
