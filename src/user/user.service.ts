import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async checkAuth(login: string, password: string): Promise<User> {
    /* TODO - add password hashing logic */
    const passwordHash = password;
    return this.userModel.findOne({ login, passwordHash }).exec();
  }
}
