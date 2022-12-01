import { Controller, Get, Param } from '@nestjs/common';
import { BalancesService } from './balances.service';
import { IsEthAddressPipe, isSupportedNetworkPipe } from './balances.pipe';
import type { TEIP377 } from '@dlt/types';

@Controller('balances')
export class BalancesController {
  constructor(private readonly balancesService: BalancesService) {}
  @Get(':network/:address')
  fetchTokensFromAddressAndSyncWallet(
    @Param('network', isSupportedNetworkPipe) network: TEIP377,
    @Param('address', IsEthAddressPipe) address: string
  ) {
    return this.balancesService.fetchTokensFromAddressAndSyncWallet(network, address);
  }
}
