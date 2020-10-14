import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogsListComponent } from './dogs-list/dogs-list.component';
import { DogFormComponent } from './dog-form/dog-form.component';

const routes: Routes = [
  { path: '', component: DogFormComponent },
  { path: 'list/:breed', component: DogsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
