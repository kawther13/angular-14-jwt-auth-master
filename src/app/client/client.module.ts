import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { HomecltComponent } from './homeclt/homeclt.component';
import { RouterModule } from '@angular/router';
import { ClientRoutingModule } from './client-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    EditComponent,
    CreateComponent,
    HomecltComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ClientRoutingModule,
    FormsModule
  ],
  exports:[CreateComponent]
})
export class ClientModule { }
