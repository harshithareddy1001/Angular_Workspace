import { Component } from '@angular/core';
import { LaptopService } from '../laptop-service';

@Component({
  selector: 'app-laptop',
  standalone: false,
  templateUrl: './laptop.html',
  styleUrl: './laptop.css',
})
export class Laptop {
  laptops: any[] = [];

  laptop = {
    id: 0,
    brand: '',
    price: 0
  };
  isEdit = false;
   constructor(private service:LaptopService) {}


  ngOnInit(): void {
    this.loadLaptops();
  }
  // GET
  loadLaptops() {
    this.service.getLaptops().subscribe(data => {
      this.laptops = data;
    });

}
  // ADD or UPDATE
  saveLaptop() {
    if (this.isEdit) {
      this.service.updateLaptop(this.laptop)
        .subscribe(() => {
          this.loadLaptops();
          this.resetForm();
        });
    } else {
      this.service.addLaptop(this.laptop)
        .subscribe(() => {
          this.loadLaptops();
          this.resetForm();
        });
    }
  }
  // EDIT
  editLaptop(l: any) {
    this.laptop = { ...l };
    this.isEdit = true;
  }

  // DELETE
  deleteLaptop(id: number) {
    this.service.deleteLaptop(id).subscribe(() => {
      this.loadLaptops();
    });
  }

  resetForm() {
    this.laptop = { id: 0, brand: '', price: 0 };
    this.isEdit = false;
  }
}