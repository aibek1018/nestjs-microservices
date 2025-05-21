import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments/payments.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './typeorm/entities/Payment';
import { User } from './typeorm/entities/User';

@Module({
  imports: [
    PaymentsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        database: configService.get('DB_NAME') as string,
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD') as string,
        entities: [Payment, User],
        synchronize: true
      }),
      inject: [ConfigService],
    }),],
  controllers: [],
  providers: [],
})
export class AppModule {}
