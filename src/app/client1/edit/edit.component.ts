import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client1 } from '../client1';
import { Client1Service } from '../client1.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  clientForm: Client1 = {
    Id:0,
    nameClt: '',
    prenome: '',
    email:'',
    adresse:'',
    NumTel:'',
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private fruitService: Client1Service
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.fruitService.getById(id).subscribe((data) => {
      this.clientForm = data;
    });
  }
 
  update() {
    this.fruitService.update(this.clientForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/client1/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
