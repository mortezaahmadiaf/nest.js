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
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { UserService } from './user.service';
import { CommentService } from '../comment/comment.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly commentService: CommentService,
  ) {}
  @Get()
  findAllUsers() {
    this.userService.findAll(0, 10, '');
    return 'get user';
  }
  @Get(':id')
  finedUserById(@Param('id') id: string) {
    this.userService.findOne(id);
    return 'get user';
  }
  @Get('comment/:id')
  finedCommentsUserById(@Param('id') id: string) {
    this.commentService.findUserComment(id);
    return 'get user';
  }
  @Post()
  createUser(@Body() body: CreateUserDto) {
    this.userService.create();
    return body;
  }

  @Put()
  updateUser(@Body() body: UpdateUserDto) {
    this.userService.update;
    return body;
  }

  @Patch()
  patchUser() {
    this.userService.patch();
  }

  @Delete()
  deleteUser() {
    this.userService.delete();
  }
}
