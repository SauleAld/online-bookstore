import { Book } from "./book.model";

export interface CartItem {
  book: Book;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  totalAmount: number;
}