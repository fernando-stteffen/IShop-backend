import { Body, Controller, Post } from '@nestjs/common';
import { createUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  async createUser(@Body() createUser: createUserDto) {
    return {
      ...createUser,
      password: undefined,
    };
  }
}
