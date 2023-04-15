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
import { BlankService } from './blank.service';
import { CreateBlankDto } from './dto/create-blank.dto';
import { UpdateBlankDto } from './dto/update-blank.dto';
import { QueryFindAllBlankDto } from './dto/query-find-all.dto';
import { API_OP } from './config';

@Controller('category')
@ApiTags('Categories')
export class CategoriesController {
  constructor(private readonly categoriesService: BlankService) {}

  @Post()
  create(@Body() createCategoryDto: CreateBlankDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  findAll(@Query() query: QueryFindAllBlankDto) {
    return this.categoriesService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateBlankDto,
  ) {
    return this.categoriesService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(id);
  }
}
