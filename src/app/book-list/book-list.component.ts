import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[] = [
    { id: 1, title: 'Book One', author: 'Author A', price: 29.99 },
    { id: 2, title: 'Book Two', author: 'Author B', price: 39.99 },
    { id: 3, title: 'Book Three', author: 'Author C', price: 19.99 },
    { id: 4, title: 'Book Four', author: 'Author A', price: 29.99 },
    { id: 5, title: 'Book Five', author: 'Author B', price: 39.99 },
    { id: 6, title: 'Book Six', author: 'Author C', price: 19.99 }
  ];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
      console.log('Books fetched:', books);
    });
  }

}
