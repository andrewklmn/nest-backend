import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from '../dto/create-payment.dto';
import { PaymentDto } from '../dto/payment.dto';
import { Payment } from '../schemas/payment.schema';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Payments')
@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get()
  @ApiResponse({
    status: 200,
    type: PaymentDto,
    isArray: true,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async getAll(): Promise<Payment[]> {
    return this.paymentService.getAll();
  }

  @Post()
  @ApiResponse({
    status: 200,
    type: PaymentDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createPaymentDto: CreatePaymentDto): Promise<Payment> {
    return this.paymentService.create(createPaymentDto);
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    type: PaymentDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async update(
    @Param('id') id: string,
    @Body() updatePaymentDto: PaymentDto,
  ): Promise<Payment> {
    return this.paymentService.update(id, updatePaymentDto);
  }
}
