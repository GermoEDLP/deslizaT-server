import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Order } from 'src/modules/order/entities';
import { User } from 'src/modules/user/entities';

@Schema({ timestamps: true })
export class Bike extends Document {
  @Prop()
  brand: string;

  @Prop()
  model: string;

  @Prop()
  description: string;

  @Prop()
  rodado: number;

  @Prop()
  type: string;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Order' }] })
  orders: Order[];
}

export const BikeSchema = SchemaFactory.createForClass(Bike);
