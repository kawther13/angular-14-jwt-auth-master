import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { CreateComponent } from './client/create/create.component';
import { HomecltComponent } from './client/homeclt/homeclt.component';
import { EditComponent } from './client/edit/edit.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
 /* { path: 'client/create', component: CreateComponent },*/
  { path: 'client/edit', component: EditComponent },
  { path: 'client/homeclt', component: HomecltComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  {  path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule)},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },// user: module 
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
