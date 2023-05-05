import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  constructor(private newProduct: ProductService) {}

  ngOnInit(): void {}
  onProductCreate(newProduct: {
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
    this.newProduct.addProduct(newProduct).subscribe((response) => {
      response = newProduct;
      console.log(response);
    });
  }
}
