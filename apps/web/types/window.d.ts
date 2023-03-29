import type SocialLogin from '@biconomy-sdk-dev/web3-auth';
import type SmartAccount from '@biconomy-sdk-dev/smart-account';

declare global {
  interface Window {
    biconomySocialLogin?: SocialLogin;
    biconomySmartAccount?: SmartAccount;
  }
}
