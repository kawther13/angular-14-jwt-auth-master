import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Client[]>('http://localhost:8080/client');
  }
  create(clt: Client) {
    return this.http.post<Client>('http://localhost:3000/client', clt);
  }
  getById(id: number) {
    return this.http.get<Client>(`http://localhost:3000/fruits/${id}`);
   }
    
   update(clt:Client){
    return this.http.put(`http://localhost:3000/fruits/${clt.Id}`,clt);
   }
   delete(id:number){
    return this.http.delete<Client>(`http://localhost:3000/client/${id}`);
 }
}
