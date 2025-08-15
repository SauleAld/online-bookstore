import { Component, OnInit } from '@angular/core';
import { CartItem } from '../model/cart.model';
import { CartService } from '../services/cart.service';
import { Book } from '../model/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  cartTotalAmount: number = 0;
  cartFetched: boolean = false;
  books: Book[] = [];

  constructor(private cartService: CartService, private bookService: BookService) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe(cart => {
      this.cartItems = cart.items;
      this.cartFetched = true;
      console.log('Cart items fetched:', this.cartItems);
      this.updateCartTotal();
    });
  }

  removeFromCart(item: CartItem): void {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.updateCartTotal();
    }
  }

  updateCartTotal(): void {
    this.cartTotalAmount = this.cartItems.reduce((total, item) => 
      total + item.book.price * item.quantity, 0);
  }

  getBooks() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
      console.log('Books fetched:', books);
    });
  }

  getBookById(bookId: number): Book | undefined {
    return this.books.find(book => book.id === bookId);
  }

}
