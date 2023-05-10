import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { STATUS_VALUE } from './status.dto';

export class UpdateStatusOrderDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(STATUS_VALUE)
  value: STATUS_VALUE;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  info?: string;
}
