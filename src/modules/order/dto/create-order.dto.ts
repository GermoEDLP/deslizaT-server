import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { STATUS_VALUE, Status } from './status.dto';
import { EnumToString } from 'src/common/helpers/enumToString';
import { ArticleItem } from '../entities';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  symptoms: string;

  @IsString()
  @IsOptional()
  diagnostic: string;

  @IsString()
  @IsOptional()
  taskDescription: string;

  @IsObject({ each: true })
  @IsArray()
  @IsOptional()
  articles: ArticleItem[];

  @IsString()
  @IsNotEmpty()
  bike: string;
  
  @IsString()
  @IsNotEmpty()
  user: string;
}
