import { getFindAllOptions } from '../../common/helpers/optionsFindAll';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  UpdateOrderDto,
  CreateOrderDto,
  QueryFindAllOrderDto,
  STATUS_VALUE,
  Status,
  UpdateStatusOrderDto,
} from './dto';
import { populateQuery } from 'src/common/helpers/populateParams';
import { Order, OrderSchema } from './entities';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  create(createOrderDto: CreateOrderDto) {
    const status: Status = new Status({});
    const blank = new this.orderModel({
      ...createOrderDto,
      status,
      status_history: status,
    });
    return blank.save();
  }

  async findAll(query: QueryFindAllOrderDto) {
    const [options] = getFindAllOptions(query);
    const pop = populateQuery(query.populate, OrderSchema);

    const filters = {
      // ...(type ? { type } : {}),
    };
    return await this.orderModel.find(filters, null, options).populate(pop);
  }

  async changeStatus({ id, value, info }: UpdateStatusOrderDto) {
    const order = await this.findOne(id);
    if (!order) return null;
    const status = new Status({ value, info });
    return await this.orderModel
      .findByIdAndUpdate(
        id,
        {
          $set: {
            status,
          },
          $addToSet: {
            status_history: status,
          },
        },
        { new: true },
      )
      .exec();
  }

  async findOne(id: string, query?: QueryFindAllOrderDto) {
    const pop = query ? populateQuery(query.populate, OrderSchema) : '';
    return await this.orderModel.findById(id).populate(pop);
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    const { newStatus } = updateOrderDto;
    return this.orderModel
      .findByIdAndUpdate(
        id,
        {
          $set: {
            ...updateOrderDto,
            ...(newStatus ? { status: newStatus } : {}),
          },
        },
        { new: true },
      )
      .exec();
  }

  async remove(id: string) {
    return await this.changeStatus({ id, value: STATUS_VALUE.DELETED });
  }
}
