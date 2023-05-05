import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../model/product.model';

const baseURL = 'http://localhost:8080/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  // get list product
  getListProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(baseURL);
  }

  //get Product by id
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${baseURL}/${id}`);
  }

  // create new product
  addProduct(product: Product) {
    return this.http.post(baseURL, product);
  }

  // update product
  updateProduct(product: Product) {
    return this.http.put(baseURL, product);
  }

  //delete product
  deleteProduct(id: number) {
    return this.http.delete(`${baseURL}${id}`);
  }

  // get Category
  getListCategory() {
    return this.http.get(`${baseURL}/cg`);
  }
}
