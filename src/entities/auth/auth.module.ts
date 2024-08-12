import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/strategy-local';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService, JwtService, LocalStrategy],
  imports: [
    JwtModule.register({
      secret: 'SECRET_STRING',
      signOptions: { expiresIn: '3600s' },
    }),
  ],
})
export class AuthModule {}
