import type { OfferAggregateRoot } from './offer.root';

export abstract class OfferRepository {
  abstract findBy(id: string): Promise<OfferAggregateRoot>;
}
