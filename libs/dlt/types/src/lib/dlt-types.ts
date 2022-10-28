/* eslint-disable @typescript-eslint/no-var-requires */
import { providers, Signer } from 'ethers';
import { CoinListResponseItem } from 'coingecko-api-v3';
import chains from './chainsId';
import { CoinMarket } from 'coingecko-api-v3';
import { TokenMetadataResponse, TokenBalance } from 'alchemy-sdk';
// setup env variables
require('dotenv').config({ path: './.env.local' });

export type TDlt = 'eth' | 'iota';

export interface TWallet {
  address: string;
  version: number;
  chainId: number;
  nonce: string;
}

export type TProvider = providers.Web3Provider;

export type TSigner = Signer;

export enum EIP3770Network {
  ETH = 'eth',
  POLY = 'poly',
  ARB = 'arb',
}

// model Transaction {
//   id              String   @id @default(cuid())
//   fromAddress     String
//   toAddress       String
//   value           Float
//   gasLimit        Float
//   gasPrice        Float
//   gasUsed         Float
//   gasFee          Float
//   gasFeeUsd       Float
//   nonce           Int
//   status          Boolean
//   data            String
//   input           String
//   blockNumber     Float
//   blockHash       String
//   transaction     String
//   createdAt       DateTime @default(now())
//   updatedAt       DateTime @updatedAt
//   contractAddress String?
//   Wallet          Wallet?  @relation(fields: [walletId], references: [id])
//   walletId        String?
// }

export interface Transactions {
  id: string;
  fromAddress: string;
  toAddress: string;
  value: number;
  gasLimit?: number;
  gasPrice?: number;
  gasUsed?: number;
  gasFee?: number;
  gasFeeUsd?: number;
  nonce: number;
  status: boolean;
  data: string;
  input: string;
  blockNumber: number;
  blockHash: string;
  transaction: string;
  createdAt?: Date;
  updatedAt?: Date;
  contractAddress?: string | null;
}

export interface TTokenData extends TokenMetadataResponse {
  contractAddress: string;
}

type Merge<A, B> = { [K in keyof A]: K extends keyof B ? B[K] : A[K] } & B extends infer O
  ? { [K in keyof O]: O[K] }
  : never;

// The type to have the balance and the metadata of the token
export type TTokenBalance = Merge<TokenBalance, TTokenData>;

export interface WalletData {
  balanceUsd?: number;
  name?: string;
  pendingTransactions?: Transactions[];
}

export type TEIP377 = EIP3770Network.ETH | EIP3770Network.POLY | EIP3770Network.ARB;

export type TCryptocurrency = {
  [key: string]: CoinListResponseItem;
};

export type TCryptocurrencyWithAddress = CoinMarket & { contractAddress: string };

export type TCryptocurrencyData = {
  [key: string]: TCryptocurrencyWithAddress;
};

export type TBalanceTokenData = {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  balanceUsd?: number;
};

export const supportedChains = {
  eth: {
    ...chains.find((chain) => chain.name === 'Ethereum Mainnet'),
    // ...chains.find((chain) => chain.name === process.env.ETHEREUM_NETWORK),
    coingecko: {
      category: 'ethereum-ecosystem',
      platform: 'ethereum',
      pageThreshold: process.env.ETHEREUM_COINGECKO_PAGE_THRESHOLD, // real limit is 50
    },
    network: EIP3770Network.ETH,
  },
  poly: {
    ...chains.find((chain) => chain.name === 'Polygon Mainnet'),
    // ...chains.find((chain) => chain.name === process.env.POLYGON_NETWORK),
    coingecko: {
      category: 'polygon-ecosystem',
      platform: 'polygon-pos',
      pageThreshold: process.env.POLYGON_COINGECKO_PAGE_THRESHOLD, // real limit is 20
    },
    network: EIP3770Network.POLY,
  },
  arb: {
    ...chains.find((chain) => chain.name === 'Arbitrum One'),
    coingecko: {
      category: 'arbitrum-ecosystem',
      platform: 'arbitrum-one',
      pageThreshold: process.env.ARBITRUM_COINGECKO_PAGE_THRESHOLD, // real limit is 4
    },
    network: EIP3770Network.ARB,
  },
};
