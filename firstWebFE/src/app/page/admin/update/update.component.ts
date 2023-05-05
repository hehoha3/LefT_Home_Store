import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent {
  constructor(private newProduct: ProductService) {}

  onProductUpdate(newProduct: {
    id: number;
    name: String;
    thumbnail: String;
    description: string;
    material: string;
    price: number;
    quantity: number;
    sizes: string;
    id_type: number;
  }) {
    this.newProduct.updateProduct(newProduct).subscribe((response) => {
      response = newProduct;
      console.log(response);
    });
  }
}
