import { Module } from '@nestjs/common';
import { BikeService } from './bike.service';
import { BikeController } from './bike.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bike, BikeSchema } from './entities/bike.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Bike.name,
        schema: BikeSchema,
      },
    ]),
  ],
  controllers: [BikeController],
  providers: [BikeService],
})
export class BikeModule {}
