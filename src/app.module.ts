import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomConfigModule } from './config/customConfig.module';
import { DatabaseModule } from './database/database.module';
import { ModuleModule } from './modules/module.module';

@Module({
  imports: [CustomConfigModule, DatabaseModule, ModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
