import { EnumToString } from '../../../common/helpers/enumToString';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
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
  @ApiProperty(API_PROP.ADDRESS)
  @Type(() => Address)
  @ValidateNested()
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
