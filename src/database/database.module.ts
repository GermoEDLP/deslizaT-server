import { Module } from '@nestjs/common';
import { mongooseDatabaseInfo } from './mongoose';

@Module({
  imports: [...mongooseDatabaseInfo],
  exports: [...mongooseDatabaseInfo],
})
export class DatabaseModule {}
