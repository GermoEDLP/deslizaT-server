import { getFindAllOptions } from '../../common/helpers/optionsFindAll';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateBlankDto,  CreateBlankDto, QueryFindAllBlankDto} from './dto';
import { populateQuery } from 'src/common/helpers/populateParams';
import { Blank, BlankSchema } from './entities';

@Injectable()
export class BlankService {
  constructor(
    @InjectModel(Blank.name) private blankModel: Model<Blank>,
  ) {}

  create(createBlankDto: CreateBlankDto) {
    const blank = new this.blankModel(createBlankDto);
    return blank.save();
  }

  async findAll(query: QueryFindAllBlankDto) {
    const [options, page, perPage] = getFindAllOptions(query);
    const pop = populateQuery(query.populate, BlankSchema);

    const filters = {
      // ...(type ? { type } : {}),
    };
    const [total, data] = await Promise.all([
      this.blankModel.countDocuments(filters),
      this.blankModel.find(filters, null, options).populate(pop),
    ]);

    return {
      page,
      perPage,
      total,
      data,
    };
  }

  async findOne(id: string) {
    return this.blankModel.findById(id).exec();
  }

  update(id: string, updateBlankDto: UpdateBlankDto) {
    return this.blankModel
      .findByIdAndUpdate(id, { $set: updateBlankDto }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.blankModel.findByIdAndRemove(id).exec();
  }
}
