import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, })
export class User extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    lastname: string;

    @Prop({ required: true })
    email: string;

    
}

export const UserSchema = SchemaFactory.createForClass(User);
