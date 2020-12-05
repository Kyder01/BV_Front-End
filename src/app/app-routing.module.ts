import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertComponent } from './Usuario/insert/insert.component';
import { ListarComponent } from './Usuario/listar/listar.component';
import { UpdateComponent } from './Usuario/update/update.component';

const routes: Routes = [
  {path:'listar', component: ListarComponent},
  {path:'insert', component: InsertComponent},
  {path:'update', component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
