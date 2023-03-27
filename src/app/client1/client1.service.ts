
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client1 } from './client1';

@Injectable({
  providedIn: 'root'
})
export class Client1Service {
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Client1[]>('http://localhost:3000/Client1');
  }
  create(clt: Client1) {
    return this.http.post<Client1>('http://localhost:3000/Client1', clt);
  }
  getById(id: number) {
    return this.http.get<Client1>(`http://localhost:3000/fruits/${id}`);
   }
    
   update(clt:Client1){
    return this.http.put(`http://localhost:3000/fruits/${clt.Id}`,clt);
   }
   delete(id:number){
    return this.http.delete<Client1>(`http://localhost:3000/Client1/${id}`);
 }
}
