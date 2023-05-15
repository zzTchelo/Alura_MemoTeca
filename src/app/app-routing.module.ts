import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './component/thought/create-thought/create-thought.component';
import { ThoughtListComponent } from './component/thought/thought-list/thought-list.component';
import { DeleteThoughtComponent } from './component/thought/delete-thought/delete-thought.component';

const routes: Routes = [
  { path: 'NovoPensamento', component: CreateThoughtComponent },
  { path: 'ListaPensamentos', component: ThoughtListComponent },
  { path: 'Pensamento/ExcluirPensamento/:id', component: DeleteThoughtComponent },
  { path: '', redirectTo: 'ListaPensamentos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
