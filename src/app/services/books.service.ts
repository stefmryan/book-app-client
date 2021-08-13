import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl = 'http://localhost:5000/books'

  constructor(private http: HttpClient) {   }

  getBooks(){
  return this.http.get(this.apiUrl).subscribe(
    (data) => console.log(data)
  );
  }
}
