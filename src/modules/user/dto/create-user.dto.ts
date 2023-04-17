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
  @IsNotEmpty()
  @ApiProperty(API_PROP.ADDRESS)
  @Type(() => Address)
  @ValidateNested()
  address: Address;

  @IsString({each: true})
  @IsArray()
  @IsOptional()
  @ApiProperty(API_PROP.PHONE)
  phones: string[];

  @IsString({each: true})
  @IsArray()
  @IsNotEmpty()
  @ApiProperty(API_PROP.EMAIL)
  emails: string[];

  @IsObject()
  @IsOptional()
  @ApiProperty(API_PROP.SOCIAL)
  social: Social;
}
