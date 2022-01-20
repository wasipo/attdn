import { Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  // @Get()
  // findAll(@Req() request: Request): string {
  //   return 'This action returns all cats';
  // }
  @Get(':id')
  find(@Param('id') id: string): string {
    console.log(id);
    return 'This action returns all'+id+'cats';
  }
}


