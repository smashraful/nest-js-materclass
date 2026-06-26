import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { AuthController } from './auth/auth.controller';
import { LoginMiddleware } from './middleware/login.middleware';
import { TokenMiddleware } from './middleware/token.middleware';
import { TypeChecker } from './middleware/type.middleware';
import { UserService } from './services/user/user.service';
import { UserLoggingMiddleware } from './middleware/user-logging/user-logging.middleware';

@Module({
  imports: [ProductsModule],
  controllers: [AppController, ProductsController, AuthController],
  providers: [AppService, ProductsService, UserService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserLoggingMiddleware).forRoutes('*');
  }
}
