import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private readonly url = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  listar(limit: number = 20): Observable<any> {
    return this.http.get(`${this.url}?limit=${limit}`);
  }

  obterPorId(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
}