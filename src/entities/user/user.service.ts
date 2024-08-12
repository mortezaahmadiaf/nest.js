import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findOne(id: string) {
    return { id };
  }
  findAll(page: number, size: number, order: string) {
    return { page, size, order };
  }

  create() {}
  update() {}
  delete() {}
  patch() {}
}
