import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsMongoId, IsDateString } from 'class-validator';

export class CreatePaymentDto {
  @ApiProperty({
    example: 'id',
    required: true,
  })
  @IsMongoId()
  readonly _id: string;

  @ApiProperty({
    example: '2024-01-01',
    required: true,
  })
  @IsDateString()
  readonly createdAt: string;

  @ApiProperty({
    example: 'id',
    required: true,
  })
  @IsMongoId()
  readonly userId: string;

  @ApiProperty({
    example: 1000,
    required: true,
  })
  @IsNumber()
  readonly income: number;

  @ApiProperty({
    example: 0,
    required: true,
  })
  @IsNumber()
  readonly expence: number;

  @ApiProperty({
    example: 'comment',
    required: true,
  })
  @IsString()
  readonly comment: string;
}
