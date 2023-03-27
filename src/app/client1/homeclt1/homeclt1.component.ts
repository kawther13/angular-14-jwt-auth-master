import { Component, OnInit } from '@angular/core';
import { Client1 } from '../client1';
import { Client1Service } from '../client1.service';
declare var window: any;
@Component({
  selector: 'app-homeclt1',
  templateUrl: './homeclt1.component.html',
  styleUrls: ['./homeclt1.component.css']
})
export class Homeclt1Component implements OnInit {
  allclients: Client1[] = [];
  idTodelete: number =0;
  deleteModal: any;
 
  constructor(private clientService: Client1Service) {}
 
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.get();
  }
 
  get() {
    this.clientService.get().subscribe((data) => {
      this.allclients = data;
    });
  }
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.clientService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allclients = this.allclients.filter(_ => _.Id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }


}
