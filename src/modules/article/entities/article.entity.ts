import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, })
export class Article extends Document {}

export const ArticleSchema = SchemaFactory.createForClass(Article);
