import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Client1RoutingModule } from './client1-routing.module';
import { Client1Component } from './client1.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

import { FormsModule } from '@angular/forms';
import { Homeclt1Component } from './homeclt1/homeclt1.component';


@NgModule({
  declarations: [
    Client1Component,
    CreateComponent,
    EditComponent,
    Homeclt1Component,
   
  ],
  imports: [
    CommonModule,
    Client1RoutingModule,
    FormsModule
  ]
})
export class Client1Module { }
