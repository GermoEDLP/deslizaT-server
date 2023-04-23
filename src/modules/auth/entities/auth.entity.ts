import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum Role {
  ADMIN = 'admin',
  UPDATER = 'updater',
  READER = 'reader',
  CREATOR = 'creator',
}

@Schema()
export class Auth extends Document {
  @Prop()
  user: string;
  @Prop()
  password: string;
  @Prop()
  name: string;
  @Prop()
  lastname: string;
  @Prop()
  email: string;
  @Prop({ type: [String], enum: Role, default: [] })
  roles: Role[];
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
