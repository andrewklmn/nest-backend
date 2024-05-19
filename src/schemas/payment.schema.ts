import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Payment extends Document {
  @Prop({ required: true })
  _id: string;

  @Prop({ required: true })
  createdAt: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  income: number;

  @Prop({ required: true })
  expence: number;

  @Prop()
  comment: string;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
