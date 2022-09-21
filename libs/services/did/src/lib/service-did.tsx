import { createContext, useContext, PropsWithChildren } from 'react';
import { useMachine } from '@xstate/react';
import didMachine from './machine';

interface ServiceDidProps {
  api: string;
  domain: string;
  origin: string;
  connectWallet(): null;
  signOut(): null;
}

export function useDidConnect() {
  const [state] = useMachine(didMachine);

  return {
    state,
    error: state.context.error,
  };
}

const DidContext = createContext<ServiceDidProps | null>(null);

const connectWallet = () => {
  return null;
};

const signOut = () => {
  return null;
};

export const DidProvider = (props: PropsWithChildren<ServiceDidProps>) => {
  const value = {
    ...props,
    connectWallet: props.connectWallet || connectWallet,
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
