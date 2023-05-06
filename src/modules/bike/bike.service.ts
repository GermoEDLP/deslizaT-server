import { getFindAllOptions } from '../../common/helpers/optionsFindAll';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  UpdateBikeDto,
  CreateBikeDto,
  QueryFindAllBikeDto,
  BIKE_SIZE,
  BIKE_TYPE,
} from './dto';
import { populateQuery } from 'src/common/helpers/populateParams';
import { Bike, BikeSchema } from './entities';
import { UserService } from '../user/user.service';

@Injectable()
export class BikeService {
  constructor(
    @InjectModel(Bike.name) private bikeModel: Model<Bike>,
    private readonly userSvc: UserService,
  ) {}

  async create(createBikeDto: CreateBikeDto) {
    const user = await this.userSvc.findOne(createBikeDto.id);
    if (!user) throw new NotFoundException('User not found');
    const bike = new this.bikeModel({
      ...createBikeDto,
      username: createBikeDto.id,
    });
    user.bikes.push(bike._id);
    await this.userSvc.update(user._id, user);
    return bike.save();
  }

  async findAll(query: QueryFindAllBikeDto) {
    const [options] = getFindAllOptions(query);
    const pop = populateQuery(query.populate, BikeSchema);

    const filters = {
      // ...(type ? { type } : {}),
    };
    const data = await this.bikeModel
      .find(filters, null, options)
      .populate(pop);

    return data;
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
