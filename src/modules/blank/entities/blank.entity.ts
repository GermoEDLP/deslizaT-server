import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, })
export class Blank extends Document {}

export const BlankSchema = SchemaFactory.createForClass(Blank);
