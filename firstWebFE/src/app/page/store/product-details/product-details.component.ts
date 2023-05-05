import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  productDetail: Product = new Product();
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.productId = param.get('id');
    });
    this.getProductById(this.productId);
  }

  getProductById(id: any) {
    this.productService.getProductById(id).subscribe((response) => {
      this.productDetail = response;
    });
  }

  addProductToCart(item: any) {
    this.cartService.addtoCart(item);
  }
}
