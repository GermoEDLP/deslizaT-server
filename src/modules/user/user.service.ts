import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateUserDto, CreateUserDto, QueryFindAllBlankDto } from './dto';
import { populateQuery } from 'src/common/helpers/populateParams';
import { Contact, ContactType, User, UserSchema, UserStatus } from './entities';
import { getFindAllOptions } from '../../common/helpers/optionsFindAll';
import { NotFoundError } from 'rxjs';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  create(createUserDto: CreateUserDto) {
    const user = new this.userModel({
      ...createUserDto,
      status: UserStatus.ACTIVE,
    });
    return user.save();
  }

  async findAll(query: QueryFindAllBlankDto) {
    const [options] = getFindAllOptions(query);
    const pop = populateQuery(query.populate, UserSchema);

    const filters = {
      status: { $ne: UserStatus.DELETED },
    };
    const data = await this.userModel
      .find(filters, null, options)
      .populate(pop);

    return data;
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id).exec();
    if (!user) throw new NotFoundException('User not found');
    return user.populate('bikes');
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel
      .findByIdAndUpdate(id, { $set: updateUserDto }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.update(id, { status: UserStatus.DELETED });
  }
}
