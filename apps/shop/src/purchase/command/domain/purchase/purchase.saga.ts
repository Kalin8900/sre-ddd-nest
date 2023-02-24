import { OrderCreatedEvent } from './order-created.event';

export class PurchaseSaga {
  public async handle(event: OrderCreatedEvent): Promise<void> {
    if (this.isNotCompleted()) {
      // do sth buisness logic
    }

    this.tryComplete(); // async?
  }

  private isNotCompleted(): boolean {
    return false; // ...
  }

  private tryComplete(): void {
    // ...
  }
}
