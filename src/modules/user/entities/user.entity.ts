import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Document, Types } from 'mongoose';
import { API_PROP } from '../config';
import { Bike } from 'src/modules/bike/entities';

export class Social {
  @ApiProperty(API_PROP.SOCIAL_TWITTER)
  twitter: string;
  @ApiProperty(API_PROP.SOCIAL_FACEBOOK)
  facebook: string;
  @ApiProperty(API_PROP.SOCIAL_INSTAGRAM)
  instagram: string;
}

export class Address {
  @IsString()
  @IsNotEmpty()
  @ApiProperty(API_PROP.ADDRESS_STREET)
  street: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty(API_PROP.ADDRESS_NUMBER)
  number: string;
  @ApiProperty(API_PROP.ADDRESS_CITY)
  city: string;
  @ApiProperty(API_PROP.ADDRESS_FLOOR)
  floor: number;
  @ApiProperty(API_PROP.ADDRESS_APPARTMENT)
  apartment: number;
}

export class Contact<T> {
  type: T;
  value: string;
}

export enum ContactType {
  PHONE = 'PHONE',
  EMAIL = 'EMAIL',
}

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true, type: Social })
  social: Social;

  @Prop({ required: true, type: Address })
  address: Address;

  @Prop({ required: true })
  phone: Contact<ContactType.PHONE>;

  @Prop({ required: true })
  email: Contact<ContactType.EMAIL>;
}

export const UserSchema = SchemaFactory.createForClass(User);
