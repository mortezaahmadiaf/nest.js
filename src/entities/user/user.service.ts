import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly useRepo: Repository<UserEntity>,
  ) {}
  async findOne(id: number) {
    const res = await this.useRepo.findOne({ where: { id } });
    return res;
  }
  async findAll(page: number, size: number, order: string) {
    const res = await this.useRepo.find({
      skip: page * size,
      take: size,
      order: { id: 'desc' },
    });
    return res;
  }

  async create(data: CreateUserDto) {
    const user = await this.useRepo.create(data);
    const res = await this.useRepo.save(user);
    return res;
  }
  async update(data: UpdateUserDto) {
    const res = await this.useRepo.update({ id: data.id }, data);
    return res;
  }
  async delete(id: number) {
    const res = await this.useRepo.delete({ id });
    return res;
  }
  async patch() {}
}
