import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsersModule } from './users/users.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [UsersModule, PaymentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
