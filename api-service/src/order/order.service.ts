import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { OrderDTO } from './dto/order.dto';

@Injectable()
export class OrderService {
  constructor(
    @Inject('MESSAGE_SERVICE') private readonly client: ClientProxy,
  ) {}
  orders = [];

  create(body: OrderDTO) {
    body.id = this.orders.length + 1;
    this.orders.push(body);

    this.client.emit('order_created', body);

    return body;
  }

  getAll() {
    this.client.emit('order_all', this.orders);
    return this.orders;
  }
}
