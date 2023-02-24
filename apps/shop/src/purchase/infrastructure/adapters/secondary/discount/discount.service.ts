import { Injectable } from '@nestjs/common';
import { DiscountService } from '../../../../../purchase/command/domain/order/discount.service';
import { PriceValueObject } from '../../../../../purchase/command/domain/price/price.vo';

@Injectable()
export class DiscountServiceAdapter extends DiscountService {
  withDiscount(
    price: PriceValueObject,
    discountCode: string
  ): PriceValueObject {
    throw new Error('Method not implemented.');
  }
}
