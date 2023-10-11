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
import { InsertUser, UserData } from 'src/types/types';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':name')
  getUserByName(@Param('name') userName: string) {
    return this.usersService.getUserByName(userName);
  }

  @Post()
  async insertUser(@Body() user: InsertUser) {
    console.log(user);
    return await this.usersService.insertUser(user);
  }

  @Delete(':id')
  async deleteUser(@Query('id') id: string) {
    return await this.usersService.deleteUser(id);
  }
}
