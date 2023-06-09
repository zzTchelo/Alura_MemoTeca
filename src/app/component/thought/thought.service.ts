import { thought } from './thought';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  private readonly API = 'http://localhost:3000/thoughts';

  constructor(
    private http : HttpClient
  ) { }

  thoughtList(page : number, filter : string, favorite : boolean) : Observable<thought[]>{
    const itens = 6;
    let params = new HttpParams()
      .set("_page", page)
      .set("_limit", itens)

      if (filter.trim().length > 2){
        params = params.set("q", filter)
      }

      if (favorite) {
        params = params.set("favorito", true)
      }

    return this.http.get<thought[]>(this.API, {params})
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

  stateFavorite(thought : thought) : Observable<thought>{
    thought.favorito = !thought.favorito
    return this.thoughtUpdate(thought)
  }
}
