import { IsEnum, IsString } from 'class-validator';

export class AcceptOfferDto {
  @IsString() // create dedicated decorator
  discountCode!: string;

  @IsEnum(['standard', 'express']) // create dedicated decorator
  deliveryMethod!: string;

  @IsString() // create dedicated decorator
  city!: string;

  @IsString() // create dedicated decorator
  street!: string;
}
