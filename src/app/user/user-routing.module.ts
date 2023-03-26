import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserrComponent } from './userr/userr.component';

const routes: Routes = [{ path: '', component: UserComponent },
{ path:'user1', component:UserrComponent}]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
