import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum ArticleType {
  REPLACEMENT = 'REPLACEMENT',
  CONSUMIBLE = 'CONSUMIBLE',
  ACCESORY = 'ACCESORY',
}

@Schema({ timestamps: true })
export class Article extends Document {
  @Prop()
  name: string;

  @Prop()
  brand: string;

  @Prop()
  model: string;

  @Prop()
  type: ArticleType;

  @Prop()
  description: string;

  @Prop()
  quantity: number;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
