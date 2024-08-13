import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto';
import { UserService } from './user.service';
import { CommentService } from '../comment/comment.service';
import { JwtGuard } from '../auth/guards/jwt-auth-guard';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly commentService: CommentService,
  ) {}
  @UseGuards(JwtGuard)
  @Get()
  async findAllUsers() {
    const res = await this.userService.findAll(0, 10, 'id', 'ASC');
    return res;
  }
  @UseGuards(JwtGuard)
  @Get('/:id')
  async finedUserById(@Param('id') id: number) {
    const res = await this.userService.findOne(id);
    return res;
  }
  @UseGuards(JwtGuard)
  @Get('comment/:id')
  async finedCommentsUserById(@Param('id') id: string) {
    const res = await this.commentService.findUserComment(id);
    return res;
  }
  @Post()
  async createUser(@Body() body: CreateUserDto) {
    const res = await this.userService.create(body);
    return res;
  }
  @UseGuards(JwtGuard)
  @Put()
  async updateUser(@Body() body: UpdateUserDto) {
    const res = await this.userService.update;
    return res;
  }
  @UseGuards(JwtGuard)
  @Patch()
  async patchUser() {
    const res = await this.userService.patch();
    return res;
  }
  @UseGuards(JwtGuard)
  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return await this.userService.delete(id);
  }
}
