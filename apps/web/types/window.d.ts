import type SocialLogin from '@biconomy/web3-auth';
import type SmartAccount from '@biconomy/smart-account';

declare global {
  interface Window {
    biconomySocialLogin?: SocialLogin;
    biconomySmartAccount?: SmartAccount;
  }
}
