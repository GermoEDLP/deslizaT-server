import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Article } from 'src/modules/article/entities';
import { Bike } from 'src/modules/bike/entities';
import { Status } from '../dto';

export class ArticleItem {
  article: Article;
  quantity: number;
  price: number;
}
@Schema({ timestamps: true })
export class Order extends Document {
  @Prop()
  symptoms: string;

  @Prop()
  diagnostic: string;

  @Prop()
  taskDescription: string;

  @Prop()
  finalDetails: string;

  @Prop()
  departureDate: Date;

  @Prop()
  status: Status;

  @Prop()
  status_history: Status[];

  @Prop({ type: [{ type: Object }], default: [] })
  articles: ArticleItem[];

  @Prop({ type: Types.ObjectId, ref: Bike.name })
  bike: Bike | string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
