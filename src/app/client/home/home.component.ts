import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
declare var window: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allclients: Client[] = [];
  idTodelete: number =0;
  deleteModal: any;
 
  constructor(private clientService: ClientService) {}
 
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
