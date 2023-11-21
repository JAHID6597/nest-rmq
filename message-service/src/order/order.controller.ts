import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { OrderDTO } from './dto/order.dto';
import { OrderService } from './order.service';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @EventPattern('order_created')
  create(data: OrderDTO) {
    return this.orderService.create(data);
  }

  @EventPattern('order_all')
  getAll(data: OrderDTO) {
    return this.orderService.getAll(data);
  }
}
