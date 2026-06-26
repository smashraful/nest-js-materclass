import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from '../../services/user/user.service';
import { UserDto } from '../../userDto/user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserLoggingMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: Request, res: Response, next: () => void) {
    if (req.body && req.body.name) {
      req.body.name = req.body.name.toUpperCase();
    }

    if (req.body && req.body.name && req.body.password) {
      const haspass = await bcrypt.hash(req.body.password, 10);

      const createUserDto: UserDto = {
        name: req.body.name,
        password: haspass,

        createdAt: new Date().toISOString(),
      };

      this.userService.createUser(createUserDto);
    }

    next();
  }
}
