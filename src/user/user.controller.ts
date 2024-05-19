import { Body, Controller, Post } from '@nestjs/common';
import { CredentialsDto } from 'src/dto/credentials.dto';
import { User } from '../schemas/user.schema';
import { UserService } from './user.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/dto/user.dto';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Welcome to API.',
    type: UserDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async checkAuth(@Body() credentials: CredentialsDto): Promise<User> {
    const { login, password } = credentials;
    return this.userService.checkAuth(login, password);
  }
}
