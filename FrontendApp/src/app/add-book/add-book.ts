import { Component } from '@angular/core';
import { Libraryservice } from '../libraryservice';

@Component({
  selector: 'app-add-book',
  standalone: false,
  templateUrl: './add-book.html',
  styleUrl: './add-book.css',
})
export class AddBook {
id: number = 0;
title: string = '';
constructor(private serve2:Libraryservice){}
addBookToList(){
  const newBook = { id: this.id, title: this.title };
  this.serve2.addBook(newBook);
  this.id = 0;
  this.title = '';
}
}
