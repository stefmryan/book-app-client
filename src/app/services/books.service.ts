import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../Book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl = 'http://localhost:5000/books'

  constructor(private http: HttpClient) {   }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);

  }
}
