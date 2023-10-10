import { Get, HttpException, Injectable } from '@nestjs/common';
import { USERS } from 'src/MOCK';
import { UserData } from 'src/types';

@Injectable()
export class UsersService {
  users = USERS;
  @Get()
  getAllUsers(): Promise<UserData[]> {
    return new Promise((resolve) => {
      resolve(this.users);
    });
  }

  getUser(userId: string): Promise<UserData> {
    let id = userId;
    return new Promise((resolve) => {
      const user = this.users.find((user) => user._id === id);
      if (!user) {
        throw new HttpException('User does not exist!', 404);
      }
      resolve(user);
    });
  }

  addUser(user: UserData): Promise<UserData[]> {
    return new Promise((resolve) => {
      this.users.push(user);
      resolve(this.users);
    });
  }

  deleteUser(userId: string): Promise<UserData[]> {
    let id = userId;
    return new Promise((resolve) => {
      let index = this.users.findIndex((user) => user._id === id);
      if (index === -1) {
        throw new HttpException('User does not exist!', 404);
      }
      this.users.splice(1, index);
      resolve(this.users);
    });
  }
}
