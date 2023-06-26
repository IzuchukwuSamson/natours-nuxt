import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository, FindOneOptions } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  find(email: string) {
    return this.repo.find({ where: { email } });
  }

  async create(data: Partial<User>) {
    const user = await this.repo.save(new User(data));
    // console.log(user);
    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.repo.find();
    return users;
  }

  async findOne(where: FindOneOptions<User>) {
    const user = await this.repo.findOne(where);

    if (!user) {
      throw new NotFoundException(
        `There isn't any user with identifier: ${where}`,
      );
    }

    return user;
  }

  async update(id: any | FindOneOptions<User>, updateUser: UpdateUserDto) {
    const user = await this.repo.findOne(id);

    if (!user) {
      throw new NotFoundException(`There isn't any user with id: ${id}`);
    }
    Object.assign(user, updateUser);

    return this.repo.save(user);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
