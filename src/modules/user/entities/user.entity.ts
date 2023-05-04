import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
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

  @IsString()
  @ApiProperty(API_PROP.ADDRESS_CITY)
  city: string;

  @IsString()
  @ApiProperty(API_PROP.ADDRESS_FLOOR)
  floor: string;
  
  @IsString()
  @ApiProperty(API_PROP.ADDRESS_APPARTMENT)
  apartment: string;
}

export class Contact<T> {
  type: T;
  value: string;
  code: number;

  constructor(type: T, value: string, code: number) {
    this.type = type;
    this.value = value;
    this.code = code;
  }
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

  @Prop({ required: true, type: Social, default: {} })
  social: Social;

  @Prop({ required: true, type: Address })
  address: Address;

  @Prop({ required: true, default: [] })
  contacts: Types.Array<Contact<ContactType>>;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Bike' }], default: [] })
  bikes: Types.Array<Bike> | string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
