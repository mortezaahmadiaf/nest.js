import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { hash } from 'bcrypt';
import { UserEntity } from '../user/entity';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}
  async validateUser(username: string, password: string) {
    const user = await this.userService.findOneWithUsername(username);
    if (user && (await hash(password, 10)) === user.password) {
      const { password, ...res } = user;
      return res;
    }
    return null;
  }

  async login(user: UserEntity) {
    const payload = {
      username: user.email,
      sub: {
        name: user.name,
      },
    };

    return { ...user, accessToken: this.jwtService.sign(payload) };
  }
}
