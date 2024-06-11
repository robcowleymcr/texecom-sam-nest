import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Dog } from './interfaces/dog.interface';
import { FindAllParams } from './dto/findAllParams.dto';
import { FindOneParams } from './dto/findOneParams.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(@Query() params?: FindAllParams): Dog[] {
    return this.appService.findAll(params);
  }

  @Get(':id')
  findById(@Param() params: FindOneParams): Dog {
    return this.appService.findOne(params.id);
  }
}
