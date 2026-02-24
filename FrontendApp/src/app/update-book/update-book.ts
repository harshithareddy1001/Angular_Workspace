import { Component } from '@angular/core';
import { Book } from '../Book';
import { Libraryservice } from '../libraryservice';

@Component({
  selector: 'app-update-book',
  standalone: false,
  templateUrl: './update-book.html',
  styleUrl: './update-book.css',
})
export class UpdateBook {

 
  id: number = 0;
  title: string = '';

  constructor(private serve2: Libraryservice) {}

  updateBook() {
    const updatedBook: Book = {
      id: this.id,
      title: this.title
    };

    this.serve2.updateBook(updatedBook);

    alert("Book Updated Successfully!");

    this.id = 0;
    this.title = '';
  }
}
