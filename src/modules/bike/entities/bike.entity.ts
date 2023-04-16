import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, })
export class Bike extends Document {}

export const BikeSchema = SchemaFactory.createForClass(Bike);
