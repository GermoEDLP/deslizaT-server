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
} from './dto';
import { populateQuery } from 'src/common/helpers/populateParams';
import { Order, OrderSchema } from './entities';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  create(createOrderDto: CreateOrderDto) {
    const { status: statusUser } = createOrderDto;
    const status_history: Status[] = [new Status(STATUS_VALUE.NEW)];
    if (statusUser && statusUser !== STATUS_VALUE.NEW)
      status_history.push(new Status(statusUser));
    const blank = new this.orderModel({
      ...createOrderDto,
      status: status_history[status_history.length - 1],
      status_history,
    });
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

  async changeStatus(id: string, status: STATUS_VALUE) {
    const order = await this.findOne(id);
    if (!order) return null;
    const { status_history } = order;
    status_history.push(new Status(status));
    return this.update(id, {
      newStatus: status_history[status_history.length - 1],
      status_history,
    });
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
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

  remove(id: string) {
    return this.orderModel.findByIdAndRemove(id).exec();
  }
}
