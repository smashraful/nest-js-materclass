import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import type { Request, Response } from 'express';
import { UserService } from './services/user/user.service';
import { UserDto } from './userDto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser() {
    return `User created successfully`;
  }

  @Get()
  getAllUsers(): UserDto[] {
    return this.userService.getAllUsers();
  }
}
