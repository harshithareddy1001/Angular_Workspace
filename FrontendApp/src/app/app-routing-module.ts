import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Red } from './red/red';
import { Yellow } from './yellow/yellow';
import { Blue } from './blue/blue';
import { Green } from './green/green';
import { Orange } from './orange/orange';
import { Catalog } from './catalog/catalog';
import { AddBook } from './add-book/add-book';
import { Laptop } from './laptop/laptop';

const routes: Routes = [
 { path:'',redirectTo:'red',pathMatch:'full' },   
 {path:'red', component:Red},
 {path:'yellow', component:Yellow},
{path:'blue', component:Blue},
  {path:'green', component:Green},
{path:'orange', component:Orange},
{path:'catalog', component:Catalog},  
{path:'add-book', component:AddBook},
{path:'laptop', component:Laptop}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
