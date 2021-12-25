import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { compareSync } from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async validateUser(email: string, password: string) {
    const user = await this.userRepo.findOne(
      {
        email,
      },
      {
        select: ['id', 'email', 'password'],
      },
    );
    console.log(compareSync(password, user.password));

    if (user && compareSync(password, user.password)) {
      delete user.password;
      return user;
    }

    return null;
  }
}
