import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserData } from 'src/types';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAllUsers() {
    const users = await this.usersService.getAllUsers();
    return users;
  }

  @Get(':userId')
  async getUser(@Param('userId') userId) {
    const user = await this.usersService.getUser(userId);
    return user;
  }

  @Post()
  async addUser(@Body() userData: UserData) {
    return await this.usersService.addUser(userData);
  }

  @Delete(':userId')
  async deleteUser(@Query('userId') userId) {
    return await this.usersService.deleteUser(userId);
  }
}
