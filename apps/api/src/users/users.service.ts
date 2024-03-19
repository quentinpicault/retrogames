import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { ICreateUserDto, IValidateUserDto } from '@retrogames/shared-library';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>
  ) {}

  async validateUser(dto: IValidateUserDto) {
    return {};
  }

  createUser(dto: ICreateUserDto) {
    return {};
  }

  findUser(auth0Id: string): Promise<User | null> {
    return new Promise((resolve, reject) => {
      resolve({} as User);
    });
  }
}
