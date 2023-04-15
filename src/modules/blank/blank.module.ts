import { Module } from '@nestjs/common';
import { BlankService } from './blank.service';
import { CategoriesController } from './blank.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Blank, BlankSchema } from './entities/blank.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Blank.name,
        schema: BlankSchema,
      },
    ]),
  ],
  controllers: [CategoriesController],
  providers: [BlankService],
})
export class CategoriesModule {}
