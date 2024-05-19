import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CredentialsDto } from 'src/dto/credentials.dto';
import { User } from '../schemas/user.schema';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(200)
  async checkAuth(@Body() credentials: CredentialsDto): Promise<User> {
    const { login, password } = credentials;
    return this.userService.checkAuth(login, password);
  }
}
