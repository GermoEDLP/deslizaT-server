import { EnumToString } from './../../../common/helpers/enumToString';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { CATEGORY_TYPE } from '../entities/category.entity';
import { ApiProperty } from '@nestjs/swagger';
import { API_PROP } from '../config';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty(API_PROP.NAME)
  name: string;

  @IsString()
  @ApiProperty(API_PROP.DESC)
  desc: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty(API_PROP.TYPE)
  @IsEnum(CATEGORY_TYPE, {
    message: `Invalid category type. Must be one of these: ${EnumToString(
      CATEGORY_TYPE,
    )}`,
  })
  type: CATEGORY_TYPE;

  @IsString()
  @IsNotEmpty()
  @ApiProperty(API_PROP.ADMIN)
  admin: string;
}
