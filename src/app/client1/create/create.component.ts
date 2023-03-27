import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client1 } from '../client1';
import { Client1Service } from '../client1.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  clientForm: Client1 = {
    Id:0,
    nameClt: '',
    prenome: '',
    email:'',
    adresse:'',
    NumTel:'',
  };
 
  constructor(private clientService:Client1Service,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.clientService.create(this. clientForm)
    .subscribe({
      next:(data) => {
        console.log(data)
        this.router.navigate(["/client/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
