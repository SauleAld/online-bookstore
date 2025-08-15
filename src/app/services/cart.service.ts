import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../model/cart.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartApiUrl = environment.apiUrl + '/cart';

  constructor(private http: HttpClient) { }

  getCart(): Observable<Cart> {
    return this.http.get<Cart>(this.cartApiUrl);
  }

  addToCart(item: CartItem): Observable<Cart> {
    return this.http.post<Cart>(this.cartApiUrl, item);
  }

  removeFromCart(item: CartItem) {
    return this.http.delete(`${this.cartApiUrl}/${item.book.id}`);
  }

}
