import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaCigrService {

  constructor( private http:HttpClient) { }

  getNoticias(parametros:any): Observable<any>{
    const URL=' https://newsapi.org/v2/top-headlines?country='+ parametros.pais+'&category' + parametros.categoria+'&apiKey=dc4e908fe37a4df9a63fd82b4471ed09'

    return this.http.get(URL);
  }
}
