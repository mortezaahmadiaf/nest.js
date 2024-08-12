import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto';
import { UserService } from './user.service';
import { CommentService } from '../comment/comment.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly commentService: CommentService,
  ) {}
  @Get()
  async findAllUsers() {
    const res = await this.userService.findAll(0, 10, 'id', 'ASC');
    return res;
  }
  @Get('/:id')
  async finedUserById(@Param('id') id: number) {
    const res = await this.userService.findOne(id);
    return res;
  }
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

  @Put()
  async updateUser(@Body() body: UpdateUserDto) {
    const res = await this.userService.update;
    return res;
  }

  @Patch()
  async patchUser() {
    const res = await this.userService.patch();
    return res;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return await this.userService.delete(id);
  }
}
