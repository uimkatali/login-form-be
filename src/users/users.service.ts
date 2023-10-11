import { Get, HttpException, Injectable, Post } from '@nestjs/common';
import { USERS } from 'src/MOCK';
import { InsertUser, UpdateUser, UserData } from 'src/types/types';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserData>,
  ) {}

  async getAllUsers() {
    const foundUsers = await this.userModel.find();

    return foundUsers.map((user) => ({
      id: user._id,
      name: user.name,
      age: user.age,
      role: user.role,
    }));
  }

  async getUserByName(name: string) {
    const foundUserByName = await this.userModel.findOne<UserData>({ name });
    return foundUserByName;
  }

  async insertUser(user: InsertUser) {
    const isUser = await this.userModel.findOne<InsertUser>({
      name: user.name,
    });
    if (!isUser) {
      const newUser = new this.userModel(user);
      await newUser.save();
      return newUser;
    }
  }

  async updateUser(id: string, newUser: UpdateUser) {
    const foundUserAndUpdate = await this.userModel.findByIdAndUpdate(
      id,
      newUser,
    );
    return foundUserAndUpdate;
  }

  async deleteUser(id: string) {
    const foundUserAndDelete = await this.userModel.findByIdAndRemove<UserData>(
      { id },
    );
    return foundUserAndDelete;
  }
}
