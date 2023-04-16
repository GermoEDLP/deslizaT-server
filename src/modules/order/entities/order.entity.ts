import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Article } from 'src/modules/article/entities';
import { Bike } from 'src/modules/bike/entities';

@Schema({ timestamps: true })
export class Order extends Document {
  @Prop()
  diagnostic: string;

  @Prop()
  taskDescription: string;

  @Prop()
  departureDate: Date;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Article' }] })
  articles: Article[];

  @Prop({ type: Types.ObjectId, ref: 'Bike' })
  bike: Bike;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
