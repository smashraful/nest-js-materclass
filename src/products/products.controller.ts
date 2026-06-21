import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './products.model';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productsService.getProduct(prodId);
  }

  @Post()
  addProduct(
    @Body('title') pTitle: string,
    @Body('description') pDescription: string,
    @Body('price') pPrice: number,
  ) {
    const returnedId = this.productsService.insertProduct(
      pTitle,
      pDescription,
      pPrice,
    );

    return { id: returnedId };
  }

  @Put(':id')
  updateProduct(@Param('id') prodId: string, @Body() productData: Product) {
    const updatedProduct = this.productsService.updateProduct(
      prodId,
      productData,
    );

    return updatedProduct;
  }

  @Patch(':id')
  partialUpdate(@Param('id') prodId: string, @Body() productData: Product) {
    const updatedProduct = this.productsService.partialUpdate(
      prodId,
      productData,
    );

    return updatedProduct;
  }
}
