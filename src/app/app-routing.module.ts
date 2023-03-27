import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { CreateComponent } from './client1/create/create.component';
import { HomecltComponent } from './client/homeclt/homeclt.component';
import { EditComponent } from './client/edit/edit.component';
import { Homeclt1Component } from './client1/homeclt1/homeclt1.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
 /* { path: 'client/create', component: CreateComponent },*/
 /* { path: 'client/edit', component: EditComponent },
  { path: 'client/homeclt', component: HomecltComponent },*/
  { path: 'login', component: LoginComponent },
  {path:'homeclt1' , component:Homeclt1Component},
  { path: 'register', component: RegisterComponent },
 // {path:'client1/create',component:CreateComponent}, 
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  {  path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule)},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'client1', loadChildren: () => import('./client1/client1.module').then(m => m.Client1Module) },// user: module 
  
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
