import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as pactum from 'pactum';
import { AppModule } from './app.module';
import { PrismaService } from '@server/prisma';
import { CryptocurrenciesService } from '@server/cryptocurrencies';
import { BalancesService } from '../balances/balances.service';
import { convertArrayOfObjtoObjWithKeys } from '@utils';
import {
  EIP3770Network,
  allEthCryptoMarketFromCoingecko,
  allPolyCryptoMarketFromCoingecko,
  allArbCryptoMarketFromCoingecko,
} from '@dlt/types';

describe('NestJS Server e2e', () => {
  let app: INestApplication;
  let prismaService: PrismaService;
  let balancesService: BalancesService;
  let cryptoService: CryptocurrenciesService;
  let spyCryptoService: jest.SpyInstance;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      })
    );
    await app.init();
    await app.listen(3333);

    prismaService = app.get(PrismaService);
    await prismaService.cleanDb();
    pactum.request.setBaseUrl('http://localhost:3333');
    balancesService = app.get(BalancesService);
    cryptoService = app.get(CryptocurrenciesService);
    spyCryptoService = jest.spyOn(cryptoService, 'getCryptocurrenciesData');
  });

  afterAll(async () => {
    await prismaService.cleanDb();
  });

  describe('App', () => {
    //balances/:network/:address
    describe('Balances route', () => {
      it('should return an array of tokens for eth address with right balances and create and update wallet with balanceUsd at each call', async () => {
        /// here we mock the resolved value from coingecko for the market data of coins for ethereum
        spyCryptoService.mockResolvedValue(
          convertArrayOfObjtoObjWithKeys(
            JSON.parse(JSON.stringify(allEthCryptoMarketFromCoingecko)),
            'contractAddress'
          )
        );
        const ethAddress = '0xb21090C8f6bAC1ba614A3F529aAe728eA92B6487';
        const res = await balancesService.fetchTokensFromAddressAndSyncWallet(
          // EIP3770Network.POLY,
          // '0x3c89fC868803A2478C2E875A97299F240b0290C4'
          // EIP3770Network.ARB,
          // '0x9a8eC29B75Bc10d68D97Dce73fD3Bbec43752870'
          EIP3770Network.ETH,
          ethAddress
        );
        // check for this data
        // {
        //   address: '0xcc4304a31d09258b0029ea7fe63d032f52e44efe',
        //   balance: '3288727107844266960',
        //   balanceUsd: 0.7,
        //   decimals: 18,
        //   name: 'TrustSwap',
        //   symbol: 'SWAP'
        // }

        expect(res).toBeInstanceOf(Array);
        expect(res[0]).toHaveProperty('address');
        expect(res[0]).toHaveProperty('balance');
        expect(res[0]).toHaveProperty('balanceUsd');
        expect(res[0]).toHaveProperty('decimals');
        expect(res[0]).toHaveProperty('name');
        expect(res[0]).toHaveProperty('symbol');

        await pactum
          .spec()
          .get('/balances/eth/0xb21090C8f6bAC1ba614A3F529aAe728eA92B6487')
          .expectStatus(200)
          .expectJson(res);
        const wallets = await prismaService.wallet.findMany();
        expect(wallets).toHaveLength(1);
        const wallet = await prismaService.wallet.findUnique({
          where: { EIP377: { address: ethAddress, network: EIP3770Network.ETH } },
        });
        expect(wallet).toHaveProperty('id');
        expect(wallet).toHaveProperty('network', EIP3770Network.ETH);
        expect(wallet).toHaveProperty('address', ethAddress);
        expect(wallet).toHaveProperty('balanceUsd');
      });
      it('should return an array of tokens for poly address with right balances and create and update wallet with balanceUsd at each call', async () => {
        // here we mock the resolved value from coingecko for the market data of coins for polygon
        spyCryptoService.mockResolvedValue(
          convertArrayOfObjtoObjWithKeys(
            JSON.parse(JSON.stringify(allPolyCryptoMarketFromCoingecko)),
            'contractAddress'
          )
        );
        const polyAddress = '0x3c89fC868803A2478C2E875A97299F240b0290C4';
        const res = await balancesService.fetchTokensFromAddressAndSyncWallet(
          EIP3770Network.POLY,
          polyAddress
        );
        expect(res).toBeInstanceOf(Array);
        expect(res[0]).toHaveProperty('address');
        expect(res[0]).toHaveProperty('balance');
        expect(res[0]).toHaveProperty('balanceUsd');
        expect(res[0]).toHaveProperty('decimals');
        expect(res[0]).toHaveProperty('name');
        expect(res[0]).toHaveProperty('symbol');

        await pactum
          .spec()
          .get('/balances/poly/0x3c89fC868803A2478C2E875A97299F240b0290C4')
          .expectStatus(200)
          .expectJson(res);
        const wallets = await prismaService.wallet.findMany();

        expect(wallets).toHaveLength(2);
        const wallet = await prismaService.wallet.findUnique({
          where: { EIP377: { address: polyAddress, network: EIP3770Network.POLY } },
        });
        expect(wallet).toHaveProperty('id');
        expect(wallet).toHaveProperty('network', EIP3770Network.POLY);
        expect(wallet).toHaveProperty('address', polyAddress);
        expect(wallet).toHaveProperty('balanceUsd');
      });
      it('should return an array of tokens for arb address with right balances and create and update wallet with balanceUsd at each call', async () => {
        // here we mock the resolved value from coingecko for the market data of coins for polygon
        spyCryptoService.mockResolvedValue(
          convertArrayOfObjtoObjWithKeys(
            JSON.parse(JSON.stringify(allArbCryptoMarketFromCoingecko)),
            'contractAddress'
          )
        );
        const arbAddress = '0x9a8eC29B75Bc10d68D97Dce73fD3Bbec43752870';
        const res = await balancesService.fetchTokensFromAddressAndSyncWallet(
          EIP3770Network.ARB,
          arbAddress
        );
        expect(res).toBeInstanceOf(Array);
        expect(res[0]).toHaveProperty('address');
        expect(res[0]).toHaveProperty('balance');
        expect(res[0]).toHaveProperty('balanceUsd');
        expect(res[0]).toHaveProperty('decimals');
        expect(res[0]).toHaveProperty('name');
        expect(res[0]).toHaveProperty('symbol');

        await pactum
          .spec()
          .get('/balances/arb/0x9a8eC29B75Bc10d68D97Dce73fD3Bbec43752870')
          .expectStatus(200)
          .expectJson(res);
        const wallets = await prismaService.wallet.findMany();
        expect(wallets).toHaveLength(3);
        const wallet = await prismaService.wallet.findUnique({
          where: { EIP377: { address: arbAddress, network: EIP3770Network.ARB } },
        });
        expect(wallet).toHaveProperty('id');
        expect(wallet).toHaveProperty('network', EIP3770Network.ARB);
        expect(wallet).toHaveProperty('address', arbAddress);
        expect(wallet).toHaveProperty('balanceUsd');
      });
    });
  });
  describe('Check errors', () => {
    it('should throw an error if address is invalid', async () => {
      await pactum
        .spec()
        .get('/balances/eth/0xb21090C8f6bAC1ba614A3F529aAe728eA92B648123123124124124124')
        .expectStatus(400);
    });
    it('should throw an error if network is invalid', async () => {
      await pactum
        .spec()
        .get('/balances/et/0xb21090C8f6bAC1ba614A3F529aAe728eA92B6487')
        .expectStatus(400);
    });
  });
});
