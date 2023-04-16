import { getFindAllOptions } from '../../common/helpers/optionsFindAll';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateArticleDto,  CreateArticleDto, QueryFindAllArticleDto} from './dto';
import { populateQuery } from 'src/common/helpers/populateParams';
import { Article, ArticleSchema } from './entities';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<Article>,
  ) {}

  create(createArticleDto: CreateArticleDto) {
    const blank = new this.articleModel(createArticleDto);
    return blank.save();
  }

  async findAll(query: QueryFindAllArticleDto) {
    const [options, page, perPage] = getFindAllOptions(query);
    const pop = populateQuery(query.populate, ArticleSchema);

    const filters = {
      // ...(type ? { type } : {}),
    };
    const [total, data] = await Promise.all([
      this.articleModel.countDocuments(filters),
      this.articleModel.find(filters, null, options).populate(pop),
    ]);

    return {
      page,
      perPage,
      total,
      data,
    };
  }

  async findOne(id: string) {
    return this.articleModel.findById(id).exec();
  }

  update(id: string, updateArticleDto: UpdateArticleDto) {
    return this.articleModel
      .findByIdAndUpdate(id, { $set: updateArticleDto }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.articleModel.findByIdAndRemove(id).exec();
  }
}
