import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Order } from 'src/modules/order/entities';
import { User } from 'src/modules/user/entities';
import { B_SIZE, B_TYPE } from '../dto';

@Schema({ timestamps: true })
export class Bike extends Document {
  @Prop()
  brand: string;

  @Prop()
  model: string;

  @Prop()
  description: string;

  @Prop({ type: Object })
  size: B_SIZE;

  @Prop({ type: Object })
  type: B_TYPE;

  @Prop({ type: Types.ObjectId, ref: User.name, required: true })
  user: User | string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Order' }], default: [] })
  orders: Order[] | string[];
}

export const BikeSchema = SchemaFactory.createForClass(Bike);
