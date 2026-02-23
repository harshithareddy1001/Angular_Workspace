import { Component } from '@angular/core';

@Component({
  selector: 'app-blue',
  standalone: false,
  templateUrl: './blue.html',
  styleUrl: './blue.css',
})
export class Blue {
//Interpolation
  name: string = 'Blue Component';

  Books:any[] = [
    {title: 'Book 1', author: 'Author 1'},
    {title: 'Book 2', author: 'Author 2'},
    {title: 'Book 3', author: 'Author 3'},
  ];

  //event binding
  onButtonClick() {
    alert('Button clicked!');
  }

  //two way binding
  inputText: string = '';

  //property binding
  imageUrl: string ="punch.avif";
}