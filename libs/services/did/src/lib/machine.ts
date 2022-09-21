import { createMachine, assign } from 'xstate';
import type { TDlt, TWallet, TProvider, TSigner } from '@boilerplate/dlt/types';
import ethers, { Signer } from 'ethers';

interface ServiceDidContext {
  blockchain: TDlt | null;
  wallet: TWallet | null;
  error: string;
  provider: TProvider | null;
  signer: TSigner | null;
}

function getWeb3WalletService() {
  return (cb: any) => {
    const { ethereum } = window as any;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      cb({ type: 'connecting', data: { provider, signer: provider.getSigner() } });
    } else {
      cb({
        type: 'error',
        error: new Error('Please install a web3 wallet e.g. MetaMask'),
      });
      return;
    }
  };
}

const machine: any = createMachine<ServiceDidContext>(
  {
    id: 'did',
    context: {
      provider: null,
      signer: null,
      blockchain: null,
      wallet: null,
      error: '',
    },
    schema: {
      // services: {} as {
      //   myService: {
      //     // The data that gets returned from the service
      //     data: { provider: };
      //   };
      // },
    },
    initial: 'pending',
    // invoke a service that lasts for the lifetime
    // of this machine
    invoke: {
      src: 'geoService',
    },
    states: {
      pending: {
        on: {
          RESOLVE: { target: 'connecting' },
          REJECT: { target: 'not_available' },
        },
      },
      connecting: {},
      connected: {
        type: 'final',
      },
      rejected: {},
      not_available: {
        type: 'final',
      },
    },
    // lives on the root node because
    // these events can transition in any state
    on: {
      success: {
        target: '.resolved',
        actions: 'assignWallet',
      },
      error: {
        target: '.rejected',
        actions: assign({
          error: (_, event) => event.error,
        }),
      },
    },
  },
  {
    actions: {
      assignWallet: assign({
        wallet: (_, event) => event.wallet,
      }),
    },
    services: { getWeb3WalletService },
  }
);
export default machine;
