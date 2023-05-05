import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: String;
  numberCart: number = 3;

  constructor(common: CommonService, private cartService: CartService) {
    this.title = common.title;
  }

  ngOnInit(): void {
    this.cartService.getProductsNumber().subscribe((res) => {
      this.numberCart = res.length;
    });
  }
}
