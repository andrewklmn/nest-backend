import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UserDto {
  @ApiProperty({
    example: 'login',
    required: true,
  })
  @IsString()
  readonly login: string;

  @ApiProperty({
    example: 'user',
    required: true,
  })
  @IsString()
  readonly role: string;

  @ApiProperty({
    example: '**************',
    required: true,
  })
  @IsString()
  readonly sessionId: string;
}
