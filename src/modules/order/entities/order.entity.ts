import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Article } from 'src/modules/article/entities';
import { Bike } from 'src/modules/bike/entities';
import { Status } from '../dto';
@Schema({ timestamps: true })
export class Order extends Document {
  @Prop()
  diagnostic: string;

  @Prop()
  taskDescription: string;

  @Prop()
  departureDate: Date;

  @Prop()
  status: Status;

  @Prop()
  status_history: Status[];

  @Prop({ type: [{ type: Types.ObjectId, ref: Article.name }] })
  articles: Article[] | string[];

  @Prop({ type: Types.ObjectId, ref: Bike.name })
  bike: Bike | string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
