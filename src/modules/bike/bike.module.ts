import { Module } from '@nestjs/common';
import { BikeService } from './bike.service';
import { BikeController } from './bike.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bike, BikeSchema } from './entities/bike.entity';
import { User, UserSchema } from '../user/entities';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Bike.name,
        schema: BikeSchema,
      },
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    UserModule,
  ],
  controllers: [BikeController],
  providers: [BikeService],
})
export class BikeModule {}
