import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  products: Product[] = [];
  categoryList: any;
  categoryId: any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.categoryId = params.get('id_type');
    });

    this.getListProductByIdType();
    this.getListCategory();
  }

  getListProductByIdType() {
    this.productService.getListProduct().subscribe((response) => {
      for (let product of response) {
        if (product.id_type == this.categoryId) {
          this.products.push(product);
        }
      }
    });
  }

  getListCategory() {
    this.productService.getListCategory().subscribe((res) => {
      this.categoryList = res;
    });
  }
}
