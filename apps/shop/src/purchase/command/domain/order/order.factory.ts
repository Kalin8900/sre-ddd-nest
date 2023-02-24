import { Injectable } from '@nestjs/common';
import { PriceValueObject } from '../price/price.vo';
import type { ProductValueObject } from '../product/product.vo';
import { CreateOrderDto } from './create-order.dto';
import { DiscountService } from './discount.service';
import { OrderNumberValueObject } from './order-number.vo';
import { OrderStateValueObject } from './order-state.vo';
import { OrderAggregateRoot } from './order.root';

@Injectable()
export class OrderFactory {
  constructor(private readonly discountService: DiscountService) {}

  public create(
    products: ProductValueObject[],
    dto: CreateOrderDto
  ): OrderAggregateRoot {
    return new OrderAggregateRoot({
      products,
      price: this.getFinalPriceFor(products, dto.discountCode),
      orderNumber: OrderNumberValueObject.generate(),
      state: OrderStateValueObject.CREATED,
      address: dto.address,
      deliveryMethod: dto.deliveryMethod,
      discountCode: dto.discountCode,
    });
  }

  private getFinalPriceFor(
    products: ProductValueObject[],
    discountCode?: string
  ): PriceValueObject {
    const finalPrice = products.reduce((acc, product) => {
      return acc.add(product.getPrice());
    }, new PriceValueObject(0));

    if (!discountCode) return finalPrice;

    return this.discountService.withDiscount(finalPrice, discountCode);
  }
}
