import {
  Body,
  Controller, Inject,
  Post,

} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreatePaymentDto } from './dtos/create-payment.dto';

@Controller('payments')
export class PaymentsController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

  @Post()
  createPayment(@Body() createPaymentDto: CreatePaymentDto) {
    console.log(createPaymentDto);
    this.natsClient.emit('createPayment', createPaymentDto);
  }

}