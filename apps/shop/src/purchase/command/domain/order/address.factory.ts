import { Injectable } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressValueObject } from './address.vo';
import { NotValidAddressException } from './not-valid-address.exception';

@Injectable()
export class AddressValueObjectFactory {
  constructor(private readonly addressService: AddressService) {}

  public create(street: string, city: string): AddressValueObject {
    if (!this.addressService.isValid(street, city)) {
      throw new NotValidAddressException('Invalid address');
    }

    return new AddressValueObject(street, city);
  }
}
