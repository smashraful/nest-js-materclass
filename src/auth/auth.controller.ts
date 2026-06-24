import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthDto } from './authDto';
import { CustomPipe } from './custom/customPipe';

@Controller('auth')
export class AuthController {
  @Get('register/:id')
  @UsePipes(new CustomPipe())
  getId(@Param('id') id: number) {
    return {
      id: id,
    };
  }

  @Post('register')
  @UsePipes(new ValidationPipe(), new CustomPipe())
  registerUser(@Param('name') name: string) {
    console.log('User data:', name);
    return {
      email: `${name}`,
    };
  }
}
