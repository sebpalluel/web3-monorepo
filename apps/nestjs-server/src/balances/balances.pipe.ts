import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { isAddress } from 'ethers/lib/utils';
import { EIP3770Network, TEIP377 } from '@dlt/types';

@Injectable()
export class IsEthAddressPipe implements PipeTransform {
  transform(value: string) {
    if (!isAddress(value)) {
      throw new BadRequestException('Address is not valid');
    }
    return value;
  }
}

@Injectable()
export class isSupportedNetworkPipe implements PipeTransform {
  async transform(value: TEIP377) {
    const networks = Object.values(EIP3770Network).filter((v) => isNaN(Number(v)));
    if (!networks.includes(value)) {
      throw new BadRequestException('Network not supported');
    }
    return value;
  }
}
