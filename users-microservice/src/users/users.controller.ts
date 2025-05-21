
import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller()
export class UsersMicroserviceController {
  constructor(private usersService: UsersService) {}

  @MessagePattern({ cmd: 'createUser' })
  createUser(@Payload() data: CreateUserDto) {
    return this.usersService.createUser(data);
  }

  @MessagePattern({ cmd: 'getUserById' })
  getUserById(@Payload() data) {
    const { userId } = data;
    return this.usersService.getUserById(userId);
  }

  @EventPattern('paymentCreated')
  paymentCreated(@Payload() data: { id: string, amount: number }) {
    console.log('DDDDDDDD',data);
  }
}
