import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChaussureDetailComponent } from './components/chaussure-detail/chaussure-detail.component';
import { AddChaussureComponent } from './components/add-chaussure/add-chaussure.component';
import { EditChaussreComponent } from './components/edit-chaussre/edit-chaussre.component';
import { ChaussureComponent } from './components/chaussure/chaussure.component';


const routes: Routes = [
  { path: '', redirectTo: 'chaussures', pathMatch: 'full'},
  { path: 'chaussures', component: ChaussureComponent },
  { path: 'chaussures/ajout', component: AddChaussureComponent },
  { path: 'chaussures/:id', component: ChaussureDetailComponent },
  { path: 'chaussures/edit/:id', component: EditChaussreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
