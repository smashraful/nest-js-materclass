import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class TypeChecker implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const type = req.headers['content-type'];
    if (type !== 'application/json') {
      return res.status(415).json({ message: 'Invalid content type' });
    }
    next();
  }
}
