import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
@ApiTags('Test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/ping')
  getTest(): string {
    return this.appService.getTest();
  }
}
