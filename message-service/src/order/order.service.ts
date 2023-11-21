import { Injectable } from '@nestjs/common';
import { OrderDTO } from './dto/order.dto';

@Injectable()
export class OrderService {
  create(data: OrderDTO) {
    console.log('Order created: ', data);
  }

  getAll(data: OrderDTO) {
    console.log('Order All: ', data);
  }
}
