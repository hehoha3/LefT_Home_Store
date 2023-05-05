import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  products: any;
  categoryList: any;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getListProduct();
    this.getListCategory();
  }

  getListProduct() {
    this.productService.getListProduct().subscribe((response) => {
      this.products = response;
    });
  }

  getListCategory() {
    this.productService.getListCategory().subscribe((res) => {
      this.categoryList = res;
    });
  }
}
