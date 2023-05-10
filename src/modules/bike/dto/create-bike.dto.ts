import {
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  BIKE_SIMPLE_SIZE,
  BIKE_SIMPLE_TYPE,
  BIKE_SIZE_OBJ,
  BIKE_TYPE_OBJ,
} from './types.dto';
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
  @IsObject()
  size: BIKE_SIZE_OBJ;

  @IsNotEmpty()
  @IsObject()
  type: BIKE_TYPE_OBJ;

  @IsString()
  @IsMongoId()
  user: string;
}
