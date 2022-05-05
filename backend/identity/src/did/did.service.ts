import { Injectable } from '@nestjs/common';
import { CreateDidInput } from './dto/create-did.input';
import { UpdateDidInput } from './dto/update-did.input';

@Injectable()
export class DidService {
  create(createDidInput: CreateDidInput) {
    return 'This action adds a new did';
  }

  findAll() {
    return `This action returns all did`;
  }

  findOne(id: number) {
    return `This action returns a #${id} did`;
  }

  update(id: number, updateDidInput: UpdateDidInput) {
    return `This action updates a #${id} did`;
  }

  remove(id: number) {
    return `This action removes a #${id} did`;
  }
}
