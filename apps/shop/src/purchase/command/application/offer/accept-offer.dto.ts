export interface AcceptOfferDto {
  readonly offerId: string;
  readonly discountCode: string;
  readonly deliveryMethod: string;
  readonly city: string;
  readonly street: string;
}
