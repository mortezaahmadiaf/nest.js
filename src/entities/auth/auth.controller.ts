import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth-guard';
import { CreateUserDto } from '../user/dto';
import { UserService } from '../user/user.service';
import { RefreshJwtGuard } from './guards/refresh-jwt-auth-guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }

  @Post('/register')
  async registerUser(@Body() body: CreateUserDto) {
    return await this.userService.create(body);
  }

  @UseGuards(RefreshJwtGuard)
  @Post('/refresh')
  async refreshToken(@Request() req) {
    return await this.authService.refresh(req.user);
  }
}
