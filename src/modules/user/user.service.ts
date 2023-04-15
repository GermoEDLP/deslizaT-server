import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateUserDto,  CreateUserDto, QueryFindAllBlankDto} from './dto';
import { populateQuery } from 'src/common/helpers/populateParams';
import { User, UserSchema } from './entities';
import { getFindAllOptions } from '../../common/helpers/optionsFindAll';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const user = new this.userModel(createUserDto);
    return user.save();
  }

  async findAll(query: QueryFindAllBlankDto) {
    const [options, page, perPage] = getFindAllOptions(query);
    const pop = populateQuery(query.populate, UserSchema);

    const filters = {
      // ...(type ? { type } : {}),
    };
    const [total, data] = await Promise.all([
      this.userModel.countDocuments(filters),
      this.userModel.find(filters, null, options).populate(pop),
    ]);

    return {
      page,
      perPage,
      total,
      data,
    };
  }

  async findOne(id: string) {
    return this.userModel.findById(id).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel
      .findByIdAndUpdate(id, { $set: updateUserDto }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.userModel.findByIdAndRemove(id).exec();
  }
}
