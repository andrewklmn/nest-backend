import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment } from '../schemas/payment.schema';
import { CreatePaymentDto } from '../dto/create-payment.dto';
import { UpdatePaymentDto } from '../dto/update-payment.dto';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment.name) private paymentModel: Model<Payment>,
  ) {}
  async getAll(): Promise<Payment[]> {
    return this.paymentModel.find().exec();
  }
  async create(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    const createdRecord = new this.paymentModel(createPaymentDto);
    return createdRecord.save();
  }
  async update(
    id: string,
    updatePaymentDto: UpdatePaymentDto,
  ): Promise<Payment> {
    return this.paymentModel
      .findOneAndUpdate({ id }, updatePaymentDto, { new: true })
      .exec();
  }
}
