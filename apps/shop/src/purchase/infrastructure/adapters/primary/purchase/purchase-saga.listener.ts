import { Injectable } from '@nestjs/common';
import { OrderCreatedEvent } from '../../../../../purchase/command/domain/purchase/order-created.event';
import { PurchaseSagaFacade } from '../../../../../purchase/command/application/purchase/purchase-saga.facade';

@Injectable()
export class PurchaseSagaListener {
  constructor(private readonly purchaseSagaFacade: PurchaseSagaFacade) {}

  public onOrderCreated(): void {
    this.purchaseSagaFacade.listen(new OrderCreatedEvent());
  }
}
