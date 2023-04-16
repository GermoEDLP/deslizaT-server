import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { BikeModule } from './bike/bike.module';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [
    CategoriesModule,
    UserModule,
    OrderModule,
    BikeModule,
    ArticleModule,
  ],
  exports: [
    CategoriesModule,
    UserModule,
    OrderModule,
    BikeModule,
    ArticleModule,
  ],
})
export class ModuleModule {}
