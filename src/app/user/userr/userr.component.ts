import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/client/client';
import { ClientService } from 'src/app/client/client.service';

@Component({
  selector: 'app-userr',
  templateUrl: './userr.component.html',
  styleUrls: ['./userr.component.css']
})
export class UserrComponent implements OnInit {
  clientForm: Client = {
    Id:0,
    nameClt: '',
    prenome: '',
    email:'',
    adresse:'',
    NumTel:'',
  };
 
  constructor(private clientService:ClientService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.clientService.create(this. clientForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/client/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}

