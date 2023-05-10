import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { QueryFindAllOrderDto } from './dto/query-find-all.dto';
import { STATUS_VALUE, UpdateStatusOrderDto } from './dto';

@Controller('order')
@ApiTags('Ordenes')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  findAll(@Query() query: QueryFindAllOrderDto) {
    return this.orderService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query() query: QueryFindAllOrderDto) {
    return this.orderService.findOne(id, query);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(id, updateOrderDto);
  }

  @Patch('status')
  changeStatus(@Body() updateStatusDto: UpdateStatusOrderDto) {
    return this.orderService.changeStatus(updateStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(id);
  }
}
