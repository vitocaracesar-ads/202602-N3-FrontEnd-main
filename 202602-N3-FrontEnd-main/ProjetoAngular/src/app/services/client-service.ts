import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
   constructor(private http: HttpClient) { }

  obterClientes() {
    return this.http.get(environment.urlApi + 'cliente');
  }
  obterClientePorId(id: number) {
    return this.http.get(environment.urlApi + 'cliente/' + id);
  }
  excluirCliente(id: number) {
    return this.http.delete(environment.urlApi + 'cliente/' + id);
  }
}
