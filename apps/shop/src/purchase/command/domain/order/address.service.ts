export abstract class AddressService {
  abstract isValid(street: string, city: string): boolean;
}
