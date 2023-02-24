import { Injectable } from '@nestjs/common';
import { OrderCreatedEvent } from '../../domain/purchase/order-created.event';
import { PurchaseSagaRepository } from '../../domain/purchase/purchase-saga.repository';
import { PurchaseSaga } from '../../domain/purchase/purchase.saga';

@Injectable()
export class PurchaseSagaFacade {
  constructor(
    private readonly purchaseSagaRepository: PurchaseSagaRepository
  ) {}

  public async listen(event: OrderCreatedEvent) {
    const saga = await this.findOrCreate(event.getTraceId());

    saga.handle(event);

    await this.purchaseSagaRepository.save(saga);
  }

  private async findOrCreate(purchaseId: string): Promise<PurchaseSaga> {
    const purchaseSaga = await this.purchaseSagaRepository.find(purchaseId);

    if (!purchaseSaga) {
      return new PurchaseSaga();
    }

    return purchaseSaga;
  }
}
