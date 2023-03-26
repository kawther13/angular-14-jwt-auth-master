import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomecltComponent } from './homeclt/homeclt.component';




const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "homeclt",
    component: HomecltComponent,
  },
  
  {
    path:'edit/:id',
    component: EditComponent
  },
  { 
    path:"create",
    component: CreateComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }