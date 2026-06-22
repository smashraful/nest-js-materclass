import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import type { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  fetchRequest(@Req() req: Request, @Res() res: Response) {
    const { id } = req.params;
    const queryParams = req.query;
    const userAgent = req.headers['user-agent'];

    res.send(`
      <script>
        console.log('Request ID: ${id}');
        console.log('Query Parameters: ${JSON.stringify(queryParams)}');
        console.log('User Agent: ${userAgent}');
      </script>
    `);
  }
}
