import {
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { BIKE_SIMPLE_SIZE, BIKE_SIMPLE_TYPE } from './types.dto';
import { EnumToString } from 'src/common/helpers/enumToString';

export class CreateBikeDto {
  @IsString()
  @IsOptional()
  brand: string;

  @IsString()
  @IsOptional()
  model: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsNotEmpty()
  @IsEnum(BIKE_SIMPLE_SIZE, {
    message: `Invalid size. Valid values: ${EnumToString(BIKE_SIMPLE_SIZE)}`,
  })
  size: number;

  @IsNotEmpty()
  @IsEnum(BIKE_SIMPLE_TYPE, {
    message: `Invalid type. Valid values: ${EnumToString(BIKE_SIMPLE_TYPE)}`,
  })
  type: string;

  @IsString()
  @IsMongoId()
  user: string;
}
