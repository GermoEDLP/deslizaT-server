import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Order } from 'src/modules/order/entities';
import { User } from 'src/modules/user/entities';
import { BIKE_SIZE_OBJ, BIKE_TYPE_OBJ } from '../dto';

@Schema({ timestamps: true })
export class Bike extends Document {
  @Prop()
  brand: string;

  @Prop()
  model: string;

  @Prop()
  description: string;

  @Prop({ type: Object })
  size: BIKE_SIZE_OBJ;

  @Prop({ type: Object })
  type: BIKE_TYPE_OBJ;

  @Prop({ type: Types.ObjectId, ref: User.name, required: true })
  user: User | string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Order' }], default: [] })
  orders: Order[] | string[];
}

export const BikeSchema = SchemaFactory.createForClass(Bike);
