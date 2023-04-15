import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Min } from 'class-validator';
import { API_PROP } from '../config';

export class QueryFindAllDto {
  @ApiProperty(API_PROP.POPULATE)
  @IsString()
  @IsOptional()
  populate: string;

  @ApiProperty(API_PROP.PAGE)
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  @Min(0)
  page: number;

  @ApiProperty(API_PROP.PER_PAGE)
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  @Min(0)
  perPage: number;
}
