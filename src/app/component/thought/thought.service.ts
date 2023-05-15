import { thought } from './thought';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  private readonly API = 'http://localhost:3000/thoughts';

  constructor(
    private http : HttpClient
  ) { }

  thoughtList() : Observable<thought[]>{
    return this.http.get<thought[]>(this.API)
  }

  thoughtCreate(thought : thought): Observable<thought> {
    return this.http.post<thought>(this.API, thought)
  }

  thoughtUpdate(thought : thought): Observable<thought>{
    const url = `${this.API}/${thought.id}`
    return this.http.put<thought>(url, thought)
  }

  thoughtDelete(id : number): Observable<thought> {
    const url = `${this.API}/${id}`
    return this.http.delete<thought>(url)
  }

  searchByID(id : number): Observable<thought>{
    const url = `${this.API}/${id}`
    return this.http.get<thought>(url)
  }
}
