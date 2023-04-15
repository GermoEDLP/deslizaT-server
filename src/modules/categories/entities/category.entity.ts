import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum CATEGORY_TYPE {
  POLL = 'poll',
  CAMPAIGN = 'campaign',
  QUESTION = 'question',
}
@Schema({ timestamps: true, })
export class Category extends Document {
  @Prop()
  name: string;

  @Prop()
  desc: string;

  @Prop()
  type: CATEGORY_TYPE;

  @Prop()
  admin: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
