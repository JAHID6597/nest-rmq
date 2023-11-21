import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderDTO } from './dto/order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('create')
  create(@Body() payload: OrderDTO) {
    return this.orderService.create(payload);
  }

  @Get('all')
  getAll() {
    return this.orderService.getAll();
  }
}
