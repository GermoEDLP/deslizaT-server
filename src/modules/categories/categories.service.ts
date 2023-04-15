import { getFindAllOptions } from './../../common/helpers/optionsFindAll';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './entities';
import { QueryFindAllCatgeoriesDto, UpdateCategoryDto,  CreateCategoryDto} from './dto';
import { populateQuery } from 'src/common/helpers/populateParams';
import { CategorySchema } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  create(createCategoryDto: CreateCategoryDto) {
    const category = new this.categoryModel(createCategoryDto);
    return category.save();
  }

  async findAll(query: QueryFindAllCatgeoriesDto) {
    const { type } = query;
    const [options, page, perPage] = getFindAllOptions(query);
    const pop = populateQuery(query.populate, CategorySchema);

    const filters = {
      ...(type ? { type } : {}),
    };
    const [total, data] = await Promise.all([
      this.categoryModel.countDocuments(filters),
      this.categoryModel.find(filters, null, options).populate(pop),
    ]);

    return {
      page,
      perPage,
      total,
      data,
    };
  }

  async findOne(id: string) {
    return this.categoryModel.findById(id).exec();
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryModel
      .findByIdAndUpdate(id, { $set: updateCategoryDto }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.categoryModel.findByIdAndRemove(id).exec();
  }
}
