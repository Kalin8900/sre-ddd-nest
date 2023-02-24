import { PurchaseSaga } from './purchase.saga';

export abstract class PurchaseSagaRepository {
  public abstract find(id: string): Promise<PurchaseSaga | undefined>;
  public abstract save(saga: PurchaseSaga): Promise<void>;
}
