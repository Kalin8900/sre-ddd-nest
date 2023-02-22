import { Body, Controller, Param, Post } from '@nestjs/common';
import { OfferCommandFacade } from '../../../../command/application/offer/offer-command.facade';
import { AcceptOfferDto } from './dto/accept-offer.dto';

@Controller('offer')
export class OfferController {
  constructor(private readonly offerCommandFacade: OfferCommandFacade) {}

  @Post('/:id/accept') // not restful: violates 2nd maturity level
  // what about the arguments?
  public accept(
    @Param('id') offerId: string,
    @Body() dto: AcceptOfferDto
  ): void {
    this.offerCommandFacade.accept({
      ...dto,
      offerId,
    });
  }
}
