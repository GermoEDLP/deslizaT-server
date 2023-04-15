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
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { QueryFindAllCatgeoriesDto } from './dto/query-find-all.dto';
import { API_OP } from './config';

@Controller('category')
@ApiTags('Categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @ApiOperation(API_OP.CREATE)
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  @ApiOperation(API_OP.FIND_ALL)
  findAll(@Query() query: QueryFindAllCatgeoriesDto) {
    return this.categoriesService.findAll(query);
  }

  @Get(':id')
  @ApiOperation(API_OP.FIND_ONE)
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation(API_OP.UPDATE)
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiOperation(API_OP.DELETE)
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(id);
  }
}
