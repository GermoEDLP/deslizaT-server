import { PartialType } from '@nestjs/swagger';
import { CreateOrderDto } from './create-order.dto';
import { IsDate, IsOptional, IsString } from 'class-validator';
import { Status } from '.';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @IsOptional()
  @IsString()
  finalDetails?: string;

  @IsDate()
  @IsOptional()
  departureDate?: Date;

  @IsOptional()
  status_history?: Status[];

  @IsOptional()
  newStatus?: Status;
}
