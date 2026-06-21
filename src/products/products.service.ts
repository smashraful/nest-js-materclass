import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  private product: Product[] = [];

  insertProduct(title: string, description: string, price: number) {
    const id = Math.floor(Math.random() * 10000).toString();
    const newProduct = new Product(id, title, description, price);

    this.product.push(newProduct);

    return id;
  }

  getProducts() {
    return [...this.product];
  }

  getProduct(id: string) {
    const [product] = this.findProduct(id);
    return { ...product };
  }

  updateProduct(
    id: string,
    productData: {
      title?: string | null;
      description?: string | null;
      price?: number | null;
    },
  ) {
    const [product, index] = this.findProduct(id);

    const updatedProduct = {
      title: productData.title !== undefined ? productData.title : null,
      description:
        productData.description !== undefined ? productData.description : null,
      price: productData.price !== undefined ? productData.price : null,
    };

    this.product[index] = { ...product, ...updatedProduct };

    return updatedProduct;
  }

  partialUpdate(
    id: string,
    productData: {
      title?: string | null;
      description?: string | null;
      price?: number | null;
    },
  ) {
    const [product, index] = this.findProduct(id);

    const updatedProduct = {
      ...product,
      ...productData,
    };

    this.product[index] = updatedProduct;

    return updatedProduct;
  }

  private findProduct(id: string): [Product, number] {
    const productIndex = this.product.findIndex((prod) => prod.id === id);

    if (productIndex === -1) {
      throw new NotFoundException('Product not found');
    }

    return [this.product[productIndex], productIndex];
  }
}
