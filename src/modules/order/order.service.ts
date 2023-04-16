import { getFindAllOptions } from '../../common/helpers/optionsFindAll';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateOrderDto,  CreateOrderDto, QueryFindAllOrderDto} from './dto';
import { populateQuery } from 'src/common/helpers/populateParams';
import { Order, OrderSchema } from './entities';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<Order>,
  ) {}

  create(createOrderDto: CreateOrderDto) {
    const blank = new this.orderModel(createOrderDto);
    return blank.save();
  }

  async findAll(query: QueryFindAllOrderDto) {
    const [options, page, perPage] = getFindAllOptions(query);
    const pop = populateQuery(query.populate, OrderSchema);

    const filters = {
      // ...(type ? { type } : {}),
    };
    const [total, data] = await Promise.all([
      this.orderModel.countDocuments(filters),
      this.orderModel.find(filters, null, options).populate(pop),
    ]);

    return {
      page,
      perPage,
      total,
      data,
    };
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.orderModel
      .findByIdAndUpdate(id, { $set: updateOrderDto }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.orderModel.findByIdAndRemove(id).exec();
  }
}
