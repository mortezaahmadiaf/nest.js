import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './dto';

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
  async findAll(
    page: number,
    size: number,
    sort: 'id' | 'name' | 'email',
    order: 'ASC' | 'asc' | 'DESC' | 'desc',
  ) {
    const res = await this.useRepo.find({
      skip: page * size,
      take: size,
      order: { [sort]: order },
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

  async findOneWithUsername(username: string) {
    const user = await this.useRepo.findOne({ where: { email: username } });
    return user;
  }
}
