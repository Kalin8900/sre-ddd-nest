import { Body, Controller, Param, Post } from '@nestjs/common';
import { OrderQueryFacade } from '../../../../../purchase/query/order/order-query.facade';
import { OrderCommandFacade } from '../../../../command/application/order/order-command.facade';
import { PlaceOrderDto } from './dto/place-order.dto';

@Controller('order')
export class OrderController {
  constructor(
    private readonly orderCommandFacade: OrderCommandFacade,
    private readonly orderQueryFacade: OrderQueryFacade
  ) {}

  @Post('/:id/place') // not restful: violates 2nd maturity level
  public place(
    @Param('id') orderId: string,
    @Body() { paymentMethod }: PlaceOrderDto
  ): void {
    this.orderCommandFacade.place(orderId, paymentMethod);
  }
}
