import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
  private readonly validToken: string[] = [
    'validToken1',
    'validToken2',
    'validToken3',
  ];

  private isValidToken(token: string): boolean {
    return this.validToken.includes(token);
  }

  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (!token || !this.isValidToken(token)) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    req['token'] = token;

    next();
  }
}
