import { EnumToString } from '../../../common/helpers/enumToString';
import {
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { API_PROP } from '../config';
import { Address, Social } from '../entities';
import { Type } from 'class-transformer';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty(API_PROP.NAME)
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty(API_PROP.LASTNAME)
  lastname: string;

  @IsObject()
  @IsNotEmpty()
  @ApiProperty(API_PROP.ADDRESS)
  address: Address;

  @IsString()
  @IsOptional()
  @ApiProperty(API_PROP.PHONE)
  phone: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty(API_PROP.EMAIL)
  email: string;

  @IsObject()
  @IsOptional()
  @ApiProperty(API_PROP.SOCIAL)
  social: Social;
}
