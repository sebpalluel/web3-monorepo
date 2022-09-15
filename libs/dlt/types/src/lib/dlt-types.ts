import { providers, Signer } from 'ethers';

export type TDlt = 'eth' | 'iota';

export interface TWallet {
  address: string;
  version: number;
  chainId: number;
  nonce: string;
}

export type TProvider = providers.Web3Provider;

export type TSigner = Signer;
