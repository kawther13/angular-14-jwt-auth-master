import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Client1Component } from './client1.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { Homeclt1Component } from './homeclt1/homeclt1.component';

const routes: Routes = [
  //{ path: '', component: Client1Component },
  { path: 'create', component: CreateComponent },
  { path: 'edit', component: EditComponent },
 {path:'homeclt1', component:Homeclt1Component}





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Client1RoutingModule { }
