import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  IsNumber,
  IsMongoId,
  IsDateString,
} from 'class-validator';

export class PaymentDto {
  @ApiProperty({
    example: 'id',
    required: true,
  })
  @IsOptional()
  @IsMongoId()
  readonly _id?: string;

  @ApiProperty({
    example: '2024-01-01',
    required: true,
  })
  @IsOptional()
  @IsDateString()
  readonly createdAt?: string;

  @ApiProperty({
    example: 'id',
    required: true,
  })
  @IsOptional()
  @IsMongoId()
  readonly userId?: string;

  @ApiProperty({
    example: 1000,
    required: true,
  })
  @IsOptional()
  @IsNumber()
  readonly income?: number;

  @ApiProperty({
    example: 0,
    required: true,
  })
  @IsOptional()
  @IsNumber()
  readonly expence?: number;

  @ApiProperty({
    example: 'comment',
    required: true,
  })
  @IsOptional()
  @IsString()
  readonly comment?: string;
}
