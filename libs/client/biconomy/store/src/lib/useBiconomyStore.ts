import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { createSelectors } from '@client/zustand';

import { ethers } from 'ethers';
import SmartAccount from '@biconomy-sdk-dev/smart-account';
import { ChainId } from '@biconomy-sdk-dev/core-types';
import { ExternalProvider } from '@ethersproject/providers';

interface BiconomyState {
  account: string | null;
  smartAccountAddress: string | null;
  smartAccountLoading: boolean;
}

type BiconomyActions = {
  setupBiconomy: (chainId: ChainId) => void;
  setupProviderAndAccount: (sdkProvider: ExternalProvider) => any;
  setupSmartAccount: (provider: ethers.providers.Web3Provider, chainId: ChainId) => void;
  reset: () => void;
};

// define the initial state
const initialState: BiconomyState = {
  account: null,
  smartAccountAddress: null,
  smartAccountLoading: false,
};

const store = create<BiconomyState & BiconomyActions>()(
  persist(
    (set, get) => ({
      ...initialState,
      setupBiconomy: async (chaindId) => {
        try {
          /// here would mean the user is already logged in to biconomy and smart account is already initialized
          if (window.biconomySmartAccount) return;
          set({ smartAccountLoading: true });
          if (!window.biconomySocialLogin)
            throw new Error('Biconomy Social Login not initialized');
          const sdkProvider = window.biconomySocialLogin?.provider;
          // here would mean the user is not logged in to biconomy yet
          if (!sdkProvider) return;
          const { setupProviderAndAccount, setupSmartAccount } = get();
          const provider = await setupProviderAndAccount(sdkProvider);
          await setupSmartAccount(provider, chaindId);
        } finally {
          set({ smartAccountLoading: false });
        }
      },
      setupProviderAndAccount: async (sdkProvider) => {
        const provider = new ethers.providers.Web3Provider(sdkProvider);
        const accounts = await provider.listAccounts();
        console.log('accounts', accounts, 'provider', provider);
        const { account: existingAccount } = get();
        if (existingAccount !== accounts[0]) set({ account: accounts[0] });
        return provider;
      },
      setupSmartAccount: async (provider, chainId) => {
        const { account } = get();
        if (!provider || !account) throw new Error('Provider or account not set');
        if (!window.biconomySmartAccount) {
          let networkConfig: any;
          // TODO set back when new dashboard is released
          // if (process.env.NEXT_APP_BICONOMY_API_KEY)
          //   networkConfig = [
          //     {
          //       chainId,
          //       //https://biconomy.gitbook.io/sdk/sdk-reference/sending-transactions/gasless-transactions
          //       dappAPIKey: process.env.NEXT_APP_BICONOMY_API_KEY,
          //       // check in the beginning of the page to play around with testnet common keys
          //       // customPaymasterAPI: <IPaymaster Instance of your own Paymaster>
          //     },
          //   ];

          const smartAccountSdk = new SmartAccount(provider, {
            activeNetworkId: chainId,
            supportedNetworksIds: [chainId],
            networkConfig,
          });
          await smartAccountSdk.init();
          const context = smartAccountSdk.getSmartAccountContext();
          const smartAccountAddress = context.baseWallet.getAddress();
          window.biconomySmartAccount = smartAccountSdk;
          set({ smartAccountAddress });
          console.log('smartAccountAddress', smartAccountAddress);
        }
      },
      reset: () => {
        set(initialState);
        delete window.biconomySmartAccount;
        delete window.biconomySocialLogin;
      },
    }),
    {
      name: 'biconomy-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // see here if need to use IndexedDB or Ionic Storage https://docs.pmnd.rs/zustand/integrations/persisting-store-data#how-can-i-use-a-custom-storage-engine?
      onRehydrateStorage: (state) => {
        console.log('hydration starts');
        // optional
        return (state, error) => {
          if (error) {
            console.log('an error happened during hydration', error);
          } else {
            console.log('hydration finished');
          }
        };
      },
    }
  )
);

export const useBiconomyStore = createSelectors(store);
