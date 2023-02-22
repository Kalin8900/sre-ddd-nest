import { IsEnum } from 'class-validator';

export class PlaceOrderDto {
  @IsEnum(['blik', 'paypal'])
  paymentMethod: string;
}
