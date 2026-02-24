import { Component } from '@angular/core';
import { Book } from '../Book';
import { Libraryservice } from '../libraryservice';

@Component({
  selector: 'app-catalog',
  standalone: false,
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog {
  booklist: Book[] = [];
 
  constructor(private serve2:Libraryservice){
    console.log('Catalog component constructor called');
  } 
  ngOnInit(){
    this.booklist=this.serve2.getBooks();

} 
  deleteBook(id: number) {
    this.serve2.deleteBook(id);
    this.booklist = this.serve2.getBooks();  // refresh list
  }
 

}
