import { Injectable } from '@nestjs/common';
import { PurchaseSagaRepository } from '../../../../../purchase/command/domain/purchase/purchase-saga.repository';
import { PurchaseSaga } from '../../../../../purchase/command/domain/purchase/purchase.saga';

@Injectable()
export class PurchaseSagaRepositoryAdapter extends PurchaseSagaRepository {
  public find(id: string): Promise<PurchaseSaga> {
    throw new Error('Method not implemented.');
  }
  public save(saga: PurchaseSaga): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
