import { Controller, Get, Param, ParseIntPipe, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import type { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getId(@Param('id', ParseIntPipe) id: number) {
    return `The id is ${id}`;
  }
}
