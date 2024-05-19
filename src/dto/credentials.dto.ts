import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class CredentialsDto {
  @ApiProperty({
    example: 'user',
    required: true,
  })
  @IsString()
  @MinLength(1)
  readonly login: string;

  @ApiProperty({
    example: '********',
    required: true,
  })
  @IsString()
  @MinLength(1)
  readonly password: string;
}
