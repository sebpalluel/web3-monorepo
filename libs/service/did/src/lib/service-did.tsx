import { createContext, useContext, PropsWithChildren } from 'react';
import ethers, { Signer } from 'ethers';
import { createMachine, assign } from 'xstate';
import { useMachine } from '@xstate/react';
import { logger } from '@governance/logger';

interface ServiceDidProps {
  api: string;
  domain: string;
  origin: string;
  ethProvider: ethers.providers.Web3Provider;
  ethSigner: Signer;
  signInWithEth(): null;
  signOut(): null;
}

// interface ServiceDidContext {
//   blockchain: ;
// }

const DidContext = createContext<ServiceDidProps | null>(null);

const signInWithEth = () => {
  return null;
};

const signOut = () => {
  return null;
};

export const DidProvider = (props: PropsWithChildren<ServiceDidProps>) => {
  try {
    if (!props.ethProvider) {
      props.ethProvider = new ethers.providers.Web3Provider((window as any).ethereum);
      props.ethSigner = props.ethProvider.getSigner();
    }
  } catch (e) {
    logger.debug({ e });
    //TODO maybe avoid displaying alert and remove option to signInWithEth
    alert('Please install a web3 wallet e.g. MetaMask');
    throw new Error('Stopping execution as no web3 wallet was found.');
  }
  const value = {
    ...props,
    signInWithEth: props.signInWithEth || signInWithEth,
    signOut: props.signOut || signOut,
    domain: props.domain || window.location.hostname,
    origin: props.origin || window.location.origin,
    api: props.api || (process.env.IDPKIT_API_URL as string),
  };

  return <DidContext.Provider value={value}>{props.children}</DidContext.Provider>;
};

export const useDid = () => {
  const context = useContext(DidContext);
  if (!context) {
    throw new Error(`useDid must be used within a DidProvider`);
  }
  return context;
};
