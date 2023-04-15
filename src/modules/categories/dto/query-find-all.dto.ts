import { EnumToString } from './../../../common/helpers/enumToString';
import { IsEnum, IsOptional } from 'class-validator';
import { QueryFindAllDto } from '../../../common/dtos/query-find-all.dto';
import { CATEGORY_TYPE } from '../entities';

export class QueryFindAllCatgeoriesDto extends QueryFindAllDto {
  @IsOptional()
  @IsEnum(CATEGORY_TYPE, {
    message: `Invalid category type. Must be one of: ${EnumToString(
      CATEGORY_TYPE,
    )}`,
  })
  type: CATEGORY_TYPE;
}
