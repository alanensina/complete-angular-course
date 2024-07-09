import { Component } from '@angular/core';
import { Book } from '../models/book';
import { OnInit } from '@angular/core'; 

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit{
  
  newTitle: string = '';
  newAuthor: string = '';
  books : Book[] = [];

  ngOnInit(): void {
    let savedBooks = localStorage.getItem("books");
    this.books = savedBooks ? JSON.parse(savedBooks) : [];
  }

  addBook() : void {
    if(this.newTitle.trim().length && this.newAuthor.trim().length){
      let newBook: Book = {
        id: Date.now(),
        title: this.newTitle,
        author: this.newAuthor
      }

      this.books.push(newBook);
      this.resetFields();
      this.saveToLocalStorage();
    }
  }

  deleteBook(index: number) : void {
    this.books.splice(index, 1);
    this.saveToLocalStorage();
  }

  resetFields() : void  {
    this.newTitle = '';
    this.newAuthor = '';
  }

  saveToLocalStorage() : void {
    localStorage.setItem("books", JSON.stringify(this.books));
  }

}
