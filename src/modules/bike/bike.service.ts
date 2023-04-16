import { getFindAllOptions } from '../../common/helpers/optionsFindAll';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateBikeDto,  CreateBikeDto, QueryFindAllBikeDto} from './dto';
import { populateQuery } from 'src/common/helpers/populateParams';
import { Bike, BikeSchema } from './entities';

@Injectable()
export class BikeService {
  constructor(
    @InjectModel(Bike.name) private bikeModel: Model<Bike>,
  ) {}

  create(createBikeDto: CreateBikeDto) {
    const blank = new this.bikeModel(createBikeDto);
    return blank.save();
  }

  async findAll(query: QueryFindAllBikeDto) {
    const [options, page, perPage] = getFindAllOptions(query);
    const pop = populateQuery(query.populate, BikeSchema);

    const filters = {
      // ...(type ? { type } : {}),
    };
    const [total, data] = await Promise.all([
      this.bikeModel.countDocuments(filters),
      this.bikeModel.find(filters, null, options).populate(pop),
    ]);

    return {
      page,
      perPage,
      total,
      data,
    };
  }

  async findOne(id: string) {
    return this.bikeModel.findById(id).exec();
  }

  update(id: string, updateBlankDto: UpdateBikeDto) {
    return this.bikeModel
      .findByIdAndUpdate(id, { $set: updateBlankDto }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.bikeModel.findByIdAndRemove(id).exec();
  }
}
