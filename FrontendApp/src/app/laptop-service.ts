import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LaptopService {
  private baseUrl = 'http://localhost:8080/laptop';
  constructor(private http: HttpClient) {}

  getLaptops(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list`);
  }
  //Add laptop
  addLaptop(laptop: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, laptop);
  }
  //Update laptop
  updateLaptop(laptop: { id: number; brand: string; price: number; }): Observable<any> {
    return this.http.put(`${this.baseUrl}/update`, laptop);
  }
  //Delete laptop
  deleteLaptop(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}
