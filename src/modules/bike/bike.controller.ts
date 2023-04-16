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
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BikeService } from './bike.service';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';
import { QueryFindAllBikeDto } from './dto/query-find-all.dto';
import { API_OP } from './config';

@Controller('bike')
@ApiTags('Bicicletas')
export class BikeController {
  constructor(private readonly bikeService: BikeService) {}

  @Post()
  create(@Body() createBikeDto: CreateBikeDto) {
    return this.bikeService.create(createBikeDto);
  }

  @Get()
  findAll(@Query() query: QueryFindAllBikeDto) {
    return this.bikeService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bikeService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBikeDto: UpdateBikeDto,
  ) {
    return this.bikeService.update(id, updateBikeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bikeService.remove(id);
  }
}
