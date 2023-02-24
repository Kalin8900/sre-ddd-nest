import { Injectable } from '@nestjs/common';

import { AddressService } from '../../../../../purchase/command/domain/order/address.service';

// Open Host

@Injectable()
export class AddressServiceAdapter extends AddressService {
  isValid(street: string, city: string): boolean {
    throw new Error('Method not implemented.');
  }
}
