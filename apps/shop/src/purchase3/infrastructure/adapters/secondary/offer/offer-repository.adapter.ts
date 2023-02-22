import { Injectable } from '@nestjs/common';
import { OfferRepository } from '../../../../command/domain/offer/offer.repository';
import { OfferAggregateRoot } from '../../../../command/domain/offer/offer.root';

@Injectable()
export class OfferRepositoryAdapter extends OfferRepository {
  findBy(id: string): Promise<OfferAggregateRoot> {
    throw new Error('Method not implemented.');
  }
}
