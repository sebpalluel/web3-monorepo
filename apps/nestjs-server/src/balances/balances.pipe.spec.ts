import { IsEthAddressPipe, isSupportedNetworkPipe } from './balances.pipe';

describe('BalancesPipe', () => {
  it('should be defined', () => {
    expect(new IsEthAddressPipe()).toBeDefined();
    expect(new isSupportedNetworkPipe()).toBeDefined();
  });
});
