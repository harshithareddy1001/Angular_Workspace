import { Injectable } from '@angular/core';
import { Book } from './Book';

@Injectable({
  providedIn: 'root',
})
export class Libraryservice {

 private booklist: Book[]=[
  {
    id:1,
    title:'The Great Gatsby',
  },
  {
    id:2,
    title:'To Kill a Mockingbird',      
  },
  {
    id:3,
    title:'1984', 
  },
];
getBooks(){
  return this.booklist;    
}
addBook(books:any) {
this.booklist.push(books);
}
updateBook(updatedBook: Book) {
  const index = this.booklist.findIndex(b => b.id === updatedBook.id);
  if (index !== -1) {
    this.booklist[index] = updatedBook;
  }
}

deleteBook(id: number) {
  this.booklist = this.booklist.filter(b => b.id !== id);
}
}
